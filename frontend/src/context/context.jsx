import React, { createContext, useReducer } from "react";
import reducer from "./reducer";

const Context = createContext();
const initialState = {
    userFirstName: "",
    userLastName: "",
    wheels: "",
    type: "",
    vehicle: "",
    startDate: "",
    endDate: ""
};

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
};

export { Context, Provider };
