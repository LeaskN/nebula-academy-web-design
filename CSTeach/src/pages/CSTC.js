import React from 'react';
import SectionNav  from '../components/Global/SectionNav';
import { CSTCJumbotron } from '../components/Programs/CSTC/CSTCJumbotron';
import CSTCContent from '../components/Programs/CSTC/CSTCContent';
import  { CSTCFooter } from '../components/Programs/CSTC/CSTCFooter';

import { Row } from 'react-bootstrap';



export const CSTC = () => (
    <React.Fragment>
            <CSTCJumbotron/>
        <Row>
            <SectionNav/>
        </Row>
        <Row>
            <CSTCContent/>
        </Row>
            <CSTCFooter/>
    </React.Fragment>
)