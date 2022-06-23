import React from "react";
import { styled } from '@mui/material/styles';
import { Link, Path } from "react-router-dom";

import { Card } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { EmployeeDb } from "../EmployeeDb";

const EmployeeCardStyle = styled(Card)({
    width: '80%',
    backgroundColor: '#EAEAEA',
    padding: '10px 10px 10px 20px',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'space-between'
  });

const EmployeeNameDisplay = styled('div')({
  fontWeight: 'bold',
  fontSize: '30px',
  color: '#365271'
})
const EmployeeOthersDisplay = styled('div')({
  fontSize: '20px',
  color: '#365271'
})
const ButtonsContainer = styled('div')({
  display: 'flex',
  margin: 'auto 0 auto 0'
})

export default function EmployeeCard(props: any) {
  const link = "/AddEmployee/" + props.id;

  return <EmployeeCardStyle>
    <div>
      <EmployeeNameDisplay>{props.name}</EmployeeNameDisplay>
      <EmployeeOthersDisplay>{props.department}</EmployeeOthersDisplay>
      <EmployeeOthersDisplay>${props.salary}</EmployeeOthersDisplay>
    </div>
    <ButtonsContainer>
      <Link to={link} style={{display: 'flex', justifyContent:'center'}}>
          <IconButton>
            <EditIcon style={{color:"#FFC32E"}}/>
        </IconButton>
      </Link>
        
      <IconButton onClick={()=>{ EmployeeDb.GetInstance().Delete(props.id); }}>
        <DeleteIcon style={{color:"#E50000"}}/>
      </IconButton>
    </ButtonsContainer>
  </EmployeeCardStyle>;
}