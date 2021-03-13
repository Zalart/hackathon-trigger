import React, { useContext, useReducer} from 'react'

const TriggerContext = React.createContext();

const initialState = {
    progress: 1,
    form: {
        data: new Date(),
        value: 'text',
        targetUsers: []
    },
    cards: []
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'stepOneCompleted': 
            return {
                ...state,
                progress: state.progress+1,
                form: {
                    ...state.form,
                    targetUsers: action.payload
                }

            }
        case "stepBack":
            return {
                ...state,
                progress: state.progress-1,
            }
        case "stepTwoCompleted":
            return{
                ...state,
                progress: state.progress+1,
                form: {
                    ...state.form,
                    value: action.payload
                }
            }
        case "stepThreeCompleted":
            state.cards.push(state.form);
            return{
                ...state,
                progress: 1,
                form: {
                    data: new Date(),
                    value: 'text',
                    targetUsers: []
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