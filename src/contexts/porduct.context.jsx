import { createContext, useState, useEffect } from "react";
import PRODUCT_DATA from "../shop-data.json";

export const ProductContext = createContext({
  currentProducts: [],
  setCurrentProducts: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const value = { products, setProducts };

  useEffect(() => {
    setProducts(PRODUCT_DATA);
  }, []);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
