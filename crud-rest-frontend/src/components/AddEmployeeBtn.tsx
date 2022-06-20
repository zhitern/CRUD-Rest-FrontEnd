import React from "react";
import { styled } from '@mui/material/styles';

import { Button } from "@mui/material";

const AddEmployeeBtnStyle = styled(Button)({
    backgroundColor: 'green',
    color: 'white',
    fontWeight: 'bold'
  });

export default function AddEmployeeBtn() {
    return <AddEmployeeBtnStyle>Add Employee</AddEmployeeBtnStyle>;
}