import React from 'react';
import './CheckoutProduct.css';
import { getBasketTotal } from './reducer';
import StarIcon from '@material-ui/icons/Star';

function CheckoutProduct({id, title, image, price, rating}) {
    return (
        <div className ="checkoutProduct">
            <img className ="checkoutProduct__image" src={image}/>
            <div  className ="checkoutProduct__info">
                <p  className ="checkoutProduct__title">{title}</p>
                <p  className ="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div  className ="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i)=>(
                        <StarIcon/>
                    ))}
                </div>
                <button>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
