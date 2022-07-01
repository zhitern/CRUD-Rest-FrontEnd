import { createSlice, PayloadAction, createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";
import { token } from '../APIs/authentication'

const employeeAPI = axios.create({baseURL: 'http://localhost:8080/employees'});

export const getEmployee = createAsyncThunk(
    'employee/getEmployee',
    async (employeeId: number, thunkAPI) => {
        const response = await employeeAPI.get('/' + employeeId, token);
        return response.data;
    },
)
export const getEmployees = createAsyncThunk(
    'employee/getEmployees',
    async(thunkAPI) => {
        const response = await employeeAPI.get('/', token);
        return response.data;
    }
)
export const addEmployee = createAsyncThunk(
    'employee/addEmployee',
    async(employee: EmployeeType, thunkAPI) => {
        const response = await employeeAPI.post('/', employee, token);
        return response.data;
    }
)
export const deleteEmployee = createAsyncThunk(
    'employee/deleteEmployee',
    async(employeeId: number, thunkAPI) => {
        const response = await employeeAPI.delete('/' + employeeId, token);
        return response.data;
    }
)
export const editEmployee = createAsyncThunk(
    'employee/editEmployee',
    async(employee: EmployeeType, thunkAPI) => {
        const response = await employeeAPI.patch('/' + employee.id, employee, token);
        return response.data;
    }
)

export interface EmployeeType {
    id: number,
    name: string,
    salary: number,
    department: string
}
interface employeeAPIState {
    data: EmployeeType[],
    foundEmployee: EmployeeType
}
export const initialState: employeeAPIState = {
    data: [],
    foundEmployee: {} as EmployeeType
}
const employeeAPISlice = createSlice({
    name: 'employeeAPI',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getEmployee.fulfilled, (state, action) => {
            state.foundEmployee = action.payload;
        })
        builder.addCase(getEmployees.fulfilled, (state, action) => {
            state.data = action.payload;
        })
        builder.addCase(addEmployee.fulfilled, (state, action) => {
            state.data = [...state.data, action.payload];
        })
        builder.addCase(deleteEmployee.fulfilled, (state, action) => {
            const deletedId = parseInt(action.payload.id);
            for (let i = 0; i < state.data.length; ++i) {
                if (state.data[i].id === deletedId) {
                    state.data.splice(i, 1);
                    return;
                }
            }
        })
        builder.addCase(editEmployee.fulfilled, (state, action) => {
            state.foundEmployee = action.payload;
        })
    }
})
export const employeeAPIAction = employeeAPISlice.actions;

export default employeeAPISlice.reducer;