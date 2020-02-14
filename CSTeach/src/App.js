import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Programs } from './pages/Programs';
import { NoMatch } from './pages/NoMatch';
import { Curriculum } from './pages/Curriculum';
import { Application } from './pages/Application';
import { Certifications } from './pages/Certifications';
import { Careers } from './pages/Careers';
import { NavigationBar } from './components/Global/NavigationBar';
import { Footer } from './components/Global/Footer'
import { Scholarships } from './pages/Scholarships';
import { Partners } from './pages/Partners';
import { GuestSpeakers } from './pages/GuestSpeakers';
import { HiddenApplication } from './pages/HiddenApplication';
import { TryCoding } from './pages/TryCoding';
import { Staff } from './pages/Staff';
import { CSTC } from './pages/CSTC';
import { SBLS } from './pages/SBLS';
import { STEAMCoach } from './pages/STEAMCoach';
import CookieConsent from "react-cookie-consent";


function App() {
  return (
    <React.Fragment>
      <CookieConsent
      style={{ background: "#131520" }}
      buttonStyle={{ color: "#4e503b", borderRadius: '10px', shadow:'10px', backgroundColor: 'white' }}
      >
      This website uses cookies to enhance the user experience.
      </CookieConsent>
      <NavigationBar/>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path ="/Programs" component={Programs}/>
            <Route path ="/curriculum" component={Curriculum}/>
            <Route path ="/application" component={Application}/>
            <Route path ="/certifications" component={Certifications}/>
            <Route path ="/careers" component={Careers}/>
            <Route path ="/scholarships" component={Scholarships}/>
            <Route path ="/Partners" component={Partners}/>
            <Route path ="/GuestSpeakers" component={GuestSpeakers}/>
            <Route path ="/TryCoding" component={TryCoding}/>
            <Route path ="/staff" component={Staff}/>
            <Route path ="/CSTC" component={CSTC}/>
            <Route path ="/SBLS" component={SBLS}/>
            <Route path ="/STEAMCoach" component={STEAMCoach}/>
            <Route path ="/HiddenApplication" component={HiddenApplication}/>
            <Route component = {NoMatch}/>
            {/*
            <Route path ="/Apply" component={Apply}/>
            */}
          </Switch>
        </Router>
        <Footer/>
    </React.Fragment>
  );
}

export default App;
