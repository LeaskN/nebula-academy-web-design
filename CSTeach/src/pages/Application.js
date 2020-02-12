import React from 'react';
import  { ApplicationJumbotron } from '../components/Application/ApplicationJumbotron';
import  { ApplicationFooter } from '../components/Application/ApplicationFooter';
import  ApplicationContent from '../components/Application/ApplicationContent';



export const Application = () => (
    <React.Fragment>
        <ApplicationJumbotron/>
        <ApplicationContent/>
        <ApplicationFooter/>
    </React.Fragment>
)