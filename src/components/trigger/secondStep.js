import React , {useState, useEffect} from 'react';
import { Button } from '@material-ui/core';
import { useTrigger } from "../../TriggerContext";
import '../trigger/steps.css';
import DescriptionStep from '../trigger/descriptionStep.js';

function SecondStep() {
    const { state, dispatch } = useTrigger();
    const  [letter, setLetter] = useState("");

    const changeLetter = (value) => {
        setLetter(value);
    }

    useEffect(() => {
        
        if(state.form.value.length > 0){
            setLetter(state.form.value);
        }
    }, [])
    
    return (
        <div className='second__step'>
            <div>
                <DescriptionStep />
            </div>
            <textarea className='textarea' value={letter} onChange={(event) => changeLetter(event.target.value)}></textarea>
            <div className='second__step-btn'>
                <Button  id="but-red" onClick={() => dispatch({type: "stepBack", payload: letter})} >
                    Go Back
                </Button>
                <Button  id="but-white" onClick={() => dispatch({ type: 'stepTwoCompleted', payload: letter})}>
                    Next step
                </Button>
            </div>
        </div>
    )
}

export default SecondStep
