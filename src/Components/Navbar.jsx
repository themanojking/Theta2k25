import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css'; // Ensure boxicons is installed
import { NavLink } from 'react-router-dom'; // Replace Link with NavLink

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <div className="bg-green-900 text-black">
            <header className="bg-white flex items-center justify-between mx-auto p-3">
                <div className="text-[30px] font-bold">
                    {/* <img src={img1} alt='' className=''></img> */}
                    <h1>THETA 2K25</h1>
                </div>

                {/* Navbar Links */}
                <nav className={`nav-links duration-500 lg:static absolute bg-white left-0 lg:min-h-fit min-h-[25vh] w-full ${isMenuOpen ? 'top-[9%]' : 'top-[-50%]'} lg:w-auto flex px-5`}>
                    <ul className="lg:flex text-[20px] font-bold gap-8 lg:flex-row flex-col">
                        <li className='font-serif underline-offset-[8px]'>
                            <NavLink 
                                to="/" 
                                className={({ isActive }) => 
                                    isActive ? 'bg-black px-3 py-2 rounded-2xl text-white' : 'text-black'} 
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li className='font-serif underline-offset-[8px]'>
                            <NavLink 
                                to="/about" 
                                className={({ isActive }) => 
                                    isActive ? 'bg-black px-3 py-2 rounded-2xl text-white' : 'text-black'} 
                            >
                                ABOUT
                            </NavLink>
                        </li>
                        <li className='font-serif underline-offset-[8px]'>
                            <NavLink 
                                to="/contact" 
                                className={({ isActive }) => 
                                    isActive ? 'bg-black px-3 py-2 rounded-2xl text-white' : 'text-black'} 
                            >
                                CONTACT
                            </NavLink>
                        </li>
                        <li className='font-serif underline-offset-[8px]'>
                            <NavLink 
                                to="/event" 
                                className={({ isActive }) => 
                                    isActive ? 'bg-black px-3 py-2 rounded-2xl text-white' : 'text-black'} 
                            >
                                EVENTS
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* Hamburger Menu for Mobile */}
                <div className="flex items-center gap-4">
                    <div className='lg:hidden flex'>
                        <i 
                            onClick={toggleMenu} 
                            className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} text-[2rem]`} 
                            aria-label="Toggle menu">
                        </i>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
