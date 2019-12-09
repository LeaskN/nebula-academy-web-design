import React from 'react';
import { SectionNav } from '../components/Global/SectionNav';
import { CurriculumJumbotron } from '../components/Curriculum/CurriculumJumbotron';
import CurriculumContent from '../components/Curriculum/CurriculumContent';
import { Row } from 'react-bootstrap';



export const Curriculum = () => (
    <React.Fragment>
            <CurriculumJumbotron/>
        <Row>
            <SectionNav/>
        </Row>
        <Row>
            <CurriculumContent/>
        </Row>
    </React.Fragment>
)