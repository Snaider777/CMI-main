import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
  flexRender,
} from '@tanstack/react-table';
import { Link } from 'react-router-dom';
import { makeData } from '../Js/MakeData';
import "../styles/TreeGridTable.css";

function TreeGrid() {
  // Generamos los datos iniciales y asignamos un código a cada registro
  const [data, setData] = React.useState(() => {
    const rawData = makeData(10, 2, 2);
    return assignIds(rawData);
  });
  const [expanded, setExpanded] = React.useState({});
  // Asigna IDs y códigos jerárquicos a cada registro recursivamente.
  function assignIds(rows, parentId = "") {
    return rows.map((row, index) => {
      const newId = parentId ? `${parentId}.${index + 1}` : `${index + 1}`;
      return {
        ...row,
        id: newId,
        codigo: newId, // Usamos el mismo código para la ruta
        subRows:
          row.subRows && row.subRows.length > 0
            ? assignIds(row.subRows, newId)
            : [],
      };
    });
  }
  // Función para actualizar un registro por ID 
  const updateRowById = (rows, id, updater) => {
    return rows.map((row) => {
      if (row.id === id) return updater(row);
      if (row.subRows && row.subRows.length > 0) {
        return { ...row, subRows: updateRowById(row.subRows, id, updater) };
      }
      return row;
    });
  };
  // Agregar un registro a nivel superior.
  const handleGlobalCreate = () => {
    const newRow = {
      id: Date.now().toString(),
      codigo: Date.now().toString(),
      firstName: "Nuevo Objetivo",
      status: "Pendiente",
      subRows: [],
    };
    setData((prev) => [...prev, newRow]);
  };
  // Agregar un subregistro (hijo) al registro padre.
  const handleCreate = (parentRow) => {
    const newChild = {
      id: Date.now().toString(),
      codigo: parentRow.id + "." + (parentRow.subRows.length + 1).toString(),
      firstName: "Nuevo Subobjetivo",
      status: "Pendiente",
      subRows: [],
    };
    setData((prevData) =>
      updateRowById(prevData, parentRow.id, (row) => ({
        ...row,
        subRows: [...(row.subRows || []), newChild],
      }))
    );
  };
  // Editar el nombre del objetivo mediante un prompt.
  const handleEdit = (row) => {
    const newName = prompt("Editar OBJETIVO", row.firstName);
    if (newName !== null) {
      setData((prevData) =>
        updateRowById(prevData, row.id, (r) => ({ ...r, firstName: newName }))
      );
    }
  };
  // Eliminar un registro recursivamente.
  const removeRowById = (rows, id) => {
    return rows.reduce((acc, row) => {
      if (row.id === id) return acc; // Si coincide, omitirlo.
      let newSubRows = [];
      if (row.subRows && row.subRows.length > 0) {
        newSubRows = removeRowById(row.subRows, id);
      }
      acc.push({ ...row, subRows: newSubRows });
      return acc;
    }, []);
  };
  const handleDelete = (row) => {
    if (window.confirm("¿Seguro que deseas eliminar este registro?")) {
      setData((prevData) => removeRowById(prevData, row.id));
    }
  };
  const columns = React.useMemo(
    () => [
      {
        header: "N°",
        id: "index",
        cell: ({ row }) => row.index + 1,
        size: 50,
      },
      {
        accessorKey: "firstName",
        header: "OBJETIVOS",
        cell: ({ row, getValue }) => (
          <div className="obj-cell" style={{ paddingLeft: `${row.depth * 20}px` }}>
            {row.getCanExpand() && (
              <button onClick={row.getToggleExpandedHandler()} className="expand-btn">
                {row.getIsExpanded() ? "-" : "+"}
              </button>
            )}
            <Link to={`/objetivo/${row.original.codigo}`} className="obj-link">
              {getValue()}
            </Link>
            <div className="crud-buttons">
              <button onClick={() => handleCreate(row.original)} className="btn btn-create">
                Crear
              </button>
              <button onClick={() => handleEdit(row.original)} className="btn btn-edit">
                Editar
              </button>
              <button onClick={() => handleDelete(row.original)} className="btn btn-delete">
                Eliminar
              </button>
            </div>
          </div>
        ),
        minSize: 150,
      },
      {
        accessorKey: "fechaCreacion",
        header: "FECHA DE CREACION",
        cell: ({ getValue }) => {
          const date = new Date(getValue());
          return <span>{date.toLocaleDateString()}</span>;
        },
        minSize: 130,
      },
      {
        accessorKey: "lastName",
        header: "AUTOR",
        cell: ({ row, getValue }) => (
          <span
            onDoubleClick={() => {
              const nuevoApellido = prompt("Editar Apellido", getValue());
              if (nuevoApellido !== null) {
                setData((prevData) =>
                  updateRowById(prevData, row.original.id, (r) => ({
                    ...r,
                    lastName: nuevoApellido,
                  }))
                );
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            {getValue()}
          </span>
        ),
        minSize: 100,
      },
      {
        accessorKey: "progress",
        header: "Porcentaje (%)",
        cell: ({ row, getValue }) => (
          <input
            type="number"
            value={getValue()}
            onChange={(e) => {
              const nuevoValor = parseInt(e.target.value, 10) || 0;
              setData((prevData) =>
                updateRowById(prevData, row.original.id, (r) => ({
                  ...r,
                  progress: nuevoValor,
                }))
              );
            }}
            style={{ width: '50px' }}
          />
        ),
        minSize: 100,
      },
      {
        accessorKey: "include",
        header: "Incluir",
        cell: ({ row, getValue }) => {
          // Solo mostramos el checkbox en subcomponentes
          if (row.depth === 0) {
            if (row.depth > 0) {
              return (
                <input
                  type="number"
                  value={getValue()}
                  onChange={(e) => {
                    const nuevoValor = parseInt(e.target.value, 10) || 0;
                    setData((prevData) =>
                      updateRowById(prevData, row.original.id, (r) => ({
                        ...r,
                        progress: nuevoValor,
                      }))
                    );
                  }}
                  style={{ width: '50px' }}
                />
              );
            } else {
              // Si es el objetivo principal (depth === 0), calculamos la suma de subcomponentes marcados
              const totalSubcomponentes = computeSubcomponentProgress(row.original);
              return <span>{totalSubcomponentes}%</span>;
            } // Oculta en el objetivo principal
          }
          return (
            <input
              type="checkbox"
              checked={!!getValue()}
              onChange={(e) => {
                const nuevoValor = e.target.checked;
                setData((prevData) =>
                  updateRowById(prevData, row.original.id, (r) => ({
                    ...r,
                    include: nuevoValor,
                  }))
                );
              }}
              style={{ width: '20px', height: '20px' }}
            />
          );
        },
        size: 80,
      },
    ],
    []
  );
  const computeSubcomponentProgress = (rowData) => {
    let total = 0;
    // Recorre recursivamente todos los subRows
    const traverse = (nodes) => {
      nodes.forEach((node) => {
        if (node.include) {
          // Suma el valor de progress
          total += node.progress || 0;
        }
        if (node.subRows && node.subRows.length > 0) {
          traverse(node.subRows);
        }
      });
    };
    if (rowData.subRows && rowData.subRows.length > 0) {
      traverse(rowData.subRows);
    }
    return total;
  };
  const calculateTotalProgress = (rows) => {
    let total = 0, count = 0;
    const traverse = (data) => {
      data.forEach(row => {
        // Solo se suma si 'include' es verdadero
        if (row.include) {
          total += row.progress || 0;
          count++;
        }
        if (row.subRows && row.subRows.length > 0) {
          traverse(row.subRows);
        }
      });
    };
    traverse(rows);
    return count ? Math.round(total / count) : 0;
  };
  const table = useReactTable({
    data,
    columns,
    state: { expanded },
    onExpandedChange: setExpanded,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getSubRows: (row) => row.subRows,
  });
  return (
    <div className="treegrid-container">
      <div className="toolbar">
        <button onClick={handleGlobalCreate} className="btn btn-global-create">
          Agregar Objetivo
        </button>
      </div>
      <table className="treegrid-table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="treegrid-header-row">
              {headerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan} className="treegrid-header-cell">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="treegrid-row">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="treegrid-cell">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-progress">
        Porcentaje total alcanzado: {calculateTotalProgress(data)}%
      </div>
    </div>
  );
}
export default TreeGrid;