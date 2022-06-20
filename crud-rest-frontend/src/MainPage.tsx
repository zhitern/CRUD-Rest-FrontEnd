import React from 'react';
import { styled } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar'
import { Toolbar, Typography } from '@mui/material';

import AddEmployeeBtn from './components/AddEmployeeBtn';
import EmployeeCard from './components/EmployeeCard';
import EmployeesDisplay from './components/EmployeesDisplay';

const HeaderBar = styled(AppBar)({
  backgroundColor: 'navy',
  padding: 8,
  borderRadius: 4,
  fontWeight: 'bold',
  fontSize: '40px',
  color: 'white',
  position: 'static'
});

function MainPage() {
  return (
    <div>
      <HeaderBar>
        <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Employees
            </Typography>
            <AddEmployeeBtn />
          </Toolbar>
      </HeaderBar>

      <EmployeesDisplay />
    </div>
  );
}

export default MainPage;
