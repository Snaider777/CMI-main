import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginStyle.css";
import Banner from "../img/banner.png";
import LogoM from "../img/logo.png";
import { login, isAuthenticated } from "../api/auth";

const LoginPage = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const authStatus = await isAuthenticated();
                setAuthenticated(authStatus);
                if (authStatus) {
                    navigate("/", { replace: true });
                }
            } catch (error) {
                // Captura el error de conexión si el backedn no esta corriendo o no responde antes de que el usuario intente entrar
                setErrorMessage("Error de conexión: no se puede comunicar con el servidor. Intenta nuevamente más tarde.");
            }
        };
        checkAuth();
    }, [navigate]);
    const handleLogin = async () => {
        setErrorMessage(""); // Limpiar errores anteriores si se hace click de nueco a iniciar sesion
        try {
        await login();
        const authStatus = await isAuthenticated();
        setAuthenticated(authStatus);
        if (authStatus) {
            navigate("/", { replace: true });
        }
        } catch (error) {
        setErrorMessage(error.message);
        }
    };
    return (
        <div className="container">
        <div className="login-box">
            <img src={Banner} alt="Banner" className="banner" />
            <div className="text-container">
            <h2 className="title">Identifíquese usando su cuenta:</h2>
            <div className="button-container">
                <button className="microsoft-login-button" onClick={handleLogin}>
                <img
                    src={LogoM}
                    alt="Microsoft Logo"
                    className="microsoft-logo"
                />
                <span className="button-text">Iniciar sesión con Microsoft</span>
                </button>
            </div>
            </div>
            {errorMessage && (
            <div className="error-card">
                <p className="error-message">{errorMessage}</p>
            </div>
            )}
            <div className="footer">
            <span>Español - Internacional (es)</span>
            <button className="cookie-button">Aviso de Cookies</button>
            </div>
        </div>
        </div>
    );
};

export default LoginPage;