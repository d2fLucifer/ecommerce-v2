import React from "react";
import Divider from "@mui/material/Divider";
const CategoriesList = () => {
  return (
    <div className="py-12 flex flex-col gap-16 ">
      <div className="flex flex-row justify-between">
        <div className="relavtive flex flex-col gap-2">
          <span className="bg-red-500 h-7 w-4 absolute left-[270px] ml-[-35px]"></span>
          <span className="font-semibold border-red-400 text-lg text-red-500 font-Poppins ml-10 ">
            Categories
          </span>
          <h3 className="text-4xl font-semibold ml-2">Browse By Category</h3>
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
      <div className="flex flex-row gap-1  justify-around">
        {[1, 1, 1, 1, 1].map((i) => (
          <div className="justify-center font-Poppins border px-14 py-7 cursor-pointer hover:bg-red-500 hover:text-white">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Category-CellPhone" clip-path="url(#clip0_848_868)">
                <path
                  id="Vector"
                  d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M25.6667 7H31.1354"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_3"
                  d="M28 44.0052V44.0305"
                  stroke="black"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <line
                  id="Line 8"
                  x1="15.1667"
                  y1="39.8334"
                  x2="40.8333"
                  y2="39.8334"
                  stroke="black"
                  stroke-width="2"
                />
              </g>
              <defs>
                <clipPath id="clip0_848_868">
                  <rect width="56" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="mt-6">Phones</p>
          </div>
        ))}
      </div>
      <Divider />
    </div>
  );
};

export default CategoriesList;
