import React from 'react';
import { Container, Col, Row, Button, Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { string } from 'prop-types';
import styles from './DonatePage.module.css';
import fredMeyerImage from '../../assets/images/donate/fredmeyer.png';
import fredMeyerGuide from '../../assets/pdf/Fred-Meyer-Non-profit.pdf';
import benevityImage from '../../assets/images/donate/benevity.png';

const donateLine = ({ amount, text }) => (
  <Row key={`row-donation-${amount}`}>
    <Col md={1} className={`text-center ${styles.donateIconColumn}`}>
      <span className="fa-layers fa-fw fa-4x">
        <FontAwesomeIcon icon={faCircle} color="#85bb65" />
        <span
          className="fa-layers-text fa-inverse"
          style={{ fontWeight: '700', fontSize: '28px' }}
        >
          ${amount}
        </span>
      </span>
    </Col>
    <Col className="d-flex align-items-center">{text}</Col>
  </Row>
);

const donationLines = [
  {
    amount: '6',
    text:
      'will provide a child with a mentor and necessary materials from Lead and Inspire.'
  },
  {
    amount: '20',
    text: 'will provide a child with a new backpack and school supplies.'
  },
  {
    amount: '50',
    text:
      'will bring an entirely new curriculum to our service with your input.'
  },
  {
    amount: '$$',
    text:
      'We rely on our donors and supporters, so every dollar counts towards running our organization.'
  }
];

const DonatePage = () => (
  <Container className="page-container">
    <h1>Donations</h1>
    <hr />
    <Row>
      <Col lg={8}>
        <p>
          Please join us in our effort of helping youth experiencing
          homelessness in our community reach their full potential through the
          services we provide.
        </p>
        {donationLines.map(donateLine)}
        <br />
        <p>
          Due to our status as a 501(c)(3) organization, your contribution to
          Kids First Project is tax-deductible under IRC Section 170.
        </p>
      </Col>
      <Col className="d-flex flex-column">
        <Card className={styles.card}>
          <Card.Header className={styles.cardHeader}>
            <h4 className="text-center">Donate via Paypal</h4>
          </Card.Header>
          <Card.Body className="text-center">
            <Card.Text>The safer, easier way to pay online.</Card.Text>
            <hr className={styles.sectionDivider} />
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="S7RFQ8EST3FSE"
              />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                border="0"
                name="submit"
                alt="PayPal - The safer, easier way to pay online!"
              />
              <img
                alt=""
                border="0"
                src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </Card.Body>
        </Card>
        <br />
        <Card className={styles.card}>
          <Card.Header className={styles.cardHeader}>
            <h4 className="text-center">Donate via Fred Meyer Rewards</h4>
          </Card.Header>
          <Card.Body className="text-center">
            <Image fluid src={fredMeyerImage} />
            <hr className={styles.sectionDivider} />
            <Button variant="primary" href={fredMeyerGuide}>
              Find Out How
            </Button>
          </Card.Body>
        </Card>
        <br />
        <Card className={styles.card}>
          <Card.Header className={styles.cardHeader}>
            <h4 className="text-center">Donate via Benevity</h4>
          </Card.Header>
          <Card.Body className="text-center">
            <Image
              fluid
              src={benevityImage}
              style={{
                borderRadius: '15px',
                backgroundColor: '#00BFFF',
                padding: '5px'
              }}
            />
            <hr className={styles.sectionDivider} />
            <Button
              variant="primary"
              href="http://www.benevity.com/solutions/workplace-giving"
            >
              Find Out More
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

donateLine.propTypes = {
  amount: string.isRequired,
  text: string.isRequired
};

export default DonatePage;
