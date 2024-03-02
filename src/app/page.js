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

  const items = [{ id: 1, name: 'Worn Fleece Jacket', category : 'Sweater', condition: 'Excellent', price: '$50', originalPrice: '$80', image: 'fleece-jacket.jpg' },
  { id: 2, name: 'Vintage Hiking Boots', condition: 'Like New', category : 'Sweater', price: '$80', originalPrice: '$120', image: 'hiking-boots.jpg' },
  { id: 3, name: 'Recycled Backpack', condition: 'Good', category : 'Sweater',price: '$40', originalPrice: '$60', image: 'recycled-backpack.jpg' },
  { id: 4, name: 'Worn Fleece Jacket', category : 'Jacket', condition: 'Excellent', price: '$50', originalPrice: '$80', image: 'fleece-jacket.jpg' },
  { id: 5, name: 'Vintage Hiking Boots', condition: 'Like New', category : 'Jackets', price: '$80', originalPrice: '$120', image: 'hiking-boots.jpg' },
  { id: 6, name: 'Recycled Backpack', condition: 'Good', category : 'Jackets',price: '$40', originalPrice: '$60', image: 'recycled-backpack.jpg' },
  { id: 7, name: 'Worn Fleece Jacket', category : 'Hoodie', condition: 'Excellent', price: '$50', originalPrice: '$80', image: 'fleece-jacket.jpg' },
  { id: 8, name: 'Vintage Hiking Boots', condition: 'Like New', category : 'Hoodie', price: '$80', originalPrice: '$120', image: 'hiking-boots.jpg' },
  { id: 9, name: 'Recycled Backpack', condition: 'Good', category : 'Hoodie',price: '$40', originalPrice: '$60', image: 'recycled-backpack.jpg' },
  
  
  ]
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
              {categoryName.map((category, categoryIndex) => (
          <Row key={categoryIndex}>
            <h2>{category}</h2>
            <Row>
              {items
                .filter(item => item.category === category)
                .map((item, itemIndex) => (
                  <Col key={itemIndex} md="auto" className='pb-3'>
                    <Item index={itemIndex} item={item} name={item.name}
              price={item.price}
              originalPrice={item.originalPrice}/>
                  </Col>
                ))}
            </Row>
          </Row>
))}
      {/* <Row>
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
              <Item index={index} />
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
      </Row> */}



    </Container>
  );
}