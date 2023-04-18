import React, {useEffect, useState, useRef} from 'react';
import NavBar from '../components/MenuBar'
import MoodLabels from '../components/MoodLabels';
import ListenAgain from '../components/ListenAgain';
import useAuth from '../hooks/useAuth';

export default function Home({code}) {
    const [apiData, setApiData] = useState(null);
    const hasFetchedData = useRef(false);
    useAuth({code})
    useEffect(()=>{
        let accessToken = localStorage.getItem('access-token');
        const id = '11dFghVXANMlKmJXsNCbNl'
        let url = "https://api.spotify.com/v1/me/top/tracks"
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
                    setApiData(data)
                    console.log(data);
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
        <div className='main-container'>
            <NavBar/>
            <MoodLabels/>
            <ListenAgain/>
        </div>
    )
}