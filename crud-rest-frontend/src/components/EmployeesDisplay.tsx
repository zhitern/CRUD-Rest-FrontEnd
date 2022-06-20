import React from "react";
import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'

import EmployeeCard from "./EmployeeCard";

const EmployeeGridLayout = styled(Grid)({
  justifyContent: "center"
})
const EmployeeGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})  
  
export default function EmployeesDisplay(){
  

  return <Box sx={{ width: '80%', margin: '3% auto 0 auto' }}>
  <EmployeeGridLayout container spacing={5}>
    <EmployeeGrid item xs={12} md={6} ><EmployeeCard name="TestName" salary="$2000.00" department="HR" /></EmployeeGrid>
    <EmployeeGrid item xs={12} md={6} ><EmployeeCard /></EmployeeGrid>
    <EmployeeGrid item xs={12} md={6} ><EmployeeCard /></EmployeeGrid>
    <EmployeeGrid item xs={12} md={6} ><EmployeeCard /></EmployeeGrid>
    <EmployeeGrid item xs={12} md={6} ><EmployeeCard /></EmployeeGrid>
    <EmployeeGrid item xs={12} md={6} ><EmployeeCard /></EmployeeGrid>
    <EmployeeGrid item xs={12} md={6} ><EmployeeCard /></EmployeeGrid>
    <EmployeeGrid item xs={12} md={6} ><EmployeeCard /></EmployeeGrid>
    <EmployeeGrid item xs={12} md={6} ><EmployeeCard /></EmployeeGrid>
    <EmployeeGrid item xs={12} md={6} ><EmployeeCard /></EmployeeGrid>
  </EmployeeGridLayout>
</Box>;
}