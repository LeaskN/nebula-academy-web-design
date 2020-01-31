import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { NoMatch } from './pages/NoMatch';
import { NavigationBar } from './components/Global/NavigationBar';
import { Footer } from './components/Global/Footer'
import { STEAMForKids } from './pages/STEAMForKids'
import { Educators } from './pages/Educators'

// import { Staff } from './pages/Staff';

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path ="/steam-for-kids" component={STEAMForKids}/>
            <Route path ="/educators" component={Educators}/>
            {/* <Route path ="/workforce-development" component={WorkforceDevelopment}/>
            <Route path ="/universities" component={Universities}/>
            <Route path ="/philantrhopy" component={Philantrhopy}/>
            <Route path ="/team" component={Team}/>
            <Route path ="/success-stories" component={SuccessStories}/>
            <Route path ="/employment" component={Employment}/>
            <Route path ="/blog" component={Blog}/>*/}
            <Route component = {NoMatch}/>
          </Switch>
        </Router>
        <Footer/>
    </React.Fragment>
  );
}

export default App;
