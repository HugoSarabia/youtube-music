import React from 'react';

import SubTitle from './SubTitle';
export default function ListenAgain(){

    return(
        <div className='listen-again-container'>
            <div className='listen-again-top-div'>
                <img className='listen-again-user-pic'/>
                <SubTitle title="hugo sanchez de la vega sarabia" subtitle="Volver a escuchar" more="true"/>
                
            </div>
            <div className='listen-again-bottom-div'>
                <div className='song-card'>
                    
                </div>
            </div>
        </div>
    )
}