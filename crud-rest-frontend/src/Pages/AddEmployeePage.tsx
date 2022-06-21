import React from 'react';
import { styled } from '@mui/material/styles';

import { Button } from '@mui/material';

import HeaderBar from '../components/HeaderBar';
import HomeBtn from '../components/HomeBtn';
import EmployeeForm from '../components/EmployeeForm';

const FormContainer = styled('div')({
    width: '300px',
    height: '400px',
    margin: 'auto'
})

function AddEmployeePage() {
    return <div>
        <HeaderBar title="Add Employees Page" />
        <HomeBtn />
        <FormContainer>
            <EmployeeForm />
        </FormContainer>
    </div>
}

export default AddEmployeePage