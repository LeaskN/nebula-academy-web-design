import React from 'react';
import { HomeJumbotron } from '../components/Home/HomeJumbotron';
import SectionNav from '../components/Global/SectionNav';
import HomeContent from '../components/Home/HomeContent';
import  { HomeFooter } from '../components/Home/HomeFooter';


export const Home = () => (
    <React.Fragment>
        <HomeJumbotron/>
        <HomeContent/>
        <HomeFooter/>
    </React.Fragment>
)