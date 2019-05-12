import React from 'react';
import { Row, Col, ResponsiveEmbed, Button } from 'react-bootstrap';
import leadAndInspireBrochure from '../../../../assets/pdf/Lead-and-Inspire-PHFS-brochure.pdf';

const PeerMentoring = () => {
  return (
    <React.Fragment>
      <h3>Lead and Inspire Peer Mentoring</h3>
      <ResponsiveEmbed aspectRatio="16by9">
        <iframe title="Lead and Inspire Brochure" src={leadAndInspireBrochure} />
      </ResponsiveEmbed>
      <br />
      <Row>
        <Col>
          <Button variant="primary" href="https://docs.google.com/forms/d/1A7BR4T3lNH-Ykl0SyrBeVkG7wM2PDLOu-BN5ATa2fag/viewform?c=0&w=1">
            Apply to be a peer mentor today!
          </Button>
        </Col>
        <Col>
          <p>Lead and Inspire was founded by Claire Keepers.</p>
        </Col>
      </Row>
    </React.Fragment>
  )
};

export default PeerMentoring;