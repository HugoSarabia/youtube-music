import React, {useRef, useEffect, useState} from 'react';
import SubTitle from './SubTitle'
import AvatarPic from './AvatarPic';
import DisplaySongCards from './DisplaySongCards';

export default function ListenAgain(){
    const [currentPage, setCurrentPage] = useState(1);


    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
    
    return(
        <div className='listen-again-container'>
            <div className='listen-again-top-div'>
                <AvatarPic/>
                <SubTitle subtitle="Volver a escuchar" more="true" currentPage={currentPage} onPageChange={handlePageChange}/>
            </div>
            <div className='listen-again-bottom-div'>
                <DisplaySongCards currentPage={currentPage} onPageChange={handlePageChange}/>
            </div>
        </div>
    )
}