import React from 'react';
import { GuestSpeakerApplicationJumbotron } from '../components/GuestSpeakerApplication/GuestSpeakerApplicationJumbotron';
import SectionNav from '../components/Global/SectionNav';
import { GuestSpeakerApplicationContent } from '../components/GuestSpeakerApplication/GuestSpeakerApplicationContent';
import  { GuestSpeakerApplicationFooter } from '../components/GuestSpeakerApplication/GuestSpeakerApplicationFooter';



export const GuestSpeakerApplication = () => (
    <React.Fragment>
        <GuestSpeakerApplicationJumbotron/>
        <SectionNav/>
        <GuestSpeakerApplicationContent/>
        <GuestSpeakerApplicationFooter/>
    </React.Fragment>
)