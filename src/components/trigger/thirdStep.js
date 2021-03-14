import React, { useState, useEffect } from 'react';
import { Button, TextField, Grid, Container, makeStyles } from '@material-ui/core';
import { useTrigger } from "../../TriggerContext";
import { Link } from "react-router-dom";
import DescriptionStep from '../trigger/descriptionStep.js';
import '../trigger/steps.css';

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

function ThirdStep() {
    const classes = useStyles();
    const { state, dispatch } = useTrigger();
    const [dateTrigger, setDateTrigger] = useState("");
    

    const ChangeDate = (value) => {
               const date = new Date(value).toLocaleString('en-GB', { timeZone: 'UTC' });
        setDateTrigger(date)
    }

    useEffect(() => {
        if (state.form.dateTrigger.length > 0) {
            setDateTrigger(state.form.dateTrigger);
        }
    }, [])

    return (
        <div>
            <Container component="main" maxWidth="lg">
                <div>
                    <DescriptionStep step={3} />
                </div>
                <h4>Date: {dateTrigger && dateTrigger}</h4>
                <Grid item xs={12}>
                    <form className={classes.container} noValidate>
                        <TextField
                            color="secondary"
                            id="datetime-local"
                            label="Trigger Time"
                            type="datetime-local"
                            name="date"
                            onChange={(event) => ChangeDate(event.target.value)}
                            defaultValue="2021-03-15T19:30"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </form>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Button size="large"
                            fullWidth
                            variant="contained"
                            color="default"
                            className={classes.submit} onClick={() => dispatch({ type: "stepBack2", payload: dateTrigger })} >
                            Go Back
                </Button></Grid>


                    <Grid item xs={12} sm={6}>
                        <Link to="/home" >
                            <Button size="large"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                                
                                onClick={() => dispatch({ type: 'stepThreeCompleted', payload: dateTrigger })}>
                                Complete
                                </Button>
                        </Link>
                    </Grid>
                </Grid>

            </Container>
        </div>
    )
}
export default ThirdStep;
