import React, { useState, useContext } from 'react'
import LeftSide from "../components/leftSide";
import firstStep from "../components/trigger/firstStep";
import secondStep from "../components/trigger/secondStep";
import { useTrigger } from "./TriggerContext";




function Trigger() {
    const prog = useTrigger();
    return (
        <div>
            <LeftSide />
            <div className="FieldTriggers">
                <h1>{prog}</h1>
                {prog == 0 ? firstStep : secondStep}
            </div>
        </div>
    )
}

export default Trigger
