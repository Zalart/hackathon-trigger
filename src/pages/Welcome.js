import React from 'react'
import { Link } from "react-router-dom";

function Welcome() {
    return (
        <div>
            <h1>Welcome page</h1>
            <Link to="/registration">Registration</Link>
        </div>
    )
}

export default Welcome
