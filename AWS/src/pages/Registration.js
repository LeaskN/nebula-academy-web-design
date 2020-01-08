import React from 'react';
import  { registrationJumbotron } from '../components/Registration/RegistrationJumbotron';
import  { registrationFooter } from '../components/Registration/RegistrationFooter';
import  registrationContent from '../components/Registration/RegistrationContent';



export const Registration = () => (
    <React.Fragment>
        <registrationJumbotron/>
        <registrationContent/>
        <registrationFooter/>
    </React.Fragment>
)