import React from 'react';
import  { RegistrationJumbotron } from '../components/HiddenRegistration/RegistrationJumbotron';
import  { RegistrationFooter } from '../components/HiddenRegistration/RegistrationFooter';
import  RegistrationContent from '../components/HiddenRegistration/RegistrationContent';



export const HiddenRegistration = () => (
    <React.Fragment>
        <RegistrationJumbotron/>
        <RegistrationContent/>
        <RegistrationFooter/>
    </React.Fragment>
)