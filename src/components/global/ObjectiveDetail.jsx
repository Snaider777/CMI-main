import React from 'react';
import { useParams, Link, Routes, Route } from 'react-router-dom';

function ObjectiveOverview() {
    const { id } = useParams();
    return (
        <div>
        <h2>Detalle del Objetivo {id}</h2>
        {/* Ejemplo de enlaces para subcomponentes */}
        <ul>
            <li><Link to={`${id}/1`}>Subcomponente {id}.1</Link></li>
            <li><Link to={`${id}/2`}>Subcomponente {id}.2</Link></li>
        </ul>
        </div>
    );
    }
    function SubComponentDetail() {
    const { id, subId } = useParams();
    return <h3>Detalle de Subcomponente {id}.{subId}</h3>;
    }
    function ObjectiveDetail() {
    return (
        <div style={{ padding: '20px' }}>
        <Link to="/">← Volver a la lista</Link>
        <Routes>
            <Route index element={<ObjectiveOverview />} />
            <Route path=":subId" element={<SubComponentDetail />} />
        </Routes>
        </div>
    );
}

export default ObjectiveDetail;
