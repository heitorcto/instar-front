import { Link } from "react-router-dom";

function FormEntrar() {

    return (
        <>
            <form action="">
                <div className="flex flex-col gap-5 text-center py-44">
                    <div>
                        <input type="text" className="w-96 h-9 rounded px-2 text-black" placeholder="E-mail" />
                    </div>
                    <div>
                        <input type="text" className="w-96 h-9 rounded px-2 text-black" placeholder="Senha" />
                    </div>
                    <div>
                        <button className="border px-3 py-1 rounded hover:text-black hover:bg-white">Entrar</button>
                    </div>
                    <div className="text-center">
                        Ainda não possui uma conta? <Link to="/registrar" relative="path" className="font-bold hover:text-red-500">Crie uma</Link>
                    </div>
                </div>
            </form>  
        </>
    );
}

export default FormEntrar;