import React from "react";
import { styled } from '@mui/material/styles';
import { Button } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';


const AddEmployeeBtnStyle = styled(Button)({
    backgroundColor: 'green',
    color: 'white',
    fontWeight: 'bold',
    padding: '8px 20px 8px 20px',
    '&:hover': {
      backgroundColor: 'green',
      transform: 'scale3d(1.1, 1.1, 1)'
    }
  });

export default function AddEmployeeBtn() {
    return <AddEmployeeBtnStyle onClick={()=>{alert("hehe add employee");}}startIcon={<AddCircleIcon />}>Add Employee</AddEmployeeBtnStyle>;
}