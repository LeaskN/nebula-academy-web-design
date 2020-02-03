import React from 'react';
import { WorkforceDevelopmentJumbotron } from '../components/WorkforceDevelopment/WorkforceDevelopmentJumbotron';
import WorkforceDevelopmentContent from '../components/WorkforceDevelopment/WorkforceDevelopmentContent';
import  { WorkforceDevelopmentFooter } from '../components/WorkforceDevelopment/WorkforceDevelopmentFooter';


export const WorkforceDevelopment = () => (
    <React.Fragment>
        <WorkforceDevelopmentJumbotron/>
        <WorkforceDevelopmentContent/>
        <WorkforceDevelopmentFooter/>
    </React.Fragment>
)