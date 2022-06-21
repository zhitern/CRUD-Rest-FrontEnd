import React from 'react';

import HeaderBar from '../components/HeaderBar';
import AddEmployeeBtn from '../components/AddEmployeeBtn';
import EmployeesDisplay from '../components/EmployeesDisplay';

function MainPage() {
  return (
    <div>
      <HeaderBar  title="Employees">
        <AddEmployeeBtn />
      </HeaderBar>
      <EmployeesDisplay />
    </div>
  );
}

export default MainPage;
