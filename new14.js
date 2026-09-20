// npm install react-redux;
// npm install @reduxjs/toolkit

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import stores from "./store";
import CoinCreate from "./coin1";

function App(){

    return(

        <Provider store={stores}>
        <CoinCreate/>
        </Provider>

    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
