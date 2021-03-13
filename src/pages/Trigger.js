import React, { useState, useContext } from 'react'
import LeftSide from "../components/leftSide";
import FirstStep from "../components/trigger/firstStep";
import SecondStep from "../components/trigger/secondStep";
import { useTrigger } from "../TriggerContext";
import ThirdStep from "../components/trigger/thirdStep";



function Trigger() {
    const {state, dispatch} = useTrigger();
    console.log(state);

    
    
    return (
        <div>
            <LeftSide progress={state.progress} />
            <div className="FieldTriggers">
                {state.progress == 1 ? <FirstStep/> : state.progress == 2 ? <SecondStep/> : state.progress == 3 ? <ThirdStep /> : <FirstStep/> }
            </div>
        </div>
    )
}

export default Trigger
