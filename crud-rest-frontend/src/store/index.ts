import { configureStore } from "@reduxjs/toolkit";

import authReducer from './authSlice'
import employeeAPIReducer from './employeeAPISlice'

const store = configureStore({
    reducer: {
        authentication: authReducer,
        employeeAPI: employeeAPIReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;