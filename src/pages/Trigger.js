import React, { useState, useContext } from 'react'
import LeftSide from "../components/leftSide";
import FirstStep from "../components/trigger/firstStep";
import SecondStep from "../components/trigger/secondStep";
import { useTrigger } from "../TriggerContext";
import ThirdStep from "../components/trigger/thirdStep";
import '../pages/Trigger.css';

function Trigger() {
    const {state, dispatch} = useTrigger();
    console.log(state);

        
    return (
        <div className="TriggerPage">           
            <div  className="LeftSight">   
                         
                <LeftSide progress={state.progress} />
            </div>
            <div className="FieldTriggers">
                {state.progress == 1 ? <FirstStep/> : state.progress == 2 ? <SecondStep/> : state.progress == 3 ? <ThirdStep /> : <FirstStep/> }
            </div>
        </div>
    )
}

export default Trigger
