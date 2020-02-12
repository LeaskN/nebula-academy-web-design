import React from 'react';
import SectionNav from '../components/Global/SectionNav';
import { CareersJumbotron } from '../components/Careers/CareersJumbotron';
import CareersContent from '../components/Careers/CareersContent';
import { CareersFooter } from '../components/Careers/CareersFooter'
export const Careers = () => (
    <React.Fragment>
        <CareersJumbotron/>
        <SectionNav/>
        <CareersContent/>
        <CareersFooter/>
    </React.Fragment>
)