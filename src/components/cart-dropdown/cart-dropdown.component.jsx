import React from "react";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {

  const { cartItems, cartTotal } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutPage = () => {
    navigate("/checkout");
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map( item => <CartItem key={item} cartItem={item} />)}
      </div>

      <div className='total-amount'>
          <span>Total: {cartTotal}$</span>
      </div>

      <Button onClick={goToCheckoutPage}>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
