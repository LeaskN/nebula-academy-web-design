import React from 'react';
import { ScholarshipsJumbotron } from '../components/Scholarships/ScholarshipsJumbotron';
import { SectionNav } from '../components/Global/SectionNav';
import { ScholarshipsContent } from '../components/Scholarships/ScholarshipsContent';


export const Scholarships = () => (
    <React.Fragment>
        <ScholarshipsJumbotron/>
        <SectionNav/>
        <ScholarshipsContent/>
    </React.Fragment>
)