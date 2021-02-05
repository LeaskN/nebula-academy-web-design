import React from 'react';
import  { ApplicationPhase2Jumbotron } from '../components/ApplicationPhase2/ApplicationPhase2Jumbotron';
import  { ApplicationPhase2Footer } from '../components/ApplicationPhase2/ApplicationPhase2Footer';
import  ApplicationPhase2Content from '../components/ApplicationPhase2/ApplicationPhase2Content';



export const ApplicationPhase2 = () => (
    <React.Fragment>
        <ApplicationPhase2Jumbotron/>
        <ApplicationPhase2Content/>
        <ApplicationPhase2Footer/>
    </React.Fragment>
)