import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';
import { Layout, Menu } from 'antd';
const { Content, Sider, Footer } = Layout;
const { Item, SubMenu } = Menu;

class App extends Component {
  render() {
    return (
      <Layout style={{ height: '100%', width: '100%'}}>
        <Sider style={{ backgroundColor: 'white' }}>
          <img src={logo} style={{width : '90%', margin:'10px 0'}}/>
          <Menu>
            <Item key="about">
              <span>About</span>
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
          <Content></Content>
          <Footer></Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;