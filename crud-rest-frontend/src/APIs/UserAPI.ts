import axios from "axios";
import { token } from './authentication'

const userAPI = axios.create({baseURL: 'http://localhost:8080/users'});
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
          token.headers.Authorization = "Basic " + res.data.token;
          console.log("Login Successful, token received: " + token.headers.Authorization);
        }).catch((err)=>{
          console.log("Error reading from database: " + err.message);
          throw err;
        })
    }
}