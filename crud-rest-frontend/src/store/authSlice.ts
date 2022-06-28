import { createSlice } from "@reduxjs/toolkit";

interface authState {
    isAuthenticated: boolean
}
export const initialState: authState = {
    isAuthenticated: false
}
const authSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        Login(state){
            state.isAuthenticated = true;
        },
        Logout(state){
            state.isAuthenticated = false;
        }
    }
})
export const authActions = authSlice.actions;

export default authSlice.reducer;