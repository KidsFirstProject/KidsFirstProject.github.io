
import React from 'react';
import { Container, Col, Row, ResponsiveEmbed } from 'react-bootstrap';

const EventCalendar = () => (
  <Container className="page-container">
    <h1>Event Calendar</h1>
    <hr />
    <Row>
      <Col>
        <ResponsiveEmbed aspectRatio="16by9">
          <iframe title="Event Calendar" src="https://www.google.com/calendar/embed?src=pdxkidsfirst%40gmail.com&amp;showCalendars=0&amp;ctz=America/Los_Angeles" />
        </ResponsiveEmbed>
      </Col>
    </Row>
  </Container>
);

export default EventCalendar;