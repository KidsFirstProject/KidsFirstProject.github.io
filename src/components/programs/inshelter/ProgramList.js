import React from 'react';
import { Col, Row, Media } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import programs from '../../../data/programs/programs';

const ProgramList = () => (
  <Row>
    {programs.map((program, index) => (
      <Col lg={4} md={6} key={`program-${index}`}>
        <h5>{program.title}</h5>
        <Media>
          <span className="fa-layers fa-fw fa-3x pull-left">
            <FontAwesomeIcon icon={faCircle} color="#60CCCC" />
            <FontAwesomeIcon
              icon={program.icon}
              color="white"
              transform="shrink-6"
            />
          </span>
          <Media.Body>
            <p>{program.description}</p>
          </Media.Body>
        </Media>
      </Col>
    ))}
  </Row>
);

export default ProgramList;
