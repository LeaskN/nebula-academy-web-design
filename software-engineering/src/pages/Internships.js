import React from 'react';
import { SectionNav } from '../components/Global/SectionNav';
import { InternshipsJumbotron } from '../components/Internships/InternshipsJumbotron';
import InternshipsContent from '../components/Internships/InternshipsContent';
import { Row } from 'react-bootstrap';



export const Internships = () => (
    <React.Fragment>
            <InternshipsJumbotron/>
        <Row>
            <SectionNav/>
        </Row>
        <Row>
            <InternshipsContent/>
        </Row>
    </React.Fragment>
)