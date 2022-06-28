import React from 'react';

import HeaderBar from '../components/HeaderBar';
import AddEmployeeBtn from '../components/AddEmployeeBtn';
import EmployeesDisplay from '../components/EmployeesDisplay';
import { Button } from '@mui/material';

import { useAppDispatch } from '../store/hooks';
import { authActions } from '../store/authSlice';

function MainPage() {
  const dispatch = useAppDispatch();

  return (
    <div>
      <HeaderBar  title="Employees">
        <AddEmployeeBtn />
        <Button style={{backgroundColor: 'red'}}onClick={()=>{dispatch(authActions.Logout())}}>Log Out</Button>
      </HeaderBar>
      <EmployeesDisplay />
    </div>
  );
}

export default MainPage;
