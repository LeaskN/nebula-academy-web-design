import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Program } from './pages/Program';
import { NoMatch } from './pages/NoMatch';
import { NavigationBar } from './components/Global/NavigationBar';
import { ApplyNowFooter } from './components/Global/ApplyNowFooter';
import { Footer } from './components/Global/Footer'

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/program" component={Program}/>
            <Route component={NoMatch}/>
            {/* 
            <Route path ="/" component={Curriculum}/>
            <Route path ="/Internship" component={Internship}/>
            <Route path ="/Outcomes" component={Outcomes}/>
            <Route path ="/Scholarship" component={Scholarship}/>
            <Route path ="/Apply" component={Apply}/>
            <Route path ="/Partners" component={Partners}/>
            <Route path ="/GuestSpeakers" component={GuestSpeakers}/>
            */}
          </Switch>
        </Router>
        <ApplyNowFooter/>
        <Footer/>
    </React.Fragment>
  );
}

export default App;
