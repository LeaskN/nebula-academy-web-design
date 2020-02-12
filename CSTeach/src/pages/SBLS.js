import React from 'react';
import SectionNav  from '../components/Global/SectionNav';
import { SBLSJumbotron } from '../components/Programs/SBLS/SBLSJumbotron';
import SBLSContent from '../components/Programs/SBLS/SBLSContent';
import  { SBLSFooter } from '../components/Programs/SBLS/SBLSFooter';

import { Row } from 'react-bootstrap';



export const SBLS = () => (
    <React.Fragment>
            <SBLSJumbotron/>
        <Row>
            <SectionNav/>
        </Row>
        <Row>
            <SBLSContent/>
        </Row>
            <SBLSFooter/>
    </React.Fragment>
)