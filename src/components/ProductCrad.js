import React from "react";


export default function ProductCard({ product ,onSelectProduct}) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-4 border">
      <div className="w-40 h-40">
        <img className="w-full h-full object-cover" src={product.imageUrl} alt={product.name} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-red text-base">${product.price}</p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => onSelectProduct(product)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}