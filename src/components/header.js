import React from 'react'
import '../components/header.css';
import trigger2 from '../components/assets/trigger2.png';
import { Link } from "react-router-dom";

function header() {
    return (
        <div className="header">
            <Link to="/">
                <img className='trigger2' src={trigger2} alt='trigger logo' />
            </Link>
 
            <div className="header">
                <Link to="/">
                    <p className="header-item">Home</p>
                </Link>
                
                <Link to="/home">
                    <p className="header-item__round">
                        {localStorage.getItem('firstName') ? localStorage.getItem("firstName").trim().slice(0, 1).toUpperCase() : null}
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default header
