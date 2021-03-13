import React, { useState, useEffect } from 'react'
import RecieverInput from './recieverInput';
import { useTrigger } from "../../TriggerContext";
import { Link } from "react-router-dom";
import { Button, TextField, Grid, Container, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import '../trigger/steps.css';
import DescriptionStep from '../trigger/descriptionStep.js';

const useStyles = makeStyles((theme) => ({
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    margin: {
        margin: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function FirstStep() {
    const classes = useStyles();
    const { state, dispatch } = useTrigger();

    const [users, setUsers] = useState([
        {
            id: 1,
            value: ''
        }]);

    useEffect(() => {
        if (state.form.targetUsers.length > 0) {
            setUsers(state.form.targetUsers);
        }

        console.log(users)
    }, [])


    const changesInput = ({ value, idx }) => {
        setUsers((prevState) => {
            return prevState.map((item) => {
                if (idx === item.id) {
                    return {
                        ...item,
                        value
                    }
                }
                return item
            })
        })
    }

    return (


        <div className='first__step'>
            <Container component="main" maxWidth="lg">
                <div>
                    <DescriptionStep />
                </div>

                {users.map((item) => {
                    return <Grid item xs={12}><TextField key={item.id} name="addressee" label="Who will recieve your message?" variant="outlined" margin="normal" required fullWidth color="secondary" value={item.value} onChange={(event) => changesInput({ value: event.target.value, idx: item.id })} /></Grid>
                })}
                <Grid item xs={12} container justify="flex-end">
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<AddIcon size="large" />}
                        onClick={() => setUsers(prev => {
                            const newArray = prev.concat([{
                                id: prev.length + 1,
                                value: ''
                            }])
                            return newArray
                        })}
                    >Add more</Button></Grid>


                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Link to="/home">
                            <Button
                                size="large"
                                fullWidth
                                variant="contained"
                                color="default"
                                className={classes.submit} onClick={() => dispatch({ type: 'stepHome', payload: users })}>
                                Go Back
                   </Button>
                        </Link>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Button size="large"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                            disabled={users[0].value === ''}
                            onClick={() => dispatch({ type: 'stepOneCompleted', payload: users })}>
                            Next step
                </Button>
                    </Grid>
                </Grid>

            </Container>
        </div>
    )
}

export default FirstStep;
