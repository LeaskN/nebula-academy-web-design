import React from 'react';
import { SectionNav } from '../components/Global/SectionNav';
import { UniversitiesJumbotron } from '../components/Universities/UniversitiesJumbotron';
import UniversitiesContent from '../components/Universities/UniversitiesContent';
import  { UniversitiesFooter } from '../components/Universities/UniversitiesFooter';



export const Universities = () => (
    <React.Fragment>
        <UniversitiesJumbotron/>
        <SectionNav/>
        <UniversitiesContent/>
        <UniversitiesFooter/>
    </React.Fragment>
)