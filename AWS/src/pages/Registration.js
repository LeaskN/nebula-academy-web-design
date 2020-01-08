import React from 'react';
import  { RegistrationJumbotron } from '../components/Registration/RegistrationJumbotron';
import  { RegistrationFooter } from '../components/Registration/RegistrationFooter';
import  RegistrationContent from '../components/Registration/RegistrationContent';



export const Registration = () => (
    <React.Fragment>
        <RegistrationJumbotron/>
        <RegistrationContent/>
        <RegistrationFooter/>
    </React.Fragment>
)