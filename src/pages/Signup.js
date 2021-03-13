import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';

const initialState = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    country: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: [],
    loading: false
}


function Signup() {
    let history = useHistory();
    const [state, setState] = useState(initialState);


    /*     componentWillReceiveProps(nextProps) {
            if (nextProps.UI.errors) {
                this.setState({
                    errors: nextProps.UI.errors
                });
            }
        }
     */
    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setState({
            ...state,
            loading: true
        });
        const newUserData = {
            firstName: state.firstName,
            lastName: state.lastName,
            phoneNumber: state.phoneNumber,
            country: state.country,
            username: state.username,
            email: state.email,
            password: state.password,
            confirmPassword: state.confirmPassword
        };
        axios
            .post('/signup', newUserData)
            .then((response) => {
                localStorage.setItem('AuthToken', `${response.data.token}`);
                setState({
                    ...state,
                    loading: false,
                });
                history.push('/home');
            })
            .catch((error) => {
                setState({
                    ...state,
                    errors: error.response.data,
                    loading: false
                });
            });
    };


    // const { classes } = this.props;
    const { errors, loading } = state;
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div>
                <Typography component="h1" variant="h5">
                    <h1>Sign up</h1>
					</Typography>
                <form noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                name="firstName"
                                autoComplete="firstName"
                                helperText={errors.firstName}
                                error={errors.firstName ? true : false}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lastName"
                                helperText={errors.lastName}
                                error={errors.lastName ? true : false}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="User Name"
                                name="username"
                                autoComplete="username"
                                helperText={errors.username}
                                error={errors.username ? true : false}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="phoneNumber"
                                label="Phone Number"
                                name="phoneNumber"
                                autoComplete="phoneNumber"
                                pattern="[7-9]{1}[0-9]{9}"
                                helperText={errors.phoneNumber}
                                error={errors.phoneNumber ? true : false}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                helperText={errors.email}
                                error={errors.email ? true : false}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="country"
                                label="Country"
                                name="country"
                                autoComplete="country"
                                helperText={errors.country}
                                error={errors.country ? true : false}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                helperText={errors.password}
                                error={errors.password ? true : false}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                id="confirmPassword"
                                autoComplete="current-password"
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    <Button id="but-red" 
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        disabled={loading ||
                            !state.email ||
                            !state.password ||
                            !state.firstName ||
                            !state.lastName ||
                            !state.country ||
                            !state.username ||
                            !state.phoneNumber}
                    >
                        Sign Up
							{loading && <CircularProgress size={30} />}
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <a href="login" variant="body2">
                                Already have an account? Sign in
								</a>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );

}
export default Signup;