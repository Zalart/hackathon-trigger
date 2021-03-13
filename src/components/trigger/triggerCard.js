import React from 'react'

function TriggerCard({value, data}) {
    console.log(value)
    return (
        <div>
            <h2>{value}</h2>
            <h3>{data}</h3>
        </div>
    )
}

export default TriggerCard;
