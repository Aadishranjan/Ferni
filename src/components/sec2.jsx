import React from 'react';
import Card from './Card.jsx';

function Sec2() {
  const data = [
    {
      img: "./img6.png",
      name: "Nordic Chair",
      rupee: "$50.00"
    },
    {
      img: "./img5.png",
      name: "Kruzo Aero Chair",
      rupee: "$78.00"
    },
    {
      img: "./img7.png",
      name: "Ergonomic Chair",
      rupee: "$43.00"
    },
  ];

  return (
    <div className="w-full h-auto bg-[#F0F2F1] px-8 py-10 md:px-20 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        
        {/* Left Section with Text */}
        <div className="md:col-span-1 text-center md:text-left">
          <h1 className="font-bold text-3xl md:text-4xl mb-4 md:mb-6">
            Crafted with excellent material.
          </h1>
          <p className="text-gray-500 mb-6 md:mb-8">
            Donec vitae odio quis nisl dapibus malesuada. Nulla ac aliquet velit.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all">
            Explore
          </button>
        </div>

        {/* Chairs Section */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Sec2;
