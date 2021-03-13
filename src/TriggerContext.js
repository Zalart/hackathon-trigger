import React, { useContext, useReducer} from 'react'

const TriggerContext = React.createContext();

const initialState = {
    progress: 1,
    form: {
        data: new Date(),
        value: 'text',
        targetUsers: []
    }
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'stepOneCompleted': 
            return {
                ...state,
                progress: state.progress++,
                form: {
                    ...state.form,
                    targetUsers: action.payload
                }

            }
        default: 
            return state;
    }
}

export function useTrigger() {
    return useContext(TriggerContext);
}

export function TriggerProvider({ children }){
    const [state, dispatch] = useReducer(reducer, initialState)
    

    return (
        <TriggerContext.Provider value={{state, dispatch}}>
            {children}
        </TriggerContext.Provider>
    )

}