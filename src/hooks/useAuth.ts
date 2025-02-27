"use client";

import { loginData, RegisterData, User } from "@/app/interfaces/IUser";
import api from "@/utils/api";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const useAuth = () => {
    const [user, setUser] = useState<User | null | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            setUser(null);
            setIsLoading(false);
            return;
        }

        api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;

        api.get<User>("/api/users/profile")
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.error("Erro ao obter o perfil do usuário:", error);
                setUser(null);
                localStorage.removeItem("token");
                delete api.defaults.headers.Authorization;
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const authUser = (data: { token: string; user: User }) => {
        localStorage.setItem("token", JSON.stringify(data.token));
        api.defaults.headers.Authorization = `Bearer ${data.token}`;
        setUser(data.user);
        router.push("/");
    };

    const register = async (userData: RegisterData) => {
        try {
            const response = await api.post<{ token: string; user: User }>(
                "/api/users/register/user",
                userData
            );
            authUser(response.data);
            return { message: "Cadastro realizado com sucesso!", type: "success" };
        } catch (error: any) {
            const errorMessage =
                error.response?.data?.errors || "Erro desconhecido no registro";
            return { message: errorMessage, type: "error" };
        }
    };

    const login = async (userData: loginData) => {
        try {
            const response = await api.post('/api/users/login', userData);
            authUser(response.data);
        } catch (error) {
            console.error("Erro ao fazer login:", error);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        delete api.defaults.headers.Authorization;
        setUser(null);
        router.push("/login");
    };

    return { register, login, user, logout, isLoading };
};
