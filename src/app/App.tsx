import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { Main } from "../routes/Main";
import { RootReducer } from "../global/RootReducer";

export const App = (): JSX.Element => {
    return (
        <React.Fragment>
            <Provider store={RootReducer}>
                <Main />
            </Provider>
        </React.Fragment>
    );
};



