import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Program } from './Program';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Layout>
        <Router>
          <Switch>
            <Route exact path ="/" component={Home}/>
            <Route path ="/program" component={Program}/>
            <Route component={NoMatch}/>
            {/* 
            <Route path ="/" component={Curriculum}/>
            <Route path ="/Program/Internship" component={Internship}/>
            <Route path ="/Program/Outcomes" component={Outcomes}/>
            <Route path ="/Program/Scholarship" component={Scholarship}/>
            <Route path ="/Program/Apply" component={Apply}/>
            <Route path ="/Program/Partners" component={Partners}/>
            <Route path ="/Program/GuestSpeakers" component={GuestSpeakers}/>
            */}
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
