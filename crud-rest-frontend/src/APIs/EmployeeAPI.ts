/*


CURRENT NOT IN USED, all axios related calls are in employeeAPISlice under store folder



*/

import axios from "axios";
import { token } from './authentication'

const employeeAPI = axios.create({baseURL: 'http://localhost:8080/employees'});
export interface EmployeeType {
    id: number,
    name: string,
    salary: number,
    department: string
  }

export class EmployeeAPI {
    private static _instance: EmployeeAPI;
    private _data: EmployeeType[];

    private constructor(){
        this._data = [];
    }
    public static GetInstance(): EmployeeAPI {
        if (!EmployeeAPI._instance) {
            EmployeeAPI._instance = new EmployeeAPI();
        }

        return EmployeeAPI._instance;
    }

    public async RefreshDb(){
        return employeeAPI.get('/', token).then((res)=>{
            console.log("Refreshed Employee Database");
            this._data = res.data;
          }).catch((err)=>{
            console.log("Error reading from database: " + err.message);
          })
    }
    public get data() {
        return this._data;
    }
    public Find(id: number) {
        for (let i = 0; i < this._data.length; ++i) {
            if (this._data[i].id === id) {
                return this._data[i];
            }
        }

        return null;
    }
    public Add(data: EmployeeType) {
        return employeeAPI.post('/', data).then((res)=>{
            console.log("successfully added " + data.name)
        }).catch((err)=>{
            console.log(err.message);
        });
    }
    public Edit(data: EmployeeType) {
        return employeeAPI.patch('/' + data.id, data).then((res)=>{
            console.log("successfully updated " + data.name)
        }).catch((err)=>{
            console.log(err.message);
        });
    }
    public Delete(id: number) {
        return employeeAPI.delete('/' + id).then((res)=>{
            console.log("successfully deleted id " + id)
        }).catch((err)=>{
            console.log(err.message);
        });
    }
}