import React from "react";

import { Link } from "react-router-dom";

import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  return (
    <Link
      to={`/shop/${category.title.toLowerCase()}`}
      className="category-container"
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      ></div>
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </div>
    </Link>
  );
};

export default CategoryItem;
