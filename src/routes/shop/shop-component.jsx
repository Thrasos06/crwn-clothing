import React from "react";
import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

import { ProductContext } from "../../contexts/porduct.context";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;
