import React from 'react';
import { Link } from "react-router-dom";
import LeftSide from "../components/leftSide";

function Home() {
    return (
        <div className="Home-Wrapper">
            <LeftSide />
            <Link>To welcome page</Link>
        </div>
    )
}

export default Home
