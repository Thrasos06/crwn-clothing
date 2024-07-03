import './checkout.styles.scss'

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

const Checkout = () => {

    const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);

    return (
        <div className='checkout-page'>
            <h1>Checkout</h1>

            <div>
                {cartItems.map( (cartItem) => {
                    const { name, quantity, price, id } = cartItem;
                    return (
                        <div key={id}>
                        <h1>{name}</h1>
                        <span>{quantity}</span>
                        <span>{price}</span>
                        <br />
                        <span onClick={() => addItemToCart(cartItem)}>increment</span>
                        <br />
                        <span onClick={() => removeItemFromCart(cartItem)}>decrement</span>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Checkout;