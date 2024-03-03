import React from 'react';
import styles from './page.module.css';

const ProductInfo = ({ product }) => {
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
                <p id={styles.price}>${product.price}</p>
                <button id={styles.addToCart}>Add to Cart</button>

            </div>
            <div id={styles.productDescription}>
                <h3>Description</h3>
                <p>{product.description}</p>
            </div>
        </div>
    );
};
export default ProductInfo;