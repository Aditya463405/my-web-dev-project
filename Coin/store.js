import {configureStore} from "@reduxjs/toolkit";
import slicer1Reducer from "slice1";

const stores = configureStore({

    reducer: {
        slice1: slicer1Reducer,
    }
})

export default stores;
