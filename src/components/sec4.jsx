import React from 'react';

function ModernInteriorDesign() {
  return (
    <section className="w-full bg-[#F0F2F1] py-10 px-8 md:py-20 md:px-32 flex flex-col md:flex-row justify-between items-center">
      {/* Left Images Section */}
      <div className="w-full md:w-1/2 flex relative mb-8 md:mb-0">
        {/* Dotted Background Element */}
        <div className="absolute top-0 left-0 w-12 h-12 md:w-20 md:h-20 bg-yellow-400 opacity-40 rounded-full"></div>

        {/* First Image */}
        <img
          src="./img2.jpg"
          alt="Living Room"
          className="w-[200px] md:w-[280px] h-auto rounded-lg object-cover z-10"
        />

        {/* Second Image */}
        <img
          src="./img3.jpg"
          alt="Chair"
          className="w-[150px] md:w-[200px] h-[100px] md:h-[120px] rounded-lg object-cover absolute top-[0px] left-[195px] md:top-[0px] md:left-[295px] z-20"
        />

        {/* Third Image */}
        <img
          src="./img4.jpg"
          alt="Stool"
          className="w-[180px] md:w-[250px] h-[230px] md:h-[310px] rounded-lg object-cover absolute top-[100px] left-[150px] md:top-[130px] md:left-[250px] z-30"
        />
      </div>

      {/* Right Content Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
          We Help You Make Modern Interior Design
        </h2>
        <p className="text-gray-500 mb-6 md:mb-8">
          Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada.
          Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>

        {/* List of Features */}
        <ul className="space-y-2 md:space-y-4">
          <li className="text-gray-500 flex items-center justify-center md:justify-start">
            <span className="inline-block w-2 h-2 bg-black rounded-full mr-2 md:mr-4"></span>
            Donec vitae odio quis nisl dapibus malesuada.
          </li>
          <li className="text-gray-500 flex items-center justify-center md:justify-start">
            <span className="inline-block w-2 h-2 bg-black rounded-full mr-2 md:mr-4"></span>
            Donec vitae odio quis nisl dapibus malesuada.
          </li>
          <li className="text-gray-500 flex items-center justify-center md:justify-start">
            <span className="inline-block w-2 h-2 bg-black rounded-full mr-2 md:mr-4"></span>
            Donec vitae odio quis nisl dapibus malesuada.
          </li>
          <li className="text-gray-500 flex items-center justify-center md:justify-start">
            <span className="inline-block w-2 h-2 bg-black rounded-full mr-2 md:mr-4"></span>
            Donec vitae odio quis nisl dapibus malesuada.
          </li>
        </ul>

        {/* Explore Button */}
        <button className="mt-6 md:mt-8 bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-full">
          Explore
        </button>
      </div>
    </section>
  );
}

export default ModernInteriorDesign;
