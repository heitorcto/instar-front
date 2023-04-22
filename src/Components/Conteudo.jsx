function Conteudo(props) {
    return (
        <main className='mt-20 mb-5'>
            <div className='container mx-auto flex flex-col gap-6'>
                <div className={`${props.noticia} text-center py-24 text-4xl font-bold`}>
                    Notícia
                </div>

                <div className={`${props.videos} text-center py-24 text-4xl font-bold`}>
                    Galeria de vídeos 1
                </div>

                <div className={`${props.arquivos} text-center py-24 text-4xl font-bold`}>
                    Arquivos 1
                </div>

                <div className={`${props.editais} text-center py-24 text-4xl font-bold`}>
                    Editais 1
                </div>

                <div className={`${props.fotos} text-center py-24 text-4xl font-bold`}>
                    Galeria de fotos 1
                </div>

                <div className={`${props.prev} text-center py-24 text-4xl font-bold`}>
                    Previsão do tempo
                </div>
            </div>
        </main>
    )
}

export default Conteudo
