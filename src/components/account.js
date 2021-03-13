import React, { useState, useEffect } from 'react';

import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Card, CardActions, CardContent, Divider, Button, Grid, TextField } from '@material-ui/core';
import { useHistory } from "react-router-dom";
//import clsx from 'clsx';
import axios from 'axios';
import { authChecker } from '../util/auth'

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    username: '',
    country: '',
    //profilePicture: '',
    uiLoading: true,
    buttonLoading: false,
    imageError: ''
}

function Account(props) {
    let history = useHistory();
    const [state, setState] = useState(initialState);

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
                    uiLoading: false
                });
            })
            .catch((error) => {
                if (error.response.status === 403) {
                    history.push('/login');
                }
                console.log(error);
                setState({ ...state, errorMsg: 'Error in retrieving the data' });
            });
    }, [state]);

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    /*     const handleImageChange = (event) => {
            setState({
                ...state,
                image: event.target.files[0]
            });
        }; 

    /*         profilePictureHandler = (event) => {
                event.preventDefault();
                this.setState({
                    uiLoading: true
                }); 
    
        authChecker(history);
        const authToken = localStorage.getItem('AuthToken');
        let form_data = new FormData();
        // form_data.append('image', this.state.image);
        form_data.append('content', this.state.content);
        axios.defaults.headers.common = { Authorization: `${authToken}` };
        axios
            .post('/user/image', form_data, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then(() => {
                window.location.reload();
            })
            .catch((error) => {
                if (error.response.status === 403) {
                    this.props.history.push('/login');
                }
                console.log(error);
                this.setState({
                    uiLoading: false,
                    imageError: 'Error in posting the data'
                });
            });
    }; */

    const updateFormValues = (event) => {
        event.preventDefault();
        setState({
            ...state,
            buttonLoading: true
        });
        authChecker(history);
        const authToken = localStorage.getItem('AuthToken');
        axios.defaults.headers.common = { Authorization: `${authToken}` };
        const formRequest = {
            firstName: state.firstName,
            lastName: state.lastName,
            country: state.country
        };
        axios
            .post('/user', formRequest)
            .then(() => {
                setState({
                    ...state,
                    buttonLoading: false
                });
            })
            .catch((error) => {
                if (error.response.status === 403) {
                    history.push('/login');
                }
                console.log(error);
                setState({
                    ...state,
                    buttonLoading: false
                });
            });
    };

    const { classes, ...rest } = props;
    if (state.uiLoading === true) {
        return (
            <main>
                <div />
                {state.uiLoading && <CircularProgress size={150} />}
            </main>
        );
    } else {
        return (
            <main>
                <div />
                <Card {...rest} >
                    <CardContent>
                        <div>
                            <div>
                                <Typography gutterBottom variant="h4">
                                    {state.firstName} {state.lastName}
                                </Typography>
                                {/* <Button
                                    variant="outlined"
                                    color="primary"
                                    type="submit"
                                    size="small"
                                    startIcon={<CloudUploadIcon />}
                                    className={classes.uploadButton}
                                    onClick={this.profilePictureHandler}
                                >
                                    Upload Photo
                                        </Button>
                                <input type="file" onChange={this.handleImageChange} />

                                {this.state.imageError ? (
                                    <div className={classes.customError}>
                                        {' '}
                                                Wrong Image Format || Supported Format are PNG and JPG
                                    </div>
                                ) : (
                                        false
                                    )}*/}
                            </div>
                        </div>
                    </CardContent>
                    <div />

                    <Divider />
                </Card>

                <br />
                <Card {...rest} >
                    <form autoComplete="off" noValidate>
                        <Divider />
                        <CardContent>
                            <Grid container spacing={3}>
                                <Grid item md={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        label="First name"
                                        margin="dense"
                                        name="firstName"
                                        variant="outlined"
                                        value={state.firstName}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Last name"
                                        margin="dense"
                                        name="lastName"
                                        variant="outlined"
                                        value={state.lastName}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        margin="dense"
                                        name="email"
                                        variant="outlined"
                                        disabled={true}
                                        value={state.email}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Phone Number"
                                        margin="dense"
                                        name="phone"
                                        type="number"
                                        variant="outlined"
                                        disabled={true}
                                        value={state.phoneNumber}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        label="User Name"
                                        margin="dense"
                                        name="userHandle"
                                        disabled={true}
                                        variant="outlined"
                                        value={state.username}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Country"
                                        margin="dense"
                                        name="country"
                                        variant="outlined"
                                        value={state.country}
                                        onChange={handleChange}
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                        <Divider />
                        <CardActions />
                    </form>
                </Card>
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    onClick={updateFormValues}
                    disabled={
                        state.buttonLoading ||
                        !state.firstName ||
                        !state.lastName ||
                        !state.country
                    }
                >
                    Save details
                            {state.buttonLoading && <CircularProgress size={30} />}
                </Button>
            </main>
        );
    }

}

export default Account;