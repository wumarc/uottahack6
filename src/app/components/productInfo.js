import React from 'react';
import styles from './page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

const ProductInfo = ({ product }) => {
    return (
        <div id={styles.productContainer}>
            <div id={styles.productImage}>
                <img id={styles.img} src={product.imageUrl} alt={product.name} />
            </div>
            <div id={styles.productDetails}>
                <h1>{product.name}</h1>
                <p>{product.brand} | {product.model}</p>
                <div id={styles.rating}>
                    <p>Rating: {product.rating} ({product.reviews} reviews)</p>
                </div>
                <p id={styles.price}>${product.price}</p>
                <button id={styles.addToCart}>Add to Cart</button>

                {/* Metrics */}
                <h3>Carbon Footprint Breakdown</h3>

                <ProgressBar animated variant='primary' now={60} label={`${60}%`} />
                <br/>

                <ProgressBar animated variant='info' now={30} label={`${30}%`} />
                <br/>

                <ProgressBar animated variant='warning' now={80} label={`${80}%`} />
                <br/>

                <ProgressBar animated variant='success' now={20} label={`${20}%`} />
                <br/>

                <p>Total Carbon Footprint</p>

            </div>
            <div id={styles.productDescription}>
                <h3>Description</h3>
                <p>{product.description}</p>
            </div>
        </div>
        

    );
};
export default ProductInfo;