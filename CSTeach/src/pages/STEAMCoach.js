import React from 'react';
import SectionNav  from '../components/Global/SectionNav';
import { STEAMCoachJumbotron } from '../components/STEAMCoach/STEAMCoachJumbotron';
import STEAMCoachContent from '../components/STEAMCoach/STEAMCoachContent';
import  { STEAMCoachFooter } from '../components/STEAMCoach/STEAMCoachFooter';

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