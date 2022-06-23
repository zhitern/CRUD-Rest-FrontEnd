import axios from "axios";

const employeeAPI = axios.create({baseURL: 'http://localhost:3001/employees'});
export interface EmployeeType {
    id: number,
    name: string,
    salary: number,
    department: string
  }

export class EmployeeDb {
    private static _instance: EmployeeDb;
    private _data: EmployeeType[];

    private constructor(){
        this._data = [];
    }
    public static GetInstance(): EmployeeDb {
        if (!EmployeeDb._instance) {
            EmployeeDb._instance = new EmployeeDb();
        }

        return EmployeeDb._instance;
    }

    public async RefreshDb(){
        return employeeAPI.get('/').then((res)=>{
            console.log("Refreshed EmployeeDb");
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
        employeeAPI.patch('/' + data.id, data).then((res)=>{
            console.log("successfully updated " + data.name)
        }).catch((err)=>{
            console.log(err.message);
        });
    }
    public Delete(id: number) {
        console.log("id to delete " + id);
        employeeAPI.delete('/' + id).then((res)=>{
            console.log("successfully deleted id " + id)
        }).catch((err)=>{
            console.log(err.message);
        });
    }
}