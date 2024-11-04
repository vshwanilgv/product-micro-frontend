import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productService";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div>
        <p>Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="justify-center content-center p-4">
      <h2 className="text-2xl font-bold mb-4">Product Details</h2>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-4 border">
        <img className="w-40 h-30 object-cover" src={product.imageUrl} alt={product.name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.name}</div>
          <p className="text-red text-base">${product.price}</p>
          <p className="text-gray-700 text-base">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;