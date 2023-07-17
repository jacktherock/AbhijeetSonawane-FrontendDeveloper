import React, { useReducer, createContext, useContext, useEffect } from "react";
import { reducer, initialState } from "../reducers/Reducer";
import { getCapsules } from "../network/agent";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        getCapsules()
            .then(hitsVar => {
                dispatch({ type: 'SET_LOADING', payload: true });
                dispatch({ type: 'GET_CAPSULES', payload: hitsVar });
                dispatch({ type: 'SET_LOADING', payload: false });
            })
            .catch(err => {
                dispatch({ type: 'SET_ERROR', payload: err })
            });
    }, []);

    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext }