import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useTrigger } from "../../TriggerContext";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";
import DescriptionStep from '../trigger/descriptionStep.js';
import '../trigger/steps.css';

function ThirdStep() {
    const { state, dispatch } = useTrigger();
    const [dateTrigger, setDateTrigger] = useState("");
    console.log(state.form.data)

    const ChangeDate = (value) => {
        const date = new Date(value).toLocaleDateString('ru-Ru');
        setDateTrigger(date)
    }

    useEffect(() => {
        if (state.form.dateTrigger.length > 0) {
            setDateTrigger(state.form.dateTrigger);
        }
    }, [])

    return (
        <div>
               <div>
                <DescriptionStep />
            </div>
            <h1>Date: {dateTrigger}</h1>
            <form className="classes.container" noValidate>
                <TextField
                    id="datetime-local"
                    label="Trigger Time"
                    type="datetime-local"
                    onChange={(event) => ChangeDate(event.target.value)}
                    defaultValue="2021-03-15T19:30"
                    className={"classes.textField"}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
            <div className='third__step'>
                <Button id="but-red" onClick={() => dispatch({ type: "stepBack2", payload: dateTrigger })} >
                    Go Back
                </Button>
                <Link to="/home">
                    <Button id="but-white" onClick={() => dispatch({ type: 'stepThreeCompleted', payload: dateTrigger })}>
                        Complete
                    </Button>
                </Link>


            </div>
        </div>
    )
}

export default ThirdStep
