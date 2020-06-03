import React from 'react';
import  { RegisterJumbotron } from '../components/Register/RegisterJumbotron';
import  { RegisterFooter } from '../components/Register/RegisterFooter';
import  RegisterContent from '../components/Register/RegisterContent';
import SectionNav from '../components/Global/SectionNav';



export const Register = () => (
    <React.Fragment>
        <RegisterJumbotron/>
        <SectionNav/> 
        <RegisterContent/>
        <RegisterFooter/>
    </React.Fragment>
)