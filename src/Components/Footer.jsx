function Footer() {
    return (
        <footer className='bg-black text-white'>
            <div className='sm:text-center px-3 pt-5 pb-3 text-2xl'>
                Entre em contato
            </div>
            <div className='sm:flex flex-row justify-center pb-3'>
                <div className='px-3'>(18) 3652-5898</div>
                <div className='hidden sm:block sm:border-r sm:border-white'></div>
                <div className='px-3'>instartecnologia@instar.com.br</div>
            </div>
            <div className='text-center text-gray-500 pb-5'>
                © Copyright Instar
            </div>
        </footer>
    )
}

export default Footer
