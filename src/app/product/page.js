// Create a product detail page

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ProductInfo from '../components/productInfo';

export default function Product() {
    const product = {
        id: 1,
        name: "Amazing Widget",
        description: "This widget is amazing. It does everything you need and more.",
        price: 49.99,
        imageUrl: "https://example.com/image.jpg"
    };

    return (
        <Container>
        {/* Header */}
        <Row className='justify-content-md-center'>
            <Col md="auto">
            <h1>Patagonia</h1>
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
