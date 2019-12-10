import React from 'react';
import { PartnersJumbotron } from '../components/Partners/PartnersJumbotron';
import { SectionNav } from '../components/Global/SectionNav';
import { PartnersContent } from '../components/Partners/PartnersContent';


export const Partners = () => (
    <React.Fragment>
        <PartnersJumbotron/>
        <SectionNav/>
        <PartnersContent/>
    </React.Fragment>
)