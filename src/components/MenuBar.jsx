import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faTv } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import CastIcon from '@mui/icons-material/Cast';
import useProfilePic from '../hooks/useProfilePic'


export default function MenuBar() {
    const picURL = useProfilePic();
    return (
        <div className='menu-bar-container'>
            
            <img src='src\img\youtube-music.svg' alt='logo' className='menu-logo-container'/>
            
            <nav className='mavbar'>
                <NavLink to="/" className='navbar-item'>Principal</NavLink>
                <NavLink to="/explore" className='navbar-item'>Explorar</NavLink>
                <NavLink to="/library" className='navbar-item'>Biblioteca</NavLink>
                <span className='menu-bar-item'><FontAwesomeIcon icon={faMagnifyingGlass} style={{marginRight: 15}}/> Buscar</span>
            </nav>
            <div className='menu-icons'>
            <CastIcon/>
            <Avatar alt="Remy Sharp" src={picURL} sx={{ width: 25, height: 25}} />
            </div>

        </div>
    );
    }