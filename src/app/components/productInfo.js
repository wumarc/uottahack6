import React from 'react';
import styles from './page.module.css';

const ProductInfo = ({ product }) => {
    return (
        <div id='productContainer'>
            <div id={styles.productImage}>
                <img id={styles.img} src={product.imageUrl} alt={product.name} />
            </div>
            <div id={styles.productDetails}>
                <h1>{product.name}</h1>
                <p>{product.brand} | {product.model}</p>
            </div>
            <p>{product.description}</p>
            <p id={styles.price}>${product.price}</p>
            
            <button id={styles.addToCart}>Add to Cart</button>
        </div>
        

    );
};
export default ProductInfo;