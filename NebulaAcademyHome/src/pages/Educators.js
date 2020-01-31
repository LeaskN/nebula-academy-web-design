import React from 'react';
import { EducatorsJumbotron } from '../components/Educators/EducatorsJumbotron';
import EducatorsContent from '../components/Educators/EducatorsContent';
import  { EducatorsFooter } from '../components/Educators/EducatorsFooter';


export const Educators = () => (
    <React.Fragment>
        <EducatorsJumbotron/>
        <EducatorsContent/>
        <EducatorsFooter/>
    </React.Fragment>
)