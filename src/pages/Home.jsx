import './Home.css'

import titleImg from '../assets/title.png'
import playImg from '../assets/play.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

function Home() {
    const navigate = useNavigate();
    const [fadeOut, setFadeOut] = useState(false);

    return (<>
        <div className='black-screen'>
            <div className={'home-background ' + (fadeOut ? 'fadeout' : '')}>
                <img src={titleImg} className='home-title' alt='title' />
                <img src={playImg} className='home-play' alt='play button' onClick={() => {
                    setFadeOut(true);
                    setTimeout(() => {
                        navigate('/1?step=0');
                    }, 1000);
                }} />
            </div>
        </div>
    </>)
}

export default Home;