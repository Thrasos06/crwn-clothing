import { useContext, useState, useEffect, Fragment } from "react";
import { useParams, Routes, Route } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";
import Product from "../product/product.component";

import { CategoriesContext } from "../../contexts/categories.context";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  const generateLinkUrl = (productName) => {
    return `/shop/${category}/${productName
      .replace(/\s+/g, "-")
      .toLowerCase()}`;
  };

  return (
    <Fragment>
      <h1 className="category-name">{category.toUpperCase()}</h1>
      <div className="category-component-container">
        <Routes>
          <Route
            index
            element={
              products &&
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  linkUrl={generateLinkUrl(product.name)}
                />
              ))
            }
          />
          <Route
            path=":productName"
            element={<Product products={products} />}
          />
        </Routes>
      </div>
    </Fragment>
  );
};

export default Category;
