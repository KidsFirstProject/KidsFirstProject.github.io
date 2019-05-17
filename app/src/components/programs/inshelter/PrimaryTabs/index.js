import React from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faPen,
  faFutbol,
  faPaintBrush,
  faComment,
  faAtlas
} from '@fortawesome/free-solid-svg-icons';
import PeerMentoring from './PeerMentoring';
import Poeteen from './Poeteen';
import PhysicalActivity from './PhysicalActivity';
import ArtsCrafts from './ArtsCrafts';
import Tutoring from './Tutoring';
import LifeSkills from './LifeSkills';

const PrimaryTabs = () => {
  return (
    <Tab.Container id="shelter-programs" defaultActiveKey="peer-mentoring">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="peer-mentoring">
                <FontAwesomeIcon icon={faGraduationCap} /> Peer Mentoring
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="poeteen">
                <FontAwesomeIcon icon={faPen} /> Poeteen
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="physical-activity">
                <FontAwesomeIcon icon={faFutbol} /> Physical Activity
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="arts-and-crafts">
                <FontAwesomeIcon icon={faPaintBrush} /> Arts and Crafts
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tutoring">
                <FontAwesomeIcon icon={faComment} /> Tutoring
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="life-skills">
                <FontAwesomeIcon icon={faAtlas} /> Life Skills
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="peer-mentoring">
              <PeerMentoring />
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
            <Tab.Pane eventKey="poeteen">
              <Poeteen />
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
            <Tab.Pane eventKey="physical-activity">
              <PhysicalActivity />
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
            <Tab.Pane eventKey="arts-and-crafts">
              <ArtsCrafts />
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
            <Tab.Pane eventKey="tutoring">
              <Tutoring />
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
            <Tab.Pane eventKey="life-skills">
              <LifeSkills />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default PrimaryTabs;
