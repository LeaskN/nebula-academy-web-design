import React from 'react';
import { STEAMForKidsJumbotron } from '../components/STEAMForKids/STEAMForKidsJumbotron';
import STEAMForKidsContent from '../components/STEAMForKids/STEAMForKidsContent';
import  { STEAMForKidsFooter } from '../components/STEAMForKids/STEAMForKidsFooter';


export const STEAMForKids = () => (
    <React.Fragment>
        <STEAMForKidsJumbotron/>
        <STEAMForKidsContent/>
        <STEAMForKidsFooter/>
    </React.Fragment>
)