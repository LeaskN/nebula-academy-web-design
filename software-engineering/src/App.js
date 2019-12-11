import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Program } from './pages/Program';
import { NoMatch } from './pages/NoMatch';
import { Curriculum } from './pages/Curriculum';
import { Application } from './pages/Application';
import { Internships } from './pages/Internships';
import { Outcomes } from './pages/Outcomes';
import { NavigationBar } from './components/Global/NavigationBar';
import { Footer } from './components/Global/Footer'
import { Scholarships } from './pages/Scholarships';
import { Partners } from './pages/Partners';
import { GuestSpeakers } from './pages/GuestSpeakers';
// import { Home, Program, NoMatch, Curriculum, Application, Internships, Outcomes, Scholarships } from './pages/';

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path= "/program" component={Program}/>
            <Route path = "/curriculum" component={Curriculum}/>
            <Route path = "/application" component={Application}/>
            <Route path = "/internships" component={Internships}/>
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
