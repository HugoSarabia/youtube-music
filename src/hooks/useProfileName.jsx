import React, {useRef, useEffect, useState} from 'react'
import useAuthWithRefreshToken from "./useAPIWithRefreshToken";

export default function useProfilePic() {
    const hasFetchedData = useRef(false);
    const [name, setName] = useState(null);
    let url = "https://api.spotify.com/v1/me"
    let access_token = localStorage.getItem('access-token');

    useEffect(()=>{
        const getAPI = async ()=>{
            try{
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        Authorization: "Bearer " + access_token,
                    },

                })
                if(response.status === 200){
                    let data = await response.json()
                    for (const key in data) {
                        if(key === 'display_name'){
                            setName(data[key].toUpperCase());
                        }
                    }
                }
                
            }catch(error){
                console.error('Error:', error);
                return false
            };
        };
        if (hasFetchedData.current === false) {
            getAPI();
            hasFetchedData.current = true;
          }
    },[])
    
    return name;
}