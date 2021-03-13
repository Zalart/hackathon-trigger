<<<<<<< HEAD
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

import { authChecker } from '../util/auth.js'

const initialState = {
    render: false,
    firstName: '',
    lastName: '',
    //profilePicture: '',
    uiLoading: true,
    imageLoading: false
=======
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
                
                <Button id="but-red"  >
                    <Link to="/trigger">Add trigger</Link>
                </Button>
                <div className="Triggercard">
                    <br></br> 
                    <p>next </p>
                    <p> trigger card</p>
                    <triggerCard />
                </div>
            </div>
            
        </div>
    )
>>>>>>> origin/mastercopy
}
function Home(props) {
    let history = useHistory();
    const [state, setState] = useState(initialState);

    const loadAccountPage = (event) => {
        setState({
            ...state,
            render: true
        });
    };

    const loadTriggersPage = (event) => {
        setState({
            ...state,
            render: false
        });
    };

    const logoutHandler = (event) => {
        localStorage.removeItem('AuthToken');
        history.push('/login');
    };

    useEffect(() => {
        authChecker(history);
        const authToken = localStorage.getItem('AuthToken');
        axios.defaults.headers.common = { Authorization: `${authToken}` };
        axios
            .get('/user')
            .then((response) => {
                console.log(response.data);
                setState({
                    ...state,
                    firstName: response.data.userCredentials.firstName,
                    lastName: response.data.userCredentials.lastName,
                    email: response.data.userCredentials.email,
                    phoneNumber: response.data.userCredentials.phoneNumber,
                    country: response.data.userCredentials.country,
                    username: response.data.userCredentials.username,
                    uiLoading: false,
                    //profilePicture: response.data.userCredentials.imageUrl
                });
            })
            .catch((error) => {
                if (error.response.status === 403) {
                    history.push('/login')
                }

                console.log(error.response)
                setState({ ...state, errorMsg: 'Error in retrieving the data' });
            });
    }, []);
    if (state.uiLoading === true) {
        return (
            <div>
                {state.uiLoading && <CircularProgress size={150} />}
            </div>
        );
    } else {
        return (
            <div>
                <CssBaseline />
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            Triggers
                                    </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                >
                    <div />
                    <Divider />
                    <center>
                        {/*                         <Avatar src={this.state.profilePicture} className={classes.avatar} /> */}
                        <p>
                            {' '}
                            {state.firstName} {state.lastName}
                        </p>
                    </center>
                    <Divider />
                    <List>
                        <ListItem button key="Todo" onClick={loadTriggersPage}>
                            <ListItemIcon>
                                {' '}
                            </ListItemIcon>
                            <ListItemText primary="Trigger" />
                        </ListItem>

                        <ListItem button key="Account" onClick={loadAccountPage}>
                            <ListItemIcon>
                                {' '}
                            </ListItemIcon>
                            <ListItemText primary="Account" />
                        </ListItem>

                        <ListItem button key="Logout" onClick={logoutHandler}>
                            <ListItemIcon>
                                {' '}
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItem>
                    </List>
                </Drawer>

                <div>{state.render ? <Account /> : <Trigger />}</div>
            </div>
        );
    }


}
export default Home;
