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
import { Button, Container, makeStyles  } from '@material-ui/core';
import TriggerCard from "../components/trigger/triggerCard"
import { useTrigger } from "../TriggerContext";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { authChecker } from '../util/auth.js'


const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
        alignItems: 'center',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
const initialState = {
    render: false,
    firstName: '',
    lastName: '',
    //profilePicture: '',
    uiLoading: true,
    imageLoading: false
}

function Home(props) {
    const classes = useStyles();

    // MINE 
    const { state, dispatch } = useTrigger();
    const localCards = JSON.parse(localStorage.getItem("cards") || "[]");
    const [cards, setCards] = useState(localCards);
    useEffect(() => {
        if (state.cards.length > 0) {
            // setCards(state.cards);
            
        }

    }, [])

    const deleteCard = (index) => {
        let newCards = [...cards];
        let slicedCards = newCards.splice(index,1);
        localStorage.setItem("cards", JSON.stringify(newCards));
        setCards(newCards);
        
    }

    return (
        <div className="TriggerPage">
            <div className="LeftSight">

                <LeftSide />
            </div>
            <div className="FieldTriggers">
                <Link to="/trigger">
                    <Button type="submit"
                            size="large"
                            className={classes.submit}
                            variant="contained"
                            color="secondary">
                            
                        Add a trigger
                    </Button>
                </Link>
                <br />
                <div className="FieldCards">
                    <Container component="main" maxWidth="lg">
                    {cards.map( (card, index) => <div key={index}> <TriggerCard id={index} value={card.value} key={index} data={card.dateTrigger} users={card.targetUsers} /> <IconButton aria-label="delete" onClick={() => deleteCard(index)} ><DeleteIcon fontSize="large" />
        </IconButton> <Link to="/trigger"><IconButton aria-label="edit" onClick={() => dispatch({ type: 'editCard', payload: {card, index} })} ><EditIcon fontSize="large" />
        </IconButton></Link></div> )}
        </Container>
                </div>
            </div>
        </div>
    );
}


export default Home;
