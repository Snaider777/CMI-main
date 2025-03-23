import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TreeGrid from '../../pages/Inicio';         
import ObjectiveDetail from '../global/ObjectiveDetail';    

function MainComponent() {
  return (
    <main className="main-container">
      <Routes>
        {/* Ruta raíz para el tree grid */}
        <Route path="/" element={<TreeGrid />} />
        {/* Ruta dinámica para el detalle del objetivo, permitiendo rutas anidadas (por ejemplo, 1.1 para el subcomponente EN PROCESO) */}
        <Route path="/objetivo/:id/*" element={<ObjectiveDetail />} />
      </Routes>
    </main>
  );
}

export default MainComponent;
