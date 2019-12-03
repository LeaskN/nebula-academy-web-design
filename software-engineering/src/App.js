import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Overview } from './pages/Overview';
import { NoMatch } from './pages/NoMatch';
import { NavigationBar } from './components/NavigationBar';

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
        <Router>
          <Switch>
            <Route exact path ="/" component={Home}/>
            <Route path ="/overview" component={Overview}/>
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
    </React.Fragment>
  );
}

export default App;
