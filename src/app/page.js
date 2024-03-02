'use client'
import React from 'react';
import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import logo from '../../public/images/logo.png';

export default function Home() {
  
  return (
    <Container>
      {/* Header */}
      <Row className='justify-content-md-center'>
        <Col lg='12' className='justify-content-md-center'>
          {/* Display the image called logo.png */}
          <Image src={logo} alt='logo' />
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

    </Container>
  );
}
