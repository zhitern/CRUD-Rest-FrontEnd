import React from "react";
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router';

import { Card } from "@mui/material";
import { TextField } from '@mui/material'
import { Button } from "@mui/material";

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

    return <EmployeeFormStyle>
      <h1 style={{textAlign:'center'}}>Employee Form</h1>
      <TextField value={id} label="Name" variant='filled' />

      <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label="Salary" variant='filled' />

      <TextField label="Department" variant='filled' />

      <Button style={{backgroundColor: 'green', color:'white'}}>Add Employee</Button>

    </EmployeeFormStyle>;
}