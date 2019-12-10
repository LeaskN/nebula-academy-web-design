import React from 'react';
import { SectionNav } from '../components/Global/SectionNav';
import { OutcomesJumbotron } from '../components/Outcomes/OutcomesJumbotron';
import OutcomesContent from '../components/Outcomes/OutcomesContent';
import { Row } from 'react-bootstrap';



export const Outcomes = () => (
    <React.Fragment>
            <OutcomesJumbotron/>
        <Row>
            <SectionNav/>
        </Row>
        <Row>
            <OutcomesContent/>
        </Row>
    </React.Fragment>
)