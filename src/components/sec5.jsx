import React from 'react';

function ChairCollection() {
  return (
    <section className="w-full bg-[#F0F2F1] py-10 px-8 md:py-16 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* First Chair Item */}
        <div className="flex items-center space-x-4">
          <img
            src="./img6.png"
            alt="Nordic Chair"
            className="w-[100px] md:w-[120px] h-auto"
          />
          <div>
            <h3 className="text-lg font-semibold">Nordic Chair</h3>
            <p className="text-gray-500 text-sm">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio.
            </p>
            <a href="#" className="text-sm text-black mt-2">Read More</a>
          </div>
        </div>

        {/* Second Chair Item */}
        <div className="flex items-center space-x-4">
          <img
            src="./img5.png"
            alt="Kruzo Aero Chair"
            className="w-[100px] md:w-[120px] h-auto"
          />
          <div>
            <h3 className="text-lg font-semibold">Kruzo Aero Chair</h3>
            <p className="text-gray-500 text-sm">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio.
            </p>
            <a href="#" className="text-sm text-black mt-2">Read More</a>
          </div>
        </div>

        {/* Third Chair Item */}
        <div className="flex items-center space-x-4">
          <img
            src="./img7.png"
            alt="Ergonomic Chair"
            className="w-[100px] md:w-[120px] h-auto"
          />
          <div>
            <h3 className="text-lg font-semibold">Ergonomic Chair</h3>
            <p className="text-gray-500 text-sm">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio.
            </p>
            <a href="#" className="text-sm text-black mt-2">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChairCollection;
