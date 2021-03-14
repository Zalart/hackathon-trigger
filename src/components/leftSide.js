import React from 'react'
import '../pages/Trigger.css';
import '../pages/Welcome.css';



function leftSide({ progress }) {
    return (
        <div>
            <h2 className="name">{localStorage.getItem('firstName')} {localStorage.getItem('lastName')}</h2>
            <br></br>
            <div>
                <img width="180 px" src="https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/celebrity-musician-snoop-dogg-rapper-512.png" />
            </div>
            {!progress ? null : <div>
                <br></br>
                <h4>STEPS</h4>
                
                <h1 className={progress == 1 ? "colortext" : "regularStep"}>{progress == 1 ? '1' : 1}</h1>
                <h1 className={progress == 2 ? "colortext" : "regularStep"}>{progress == 2 ? '2' : 2}</h1>
                <h1 className={progress == 3 ? "colortext" : "regularStep"}>{progress == 3 ? '3' : 3}</h1>
                {/* <button onClick={()=>history.push('/')}> Log out<button> */}
            </div>}


        </div>
    )
}

export default leftSide
