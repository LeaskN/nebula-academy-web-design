import React from 'react';
import { SectionNav } from '../components/Global/SectionNav';
import  { ProgramJumbotron } from '../components/Program/ProgramJumbotron';
import  { ProgramContent } from '../components/Program/ProgramContent';
import  { ProgramFooter } from '../components/Program/ProgramFooter';



export const Program = () => (
    <React.Fragment>
        <ProgramJumbotron/>
        <SectionNav/>
        <ProgramContent/>
        <ProgramFooter/>
    </React.Fragment>
)