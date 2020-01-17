import React from 'react';
import { GuestSpeakersJumbotron } from '../components/GuestSpeakers/GuestSpeakersJumbotron';
import SectionNav from '../components/Global/SectionNav';
import { GuestSpeakersContent } from '../components/GuestSpeakers/GuestSpeakersContent';
import  { GuestSpeakersFooter } from '../components/GuestSpeakers/GuestSpeakersFooter';



export const GuestSpeakers = () => (
    <React.Fragment>
        <GuestSpeakersJumbotron/>
        <SectionNav/>
        <GuestSpeakersContent/>
        <GuestSpeakersFooter/>
    </React.Fragment>
)