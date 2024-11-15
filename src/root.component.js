import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './output.css';
import restaurant from './images/restaurant.jpg';
import snacks from './images/snacks.jpeg';
import drinks from './images/drinks.jpg';
import lunch from './images/lunch.jpeg';
import Card from './components/Card';
import bakery from './images/bakery.jpeg';
import cake from './images/cake.jpeg';
import diary from './images/diaryproducts.jpeg';

export default function Root(props) {

  const navigate = useNavigate();
;

  return (
  
  <div className="min-h-full  px-6 py-12 lg:px-8 justify-center ">
    <div className="relative isolate overflow-hidden pt-14"></div>
     <img 
      src={restaurant}
      alt=""
      className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
      />
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-sm sm:-top-80"
        aria-hidden="false"
      ></div>
    <div className="flex flex-col w-full   my-2">   
      <h1 className="text-4xl font-bold text-center tracking-tight text-gray-900 sm:text-6xl">
                Your One Stop Shop for Everything
      </h1>
      <p className="text-lg text-gray-600 text-center my-4 ">Explore best and quality products</p>
    </div>

    <p className="text-lg text-gray-600 text-center my-6 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


  <div className="flex flex-row w-full space-x-4 my-2 justify-center">
    <Card title="Lunch" description="Explore best and quality products" image={lunch} />
    <Card title="Snacks" description="Explore best and quality products" image={snacks} />
    <Card title="Soft Drinks" description="Explore best and quality products" image={drinks} />
   
  </div>
  <div className="flex flex-row w-full space-x-4 my-2 justify-center">
    <Card title="Diary Products" description="Explore best and quality products" image={diary} />
    <Card title="Cakes" description="Explore best and quality products" image={cake} />
    <Card title="Bakery Items" description="Explore best and quality products" image={bakery} />
   
  </div>
  </div>
  
  );

}
