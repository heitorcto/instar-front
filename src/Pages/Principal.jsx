import Conteudo from "../Components/Conteudo";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Principal() {

    return (
        <>
            <Header />
            <Conteudo 
                noticia="bg-green-400"
                videos="bg-red-400" 
                arquivos="bg-purple-400"
                editais="bg-orange-400"
                fotos="bg-gray-400"
                prev="bg-pink-400"
            />
            <Footer />
        </>
    );
}

export default Principal;
