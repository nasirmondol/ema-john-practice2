import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = ({product, handleAddToCart}) => {
    // const {product, handleAddToCart} = props.product;
    const {img, name, price, seller,  ratings} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p >Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings}</small></p>
            </div>
            <button className='btn-info'>
                <p className='btn-text' onClick={()=> handleAddToCart(product)}>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;