import {React, useState, useEffect} from "react";
import '../styles/LoginStyle.css';
import Banner from '../icons/banner.png';
import LogoM from '../icons/logo.png';
import { login, logout, isAuthenticated } from "../api/auth";
const LoginComponent = () => {
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
return (
<div className="container">
    <div className="login-box">
    <img src={Banner} alt="Banner" className="banner" />
        <div className="text-container">
        <h2 className="title">Identifíquese usando su cuenta:</h2>
        <div className="button-container">
            <button className="microsoft-login-button" onClick={authenticated ? handleLogout : handleLogin}>
                <img
                    src={LogoM}
                    alt="Microsoft Logo"
                    className="microsoft-logo"
                />
                <span className="button-text">
                    {authenticated ? "Cerrar sesión" : "Iniciar sesión con Microsoft"}
                </span>
            </button>
        </div>
        </div>
    <div className="footer">
        <span>Español - Internacional (es)</span>
        <button className="cookie-button">Aviso de Cookies</button>
    </div>
    </div>
</div>
);
};

export default LoginComponent;
