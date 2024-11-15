import React from 'react';

const Card = ({ title, description,image }) => {
  return (
    <div className="w-1/4 border rounded-lg p-4 shadow-md ">
      <img src={image} alt="" className="w-full h-48 object-cover" />
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>

    </div>
  );
};

export default Card;