import React from "react";

const ProductItem = ({ product, onClick }) => (
  <li onClick={onClick}>
    {product.name} - ${product.price}
  </li>
);

export default ProductItem;
