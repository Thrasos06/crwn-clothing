import './checkout.styles.scss'

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

const Checkout = () => {

    const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <h1 className='chekout-header'>Checkout</h1>

            <div className='header-bar'>
                <span>Product</span>
                <span>Description</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Remove</span>
            </div>

            <div className='cart-item-grid'>
                {cartItems.map( (cartItem) => {
                    const { name, quantity, price, id } = cartItem;
                    return (
                        <div className='item' key={id}>
                          <img src={cartItem.imageUrl} alt={cartItem.name} />
                          <h1 className='item-box'>{name}</h1>
                          <div className='quantity-box item-box'>
                             <span onClick={() => removeItemFromCart(cartItem)}>decrement</span>
                             <span>{quantity}</span>
                             <span onClick={() => addItemToCart(cartItem)}>increment</span>
                          </div>
                          <span className='item-box'>{price * quantity}$</span>
                          <span className='item-box' onClick={() => removeItemFromCart(cartItem)}>Remove</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Checkout;