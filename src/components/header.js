import React from 'react'
import '../components/header.css';
import trigger2 from '../components/assets/trigger2.png';

function header() {
    return (
        <div className="header">
            <a className="header-item" href='/'>
                <img className='trigger2' src={trigger2} alt='trigger logo' />
            </a>
            <div>
            <a className="header-item" href='/home'>
                Home
            </a>
            <a className="header-item" href='#'>
                Triggers
            </a>
            <a className="header-item__round" href='#'>
                U
            </a>
            </div>
        </div>
    )
}

export default header
