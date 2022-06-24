import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router';

import { Card } from "@mui/material";
import { TextField } from '@mui/material'
import { Button } from "@mui/material";
import { EmployeeDb } from "../EmployeeDb";

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

export default function EmployeeForm(props: any) {
  const { id } = useParams();
  const isAdding: boolean = id === undefined;

  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [department, setDepartment] = useState("");

  useEffect(()=>{
    if (!isAdding && id !== undefined) {
      const employee = EmployeeDb.GetInstance().Find(parseInt(id));
      if (employee) {
        setName(employee.name);
        setSalary(employee.salary.toString());
        setDepartment(employee.department);
      }
    }
  }, [])

  function SubmitForm() {
    const data = {
      id: -1,
      name: name,
      salary: parseInt(salary),
      department: department
    }

    if (isAdding) {
      EmployeeDb.GetInstance().Add(data).catch((err)=>{
        console.log(err.message);
        alert(err.message);
        return;
      });
    }
    else if (id !== undefined) {//is editting
      EmployeeDb.GetInstance().Edit(data).catch((err)=>{
        console.log(err.message);
        alert(err.message);
        return;
      });
    }

    alert("Created Successfully")
    setName("");
    setSalary("");
    setDepartment("");
  }

  return <EmployeeFormStyle>
    <h1 style={{textAlign:'center'}}>Employee Form</h1>
    <TextField onChange={(e)=>{setName(e.target.value)}} value={name} label="Name" variant='filled' />

    <TextField onChange={(e)=>{setSalary(e.target.value)}} value={salary} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label="Salary" variant='filled' />

    <TextField onChange={(e)=>{setDepartment(e.target.value)}} value={department} label="Department" variant='filled' />

    <Button onClick={SubmitForm} style={{backgroundColor: 'green', color:'white'}}>
    {
      (isAdding ? "Add Employee" : "Update Employee")
    }
    </Button>

  </EmployeeFormStyle>;
}