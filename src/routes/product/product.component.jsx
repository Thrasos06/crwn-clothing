import React from "react";
import { useContext, Fragment } from "react";
import { useParams } from "react-router-dom";

import Button from "../../components/button/button.component";
import { CartContext } from "../../contexts/cart.context";

import "./product.styles.scss";

const Product = ({ products }) => {
  const { productName } = useParams();

  // Find the product by name
  const product = products.find(
    (prod) => prod.name.toLowerCase().replace(/\s+/g, "-") === productName
  );

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <Fragment>
      {product ? (
        <div className="product-container">
          <div className="product-image">
            <img src={product.imageUrl} alt={product.name} />
          </div>

          <div className="product-details">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            {/* Add more product details here */}
            <Button buttonType="inverted" onClick={addProductToCart}>
              Add to cart
            </Button>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </Fragment>
  );
};

export default Product;
