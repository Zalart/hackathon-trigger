import React from 'react'

function DescriptionStep({step}) {
    return (
        <div className="stepText">
            <h3> Steps for adding a new trigger: </h3>
            <br></br>
            <p className={step == 1 ? "colortext" : "regularStep"}> 1. Who will recieve your message? </p>
            <p className={step == 2 ? "colortext" : "regularStep"}> 2. What information do you want to send? </p>
            <p className={step == 3 ? "colortext" : "regularStep"}> 3. When your message will be sent? </p>
            <br></br>
        </div>
    )
}

export default DescriptionStep
