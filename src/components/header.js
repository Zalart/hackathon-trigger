import React from 'react'
import '../components/header.css';
import trigger2 from '../components/assets/logo-trigger.png';

function header() {
    return (
        <div className="header">
            <a className="header-item" href='/'>
                <img className='trigger2' src={trigger2} alt='trigger logo' />
            </a>
            <div className="header">
            <a className="header-item" href='/home'>
                Home
            </a>
            <a className="header-item" href='/trigger'>
                Triggers
            </a>
            <a className="header-item__round" href='/'>
            {localStorage.getItem('firstName') ? localStorage.getItem("firstName").trim().slice(0,1).toUpperCase() : null}
            </a>
            </div>
        </div>
    )
}

export default header
