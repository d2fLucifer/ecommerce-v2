import React from "react";
import Product from "./Product";
const BestSellingProducts = () => {
  return (
    <div className="py-12 flex flex-col ">
      <div className="flex flex-row justify-between">
        <div className="relavtive flex flex-col gap-2">
          <span className="bg-red-500 h-7 w-4 absolute left-[270px] ml-[-35px]"></span>
          <span className="font-semibold border-red-400 text-lg text-red-500 font-Poppins ml-10 ">
            This Month
          </span>
          <h3 className="text-4xl font-semibold ml-2">Best Selling Products</h3>
        </div>
        <button className="flex gap-10 mt-10 bg-red-500 py-4 px-12 text-white font-medium hover:font-bold hover:bg-red-600 ">
          View All
        </button>
      </div>
      <div className="flex flex-row py-12  gap-8  ">
        {[1, 1, 1, 1].map((i) => (
          <Product key={i} />
        ))}
      </div>
    </div>
  );
};

export default BestSellingProducts;
