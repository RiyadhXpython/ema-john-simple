import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity,key,price} = props.product
    const reviewItemStyle ={
        borderBottom:"1px solid black",
        marginBottom:"5px",
        paddingBottom:"5px",
        marginLeft:"200px",
    };
    return (
        <div style={reviewItemStyle}>
            <h4 className="review-item">{name}</h4>
            <p>quantity: {quantity}</p>
            <p><small>${price}</small></p>
            <button 
               className="main-button"
               onClick={() => props.removeProduct(key)}
            >Remove </button>
        </div>
    );
};

export default ReviewItem;