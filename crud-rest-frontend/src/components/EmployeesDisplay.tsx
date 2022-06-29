import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import { Toolbar, Button } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import EmployeeCard from "./EmployeeCard";
import { getEmployees } from "../store/employeeAPISlice";

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
  alignItems: 'baseline',
  width: '200px'
})

function Clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
};
  
export default function EmployeesDisplay(){
  const dispatch = useAppDispatch();
  //const [employeeList, setEmployeeList] = useState<EmployeeType[]>([]);
  const employeeList = useAppSelector(state => state.employeeAPI.data);
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);
  let displayArr = employeeList.slice(currentPage * maxDisplayPerPage, (currentPage+1) * maxDisplayPerPage);

  useEffect(() =>{
    dispatch(getEmployees());
  }, [])

  useEffect(() => {
    setMaxPage(Math.floor((employeeList.length-1)/maxDisplayPerPage));
    if (currentPage >= maxPage) {
      setCurrentPage(Math.max(0, maxPage - 1));
    }
  }, [employeeList])

  function FlipPage(flipAmount: number){
    setCurrentPage(Clamp(currentPage + flipAmount, 0, maxPage));
  }

  return <Box sx={{ width: '70%', margin: '3% auto 0 auto' }}>
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
  <Toolbar style={{justifyContent:'space-between', flexDirection:'row-reverse'}}>
    {
      employeeList.length > maxDisplayPerPage &&
      <PaginationContainer>
        
        <Button disabled={currentPage<=0} onClick={()=>FlipPage(-1)}>Previous</Button>
        <b>{currentPage+1}</b>
        <Button disabled={currentPage>=maxPage}onClick={()=>FlipPage(1)}>Next</Button>
        
      </PaginationContainer>
    }
    <Box sx={{display: {xs: 'none', md: 'block'}}}>
    Showing <b>{currentPage*maxDisplayPerPage+1}-{Math.min((currentPage+1)*maxDisplayPerPage, employeeList.length)}</b> out of <b>{employeeList.length}</b> entries
    </Box>
  </Toolbar>
</Box>;
}