import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default function SubTitle(props) {
    let upper = props.title.toUpperCase()
    return (
        <>
        <div className='subtitle-container'>
            <span className='subtitle-lower'>{upper}</span>
            <Link to="/listen_again" className='subtitle-main'>{props.subtitle}</Link>
        </div>
        <div className='listen-again-options'>
            {props.more == "true" ? <div className='listen-again-options-more'>Más</div> : false}
            <div className='listen-again-options-button'><FontAwesomeIcon icon={faChevronLeft} /></div>
            <div className='listen-again-options-button'><FontAwesomeIcon icon={faChevronRight} /></div>
        </div>
        </>
    )
}