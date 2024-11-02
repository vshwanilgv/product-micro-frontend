import React from "react";

const ProductDetails = ({ product }) => (
  <div>
    {product ? (
      <>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </>
    ) : (
      <p>Select a product to view details.</p>
    )}
  </div>
);

export default ProductDetails;
