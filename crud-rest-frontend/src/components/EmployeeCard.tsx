import React from "react";
import { styled } from '@mui/material/styles';

import { Card } from "@mui/material";

const EmployeeCardStyle = styled(Card)({
    width: '80%',
    backgroundColor: 'lightgray',
    padding: '0px 0px 0px 20px',
    borderRadius: '10px'
  });

export default function EmployeeCard(props: any) {
    return <EmployeeCardStyle>
        <h3>{props.name}</h3>
        <h4>{props.department}</h4>
        <h4>{props.salary}</h4>
        </EmployeeCardStyle>;
}