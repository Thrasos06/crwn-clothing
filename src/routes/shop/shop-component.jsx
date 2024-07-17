import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import "./shop.styles.scss";

const Shop = () => {
  return (
    <Fragment>
      <h3 className="shop-title">SHOP COLLECTIONS</h3>

      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category/*" element={<Category />} />
      </Routes>
    </Fragment>
  );
};

export default Shop;
