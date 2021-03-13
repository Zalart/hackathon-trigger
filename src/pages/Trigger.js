import React, { useState, useContext } from 'react'
import LeftSide from "../components/leftSide";
import FirstStep from "../components/trigger/firstStep";
import SecondStep from "../components/trigger/secondStep";
import { useTrigger } from "../TriggerContext";




function Trigger() {
    const {state, dispatch} = useTrigger();
    console.log(state);

    
    
    return (
        <div>
            <LeftSide progress={state.progress} />
            <div className="FieldTriggers">
                {state.progress ? <FirstStep/> : <SecondStep/>}
            </div>
        </div>
    )
}

export default Trigger
