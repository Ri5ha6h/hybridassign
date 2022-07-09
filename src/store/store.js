
import { configureStore } from "@reduxjs/toolkit";
import queryReducer from "./reducers/query";

const reducer = {
    query: queryReducer,
};

export const store = configureStore({reducer});