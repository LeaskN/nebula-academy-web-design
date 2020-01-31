import React from 'react';
import { TryCodingJumbotron } from '../components/TryCoding/TryCodingJumbotron';
import SectionNav from '../components/Global/SectionNav';
import TryCodingContent from '../components/TryCoding/TryCodingContent';
import  { TryCodingFooter } from '../components/TryCoding/TryCodingFooter';


export const TryCoding = () => (
    <React.Fragment>
        <TryCodingJumbotron/>
        <SectionNav/>
        <TryCodingContent/>
        <TryCodingFooter/>
    </React.Fragment>
)