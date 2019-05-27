import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import KFPNavbar from './components/KFPNavbar';
import KFPFooter from './components/KFPFooter';
import NotFound from './components/NotFound';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import TeamPage from './components/TeamPage';
import './bootstrap-custom.scss';
import InShelter from './components/programs/inshelter';
import Scholarship from './components/programs/ScholarshipPage';
import BlogList from './components/BlogList';
import BlogPage from './components/BlogPage';
import EventCalendar from './components/get-involved/EventCalendar';
import VolunteerPage from './components/get-involved/VolunteerPage';
import DonatePage from './components/DonatePage';
import ContactPage from './components/ContactPage';
import ScrollToTop from './utils/ScrollToTop';
import ChaptersPage from './components/get-involved/ChaptersPage';
import AdvocacyPage from './components/AdvocacyPage';

import { posts as blogPosts, postMap as blogPostMap } from './data/blog';
import {
  posts as advocacyPosts,
  postMap as advocacyPostMap
} from './data/advocacy/blog';

const App = () => (
  <Router>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Kids First Project</title>
      <meta
        name="title"
        content="Kids First Project | Help Empower Homeless Youth"
      />
    </Helmet>
    <ScrollToTop>
      <KFPNavbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/team" component={TeamPage} />
        <Route exact path="/programs/inshelter" component={InShelter} />
        <Route exact path="/programs/scholarship" component={Scholarship} />
        <Route exact path="/events" component={EventCalendar} />
        <Route exact path="/volunteer" component={VolunteerPage} />
        <Route exact path="/chapters" component={ChaptersPage} />
        <Route exact path="/advocacy" component={AdvocacyPage} />
        <Route
          exact
          path="/advocacy/blog"
          render={props => (
            <BlogList
              {...props}
              pageTitle="Summer Advocacy Blog"
              posts={advocacyPosts}
              postPrefix="/advocacy"
            />
          )}
        />
        <Route
          exact
          path="/advocacy/blog/:page"
          render={props => (
            <BlogList
              {...props}
              pageTitle="Summer Advocacy Blog"
              posts={advocacyPosts}
              postPrefix="/advocacy"
            />
          )}
        />
        <Route
          exact
          path="/advocacy/blog/post/:id"
          render={props => <BlogPage {...props} postMap={advocacyPostMap} />}
        />
        <Route
          exact
          path="/blog"
          render={props => (
            <BlogList
              {...props}
              pageTitle="The Kids First Project Blog"
              posts={blogPosts}
            />
          )}
        />
        <Route
          exact
          path="/blog/:page"
          render={props => (
            <BlogList
              {...props}
              pageTitle="The Kids First Project Blog"
              posts={blogPosts}
            />
          )}
        />
        <Route
          exact
          path="/blog/post/:id"
          render={props => <BlogPage {...props} postMap={blogPostMap} />}
        />
        <Route exact path="/donate" component={DonatePage} />
        <Route exact path="/contact" component={ContactPage} />
        {/* Fallback routes for old links */}
        <Route exact path="/index.html" component={HomePage} />
        <Route exact path="/about.html" component={AboutPage} />
        <Route exact path="/team.html" component={TeamPage} />
        <Route exact path="/programs/inshelter.html" component={InShelter} />
        <Route
          exact
          path="/programs/scholarship.html"
          component={Scholarship}
        />
        <Route exact path="/events.html" component={EventCalendar} />
        <Route exact path="/volunteer.html" component={VolunteerPage} />
        <Route exact path="/chapters.html" component={ChaptersPage} />
        <Route exact path="/advocacy.html" component={AdvocacyPage} />
        <Route exact path="/donate.html" component={DonatePage} />
        <Route exact path="/contact.html" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
      <KFPFooter />
    </ScrollToTop>
  </Router>
);

export default App;
