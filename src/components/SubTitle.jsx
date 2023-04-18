import React, {useRef, useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default function SubTitle(props) {
    const hasFetchedData = useRef(false);
    const [name, setName] = useState(null);
    useEffect(()=>{
        let accessToken = localStorage.getItem('access-token');
        let url = "https://api.spotify.com/v1/me"
        const fetchData = async (url) =>{
            try {
                await fetch(url, {
                    method: 'GET',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: 'Bearer ' + accessToken
                  }
                })
                .then(response => response.json())
                .then(data => {
                    for (const key in data) {
                        if(key === 'display_name'){
                            setName(data[key].toUpperCase());
                        }
                    }
                });
              } catch (e) {
                console.error('Error fetching api data', e);
              };
              
            }
            if (hasFetchedData.current === false) {
              fetchData(url);
              hasFetchedData.current = true;
            }
    },[])
    return (
        <>
        <div className='subtitle-container'>
            <span className='subtitle-lower'>{name}</span>
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