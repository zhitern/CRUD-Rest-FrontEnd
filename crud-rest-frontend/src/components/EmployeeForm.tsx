import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router';

import { Card } from "@mui/material";
import { TextField } from '@mui/material'
import { Button } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addEmployee, getEmployee, EmployeeType, editEmployee } from "../store/employeeAPISlice";

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
  const dispatch = useAppDispatch();
  const [isAdding, setIsAdding] = useState(id === undefined);

  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [department, setDepartment] = useState("");
  const foundEmployee: EmployeeType = useAppSelector(state => state.employeeAPI.foundEmployee);

  useEffect(()=>{
    if (!isAdding && id !== undefined) {
      dispatch(getEmployee(parseInt(id)));
    }
  }, [])

  useEffect(()=>{
    if (!isAdding && Object.keys(foundEmployee).length > 0){
      setName(foundEmployee.name);
      setSalary(foundEmployee.salary.toString());
      setDepartment(foundEmployee.department);
    }
    
  }, [isAdding, foundEmployee])

  function SubmitForm() {
    const data = {
      id: -1,
      name: name,
      salary: parseInt(salary),
      department: department
    }

    if (isAdding) {
      dispatch(addEmployee(data));
      alert("Created Successfully");
    }
    else if (id !== undefined) {//is editting
      data.id = parseInt(id);
      dispatch(editEmployee(data));
      alert("Editted Successfully");
    }

    setIsAdding(true);
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