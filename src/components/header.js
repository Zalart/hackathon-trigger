import React from 'react'
import '../components/header.css';

function header() {
    return (
        <div className="header">
            <a className="header-item" href='#'>
                Home
            </a>
            <a className="header-item" href='#'>
                Triggers
            </a>
            <a className="header-item__round" href='#'>
                U
            </a>
        </div>
    )
}

export default header
