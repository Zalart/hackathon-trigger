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
const drawerWidth = 240;
const styles = (theme) => ({
    root: {
        display: 'flex'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
    avatar: {
        height: 110,
        width: 100,
        flexShrink: 0,
        flexGrow: 0,
        marginTop: 20
    },
    uiProgess: {
        position: 'fixed',
        zIndex: '1000',
        height: '31px',
        width: '31px',
        left: '50%',
        top: '35%'
    },
    toolbar: theme.mixins.toolbar
});

const initialState = {
    render: false,
    firstName: '',
    lastName: '',
    //profilePicture: '',
    uiLoading: true,
    imageLoading: false
    /*
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
       )*/

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
        let cleanupFunction = false;
        authChecker(history);
        const authToken = localStorage.getItem('AuthToken');
        axios.defaults.headers.common = { Authorization: `${authToken}` };

        const getUserData = async () => {
            try {
                const response = await axios.get('/user');
                const result = await response.data;
                console.log(history);
                if (!cleanupFunction) setState({
                    ...state,
                    firstName: localStorage.getItem('firstName'),
                    lastName: localStorage.getItem('lastName'),
                    email: localStorage.getItem('email'),
                    phoneNumber: localStorage.getItem('phoneNumber'),
                    country: localStorage.getItem('country'),
                    username: localStorage.getItem('username'),
                    uiLoading: false,
                    //profilePicture: response.data.userCredentials.imageUrl
                })
                // непосредственное обновление состояния при условии, что компонент не размонтирован

            } catch (error) {
                /* if (error.response.status === 403) {
                    history.push('/login');
                } */
                if (!cleanupFunction) setState({
                    ...state,
                    firstName: localStorage.getItem('firstName'),
                    lastName: localStorage.getItem('lastName'),
                    email: localStorage.getItem('email'),
                    phoneNumber: localStorage.getItem('phoneNumber'),
                    country: localStorage.getItem('country'),
                    username: localStorage.getItem('username'),
                    uiLoading: false,
                    //profilePicture: response.data.userCredentials.imageUrl
                })
                // console.log(error.response)
                // setState({ ...state, errorMsg: 'Error in retrieving the data' });
            }
        };

        getUserData();
        return () => cleanupFunction = true;
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
