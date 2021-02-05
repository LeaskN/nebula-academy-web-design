import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { NoMatch } from './pages/NoMatch';
import { NavigationBar } from './components/Global/NavigationBar';
import { Footer } from './components/Global/Footer'
// import { STEAMForKids } from './pages/STEAMForKids'
import { Educators } from './pages/Educators'
import { WorkforceDevelopment } from './pages/WorkforceDevelopment'
import { Universities } from './pages/Universities'
import { Philanthropy } from './pages/Philanthropy'
import { Staff } from './pages/Staff'
import CookieConsent from "react-cookie-consent";

import ReactGA from 'react-ga';
ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <CookieConsent
          style={{ background: "#131520", paddingLeft: "75px" }}
          buttonStyle={{ color: "#4e503b", borderRadius: '10px', shadow: '10px', backgroundColor: 'white' }}
        >
          This website uses cookies to enhance the user experience.
      </CookieConsent>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path ="/steam-for-kids" component={STEAMForKids}/> */}
            <Route path="/educators" component={Educators} />
            <Route path="/workforce-development" component={WorkforceDevelopment} />
            <Route path="/universities" component={Universities} />
            <Route path="/philanthropy" component={Philanthropy} />
            <Route path="/staff" component={Staff} />
            {/*<Route path ="/success-stories" component={SuccessStories}/>
              <Route path ="/employment" component={Employment}/>
              <Route path ="/blog" component={Blog}/>*/}
            <Route component={NoMatch} />
          </Switch>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
