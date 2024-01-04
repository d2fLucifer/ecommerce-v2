import React from "react";
import Product from "./Product";

const ExploreProductSection = () => {
  return (
    <div className="py-12 flex flex-col gap-16 ">
      <div className="flex flex-row justify-between">
        <div className="relavtive flex flex-col gap-2">
          <span className="bg-red-500 h-7 w-4 absolute left-[270px] ml-[-35px]"></span>
          <span className="font-semibold border-red-400 text-lg text-red-500 font-Poppins ml-10 ">
            Our Products{" "}
          </span>
          <h3 className="text-4xl font-semibold ml-2">Explore Our Products</h3>
        </div>
        <div className="flex gap-10 mt-10  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-12 h-12 bg-gray-50 rounded-full p-3 cursor-pointer   "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-12 h-12 bg-gray-50 rounded-full p-3  cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-5 grid-flow-row gap-4">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((i) => (
          <Product key={i} />
        ))}
      </div>
      <button className="">
        <span className="bg-red-500 py-3 px-7 font-semibold text-white hover:font-bold hover:bg-red-600">
          {" "}
          View All Products
        </span>
      </button>
    </div>
  );
};

export default ExploreProductSection;
