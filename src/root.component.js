import React, { useState } from "react";

export default function Root(props) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <div>
      <h1>Products</h1>
      <p>Explore Best Products</p>
     
    </div>
  );

}
