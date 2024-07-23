import React from "react";

import {
  DirectoryItemContainer,
  Body,
  BackgroundImage,
} from "./category-item.styles";

const CategoryItem = ({ category }) => {
  return (
    <DirectoryItemContainer to={`/shop/${category.title.toLowerCase()}`}>
      <BackgroundImage imageUrl={category.imageUrl}></BackgroundImage>
      <Body>
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default CategoryItem;
