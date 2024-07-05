import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';


import './checkout-item.styles.scss';


const CheckoutItem = ({cartItem}) => {

    const { name, imageUrl, price, quantity } = cartItem;

    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);


    return (
        <div className='item'>

           <img src={imageUrl} alt={name} />

           <h3 className='item-box'>{name}</h3>
            <div className='quantity-box item-box'>
                <span className='decrement-item' onClick={removeItemHandler}>&#10094;</span>
                <span>{quantity}</span>
                <span className='increment-item' onClick={addItemHandler}>&#10095;</span>
            </div>
            <span className='item-box'>{price * quantity}$ {quantity > 1 && ` (${price}$ each)`}</span>

           <div className='item-box'>
               <span className='clear-item' onClick={clearItemHandler}>&#10005;</span>
           </div> 

        </div>
    )

}

export default CheckoutItem;