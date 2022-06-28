import React, { useState } from "react";

import { styled } from '@mui/material/styles';
import { Card } from "@mui/material";
import { TextField } from '@mui/material'
import { Button } from "@mui/material";
import { UserAPI } from "../APIs/UserAPI";

import { useAppDispatch } from "../store/hooks";
import { authActions } from "../store/authSlice";

const EmployeeFormStyle = styled(Card)({
    width: '100%',
    height: '100%',
    backgroundColor: '#EAEAEA',
    padding: '30px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  });

export default function LogInForm(props: any) {
    const dispatch = useAppDispatch();

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    function Register() {
        const user = {
            userId: userId,
            password: password
        }
        UserAPI.GetInstance().Register(user).then(()=>{
            alert("registration successful");
        }).catch((err)=>{
            alert("Error: " + err.message);
        });
    }
    function LogIn() {
        const user = {
            userId: userId,
            password: password
        }
        UserAPI.GetInstance().LogIn(user).then(()=>{
            alert("login successful");
            dispatch(authActions.Login());
        }).catch((err)=>{
            alert("Error: " + err.message);
        });
    }

    return <EmployeeFormStyle>
        <h1 style={{textAlign:'center'}}>Log in Form</h1>
        <TextField onChange={(e)=>{setUserId(e.target.value)}} label="User ID" variant='filled' />

        <TextField onChange={(e)=>{setPassword(e.target.value)}} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label="Password" variant='filled' />

        <Button onClick={Register} style={{backgroundColor: 'orange', color:'white'}}>
        Register
        </Button>
        <Button onClick={LogIn} style={{backgroundColor: 'green', color:'white'}}>
        Log in
        </Button>

    </EmployeeFormStyle>;
}