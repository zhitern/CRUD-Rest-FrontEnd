import axios from "axios";

export const employeeAPI = axios.create({baseURL: 'http://localhost:3001/employees'});