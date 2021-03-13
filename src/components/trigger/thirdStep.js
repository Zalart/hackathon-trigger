import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import { useTrigger } from "../../TriggerContext";

function ThirdStep() {
    const { state, dispatch } = useTrigger();
    const { letter, setLetter} = useState("");
    console.log(state.form.data)
    return (
        <div>
            <h1>Date:</h1>

            <div>
                <Button id="but-red" onClick={() => dispatch({type: "stepBack", payload: "null"})} >
                    Go Back
                </Button>
                <Button id="but-white" onClick={() => dispatch({ type: 'stepThreeCompleted', payload: "users "})}>
                    Complete
                </Button>
                
            </div>
        </div>
    )
}

export default ThirdStep
