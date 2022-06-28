import { createSlice } from "@reduxjs/toolkit";

interface confirmationState {
    showConfirmation: boolean,
    confirmationResult: boolean
}
const initialState: confirmationState = {
    showConfirmation: false,
    confirmationResult: false
}
const confirmationSlice = createSlice({
    name: 'confirmation',
    initialState,
    reducers: {
        TriggerPrompt(state){
            state.showConfirmation = true;
        }
    }
})
export const confirmationActions = confirmationSlice.actions;

export default confirmationSlice.reducer;