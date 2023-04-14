import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faTv } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

export default function MenuBar() {
    return (
        <div className='menu-bar-container'>
            
            <img src='src\img\youtube-music.svg' alt='logo' className='menu-logo-container'/>
            
            <nav className='mavbar'>
                <NavLink to="/" className='navbar-item'>Principal</NavLink>
                <NavLink to="/explore" className='navbar-item'>Explorar</NavLink>
                <NavLink to="/library" className='navbar-item'>Biblioteca</NavLink>
                <span className='menu-bar-item'><FontAwesomeIcon icon={faMagnifyingGlass}/> Buscar</span>
            </nav>
            <div className='menu-icons'>
            <FontAwesomeIcon icon={faTv} />
            <FontAwesomeIcon icon={faUserCircle} />
            </div>

        </div>
    );
    }