import React, { useEffect, useState } from "react";
import ProductDetails from "./components/ProductDetails";
import ProductCard from "./components/ProductCrad";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "./services/productService";
import './output.css';

export default function Root(props) {
  
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleSelectProduct = (product) => {
    navigate(`/product/${product.id}`);
  };

  return (
  
    <div className="container mx-auto p-4">
    <div className="text-3xl font-bold mb-4 text-blue">Products</div>
    <p className="text-blue mb-8">Explore Best Products</p>
    <div className="flex flex-wrap -mx-2">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onSelectProduct={handleSelectProduct} />
      ))}
    </div>
  </div>
  
  );

}
