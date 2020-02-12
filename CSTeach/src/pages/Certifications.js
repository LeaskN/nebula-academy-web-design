import React from 'react';
import SectionNav from '../components/Global/SectionNav';
import { CertificationsJumbotron } from '../components/Certifications/CertificationsJumbotron';
import CertificationsContent from '../components/Certifications/CertificationsContent';
import  { CertificationsFooter } from '../components/Certifications/CertificationsFooter';



export const Certifications = () => (
    <React.Fragment>
        <CertificationsJumbotron/>
        <SectionNav/>
        <CertificationsContent/>
        <CertificationsFooter/>
    </React.Fragment>
)