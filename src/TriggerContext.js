import React, { useContext, useReducer} from 'react'

const TriggerContext = React.createContext();

const initialState = {
    progress: 1,
    form: {
        data: new Date(),
        value: 'text',
        targetUsers: [],
        dateTrigger: ""
    },
    cards: JSON.parse(localStorage.getItem("cards") || "[]")
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
                form: {
                    ...state.form,
                    value: action.payload
                }
            }
        case "stepBack2":
            return {
                ...state,
                progress: state.progress-1,
                form: {
                    ...state.form,
                    dateTrigger: action.payload
                }
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
            localStorage.setItem("cards", JSON.stringify(state.cards));
            return{
                ...state,
                progress: 1,
                form: {
                    data: new Date(),
                    value: 'text',
                    targetUsers: [],
                    dateTrigger: ""
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