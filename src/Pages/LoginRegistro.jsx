import Footer from "../Components/Footer";
import FormEntrar from "../Components/FormEntrar";
import FormRegistrar from "../Components/FormRegistrar";
import Header from "../Components/Header";
import TextoMarca from "../Components/TextoMarca";

function LoginRegistro(props) {

    return (
        <>
            <Header />
            
            <div className="pt-16 pb-3 bg-black text-white">
                <div className="container mx-auto">
                    <TextoMarca />
                    {props.form == 'entrar' && <FormEntrar />}
                    {props.form == 'registrar' && <FormRegistrar />}
                </div>
            </div>

            <Footer />
        </>
    );
}

export default LoginRegistro;