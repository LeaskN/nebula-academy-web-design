import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Courses } from './pages/Courses';
import { NoMatch } from './pages/NoMatch';
import { Curriculum } from './pages/Curriculum';
import { Application } from './pages/Application';
import { Universities } from './pages/Universities';
import { Outcomes } from './pages/Outcomes';
import { NavigationBar } from './components/Global/NavigationBar';
import { Footer } from './components/Global/Footer'
import { Scholarships } from './pages/Scholarships';
import { Partners } from './pages/Partners';
import { GuestSpeakers } from './pages/GuestSpeakers';
// import { Home, Program, NoMatch, Curriculum, Application, Universities, Outcomes, Scholarships } from './pages/';

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path= "/courses" component={Courses}/>
            <Route path = "/curriculum" component={Curriculum}/>
            <Route path = "/application" component={Application}/>
            <Route path = "/universities" component={Universities}/>
            <Route path ="/outcomes" component={Outcomes}/>
            <Route path ="/scholarships" component={Scholarships}/>
            <Route path ="/Partners" component={Partners}/>
            <Route path ="/GuestSpeakers" component={GuestSpeakers}/>
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
