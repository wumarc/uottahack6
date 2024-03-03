import React from 'react';
import styles from './page.module.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';


export default function ProductInfo({ product }) {
    return (
        <div id={styles.productContainer}>
            <div id={styles.productImage}>
                <img id={styles.img} src={product.image} alt={product.name} />
            </div>
            <div id={styles.productDetails}>
                <h1>{product.name}</h1>
                <p>{product.brand} | {product.model}</p>
                <div id={styles.rating}>
                    <p>Rating: {product.rating} ({product.reviews} reviews)</p>
                </div>
                <p id={styles.price}>{product.price}</p>
                <p style={{ textDecoration: 'line-through' }}>
          {product.originalPrice} </p>
                
                {/* Metrics */}
                <p>CO2 Emission Coefficient (in pounds)</p>
                <ProgressBar animated variant='primary' now={60} label={`${60} pounds CO2`} />
                
                <p>Emission Coefficient</p>
                
                <p>Energy Consumption</p>
                
                <p>Litres of water saved to date</p>

                <p>Average CO2 emission rate</p>

                <p>* 1 pound of CO2 is 3,000 liters of water</p>

                <Button variant="success">Add to Cart</Button>
                {/* Add back if we want to use mik's style id={styles.addToCart} */}

            </div>
            <div id={styles.productDescription}>
                <h3>Description</h3>
                <p>Whether you’re seeking boulders and alpine views or stalking 
                    rainbow trout, this low-profile, waterproof jacket will keep 
                    you dry and provide rain protection from the fork in the trail 
                    to the places less traveled, and back again. The 3-layer shell 
                    meets our H2No® Performance Standard for exceptional 
                    waterproof/breathable protection and the fabrics, 
                    membrane and durable water repellent (DWR) finish are 
                    made without perfluorinated chemicals (PFCs/PFAS). 
                    Made in a Fair Trade Certified™ factory.</p>
            </div>
        </div>
    );
};