import React, { useEffect, useRef} from 'react'
import useRefreshToken from "../hooks/useRefreshToken";

export default function useAuth({code}) {
    const hasFetchedData = useRef(false);
    const clientId = '628c60b8375e459c84e91945da64817b';
    const redirectUri = 'http://localhost:4000/';
    let codeVerifier = localStorage.getItem('code-verifier');

    let body = new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri,
        client_id: clientId,
        code_verifier: codeVerifier
        });

        useEffect(()=>{
            const applyToken = async ()=>{
                try{
                    const response = await fetch('https://accounts.spotify.com/api/token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: body
                    })
                    .then(response => {
                        if (!response.ok) {
                            if(response.status === 401){
                                useRefreshToken();
                            }
                        throw new Error('HTTP status ' + response.status);
                        }
                        return response.json();
                    })
                    .then(data => {
                        localStorage.setItem('access-token', data.access_token);
                        localStorage.setItem('refresh-token', data.refresh_token);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        return false
                    });
                }catch(error){
                    console.error('Error:', error);
                    return false
                };
            };
            if (hasFetchedData.current === false) {
                applyToken();
                hasFetchedData.current = true;
              }
        },[])
            

}