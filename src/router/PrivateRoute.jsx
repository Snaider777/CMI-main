import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../api/auth"; 
const PrivateRoute = ({ children }) => {
    const [authChecked, setAuthChecked] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    useEffect(() => {
        const checkAuth = async () => {
        try {
            const status = await isAuthenticated();
            setAuthenticated(status);
        } catch (error) {
            console.error("Error comprobando autenticación:", error);
        }
        setAuthChecked(true);
        };
        checkAuth();
    }, []);
    if (!authChecked) {
        return <div>Cargando...</div>;
    }
    if (!authenticated) {
        return <Navigate to="/login" />;
    }
    return children;
};

export default PrivateRoute;
