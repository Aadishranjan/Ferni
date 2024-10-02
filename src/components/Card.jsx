import React from 'react';
import { FiPlus } from 'react-icons/fi';

function Card({ data }) {
  return (
    <div className="p-6 rounded-lg flex flex-col items-center group relative">
      <img src={data.img} alt={data.name} className="w-[200px] h-auto mb-4 object-cover" />
      <h3 className="text-lg font-semibold">{data.name}</h3>
      <p className="text-gray-600">{data.rupee}</p>

      {/* Plus Icon (Initially hidden) */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="bg-black text-white p-2 rounded-full">
          <FiPlus />
        </div>
      </div>
    </div>
  );
}

export default Card;
