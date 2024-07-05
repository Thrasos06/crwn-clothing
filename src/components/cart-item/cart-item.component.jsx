import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';


import './cart-item.styles.scss';


const CartItem = ({cartItem}) => {
    
    const { name, imageUrl, price, quantity } = cartItem;

    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);

    return (
        <div className='cart-item'>
            <img src={imageUrl} alt={name}/>

            <div className='item-description'>
                <h3>{name}</h3>
                <div className='item-content'>
                    <div className='quantity-box'>
                        <span className='decrement-item' onClick={removeItemHandler}>&#10094;</span>
                        <span>{quantity}</span>
                        <span className='increment-item' onClick={addItemHandler}>&#10095;</span>
                    </div>
                    <span className='price'>{price * quantity}$ { quantity >1 && `(${price}$ each)`}</span>
                    <div>
                    <span className='clear-item' onClick={clearItemHandler}>&#10005;</span>
                    </div>
                </div> 
            </div>
            
        </div>
    );

}

export default CartItem;