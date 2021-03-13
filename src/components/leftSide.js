import React from 'react'
import '../pages/Welcome.css';



function leftSide({progress}) {
    return (
        <div>
            <h1>STEPS</h1>
            <br></br>
            <h2>{progress}</h2>            
            <br></br>

            <h1>{progress == 1 ? 'now 1 step': 1}</h1>
            <h1>{progress == 2 ? 'now 2 step' : 2}</h1>
            <h1>{progress == 3 ? 'now 3 step': 3}</h1>
        </div>
    )
}

export default leftSide
