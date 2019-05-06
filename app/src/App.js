import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import KFPNavbar from './components/KFPNavbar';
import KFPFooter from './components/KFPFooter';
import NotFound from './components/NotFound';
import HomePage from './components/home';
import AboutPage from './components/about';
import TeamPage from './components/team';
import './bootstrap-custom.scss';

const App = () => (
  <Router>
    <KFPNavbar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/team" component={TeamPage} />
      <Route component={NotFound} />
    </Switch>
    <KFPFooter />
  </Router>
);

export default App;