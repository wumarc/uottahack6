// Create a product detail page

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function Product() {
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
    
        </Container>
    );
}
