import React from 'react';
import "./Product.css";

const Product = (props) => {
    console.log(props.product);
    const {img, name, seller,price,stock} = props.product
    return (
    <div className="product">
        <div>
            <img src={img} alt=""/>
        </div>
        <div>
          <h4 className="product-name">{name}</h4>
          <br/>
          <p><small>By:{seller}</small></p>
          <p>${price}</p>
          <br/>
          <p><small>only {stock} left - Order soon!!!</small></p>
        </div>    
        
    </div>
    );
};

export default Product;