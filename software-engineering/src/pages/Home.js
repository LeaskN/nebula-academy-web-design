import React from 'react';
import { HomeJumbotron } from '../components/Homepage/HomeJumbotron';
import { SectionNav } from '../components/Global/SectionNav';
import { IntroTiles } from '../components/Homepage/IntroTiles';

export const Home = () => (
    <React.Fragment>
        <HomeJumbotron/>
        <SectionNav/>
        <IntroTiles/>
    </React.Fragment>
)