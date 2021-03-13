import React, { useState, useEffect } from 'react';
import { Button, TextField, Grid, Container, makeStyles } from '@material-ui/core';
import { useTrigger } from "../../TriggerContext";
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

function SecondStep() {
    const classes = useStyles();
    const { state, dispatch } = useTrigger();
    const [letter, setLetter] = useState("");

    const changeLetter = (value) => {
        setLetter(value);
    }

    useEffect(() => {

        if (state.form.value.length > 0) {
            setLetter(state.form.value);
        }
    }, [])

    return (
        <div className='second__step'>
            <Container component="main" maxWidth="lg">
                <div>
                    <DescriptionStep step={2} />
                </div>
                <Grid item xs={12}><TextField label="What information do you want to send?" variant="outlined" margin="normal" required fullWidth color="secondary" value={letter} onChange={(event) => changeLetter(event.target.value)}></TextField></Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>

                        <Button size="large"
                            fullWidth
                            variant="contained"
                            color="default"
                            className={classes.submit}
                            onClick={() => dispatch({ type: "stepBack", payload: letter })} >
                            Go Back
                </Button></Grid>
                    <Grid item xs={12} sm={6}>
                        <Button size="large"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                            onClick={() => dispatch({ type: 'stepTwoCompleted', payload: letter })}
                            disabled={letter === ''}>
                            Next step
                </Button></Grid>

                </Grid>
            </Container>
        </div>
    )
}

export default SecondStep
