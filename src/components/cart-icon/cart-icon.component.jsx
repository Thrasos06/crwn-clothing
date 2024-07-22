import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
  ShoppingIcon,
  CartIconContainer,
  ItemCoount,
} from "./cart-icons.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer
      className="cart-icon-container"
      onClick={toogleIsCartOpen}
    >
      <ShoppingIcon className="shopping-icon" />
      <ItemCoount className="item-count">{cartCount}</ItemCoount>
    </CartIconContainer>
  );
};

export default CartIcon;
