import React from 'react';
import { ScholarshipsJumbotron } from '../components/Scholarships/ScholarshipsJumbotron';
import SectionNav from '../components/Global/SectionNav';
import { ScholarshipsContent } from '../components/Scholarships/ScholarshipsContent';
import  { ScholarshipsFooter } from '../components/Scholarships/ScholarshipsFooter';



export const Scholarships = () => (
    <React.Fragment>
        <ScholarshipsJumbotron/>
        <SectionNav/>
        <ScholarshipsContent/>
        <ScholarshipsFooter/>
    </React.Fragment>
)