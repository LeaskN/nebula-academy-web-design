import React from 'react';
import SectionNav  from '../components/Global/SectionNav';
import { GuestSpeakersJumbotron } from '../components/GuestSpeakers/GuestSpeakersJumbotron';
import GuestSpeakersContent from '../components/GuestSpeakers/GuestSpeakersContent';
import  { GuestSpeakersFooter } from '../components/GuestSpeakers/GuestSpeakersFooter';

import { Row } from 'react-bootstrap';



export const GuestSpeakers = () => (
    <React.Fragment>
            <GuestSpeakersJumbotron/>
        <Row>
            <SectionNav/>
        </Row>
        <Row>
            <GuestSpeakersContent/>
        </Row>
            <GuestSpeakersFooter/>
    </React.Fragment>
)