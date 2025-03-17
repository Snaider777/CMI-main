import { msalInstance } from "../config/authConfig";

const API_URL = import.meta.env.VITE_API_URL;

export const login = async () => {
    try {
        const loginResponse = await msalInstance.loginPopup({
            scopes: ["openid", "profile", "email", "User.Read"],
            prompt: "select_account",
        });
        if (!loginResponse.idToken) {
            throw new Error("No se recibió un idToken después del login.");
        }
        const response = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: loginResponse.idToken }),
        });
        if (!response.ok) {
            throw new Error(`Usuario no encontrado. Error: ${response.status}`);
        }
        return loginResponse;
    } catch (error) {
        console.error("Error en login: ", error);
        throw error;
    }
};
export const getUser = async () => {
    try {
    const response = await fetch(`${API_URL}/auth/user`, {
        method: "GET",
        credentials: "include",
    });
    if (!response.ok) {
        throw new Error(`Error obteniendo datos del usuario: ${response.statusText}`);
    }
    const userData = await response.json();
    return userData;
    } catch (error) {
        console.error("Error en getUser:", error);
        return null;
    }
};
export const logout = async () => {
    try {
        const response = await fetch(`${API_URL}/auth/logout`, {
            method: "POST",
            credentials: "include",
        });
        if (!response.ok) {
            throw new Error(`Error en logout: ${response.status} ${response.statusText}`);
        }
        return true;
    } catch (error) {
        console.error("Error en logout:", error);
        return false;
    }
};
export const isAuthenticated = async () => {
    try {
        const response = await fetch(`${API_URL}/auth/check`, {
            method: "GET",
            credentials: "include",
        });
        if (!response.ok) {
            throw new Error(`Error verificando autenticación: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data.authenticated;
    } catch (error) {
        console.error("Error verificando autenticación:", error);
        throw error;
    }
};

export const getAuthenticatedUser = async () => {
    try {
        const response = await fetch(`${API_URL}/auth/user`, { 
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
            throw new Error(`Error obteniendo usuario autenticado: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data.user;
    } catch (error) {
        console.error("Error en getAuthenticatedUser:", error);
        return null;
    }
};

