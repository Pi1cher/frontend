import {configureStore} from "@reduxjs/toolkit";
import {superheroListReducer} from "./slices/superheroListSlice";
import {superheroInfoReducer} from "./slices/superheroInfoSlice";

const store = configureStore({
    reducer:{
        superheroList: superheroListReducer,
        superheroInfo: superheroInfoReducer
    }
});

export {
    store
}