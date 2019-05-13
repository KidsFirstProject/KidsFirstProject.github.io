import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import KFPNavbar from './components/KFPNavbar';
import KFPFooter from './components/KFPFooter';
import NotFound from './components/NotFound';
import HomePage from './components/home';
import AboutPage from './components/about';
import TeamPage from './components/team';
import './bootstrap-custom.scss';
import InShelter from './components/programs/inshelter';
import Scholarship from './components/programs/scholarship';
import PartnersPage from './components/partners';
import BlogList from './components/blog-list';
import BlogPage from './components/blog-page';

const App = () => (
  <Router>
    <KFPNavbar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/team" component={TeamPage} />
      <Route exact path="/programs/inshelter" component={InShelter} />
      <Route exact path="/programs/scholarship" component={Scholarship} />
      <Route exact path="/partners" component={PartnersPage} />

      <Route exact path="/blog" component={BlogList} />
      <Route path="/blog/:id" component={BlogPage} />
      <Route component={NotFound} />
    </Switch>
    <KFPFooter />
  </Router>
);

export default App;