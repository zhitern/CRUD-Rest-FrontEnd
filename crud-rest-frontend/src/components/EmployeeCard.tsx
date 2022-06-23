import React, { useRef } from "react";
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";

import { Card } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
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
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const ConfirmationBoxBtnContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  width: '300px',
  margin :'50px auto auto auto'
})

export default function EmployeeCard(props: any) {
  const link = "/AddEmployee/" + props.id;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function DeleteThisEmployee() {
    EmployeeDb.GetInstance().Delete(props.id).then(()=>{
      handleClose();
    }).catch((err)=>{
      console.log(err.message);
      alert(err.message);
    })
  }

  return <EmployeeCardStyle>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Are you sure?
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Click Yes to confirm deletion of poor, hardworking, {Math.floor(Math.random() * 5) + 5} children to feed, possibly 60 years in service, {props.name}
        </Typography>
        <ConfirmationBoxBtnContainer>
          <Button onClick={handleClose}>NO</Button>
          <Button onClick={DeleteThisEmployee}>YES</Button>
        </ConfirmationBoxBtnContainer>
      </Box>
    </Modal>
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
        
      <IconButton onClick={handleOpen}>
        <DeleteIcon style={{color:"#E50000"}}/>
      </IconButton>
    </ButtonsContainer>
  </EmployeeCardStyle>;
}