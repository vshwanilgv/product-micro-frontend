import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { getAllProducts } from "../services/productService";

const ProductList = ({ onSelectProduct }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(setProducts).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onClick={() => onSelectProduct(product)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
