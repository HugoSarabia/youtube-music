import React, { useEffect, useRef} from 'react'


export default function useRefreshToken(){
    const refresh_token = localStorage.getItem('access-token');
    const AUTH_URL = 'https://accounts.spotify.com/api/token';
    const hasFetchedData = useRef(false);
    const clientId = '628c60b8375e459c84e91945da64817b';

    let body = new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refresh_token,
        client_id: clientId,
        });

    useEffect(()=>{
        const refreshToken = async () => {
            try{
                const response = await fetch(AUTH_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: body
                })
                .then(response => {
                    if (!response.ok) {
                    throw new Error('HTTP status ' + response.status);
                    }
                    return response.json();
                })
                .then(data => {
                    localStorage.setItem('access-token', data.access_token);
                    localStorage.setItem('refresh-token', data.refresh_token);
                    window.location.reload();
                })
                .catch(error => {
                    console.error('Error:', error);
                    return false
                });
            }catch(error){
                console.error('Error:', error);
            };
        }
        if (hasFetchedData.current === false) {
            refreshToken();
            hasFetchedData.current = true;
          }

    },[])

}