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

  const items = [{ id: 1, name: 'Women Lightweight Synchilla Snap-T Fleece', category : 'Sweater', condition: 'Excellent', price: '$50', originalPrice: '$80', image: 'https://www.patagonia.ca/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw0647db5e/images/hi-res/25455_VSLB.jpg?sw=512&sh=512&sfrm=png&q=95&bgcolor=f5f5f5' },
  { id: 2, name: 'Down Sweater™', condition: 'Like New', category : 'Hoodie', price: '$80', originalPrice: '$120', image: 'https://www.patagonia.ca/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw670c6558/images/hi-res/84702_NENA.jpg?sw=512&sh=512&sfrm=png&q=95&bgcolor=f5f5f5' },
  { id: 3, name: 'Classic Retro-X® Fleece', condition: 'Good', category : 'Jacket',price: '$40', originalPrice: '$60', image: 'https://www.patagonia.ca/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwbd4d2497/images/hi-res/23056_NEWA.jpg?sw=512&sh=512&sfrm=png&q=95&bgcolor=f5f5f5' },
  { id: 4, name: 'Better Sweater® Fleece', category : 'Jacket', condition: 'Excellent', price: '$50', originalPrice: '$80', image: 'https://www.patagonia.ca/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw69817253/images/hi-res/25528_INDG.jpg?sw=512&sh=512&sfrm=png&q=95&bgcolor=f5f5f5' },
  { id: 5, name: 'Regenerative Organic Certified® Cotton Crewneck', condition: 'Like New', category : 'Jackets', price: '$80', originalPrice: '$120', image: 'https://www.patagonia.ca/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw969ff83b/images/hi-res/26346_WAVB.jpg?sw=512&sh=512&sfrm=png&q=95&bgcolor=f5f5f5' },
  { id: 6, name: 'Womens Down Sweater™ Hoody', condition: 'Good', category : 'Jackets',price: '$40', originalPrice: '$60', image: 'https://www.patagonia.ca/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwdc8ee975/images/hi-res/84712_CHLE.jpg?sw=512&sh=512&sfrm=png&q=95&bgcolor=f5f5f5' },
  { id: 7, name: 'Shearling Fleece Jacket', category : 'Hoodie', condition: 'Excellent', price: '$50', originalPrice: '$80', image: 'https://www.patagonia.ca/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw08937013/images/hi-res/26125_XGRY.jpg?sw=512&sh=512&sfrm=png&q=95&bgcolor=f5f5f5' },
  { id: 8, name: 'Capilene® Cool Daily Graphic Hoody', condition: 'Like New', category : 'Hoodie', price: '$80', originalPrice: '$120', image: 'https://www.patagonia.ca/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwc4e589df/images/hi-res/45325_FTWX.jpg?sw=512&sh=512&sfrm=png&q=95&bgcolor=f5f5f5' },
  { id: 9, name: 'Boulder Fork Rain Jacket', condition: 'Good', category : 'Hoodie',price: '$40', originalPrice: '$60', image: 'https://www.patagonia.ca/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwee3e4e32/images/hi-res/85140_BSNG.jpg?sw=512&sh=512&sfrm=png&q=95&bgcolor=f5f5f5' },
  
  
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
          Revive the Adventure, Rewear the Passion. Explore Patagonia's Sustainability Hub – Elevate your style sustainably, one worn treasure at a time. Join the movement, shop conscious, and let your fashion make a positive impact on our planet.</p>
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
                    <Item index={itemIndex} item={item} name={item.name} image={item.image}
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