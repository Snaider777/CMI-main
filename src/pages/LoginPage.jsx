import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginStyle.css";
import Banner from "../img/banner.png";
import LogoM from "../img/logo.png";
import { login, isAuthenticated } from "../api/auth";

const LoginPage = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const checkAuth = async () => {
        const authStatus = await isAuthenticated();
        setAuthenticated(authStatus);
        if (authStatus) {
            navigate("/");
        }
        };
        checkAuth();
    }, [navigate]);
    const handleLogin = async () => {
        await login();
        const authStatus = await isAuthenticated();
        setAuthenticated(authStatus);
        if (authStatus) {
        navigate("/");
        }
    };
    return (
        <div className="container">
        <div className="login-box">
            <img src={Banner} alt="Banner" className="banner" />
            <div className="text-container">
            <h2 className="title">Identifíquese usando su cuenta:</h2>
            <div className="button-container">
                <button
                className="microsoft-login-button"
                onClick={handleLogin}
                >
                <img
                    src={LogoM}
                    alt="Microsoft Logo"
                    className="microsoft-logo"
                />
                <span className="button-text">
                    Iniciar sesión con Microsoft
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

export default LoginPage;
