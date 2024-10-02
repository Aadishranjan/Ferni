import React from 'react'

function Sec1() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between mt-20 px-10 lg:px-40 text-white">
  <div className="flex-1 mt-10 lg:mt-0">
    <h1 className="text-4xl lg:text-[55px] font-semibold leading-tight lg:leading-[75px]">Modern Interior</h1>
    <h1 className="text-4xl lg:text-[55px] font-semibold leading-tight lg:leading-[75px] mt-2 lg:mt-0">Design Studio</h1>
    <p className="mt-5 text-gray-300 text-lg max-w-md leading-relaxed">
      Donec vitae odio quis nisi dapibus malesuada. Nunc ac aliquet velit.
      Aliquam vulputate velit imperdiet dolor tempor tristique.
    </p>

    <div className="flex gap-4 mt-8">
      <a href="#" className="bg-yellow-400 text-gray-900 px-5 py-3 rounded-full font-semibold text-lg shadow-lg">Shop Now</a>
      <a href="#" className="border-2 border-gray-300 text-gray-300 px-5 py-3 rounded-full font-semibold text-lg">Explore</a>
    </div>
  </div>

  <div className="flex-1 flex justify-center lg:justify-end mt-10 lg:mt-0">
    <img className="w-[350px] lg:w-[600px] h-auto object-cover" src="./Sofa.png" alt="Sofa" />
  </div>
</section>

    )
}

export default Sec1