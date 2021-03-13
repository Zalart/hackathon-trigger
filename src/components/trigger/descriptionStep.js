import React from 'react'

function DescriptionStep({step}) {
    return (
        <div className="stepText">
            <h1> Steps description: </h1>
            <br></br>
            <h4 className={step == 1 ? "colortext" : "regularStep"}> 1. Who will recieve your message? </h4>
            <h4 className={step == 2 ? "colortext" : "regularStep"}> 2. What information do you want to send? </h4>
            <h4 className={step == 3 ? "colortext" : "regularStep"}> 3. When your message will be sent? </h4>
            <br></br>
        </div>
    )
}

export default DescriptionStep
