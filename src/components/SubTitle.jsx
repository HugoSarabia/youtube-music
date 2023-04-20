import React, {useRef, useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import useProfileName from '../hooks/useProfileName';
import useSongAPI from '../hooks/useSongAPI';

export default function SubTitle({subtitle, more, currentPage, onPageChange}) {
    const name = useProfileName();
    const songs = useSongAPI()
    const cardsPerPage = 6;
    const totalPages = Math.ceil(songs.length / cardsPerPage);
    const handlePrevPage = () => {
      onPageChange(currentPage - 1);
    };
  
    const handleNextPage = () => {
      onPageChange(currentPage + 1);
    };
    return (
        <>
        <div className='subtitle-container'>
            <span className='subtitle-lower'>{name}</span>
            <Link to="/listen_again" className='subtitle-main'>{subtitle}</Link>
        </div>
        <div className='listen-again-options'>
            {more == "true" ? <div className='listen-again-options-more'>Más</div> : false}
            <button onClick={handlePrevPage} disabled={currentPage === 1} className='listen-again-options-button'><FontAwesomeIcon icon={faChevronLeft} style={{color: "#ffffff",}} /></button>
            <button onClick={handleNextPage} disabled={currentPage === totalPages} className='listen-again-options-button'><FontAwesomeIcon icon={faChevronRight} style={{color: "#ffffff",}} /></button>
        </div>
        </>
    )
}