import { msalInstance } from "../config/authConfig";

const API_URL = import.meta.env.VITE_API_URL;

export const getUser = async (correo) => {
    try {
        const loginResponse = await msalInstance.loginPopup({
            scopes: ["openid", "profile", "email", "User.Read"],
            prompt: "select_account",
        });

        if (!loginResponse.idToken) {
            throw new Error("No se recibió un idToken después del login.");
        }

        const response = await fetch(`${API_URL}/users/${correo}`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${loginResponse.idToken}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Error obteniendo usuario: ${response.status} ${response.statusText}`);
        }

        const userData = await response.json();
        return userData.user;
    } catch (error) {
        console.error("Error en getUser:", error);
        return null;
    }
};

export const getAllUsers = async () => {
    try {
        const loginResponse = await msalInstance.loginPopup({
            scopes: ["openid", "profile", "email", "User.Read"],
            prompt: "select_account",
        });

        if (!loginResponse.idToken) {
            throw new Error("No se recibió un idToken después del login.");
        }

        const response = await fetch(`${API_URL}/users`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${loginResponse.idToken}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Error obteniendo los usuarios: ${response.status} ${response.statusText}`);
        }

        const usersData = await response.json();
        return usersData.users;
    } catch (error) {
        console.error("Error en getAllUsers:", error);
        return [];
    }
    
};

export const getAuthenticatedUser = async () => {
    try {
        const response = await fetch(`${API_URL}/authenticated-user`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Error obteniendo usuario autenticado: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data.email; 
    } catch (error) {
        console.error("Error en getAuthenticatedUser:", error);
        return null;
    }
};



