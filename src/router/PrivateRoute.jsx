import { useState, useEffect } from "react";
import { Navigate  } from "react-router-dom";
import { isAuthenticated } from "../api/auth"; 
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
    const [authChecked, setAuthChecked] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    useEffect(() => {
        const checkAuth = async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
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
        return <Loading />;
    }
    if (!authenticated) {
        return <Navigate to="/login" replace/>;
    }
    return children;
};

export default PrivateRoute;
