import React, { useState } from 'react'
import LeftSide from "../components/leftSide";
import recieverInput from "../components/recieverInput"

const firstStep = () =>{
    return(
        <div>
            <recieverInput />
            <button>Add more</button>
        </div>
    )
}

const secondStep = () =>{
    return(
        <div>

        </div>
    )
}

function Trigger() {
    const [progress, SetProgress] = useState(0);
    return (
        <div>
            <LeftSide />
            <div className="FieldTriggers">
                <h1>{progress === 0}</h1>
                {progress === 0 ? firstStep : secondStep}
            </div>
        </div>
    )
}

export default Trigger
