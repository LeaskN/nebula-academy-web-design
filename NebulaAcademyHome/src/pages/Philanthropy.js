import React from 'react';
import { PhilanthropyJumbotron } from '../components/Philanthropy/PhilanthropyJumbotron';
import PhilanthropyContent from '../components/Philanthropy/PhilanthropyContent';
import  { PhilanthropyFooter } from '../components/Philanthropy/PhilanthropyFooter';


export const Philanthropy = () => (
    <React.Fragment>
        <PhilanthropyJumbotron/>
        <PhilanthropyContent/>
        <PhilanthropyFooter/>
    </React.Fragment>
)