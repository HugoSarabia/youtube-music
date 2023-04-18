import React, {useRef, useEffect, useState} from 'react'
import Avatar from '@mui/material/Avatar';

export default function AvatarPic() {
    const hasFetchedData = useRef(false);
    const [picURL, setPicURL] = useState(null);
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
                        if(key === 'images'){
                            setPicURL(data[key][0].url);
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
    return(
        <>
            <Avatar alt="Remy Sharp" src={picURL} sx={{ width: 50, height: 50, marginRight: 2 }} />
        </>
        )
}