import React from 'react';
import RegistrationJumbotron from '../components/Registration/RegistrationJumbotron';
import RegistrationContent from '../components/Registration/RegistrationContent';
import  { RegistrationFooter } from '../components/Registration/RegistrationFooter';


export const Registration = () => (
    <React.Fragment>
        <RegistrationJumbotron/>
        <RegistrationContent/>
        <RegistrationFooter/>
    </React.Fragment>
)