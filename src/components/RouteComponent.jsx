import {React, useState, useEffect} from "react";
import { Navigate } from "react-router-dom";

const RouteComponent = ({children, isAuthenticated}) => {
    const [authenticated, setAuthenticated] = useState(false);
    
    useEffect(() => {
        const checkAuth = async () => {
            const authStatus = await isAuthenticated();
            setAuthenticated(authStatus);
        };
        checkAuth();
    }, []);
    
    const handleLogin = async () => {
        await login();
        const authStatus = await isAuthenticated();
        setAuthenticated(authStatus);
    };
    
    const handleLogout = async () => {
        await logout();
        const authStatus = await isAuthenticated();
        setAuthenticated(authStatus);
    };
    return  isAuthenticated ? children : <Navigate to = "/login" />
}

export default RouteComponent;