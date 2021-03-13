import React from 'react'
import '../pages/Trigger.css';
import '../pages/Welcome.css';



function leftSide({progress}) {
    return (
        <div>
            <h1>STEPS</h1>
            <br></br>


            <h1  className={progress == 1? "colortext" : "regularStep"}>{progress == 1 ? 'now 1 step': 1}</h1>
            <h1 className={progress == 2? "colortext" : "regularStep"}>{progress == 2 ? 'now 2 step' : 2}</h1>
            <h1 className={progress == 3? "colortext" : "regularStep"}>{progress == 3 ? 'now 3 step': 3}</h1>
        </div>
    )
}

export default leftSide
