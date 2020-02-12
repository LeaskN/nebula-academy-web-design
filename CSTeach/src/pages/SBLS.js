import React from 'react';
import SectionNav  from '../components/Global/SectionNav';
import { SBLSJumbotron } from '../components/SBLS/SBLSJumbotron';
import SBLSContent from '../components/SBLS/SBLSContent';
import  { SBLSFooter } from '../components/SBLS/SBLSFooter';

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