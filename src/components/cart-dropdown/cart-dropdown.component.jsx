import React from "react";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import {
  CartDropdownContainer,
  // EmptyMessage,
  CartItems,
  EmptyMessage,
} from "./cart.dropdown.styles";

const CartDropdown = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutPage = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is emty</EmptyMessage>
        )}
      </CartItems>

      <div className="total-amount">
        <span>Total: {cartTotal}$</span>
      </div>

      <Button onClick={goToCheckoutPage}>Go to checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
