import { configureStore } from "@reduxjs/toolkit";

import confirmationReducer from './confirmationSlice';
import authReducer from './authSlice'


const store = configureStore({
    reducer: { 
        confirmation: confirmationReducer,
        authentication: authReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;