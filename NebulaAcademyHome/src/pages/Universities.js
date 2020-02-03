import React from 'react';
import { UniversitiesJumbotron } from '../components/Universities/UniversitiesJumbotron';
import UniversitiesContent from '../components/Universities/UniversitiesContent';
import  { UniversitiesFooter } from '../components/Universities/UniversitiesFooter';


export const Universities = () => (
    <React.Fragment>
        <UniversitiesJumbotron/>
        <UniversitiesContent/>
        <UniversitiesFooter/>
    </React.Fragment>
)