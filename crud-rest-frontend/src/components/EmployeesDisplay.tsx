import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import { Toolbar, Button } from "@mui/material";

import EmployeeCard from "./EmployeeCard";
import {employeeAPI} from "../EmployeeAPI";
import { ConstructionRounded } from "@mui/icons-material";
import { json } from "stream/consumers";

const maxDisplayPerPage: number = 10;

const EmployeeGridLayout = styled(Grid)({
  justifyContent: "center",
  paddingBottom: "5%"
})
const EmployeeGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})
const PaginationContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  width: '200px'
})

function Clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
};

interface EmployeeType {
  id: number,
  name: string,
  salary: number,
  department: string
}
  
export default function EmployeesDisplay(){
  const [currentPage, setPage] = useState(0);
  const [employeeList, setEmployeeList] = useState<EmployeeType[]>([]);
  const maxPage = (employeeList.length-1)/maxDisplayPerPage;
  let displayArr = employeeList.slice(currentPage * maxDisplayPerPage, (currentPage+1) * maxDisplayPerPage);

  useEffect(()=>{
    employeeAPI.get('/').then((res)=>{
      console.log("Response received: " + res.data);
      setEmployeeList(res.data);
    }).catch((err)=>{
      console.log("ERROR ERROR: " + err.message);
    })
  }, [])

  function FlipPage(flipAmount: number){
    setPage(Clamp(currentPage + flipAmount, 0, Math.floor((employeeList.length-1)/maxDisplayPerPage)));
  }

  return <Box sx={{ width: '70%', margin: '3% auto 0 auto' }}>
  <Button onClick={()=>{
    employeeList.pop();
    }}>POP AN EMPLOYEE</Button>
  <EmployeeGridLayout container spacing={5}>
  {
    displayArr.map((employee, index) =>
      <EmployeeGrid item xs={12} md={6}>
      <EmployeeCard 
        id={employee.id}
        name={employee.name} 
        salary={employee.salary} 
        department={employee.department}
        />
      </EmployeeGrid>
    )
  }
  </EmployeeGridLayout>
  <Toolbar style={{justifyContent:'space-between'}}>
    <div>
    Showing <b>{currentPage*maxDisplayPerPage+1}-{Math.min((currentPage+1)*maxDisplayPerPage, employeeList.length)}</b> out of <b>{employeeList.length}</b> entries
    </div>
    {
      employeeList.length > maxDisplayPerPage &&
      <PaginationContainer>
        
        <Button disabled={currentPage<=0} onClick={()=>FlipPage(-1)}>Previous</Button>
        <b>{currentPage+1}</b>
        <Button disabled={currentPage>maxPage-1}onClick={()=>FlipPage(1)}>Next</Button>
        
      </PaginationContainer>
    }
  </Toolbar>
</Box>;
}