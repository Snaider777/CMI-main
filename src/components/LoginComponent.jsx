import React from "react";
import '../styles/LoginStyle.css';
import Banner from '../icons/banner.png';
import LogoM from '../icons/logo.png';
const LoginComponent = () => {
return (
<div className="container">
    <div className="login-box">
    <img src={Banner} alt="Banner" className="banner" />
        <div className="text-container">
        <h2 className="title">Identifíquese usando su cuenta:</h2>
        <div className="button-container">
            <button className="Microsoft-Button">

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
