import { useScrollTrigger } from '@material-ui/core';
import React, { useContext, useState } from 'react'

const TriggerContext = React.createContext();

export function useTrigger() {
    return useContext(TriggerContext);
}

export function TriggerProvider({ children }){
    const [progress, setProgress] = useState(0);


    return (
        <TriggerContext.Provider value={progress}>
            {children}
        </TriggerContext.Provider>
    )

}