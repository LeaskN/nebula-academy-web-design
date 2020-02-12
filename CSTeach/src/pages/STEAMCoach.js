import React from 'react';
import SectionNav  from '../components/Global/SectionNav';
import { STEAMCoachJumbotron } from '../components/Programs/STEAMCoach/STEAMCoachJumbotron';
import STEAMCoachContent from '../components/Programs/STEAMCoach/STEAMCoachContent';
import  { STEAMCoachFooter } from '../components/Programs/STEAMCoach/STEAMCoachFooter';

import { Row } from 'react-bootstrap';



export const STEAMCoach = () => (
    <React.Fragment>
            <STEAMCoachJumbotron/>
        <Row>
            <SectionNav/>
        </Row>
        <Row>
            <STEAMCoachContent/>
        </Row>
            <STEAMCoachFooter/>
    </React.Fragment>
)