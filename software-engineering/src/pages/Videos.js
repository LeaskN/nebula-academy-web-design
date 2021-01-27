import React from 'react';
import VideoContent from '../components/Videos/VideoContent.js'
import {VideoJumbotron} from '../components/Videos/VideoJumbotron'



export const Videos = () => (
    <React.Fragment>
        <VideoJumbotron/>
        <VideoContent/>
    </React.Fragment>
)