import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import logo from './images/logo.png';
import './App.css';
import { Layout, Menu, Avatar, Icon, Button } from 'antd';
import Home from './components/Home';
import About from './components/About';
import Donate from './components/Donate';
const { Content, Sider, Footer, Header } = Layout;
const { Item, SubMenu } = Menu;

class App extends Component {
  render() {
    return (
      <Router>
      <Layout style={{ height: '100%', width: '100%'}}>
        <Sider style={{ backgroundColor: 'white' }}>
            <NavLink to="/">
              <img src={logo} style={{width : '90%', margin:'10px 0'}}/>
            </NavLink>
            <Menu>
              <Item key="about">
                <NavLink to="/about">About</NavLink>
              </Item>
              <SubMenu
                key="team"
                title={<span>Our Team</span>}
                >
                <Item key="whoweare">Who we are</Item>
                <Item key="directors">Board of Directors</Item>
                <Item key="volunteerleaders">Volunteer Leaders</Item>
                <Item key="advisory">Advisory Board</Item>
                <Item key="sponsors">Sponsors</Item>
              </SubMenu>
              <Item key="programs">
                <span>Programs</span>
              </Item>
              <Item key="partners">
                <span>Our Partners</span>
              </Item>
              <SubMenu
                key="getinvolved"
                title={<span>Our Team</span>}
                >
                <Item key="calendar">Event Calendar</Item>
                <Item key="volunteer">Volunteer</Item>
                <Item key="chapters">Chapters</Item>
              </SubMenu>
              <Item key="blog">
                <span>Blog</span>
              </Item>
              <Item key="donate">
                <span>Donate</span>
              </Item>
              <Item key="contact">
                <span>Contact Us</span>
              </Item>
            </Menu>
        </Sider>
        <Layout>
          <Header style={{ backgroundColor: 'white' }}>
            <span>Event Calendar</span>
            <Link to="/donate">
            <Button icon='heart' type='primary'>
              Donate
            </Button>
            </Link>
          </Header>
          <Content>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/donate" component={Donate}/>
          </Content>
          <Footer style={{ backgroundColor: 'white', textAlign: 'center', paddingTop: '16px', paddingBottom: '8px' }}>
            <div style={{ marginBottom :'8px' }}>
              <span>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/kidsfirstproject"><Avatar size="large" icon="facebook" style={{ marginRight: '20px', backgroundColor: '#f7998a' }}/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/pdxkidsfirst"><Avatar size="large" icon="twitter"  style={{ marginRight: '20px', backgroundColor: '#f7998a' }}/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/kidsfirstproject"><Avatar size="large" icon="instagram" style={{ backgroundColor: '#f7998a' }} /></a>
              </span>
            </div>
            <div>
              <span style={{ color: '#aaa' }}>
                Copyright <Icon type="copyright" /> Kids First Project 2018
              </span>
            </div>
          </Footer>
        </Layout>
      </Layout>
      </Router>
    );
  }
}

export default App;