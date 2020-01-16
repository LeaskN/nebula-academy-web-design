import React from 'react';
import StaffContent from '../components/Staff/StaffContent';
import { StaffJumbotron } from '../components/Staff/StaffJumbotron';
import { SectionNav } from '../components/Global/SectionNav';
import  { StaffFooter } from '../components/Staff/StaffFooter';


export const Staff = () => (
    <React.Fragment>
        <StaffJumbotron/>
        <SectionNav/>
        <StaffContent/>
        <StaffFooter/>
    </React.Fragment>
)