import ProductCard from "../product-card/product-card.component";

import { Link } from "react-router-dom";

import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  const generateLinkUrl = (productName) => {
    return `/shop/${title}/${productName.replace(/\s+/g, "-").toLowerCase()}`;
  };

  return (
    <div className="category-preview-container">
      <h2>
        <Link to={`/shop/${title.toLowerCase()}`} className="title">
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              linkUrl={generateLinkUrl(product.name)}
            />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
