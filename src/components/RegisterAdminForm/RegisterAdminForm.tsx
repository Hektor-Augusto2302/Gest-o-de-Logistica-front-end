"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

export default function RegisterFormAdmin() {
    const { register, message } = useAuth();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleRegister = async (e: any) => {
        e.preventDefault();

        setIsSubmitting(true);

        const user = {
            name,
            email,
            password,
            confirmPassword,
        };

        await register(user);

        setTimeout(() => {
            setIsSubmitting(false);
        }, 3000);
    };

    return (
        <div className="flex items-center justify-center h-screen px-4 user-form">
            <div className="flex flex-col lg:flex-row w-full max-w-[1300px] overflow-hidden">
                <form onSubmit={handleRegister} className="mt-6">
                    <div className="flex flex-col">
                        <label className="label-form">Nome</label>
                        <input
                            type="text"
                            name="name"
                            className="input-form"
                            value={name || ""}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col mt-4">
                        <label className="label-form">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            className="input-form"
                            value={email || ""}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col mt-4">
                        <label className="label-form">Senha</label>
                        <input
                            type="password"
                            name="password"
                            className="input-form"
                            value={password || ""}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col mt-4">
                        <label className="label-form">Confirmar Senha</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            className="input-form"
                            value={confirmPassword || ""}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex justify-center mt-6">
                        <button
                            type="submit"
                            className="w-full button-form"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Cadastrando..." : "Cadastrar"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
