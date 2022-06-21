import React from "react";
import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import { Toolbar } from "@mui/material";

import EmployeeCard from "./EmployeeCard";

const maxDisplayPerPage: number = 10;
let currentPage: number = 0;

const EmployeeGridLayout = styled(Grid)({
  justifyContent: "center",
  paddingBottom: "5%"
})
const EmployeeGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const employeeList = [
  {
    name: 'Test1',
    salary: '2000',
    department: 'HR'
  }
]


for(let i = 2; i <= 17; ++i) {
  employeeList.push(
    {
      name: 'Test' + i,
      salary: '3000',
      department: 'HR'
    }
  )
}

let displayArr = employeeList.slice(currentPage * maxDisplayPerPage, (currentPage+1) * maxDisplayPerPage);
  
export default function EmployeesDisplay(){
  return <Box sx={{ width: '70%', margin: '3% auto 0 auto' }}>
  <EmployeeGridLayout container spacing={5}>
  {
    displayArr.map((employee, index) =>
    <EmployeeGrid item xs={12} md={6}>
    <EmployeeCard 
      name={employee.name} 
      salary={employee.salary} 
      department={employee.department}
      />
    </EmployeeGrid>
  )}
  </EmployeeGridLayout>
  <Toolbar style={{justifyContent:'space-between'}}>
    <div>
    Showing <b>{currentPage*maxDisplayPerPage+1}-{Math.min((currentPage+1)*maxDisplayPerPage, employeeList.length)}</b> out of <b>{employeeList.length}</b> entries
    </div>
    <div>
      <button />
      {currentPage+1}
      <button />
    </div>
  </Toolbar>
</Box>;
}