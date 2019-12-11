import React from 'react';
import { SectionNav } from '../components/Global/SectionNav';
import { InternshipsJumbotron } from '../components/Internships/InternshipsJumbotron';
import InternshipsContent from '../components/Internships/InternshipsContent';
import  { InternshipsFooter } from '../components/Internships/InternshipsFooter';



export const Internships = () => (
    <React.Fragment>
        <InternshipsJumbotron/>
        <SectionNav/>
        <InternshipsContent/>
        <InternshipsFooter/>
    </React.Fragment>
)