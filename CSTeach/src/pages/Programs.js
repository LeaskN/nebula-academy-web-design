import React from 'react';
import SectionNav from '../components/Global/SectionNav';
import  { ProgramsJumbotron } from '../components/Programs/ProgramsJumbotron';
import  { ProgramsContent } from '../components/Programs/ProgramsContent';
import  { ProgramsFooter } from '../components/Programs/ProgramsFooter';



export const Programs = () => (
    <React.Fragment>
        <ProgramsJumbotron/>
        <SectionNav/>
        <ProgramsContent/>
        <ProgramsFooter/>
    </React.Fragment>
)