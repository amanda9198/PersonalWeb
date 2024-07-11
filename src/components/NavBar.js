import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useNavigation } from './NavScript';
import '../css/style.css';

const NavBar = () => {
    const { isMenuOpen, toggleMenu } = useNavigation();
    const navigate = useNavigate();

    return (
        <header>
            <nav>
                <div className="header-content">
                    <span className="menu" onClick={toggleMenu}>&#9776;</span>
                    <h1 className="logo">
                        <Link to="/">Amanda Related</Link>
                    </h1>
                </div>
            </nav>
            <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="menu-items">
                    <Link to="/" className="menu-item" onClick={toggleMenu}>Home</Link>
                    <Link to="/projects" className="menu-item" onClick={toggleMenu}>Projects</Link>
                    <Link to="/about" className="menu-item" onClick={toggleMenu}>About</Link>
                    <Link to="/contact" className="menu-item" onClick={toggleMenu}>Contact</Link>
                </div>
            </div>
        </header>
    );
}    

export default NavBar;