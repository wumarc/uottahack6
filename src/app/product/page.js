// Create a product detail page
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ProductInfo from '../components/productInfo';
import Image from 'next/image';
import logo from '../../../public/images/logo.png';


export default function Product() {
    
    const product = {
        id: 1,
        name: "Amazing Widget",
        description: "Whether you’re seeking boulders and alpine views or stalking rainbow trout, this low-profile, waterproof jacket will keep you dry and provide rain protection from the fork in the trail to the places less traveled, and back again. The 3-layer shell meets our H2No® Performance Standard for exceptional waterproof/breathable protection and the fabrics, membrane and durable water repellent (DWR) finish are made without perfluorinated chemicals (PFCs/PFAS). Made in a Fair Trade Certified™ factory.",
        price: 49.99,
        imageUrl: "https://www.patagonia.ca/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw8de7e495/images/hi-res/20655_BSNG.jpg?sw=512&sh=512&sfrm=png&q=95&bgcolor=f5f5f5",
        rating: 4.5,
        reviews: 10,
        brand: "Patagonia",
        model: "881046-0010"
    };

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
