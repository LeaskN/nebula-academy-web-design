import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Program } from './pages/Program';
import { NoMatch } from './pages/NoMatch';
import { Curriculum } from './pages/Curriculum';
import { GuestSpeakers } from './pages/GuestSpeakers';
import { Application } from './pages/Application';
import { Internships } from './pages/Internships';
import { Outcomes } from './pages/Outcomes';
import { NavigationBar } from './components/Global/NavigationBar';
import { Footer } from './components/Global/Footer'
import { Scholarships } from './pages/Scholarships';
import { Partners } from './pages/Partners';
import { GuestSpeakerApplication } from './pages/GuestSpeakerApplication';
import { HiddenApplication } from './pages/HiddenApplication';
import { TryCoding } from './pages/TryCoding';
import { Staff } from './pages/Staff';
import { ApplicationPhase2 } from './pages/ApplicationPhase2';
import CookieConsent from "react-cookie-consent";
import ReactGA from 'react-ga'; //google analytics
// the following 7 lines are example code
// const trackingId = "UA-1234567890-1"; // Replace with your Google Analytics tracking ID
// ReactGA.initialize(trackingId);
// ReactGA.set({
//   userId: auth.currentUserId(),
//   // any data that is relevant to the user session
//   // that you would like to track with google analytics
// })
//the following are from our old code and new research
ReactGA.initialize('G-3H3KR3P2P1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  console.log('V:1.26.21.GA');
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
            <Route path = "/application/Phase2" component={ApplicationPhase2}/>
            <Route path = "/program" component={Program}/>
            <Route path = "/curriculum" component={Curriculum}/>
            <Route path = "/application" component={Application}/>
            <Route path = "/internships" component={Internships}/>
            <Route path = "/outcomes" component={Outcomes}/>
            <Route path = "/scholarships" component={Scholarships}/>
            <Route path = "/partners" component={Partners}/>
            <Route path = "/guestspeakers" component={GuestSpeakers}/>
            <Route path = "/guestspeakerapplication" component={GuestSpeakerApplication}/>
            <Route path = "/trycoding" component={TryCoding}/>
            <Route path = "/staff" component={Staff}/>
            <Route path = "/hiddenapplication" component={HiddenApplication}/>
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
