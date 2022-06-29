import { configureStore } from "@reduxjs/toolkit";

import confirmationReducer from './confirmationSlice';
import authReducer from './authSlice'
import employeeAPIReducer from './employeeAPISlice'

const store = configureStore({
    reducer: { 
        confirmation: confirmationReducer,
        authentication: authReducer,
        employeeAPI: employeeAPIReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;