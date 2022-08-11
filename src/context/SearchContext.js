import { createContext, useReducer } from "react"

const INITIAL_STATE = {
    city: undefined,
    date: [],
    options: {
        adults: undefined,
        children: undefined,
        rooms: undefined
    }
}

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
    switch(action.type) {
        case 'NEW_SEARCH':
            return action.payload;
        case 'RESET_SEARCH':
            return INITIAL_STATE;
        case 'CHANGE_ROOMS':
            return {...state, options: {...state.options, rooms: action.payload}}
        default: 
            return state;    
    }
}

// children will be our components which we want to reach this data
export const SearchContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);
    return (
        <SearchContext.Provider value={{
                                    city: state.city, 
                                    date: state.date,
                                    options: state.options,
                                    dispatch
                                }}>
            {children}
        </SearchContext.Provider>
    )
}