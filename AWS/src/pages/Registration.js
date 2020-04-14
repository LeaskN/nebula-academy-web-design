import React from 'react';
import  { RegistrationJumbotron } from '../components/Registration/RegistrationJumbotron';
import { SectionNav } from '../components/Global/SectionNav';
import  RegistrationContent from '../components/Registration/RegistrationContent';



export const Registration = () => (
    <React.Fragment>
        <RegistrationJumbotron/>
        <SectionNav/>
        <RegistrationContent/>
    </React.Fragment>
)