import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Account from '../components/account';
import Trigger from '../components/trigger';
import { useHistory } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import withStyles from '@material-ui/core/styles/withStyles';
//import AccountBoxIcon from '@material-ui/icons/AccountBox';
//import NotesIcon from '@material-ui/icons/Notes';
//import Avatar from '@material-ui/core/avatar';
//import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CircularProgress from '@material-ui/core/CircularProgress';
import LeftSide from "../components/leftSide";
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import TriggerCard from "../components/trigger/triggerCard"
import { useTrigger } from "../TriggerContext";

import { authChecker } from '../util/auth.js'



const initialState = {
    render: false,
    firstName: '',
    lastName: '',
    //profilePicture: '',
    uiLoading: true,
    imageLoading: false
}

function Home(props) {
   

    // MINE 
    const { state, dispatch } = useTrigger();
    const localCards = JSON.parse(localStorage.getItem("cards") || "[]");
    const [cards, setCards] = useState(localCards);
    console.log(state.cards)
    useEffect(() => {
        if(state.cards.length > 0){
            // setCards(state.cards);
            console.log(state.cards)
        }

        console.log(cards)
    }, [])



        return (
            <div className="TriggerPage">           
            <div  className="LeftSight">   
                         
                <LeftSide progress={state.progress} />
            </div>
            <div className="FieldTriggers">
                <div className="FieldCards">
                    { cards.map(card => <TriggerCard value={card.value} data={card.data} />)}
                </div>
                <br />
                <Link to="/trigger">
                    <Button id="but-red">
                        Add a trigger
                    </Button>
                </Link>
            </div>
        </div>
        );
    }


export default Home;
