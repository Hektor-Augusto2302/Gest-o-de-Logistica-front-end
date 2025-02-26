import Image from "next/image";
import Illustration from "../../../public/login-illustration.svg";

export default function RegisterForm() {
    return (
        <div className="flex items-center justify-center h-screen user-form">
            <div className="flex w-[1600] overflow-hidden">
                <div className="w-[50%] flex items-center justify-center">
                    <Image
                        src={Illustration}
                        alt="Ilustração de cadastro"
                        className="h-auto"
                    />
                </div>
                <div className="w-[50%] p-10 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-center">Cadastre-se</h1>
                    <p className="text-center text-gray-600 mt-2">
                        Crie sua conta para começar a usar a plataforma
                    </p>
                    <form className="mt-6">
                        <div className="flex flex-col">
                            <label className="label-form">Nome</label>
                            <input
                                type="text"
                                name="name"
                                className="input-form"
                                required
                            />
                        </div>
                        <div className="flex flex-col mt-4">
                            <label className="label-form">E-mail</label>
                            <input
                                type="email"
                                name="email"
                                className="input-form"
                                required
                            />
                        </div>
                        <div className="flex flex-col mt-4">
                            <label className="label-form">Senha</label>
                            <input
                                type="password"
                                name="password"
                                className="input-form"
                                required
                            />
                        </div>
                        <div className="flex flex-col mt-4">
                            <label className="label-form">Confirmar Senha</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                className="input-form"
                                required
                            />
                        </div>
                        <div className="flex justify-center mt-6">
                            <input
                                type="submit"
                                className="w-full button-form"
                                value="Cadastrar"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}