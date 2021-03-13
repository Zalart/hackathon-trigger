import React , {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import { useTrigger } from "../../TriggerContext";

function SecondStep() {
    const { state, dispatch } = useTrigger();
    const  [letter, setLetter] = useState("");

    const changeLetter = (value) => {
        setLetter(value);
    }

    useEffect(() => {
        console.log(state.form.value.length);
        if(state.form.value.length > 0){
            setLetter(state.form.value);
        }
    }, [])
    
    return (
        <div>
            <textarea value={letter} onChange={(event) => changeLetter(event.target.value)}></textarea>
            <div>
                <Button id="but-red" onClick={() => dispatch({type: "stepBack", payload: "null"})} >
                    Go Back
                </Button>
                <Button id="but-white" onClick={() => dispatch({ type: 'stepTwoCompleted', payload: letter})}>
                    Next step
                </Button>
            </div>
        </div>
    )
}

export default SecondStep
