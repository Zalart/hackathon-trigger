import React from 'react';
import { Link } from "react-router-dom";
import LeftSide from "../components/leftSide";
import triggerCard from "../components/trigger/triggerCard";
import './Home.css';
import { Button } from '@material-ui/core';

function Home() {
    return (
        <div className="Home-Wrapper">
            <div className="FieldPerson">         
                <LeftSide />
                <Link>To welcome page</Link>
            </div>
            <div className="FieldTriggers">
                <div className="TriggerBut">
                <Button id="but-red"  >
                    <Link to="/trigger">Add trigger</Link>
                </Button>
                </div>
                <div className="Triggercard">
                    <br></br> 
                    <p>next </p>
                    <p> trigger card</p>
                    <triggerCard />
                </div>
            </div>
            
        </div>
    )
}

export default Home
