import React from 'react'
import '../pages/Trigger.css';
import '../pages/Welcome.css';



function leftSide({ progress }) {
    return (
        <div>
            <h2 className="name">{localStorage.getItem('firstName')} {localStorage.getItem('lastName')}</h2>
            <br></br>
            <div>
                <img width="180 px" src="https://c0.klipartz.com/pngpicture/630/366/gratis-png-icono-de-la-persona-boton-circulo-iconos-de-la-computadora-circulo.png" />
            </div>
            {!progress ? null : <div>
                <h1>STEPS</h1>
                <br></br>


                <h1 className={progress == 1 ? "colortext" : "regularStep"}>{progress == 1 ? '1. Who will recieve your message?' : 1}</h1>
                <h1 className={progress == 2 ? "colortext" : "regularStep"}>{progress == 2 ? '2. What information do you want to send?' : 2}</h1>
                <h1 className={progress == 3 ? "colortext" : "regularStep"}>{progress == 3 ? '3. When your message will be sent?' : 3}</h1>
                {/* <button onClick={()=>history.push('/')}> Log out<button> */}
            </div>}


        </div>
    )
}

export default leftSide
