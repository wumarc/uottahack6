// Create a product detail page
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ProductInfo from '../../components/productInfo';
import Image from 'next/image';
import logo from '../../../../public/images/logo.png';
import items from '../../components/items';
import styles from '../page.module.css';

export default function Product({params}) {
    const product = items.find(item => item.id === parseInt(params.id));
    return (
        <Container className={styles.pageDetail}>

        {/* Header */}
        <Row className='justify-content-md-center'>
        <Col xl='12' md='auto' className='justify-content-md-center'>
          {/* Display the image called logo.png */}
          <Image src={logo} alt='logo' height={80} />
        </Col>
      </Row>
    
        {/* Content */}
        <Row>
            <Col>
                <h1>Product Detail</h1>
            </Col>
        </Row>

        <Row>
            
            <ProductInfo product={product} />
        </Row>
    
        </Container>
    );
}
