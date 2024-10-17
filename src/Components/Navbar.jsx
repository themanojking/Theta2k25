import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css'; // Ensure boxicons is installed
import { NavLink } from 'react-router-dom'; // Replace Link with NavLink

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <div className="bg-green-900 text-white  fixed top-0 left-0 w-full z-50 ">
            <header className="bg-white flex items-center justify-between p-4 md:px-8">
                <div className="text-[24px] md:text-[32px] font-bold text-green-900">
                    <h1>THETA 2K25</h1>
                </div>

                {/* Navbar Links */}
                <nav className={`nav-links duration-500 lg:static absolute bg-white left-0 lg:min-h-fit min-h-[30vh] w-full ${isMenuOpen ? 'top-[10%]' : 'top-[-60%]'} lg:w-auto flex px-5`}>
                    <ul className="lg:flex text-[18px] md:text-[20px] font-bold gap-6 lg:flex-row flex-col">
                        <li className='font-serif underline-offset-[6px]'>
                            <NavLink 
                                to="/" 
                                className={({ isActive }) => 
                                    isActive ? 'bg-green-900 px-3 py-2 rounded-lg text-white' : 'text-green-900 hover:text-green-600 transition'} 
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li className='font-serif underline-offset-[6px]'>
                            <NavLink 
                                to="/event" 
                                className={({ isActive }) => 
                                    isActive ? 'bg-green-900 px-3 py-2 rounded-lg text-white' : 'text-green-900 hover:text-green-600 transition'} 
                            >
                                EVENTS
                            </NavLink>
                        </li>
                        <li className='font-serif underline-offset-[6px]'>
                            <NavLink 
                                to="/about" 
                                className={({ isActive }) => 
                                    isActive ? 'bg-green-900 px-3 py-2 rounded-lg text-white' : 'text-green-900 hover:text-green-600 transition'} 
                            >
                                ABOUT
                            </NavLink>
                        </li>
                        <li className='font-serif underline-offset-[6px]'>
                            <NavLink 
                                to="/contact" 
                                className={({ isActive }) => 
                                    isActive ? 'bg-green-900 px-3 py-2 rounded-lg text-white' : 'text-green-900 hover:text-green-600 transition'} 
                            >
                                CONTACT
                            </NavLink>
                        </li>
                     
                    </ul>
                </nav>

                {/* Hamburger Menu for Mobile */}
                <div className="flex items-center gap-4 lg:hidden">
                    <i 
                        onClick={toggleMenu} 
                        className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} text-[2rem] text-green-900`} 
                        aria-label="Toggle menu">
                    </i>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
