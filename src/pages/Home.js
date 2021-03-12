import React from 'react';
import { Link } from "react-router-dom";
import LeftSide from "../components/leftSide";
import triggerCard from "../components/trigger/triggerCard";


function Home() {
    return (
        <div className="Home-Wrapper">
            <LeftSide />
            <div className="FieldTriggers">
                <triggerCard />
                <Link to="/trigger"><button>Add the trigger</button></Link>
            </div>
            <Link>To welcome page</Link>
        </div>
    )
}

export default Home
