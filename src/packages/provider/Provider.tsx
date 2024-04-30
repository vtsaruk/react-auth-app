import React from "react";

import IDispatch from "./IDispatch";
import IReducer from "./IReducer";

interface IProviderProps {
    children: React.ReactNode;
}

function provider <StateType>(
    reducer: IReducer<StateType>,
    defaultState: StateType,
    displayName?: string,
){
    const StateContext = React.createContext(defaultState);
    const DispatchContext = React.createContext((action: any) =>{})
    
    if (displayName){
        StateContext.displayName = displayName;
    }

    let dispatchInstance: IDispatch;
    let stateInstance: StateType;
    const useState = ():StateType =>React.useContext(StateContext);
    const useDispatch = ():IDispatch => React.useContext(DispatchContext);
    const getDispatch = ():IDispatch => dispatchInstance;
    const getState = (): StateType => stateInstance;

    const Provider = ({ children }:IProviderProps): JSX.Element => {
        const [state, dispatch] = React.useReducer(reducer, defaultState);
        dispatchInstance = dispatch;
        stateInstance = state;
        
        return (
            <StateContext.Provider value={state}>
                <DispatchContext.Provider value={dispatch}>
                    {children}
                </DispatchContext.Provider>
            </StateContext.Provider>
        )
    }

    return {
        useState,
        useDispatch,
        Provider,
        getDispatch,
        getState,
        dispatch: ((...arg) => dispatchInstance(...arg)) as IDispatch,
    }
} 

export default provider;