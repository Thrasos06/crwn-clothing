import React from "react";
import { useContext } from "react";

import { Link } from "react-router-dom";

import "./product-card.styles.scss";

import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product, linkUrl }) => {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <Link to={linkUrl}>
        <img src={imageUrl} alt={`${name}`} />
      </Link>

      <Link to={linkUrl}>
        <div className="footer">
          <span className="name">{name}</span>
          <span className="price">{price}$</span>
        </div>
      </Link>

      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
