'use client'
import React from 'react';
import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import logo from '../../public/images/logo.png';
import { Item } from './components/item';
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

  const items = [1, 1, 1, 1, 1, 1]
  const categoryName = ["Jackets", "Hoodie", "Sweater"]

  return (
    <Container className='justify-content-md-center'>

      {/* Header */}
      <Row className='justify-content-md-center'>
        <Col xl='12' md='auto' className='justify-content-md-center'>
          {/* Display the image called logo.png */}
          <Image src={logo} alt='logo' height={80} />
        </Col>
      </Row>

      {/* Text */}
      <Row>
        <Col>
          <p style={{fontSize: '20px', justifyContent: 'center', alignItems: 'center'}}>
          Revive the Adventure, Rewear the Passion. Explore Patagonia's Sustainability Hub – Elevate your style sustainably, one worn treasure at a time. Join the movement, shop conscious, and let your fashion make a positive impact on our planet.          </p>
        </Col>
      </Row>

      {/* Content */}
      <Row>
        <h2>{categoryName[0]}</h2>
        <Row>
          {items.map((item, index) => (
            <Col md="auto" className='pb-3'>
              <Item index={index}/>
            </Col>
          ))}
        </Row>
      </Row>

      <Row>
        <h2>{categoryName[1]}</h2>
        <Row>
          {items.map((item, index) => (
            <Col md="auto" className='pb-3'>
              <Item index={index}/>
            </Col>
          ))}
        </Row>
      </Row>

      <Row>
        <h2>{categoryName[2]}</h2>
        <Row>
          {items.map((item, index) => (
            <Col md="auto" className='pb-3'>
              <Item index={index}/>
            </Col>
          ))}
        </Row>
      </Row>



    </Container>
  );
}