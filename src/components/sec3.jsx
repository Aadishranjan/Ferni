import React from 'react';
import { FiTruck, FiShoppingBag, FiHeadphones, FiRefreshCw } from 'react-icons/fi';

function Sec3() {
  return (
    <section className="w-full bg-[#F0F2F1] py-20 px-8 md:px-16 lg:px-32 flex flex-col lg:flex-row justify-between items-center">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Why Choose Us</h2>
        <p className="text-gray-500 mb-8">
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Icon Box */}
          <div className="flex items-start space-x-4">
            <FiTruck className="text-3xl text-black" />
            <div>
              <h3 className="text-md md:text-lg font-semibold">Fast & Free Shipping</h3>
              <p className="text-gray-500">Donec vitae odio quis nisl dapibus malesuada.</p>
            </div>
          </div>

          {/* Second Icon Box */}
          <div className="flex items-start space-x-4">
            <FiShoppingBag className="text-3xl text-black" />
            <div>
              <h3 className="text-md md:text-lg font-semibold">Easy to Shop</h3>
              <p className="text-gray-500">Donec vitae odio quis nisl dapibus malesuada.</p>
            </div>
          </div>

          {/* Third Icon Box */}
          <div className="flex items-start space-x-4">
            <FiHeadphones className="text-3xl text-black" />
            <div>
              <h3 className="text-md md:text-lg font-semibold">24/7 Support</h3>
              <p className="text-gray-500">Donec vitae odio quis nisl dapibus malesuada.</p>
            </div>
          </div>

          {/* Fourth Icon Box */}
          <div className="flex items-start space-x-4">
            <FiRefreshCw className="text-3xl text-black" />
            <div>
              <h3 className="text-md md:text-lg font-semibold">Hassle Free Returns</h3>
              <p className="text-gray-500">Donec vitae odio quis nisl dapibus malesuada.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
        <div className="absolute top-0 right-[-10px] w-20 h-20 bg-yellow-400 opacity-40 rounded-full"></div>
        <img
          src="./img1.jpg"
          alt="Living Room"
          className="rounded-lg w-[250px] md:w-[300px] lg:w-[350px] h-auto"
        />
      </div>
    </section>
  );
}

export default Sec3;
