import React from 'react';
import { HomeJumbotron } from '../components/Home/HomeJumbotron';
import SectionNav from '../components/Global/SectionNav';
import HomeContent from '../components/Home/HomeContent';
import  { HomeFooter } from '../components/Home/HomeFooter';
import Popup from '../components/Popup/Popup'; 

export const Home = () => ( 
    <React.Fragment>
        <HomeJumbotron/>
        <Popup/> 
        <SectionNav/>
        <HomeContent/>
        <HomeFooter/>
    </React.Fragment>  
)