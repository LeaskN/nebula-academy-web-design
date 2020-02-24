import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Courses } from './pages/Courses';
import { NoMatch } from './pages/NoMatch';
import { Curriculum } from './pages/Curriculum';
import { Registration } from './pages/Registration';
import { Universities } from './pages/Universities';
import { Outcomes } from './pages/Outcomes';
import { NavigationBar } from './components/Global/NavigationBar';
import { Footer } from './components/Global/Footer'
import { Partners } from './pages/Partners';
import { GuestSpeakers } from './pages/GuestSpeakers';
import { Staff } from './pages/Staff';
import { HiddenRegistration } from './pages/HiddenRegistration';
import CookieConsent from "react-cookie-consent";

import ReactGA from 'react-ga';
ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);

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
            <Route path= "/courses" component={Courses}/>
            <Route path = "/curriculum" component={Curriculum}/>
            <Route path = "/registration" component={Registration}/>
            <Route path = "/universities" component={Universities}/>
            <Route path ="/outcomes" component={Outcomes}/>
            <Route path ="/staff" component={Staff}/>
            <Route path ="/Partners" component={Partners}/>
            <Route path ="/GuestSpeakers" component={GuestSpeakers}/>
            <Route path ="/HiddenRegistration" component={HiddenRegistration}/>
            <Route component = {NoMatch}/>
          </Switch>
        </Router>
        <Footer/>
    </React.Fragment>
  );
}

export default App;
