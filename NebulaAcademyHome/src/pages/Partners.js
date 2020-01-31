import React from 'react';
import { PartnersJumbotron } from '../components/Partners/PartnersJumbotron';
import SectionNav from '../components/Global/SectionNav';
import { PartnersContent } from '../components/Partners/PartnersContent';
import  { PartnersFooter } from '../components/Partners/PartnersFooter';



export const Partners = () => (
    <React.Fragment>
        <PartnersJumbotron/>
        <SectionNav/>
        <PartnersContent/>
        <PartnersFooter/>
    </React.Fragment>
)