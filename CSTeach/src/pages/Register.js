import React from 'react';
import  { RegisterJumbotron } from '../components/Register/RegisterJumbotron';
import  { RegisterFooter } from '../components/Register/RegisterFooter';
import  RegisterContent from '../components/Register/RegisterContent';



export const Register = () => (
    <React.Fragment>
        <RegisterJumbotron/>
        <RegisterContent/>
        <RegisterFooter/>
    </React.Fragment>
)