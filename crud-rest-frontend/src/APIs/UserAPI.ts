import axios from "axios";
import { sign } from "jsonwebtoken";

const privateKey: string = "Hello World";
//const token = sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256'});

const header = {
    alg: 'SHA256',
    typ: 'JWT'
}

const userAPI = axios.create({baseURL: 'http://localhost:3001/users'});
export interface UserType {
    userId: string,
    password: string
  }

export class UserAPI {
    private static _instance: UserAPI;

    private constructor(){}
    public static GetInstance(): UserAPI {
        if (!UserAPI._instance) {
            UserAPI._instance = new UserAPI();
        }

        return UserAPI._instance;
    }

    public async Register(user: UserType) {
        return userAPI.post('/Register', user).then((res)=>{
            console.log("Registration Successful");
          }).catch((err)=>{
            console.log("Error reading from database: " + err.message);
            throw err;
          })
    }
    public async LogIn(user: UserType) {
        return userAPI.post('/LogIn', user).then((res)=>{
            console.log("Login Successful");
          }).catch((err)=>{
            console.log("Error reading from database: " + err.message);
            throw err;
          })
    }
}