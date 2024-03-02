import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function Home() {
  return (
    <Container>
      {/* Header */}
      <Row className='justify-content-md-center'>
        <Col lg='12'>
          <h1>Patagonia</h1>
        </Col>
      </Row>

      {/* Content */}
      <Row>
        
        <Col>
          <h2>Jackets</h2>
        </Col>

        <Col>
          <h2>Hoodies</h2>
        </Col>


      </Row>

      {/* Footer */}
      <Row>
        <Col>
          <h1>Footer</h1>
        </Col>
      </Row>

    </Container>
  );
}
