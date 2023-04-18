import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import SubTitle from './SubTitle'
import AvatarPic from './AvatarPic';
export default function ListenAgain(){

    return(
        <div className='listen-again-container'>
            <div className='listen-again-top-div'>
                <AvatarPic/>
                <SubTitle subtitle="Volver a escuchar" more="true"/>
            </div>
            <div className='listen-again-bottom-div'>
                <div className='song-card'>
                    <div className='song-thumbnail'>
                        <FontAwesomeIcon icon={faPlay} size='2xl' className='faplay'/>
                        <img className='song-thumbnail-img'/>
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