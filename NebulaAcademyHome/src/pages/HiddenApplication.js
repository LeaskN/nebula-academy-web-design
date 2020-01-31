import React from 'react';
import  { ApplicationJumbotron } from '../components/HiddenApplication/ApplicationJumbotron';
import  { ApplicationFooter } from '../components/HiddenApplication/ApplicationFooter';
import  ApplicationContent from '../components/HiddenApplication/ApplicationContent';



export const HiddenApplication = () => (
    <React.Fragment>
        <ApplicationJumbotron/>
        <ApplicationContent/>
        <ApplicationFooter/>
    </React.Fragment>
)