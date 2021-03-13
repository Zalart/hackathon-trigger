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
    email: '',
    password: '',
    loading: false,
    errors: []
}

function Login() {
    let history = useHistory();
    const [state, setState] = useState(initialState);

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setState({
            ...state,
            loading: true
        });
        const userData = {
            email: state.email,
            password: state.password
        };
        axios
            .post('/login', userData)
            .then((response) => {
                localStorage.setItem('AuthToken', `Bearer ${response.data.token}`);
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
    const { errors, loading } = state;
    return (
        <div>
            <h1>It's a Login page</h1>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div>
                    <Typography component="h1" variant="h5">
                        Login
					</Typography>
                    <form noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            helperText={errors.email}
                            error={errors.email ? true : false}
                            onChange={handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
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
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            disabled={loading || !state.email || !state.password}
                        >
                            Sign In
							{loading && <CircularProgress size={30} />}
                        </Button>
                        <Grid container>
                            <Grid item>
                                <a href="signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </a>
                            </Grid>
                        </Grid>
                        {errors.general && (
                            <Typography variant="body2" >
                                {errors.general}
                            </Typography>
                        )}
                    </form>
                </div>
            </Container>
            <Link to="/home">To Home page</Link>
        </div>
    )
}

export default Login;
