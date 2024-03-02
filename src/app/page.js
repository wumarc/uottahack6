'use client'
import React from 'react';
import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import logo from '../../public/images/logo.png';
import { Item } from './components/item';
import Stack from 'react-bootstrap/Stack';

export default function Home() {
  
  return (
    <Container className='justify-content-md-center'>
      {/* Header */}
      <Row className='justify-content-md-center'>
        <Col xl='12' md='auto' className='justify-content-md-center'>
          {/* Display the image called logo.png */}
          <Image src={logo} alt='logo' height={80} />
        </Col>
      </Row>

      {/* Content */}
      <Row>
        <h2>Jackets</h2>
        <Col lg={3}>
          <Item/>
        </Col>

        <Col lg={3}>
          <Item/>
        </Col>

          <Item/>
          <Item/>
          <Item/>
          <Item/>

        <Col>
          <h2>Hoodies</h2>
        </Col>


      </Row>

    </Container>
  );
}
