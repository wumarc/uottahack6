import React from 'react';
import styles from './page.module.css';

const ProductInfo = ({ product }) => {
    return (
        <div id='container'>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p id={styles.price}>${product.price}</p>
            <img id={styles.img} src={product.imageUrl} alt={product.name} />
            
            <button id={styles.addToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductInfo;