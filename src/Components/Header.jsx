import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faRightToBracket, faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function Header() {
    const [navbarMobile, setNavbarMobile] = useState(false);

    const controleNavbar = () => {
        if (navbarMobile === false) {
            setNavbarMobile(true);
        } else {
            setNavbarMobile(false);
        }
    }

    return (
        <header className='bg-black fixed top-0 w-full'>
            <div className="flex flex-row text-white py-3 items-center">
                {/* Logo */}
                <div className='flex-1 md:px-14 px-3'>
                    <Link to="/" relative="path" className='text-white text-xl font-bold'>
                        INSTAR TECNOLOGIA
                    </Link>
                </div>

                {/* Menu Barras */}
                <div className='justify-end px-5 text-3xl cursor-pointer md:hidden' onClick={() => controleNavbar(true)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>

                {/* Navbar */}
                <div className='md:flex hidden px-14'>
                    <nav>
                        <ul className='flex flex-row'>
                            <li className='px-3'>
                                <Link to="/" relative="path" className='hover:text-red-400'>
                                    <FontAwesomeIcon icon={faHouse} /> Home
                                </Link>
                            </li>
                            <div className='border-r border-white'></div>
                            <li className='px-3'>
                                <Link to="/entrar" relative="path" className='hover:text-red-400'>
                                    Entrar <FontAwesomeIcon icon={faRightToBracket} />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>

            {/* Navbar Mobile */}
            {navbarMobile &&
                <div className='flex-col text-white md:hidden'>
                    <div className='text-center m-2 py-1'>
                        <Link to="/" relative="path">
                            <div className='py-3 my-2 bg-gray-900 rounded hover:bg-white hover:text-red-500 cursor-pointer'>
                                <FontAwesomeIcon icon={faHouse} /> Home
                            </div>
                        </Link>
                        <Link to="/entrar" relative="path">
                            <div className='py-3 my-2 bg-gray-900 rounded hover:bg-white hover:text-red-500 cursor-pointer'>
                                Entrar <FontAwesomeIcon icon={faRightToBracket} />
                            </div>
                        </Link>
                    </div>
                </div>
            }
        </header>
    )
}

export default Header
