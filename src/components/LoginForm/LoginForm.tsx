import Image from "next/image";
import Illustration from "./components/login-illustration.svg";

export default function LoginForm() {
    return (
        <div className="flex items-center justify-center h-screen ">
            <div className="flex w-[1300px] h-[6000px]overflow-hidden">
                <div className="w-[30%] p-10 flex flex-col justify-center">
                    <h1 className="flex text-3xl font-bold text-center">Login</h1>
                    <p className="flex text-center text-gray-600 mt-2">
                        Veja seu crescimento e obtenha suporte
                    </p>
                    <form className="mt-6">
                        <div className="flex flex-col">
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
                        <div className="flex justify-center mt-6">
                            <input
                                type="submit"
                                className="w-full button-form"
                                value="Entrar"
                            />
                        </div>
                    </form>
                </div>
                <div className="w-[70%] flex items-center justify-center">
                    <Image
                        src={Illustration}
                        alt="Ilustração de login"
                        className="w-[85%] h-auto"
                    />
                </div>
            </div>
        </div>
    );
}