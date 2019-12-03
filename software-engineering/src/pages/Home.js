import React from 'react';
import { HomeJumbotron } from '../components/HomeJumbotron';
import { SectionNav } from '../components/SectionNav';
import { IntroTiles } from '../components/IntroTiles';

export const Home = () => (
    <React.Fragment>
        <HomeJumbotron/>
        <SectionNav/>
        <IntroTiles/>
    </React.Fragment>
)