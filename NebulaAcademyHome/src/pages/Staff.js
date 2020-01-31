import React from 'react';
import StaffContent from '../components/Staff/StaffContent';
import { StaffJumbotron } from '../components/Staff/StaffJumbotron';
import  { StaffFooter } from '../components/Staff/StaffFooter';


export const Staff = () => (
    <React.Fragment>
        <StaffJumbotron/>
        <StaffContent/>
        <StaffFooter/>
    </React.Fragment>
)