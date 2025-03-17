import React from "react";
import '../styles/LoadingStyle.css'; 

const Loading = () => {
    return (
        <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Cargando, por favor espere...</p>
        </div>
    );
};

export default Loading;
