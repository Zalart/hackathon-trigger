import React, {useState, useEffect} from 'react'
import RecieverInput from './recieverInput';
import { useTrigger } from "../../TriggerContext";

function FirstStep() {
    const {state, dispatch} = useTrigger();
    const [users, setUsers] = useState([
        {
        id: 1,
        value: ''
    },
    {
        id: 2,
        value: ''
    }]);

    useEffect(() => {
        console.log(users)
    }, [users])


    const changesInput = ({value, idx}) => {
        setUsers((prevState) => {
            return prevState.map((item)=> {
                if (idx === item.id) {
                    return {
                        ...item,
                        value
                    }
                }
                return item
            } )
        })
    }

    return (
        <div>
           {users.map((item)=> {
                return <input key={item.id} value={item.value} onChange={(event) => changesInput({value: event.target.value, idx: item.id})}></input>
            })}
            
            <button onClick={()=> setUsers(prev => {
                const newArray = prev.concat([{
                    id: prev.length,
                    value: ''
                }])
                return newArray
            })} >Add more</button>
            <button onClick={()=> dispatch({type: 'stepOneCompleted', payload: users})}>Next step</button>
        </div>
    )
}

export default FirstStep
