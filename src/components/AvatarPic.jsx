import React, {useRef, useEffect, useState} from 'react'
import Avatar from '@mui/material/Avatar';
import useProfilePic from '../hooks/useProfilePic'

export default function AvatarPic() {
    const picURL = useProfilePic();
    return(
        <>
            <Avatar alt="Remy Sharp" src={picURL} sx={{ width: 56, height: 56, marginRight: 2, marginBottom: 0.5, cursor: 'pointer' }} />
        </>
        )
}