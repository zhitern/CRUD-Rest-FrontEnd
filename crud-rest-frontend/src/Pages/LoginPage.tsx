import React from 'react';
import { styled } from '@mui/material/styles';

import HeaderBar from '../components/HeaderBar';

import LogInForm from '../components/LogInForm';

const FormContainer = styled('div')({
    width: '300px',
    height: '400px',
    margin: '5% auto auto auto'
})

export default function LoginPage() {

    return (
        <div>
        <HeaderBar  title="Login">
        </HeaderBar>
        <FormContainer>
            <LogInForm />
        </FormContainer>
        </div>
    );
}