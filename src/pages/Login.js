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
                localStorage.setItem('AuthToken', `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ4OTQ5ZDdkNDA3ZmVjOWIyYWM4ZDYzNWVjYmEwYjdhOTE0ZWQ4ZmIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdHJpZ2dlci1hcHAtYzI4YjkiLCJhdWQiOiJ0cmlnZ2VyLWFwcC1jMjhiOSIsImF1dGhfdGltZSI6MTYxNTY0MzQwMiwidXNlcl9pZCI6IkZINUk4eTJZSjhoRmcxTGlMeUpkRkx5dnZxRTIiLCJzdWIiOiJGSDVJOHkyWUo4aEZnMUxpTHlKZEZMeXZ2cUUyIiwiaWF0IjoxNjE1NjQzNDAyLCJleHAiOjE2MTU2NDcwMDIsImVtYWlsIjoidXV1dUB0dXV1LmJ5IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInV1dXVAdHV1dS5ieSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MkKj4Md0VRh4ZXys_y0j2IUnlrLku6wp8sL39paOlvVXXiRi01An8k_Xyx9y5PpOtaoHkVVsx6rtsnXy6cO_we5WYeuQ3367LbhWcLJaKmtjAlKwzTQOLsmMM2QXwInP741Xha85i2maTjL4UxvkGz9RQ-8nhYZfZbQUBlGNXm-3ZBlID-ZdwambwZwU-Ht1IimIG7F9hxDjS5836PR57CIUJydo9tnkLYmR1m9ZzEQKWvDfYmZ4FXSu5h3CnjdwImQtMSPFwp8_ZgDKe6VhZydfG6q03jEdqa3UdJMCLX6frvI_8Xs2MnbQ9xWKDFl5HhyCs8lRSCaBgV0PUV--sQ`);
                setState({
                    ...state,
                    loading: false,
                });

                history.push('/home');
            })
            .catch((error) => {
                localStorage.setItem('AuthToken', `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ4OTQ5ZDdkNDA3ZmVjOWIyYWM4ZDYzNWVjYmEwYjdhOTE0ZWQ4ZmIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdHJpZ2dlci1hcHAtYzI4YjkiLCJhdWQiOiJ0cmlnZ2VyLWFwcC1jMjhiOSIsImF1dGhfdGltZSI6MTYxNTY0MzQwMiwidXNlcl9pZCI6IkZINUk4eTJZSjhoRmcxTGlMeUpkRkx5dnZxRTIiLCJzdWIiOiJGSDVJOHkyWUo4aEZnMUxpTHlKZEZMeXZ2cUUyIiwiaWF0IjoxNjE1NjQzNDAyLCJleHAiOjE2MTU2NDcwMDIsImVtYWlsIjoidXV1dUB0dXV1LmJ5IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInV1dXVAdHV1dS5ieSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MkKj4Md0VRh4ZXys_y0j2IUnlrLku6wp8sL39paOlvVXXiRi01An8k_Xyx9y5PpOtaoHkVVsx6rtsnXy6cO_we5WYeuQ3367LbhWcLJaKmtjAlKwzTQOLsmMM2QXwInP741Xha85i2maTjL4UxvkGz9RQ-8nhYZfZbQUBlGNXm-3ZBlID-ZdwambwZwU-Ht1IimIG7F9hxDjS5836PR57CIUJydo9tnkLYmR1m9ZzEQKWvDfYmZ4FXSu5h3CnjdwImQtMSPFwp8_ZgDKe6VhZydfG6q03jEdqa3UdJMCLX6frvI_8Xs2MnbQ9xWKDFl5HhyCs8lRSCaBgV0PUV--sQ`);
                history.push('/home');
                /*  setState({
                    ...state,
                    errors: error.response.data,
                    loading: false
                }); */
            });
    };
    const { errors, loading } = state;
    return (
        <div>          
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div>
                    <Typography component="h1" variant="h5">
                        <h1>Log in</h1>
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
                        <Button id="but-red" 
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
            {/* <Link to="/home">To Home page</Link> */}
        </div>
    )
}

export default Login;
