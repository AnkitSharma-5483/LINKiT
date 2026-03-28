// components/DemoCards.tsx
// import React from "react";

// const Cards = () => {
//   return (
//     <div className="flex justify-center items-start w-8xl gap-4 p-16">
//       {/* Left Side - Two Cards */}
//       <div className="flex flex-col gap-4 w-4xl h-240">
//         <a href="" className="bg-purple-300 h-120 rounded-4xl shadow transition flex-1">
//             <img className="p-12 pt-20 pb-12" src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/680c13b834d3994a796896bd_all%20your%20things.avif" alt="" />
//             <div className="text-black font-medium text-xl xl:text-2xl 2xl:text-3xl p-12">Share every type of content in limitless ways</div>
//         </a>
//         <a href="" className="bg-lime-300 h-120 rounded-4xl shadow transition flex-1">
//             <img className="p-22 pt-16 pb-12" src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/680c16a391a7e027f3fbda59_products.avif" alt="" />
//             <div className="text-black font-medium text-xl xl:text-2xl 2xl:text-3xl pl-8">Sell products, collect payments and make monetization simple</div>
//         </a>
//       </div>
//       {/* Right Side - One Long Card */}
//       <div className="flex flex-col gap-4 w-4xl h-240">
//         <a href="" className="bg-blue-900 h-240 rounded-4xl shadow transition flex-1">
//             <img className="p-12 pl-20 pr-20" src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/68b80742d1d9216c45c6d6ea_group1597882005.avif" alt="" />
//             <div className="text-white font-medium text-xl xl:text-2xl 2xl:text-3xl pl-8 pt-3">Grow, own and engage your audience across all of your channels</div>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Cards;


import React from "react";

const Cards = () => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 xl:gap-6 px-2 sm:px-4 md:px-6 xl:px-12 py-6 sm:py-8 xl:py-16 max-w-screen-2xl mx-auto">
      
      {/* Left Side - Two Cards */}
      <div className="grid grid-rows-2 gap-3 sm:gap-4">
        <a href="" className="bg-purple-300 rounded-2xl sm:rounded-3xl xl:rounded-4xl shadow transition flex flex-col">
          <img
            className="w-full object-contain px-4 sm:px-6 md:px-8 xl:px-12 pt-6 sm:pt-10 xl:pt-20 pb-4 sm:pb-6"
            src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/680c13b834d3994a796896bd_all%20your%20things.avif"
            alt=""
          />
          <div className="text-black font-medium text-sm sm:text-base md:text-lg xl:text-3xl 2xl:text-4xl px-4 sm:px-6 xl:px-12 pb-6">
            Share every type of content in limitless ways
          </div>
        </a>

        <a href="" className="bg-lime-300 rounded-2xl sm:rounded-3xl xl:rounded-4xl shadow transition flex flex-col">
          <img
            className="w-full object-contain px-4 sm:px-6 md:px-8 xl:px-12 pt-6 sm:pt-8 xl:pt-16 pb-4 sm:pb-6"
            src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/680c16a391a7e027f3fbda59_products.avif"
            alt=""
          />
          <div className="text-black font-medium text-sm sm:text-base md:text-lg xl:text-3xl 2xl:text-4xl px-4 sm:px-6 xl:px-12 pb-6">
            Sell products, collect payments and make monetization simple
          </div>
        </a>
      </div>

      {/* Right Side - One Long Card */}
      <a href="" className="bg-blue-900 rounded-2xl sm:rounded-3xl xl:rounded-4xl shadow transition flex flex-col">
        <img
          className="w-full object-contain px-4 sm:px-6 md:px-10 xl:px-16 pt-6 sm:pt-10 xl:pt-16"
          src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/68b80742d1d9216c45c6d6ea_group1597882005.avif"
          alt=""
        />
        <div className="text-white font-medium text-sm sm:text-base md:text-lg xl:text-3xl 2xl:text-4xl px-4 sm:px-6 xl:px-12 py-6">
          Grow, own and engage your audience across all of your channels
        </div>
      </a>
    </div>
  );
};

export default Cards;