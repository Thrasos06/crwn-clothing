import './checkout.styles.scss'

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {

    const { cartItems, cartTotal } = useContext(CartContext);

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
                    return (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    )
                })}
            </div>

            <div className='total-amount'>
                <span>Total: {cartTotal}$</span>
            </div>
        </div>
    )
}

export default Checkout;