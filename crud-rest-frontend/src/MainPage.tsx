import React from 'react';
import { styled } from '@mui/material/styles';

import { Toolbar, Typography } from '@mui/material';

import AddEmployeeBtn from './components/AddEmployeeBtn';
import EmployeesDisplay from './components/EmployeesDisplay';

const HeaderBar = styled(Toolbar)({
  backgroundColor: 'navy',
  padding: '16 8 8 8',
  fontWeight: 'bold',
  fontSize: '40px',
  color: 'white',
  position: 'static'
});

const HeaderTitle = styled(Typography)({
  fontWeight: "bold"
})

function MainPage() {
  return (
    <div>
      <HeaderBar>
          <HeaderTitle variant="h4" sx={{ flexGrow: 1 }}>
            Employees
          </HeaderTitle>
          <AddEmployeeBtn />
      </HeaderBar>

      <EmployeesDisplay />
    </div>
  );
}

export default MainPage;
