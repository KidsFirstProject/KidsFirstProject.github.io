import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import KFPNavbar from './components/KFPNavbar';
import KFPFooter from './components/KFPFooter';
import NotFound from './components/NotFound';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import TeamPage from './components/TeamPage';
import './bootstrap-custom.scss';
import InShelter from './components/programs/inshelter';
import Scholarship from './components/programs/ScholarshipPage';
import PartnersPage from './components/PartnersPage';
import BlogList from './components/BlogList';
import BlogPage from './components/BlogPage';
import EventCalendar from './components/get-involved/EventCalendar';
import VolunteerPage from './components/get-involved/VolunteerPage';
import DonatePage from './components/DonatePage';

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
      <Route exact path="/events" component={EventCalendar} />
      <Route exact path="/volunteer" component={VolunteerPage} />
      <Route exact path="/blog" component={BlogList} />
      <Route path="/blog/:id" component={BlogPage} />
      <Route path="/donate" component={DonatePage} />
      <Route component={NotFound} />
    </Switch>
    <KFPFooter />
  </Router>
);

export default App;