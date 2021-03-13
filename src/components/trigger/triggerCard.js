import React from 'react'

function TriggerCard({value, data, users}) {
    console.log(value)
    return (
        <div className="Trigger-Card">
            
            <h2>Message :{value}</h2>
            <h3>Trigger:{data}</h3>
        </div>
    )
}

export default TriggerCard;
