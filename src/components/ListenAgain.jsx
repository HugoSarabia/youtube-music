import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
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
                    <div className='song-thumbnail'>
                        <img className='song-thumbnail-img'/>
                        <FontAwesomeIcon icon={faPlay} size='2xl'/>
                            <div className='song-thumbnail-options'>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </div>
                    </div>
                    <div className='song-info'>
                        <div className='song-title'>
                            <span>Do I Wanna Know?</span>
                        </div>
                        <span>Artic Monkeys</span>
                    </div>
                </div>
            </div>
        </div>
    )
}