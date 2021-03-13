import React, { useState, useEffect } from 'react'
import RecieverInput from './recieverInput';
import { useTrigger } from "../../TriggerContext";
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import '../trigger/steps.css';
import DescriptionStep from '../trigger/descriptionStep.js';


function FirstStep() {
    const { state, dispatch } = useTrigger();
    const [users, setUsers] = useState([
        {
            id: 1,
            value: ''
        }]);

    useEffect(() => {
        if(state.form.targetUsers.length > 0){
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
            <div>
                <DescriptionStep />
            </div>
            {users.map((item) => {
                return <input key={item.id} value={item.value} onChange={(event) => changesInput({ value: event.target.value, idx: item.id })}></input>
            })}
 
            <button id="but-white" onClick={() => setUsers(prev => {
                const newArray = prev.concat([{
                    id: prev.length + 1,
                    value: ''
                }])
                return newArray
            })} >Add more</button>
            
            
            <div>
               
                <Button id="but-red"  >
                    <Link to="/home">Go Back</Link>
                </Button>
                <Button id="but-red" onClick={() => dispatch({ type: 'stepOneCompleted', payload: users })}>
                    Next step
                </Button>
            </div>

        </div>
    )
}

export default FirstStep
