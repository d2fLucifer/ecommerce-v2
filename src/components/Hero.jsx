import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Hero = () => {
  return (
    <div className=" flex flex-row gap-10">
      <div className="basis-1/6  border-r py-10   ">
        <ul className="flex flex-col gap-2 font-Poppins font-medium     ">
          <li className="top-list-menu">Technology</li>
          <li className="top-list-menu">Groceries</li>
          <li className="top-list-menu">Health</li>
          <li className="top-list-menu">Medicine</li>
          <li className="top-list-menu">School</li>
        </ul>
      </div>
      <div className="basis-5/6  lg:flex flex-row justify-between bg-black w-full mt-[34px] ">
        <div className="text-gray-100 my-auto flex flex-col gap-12 ml-16 justify-center">
          <div>
            <AppleIcon fontSize="large" />
            <p className=" ml-4 text-lg inline-block">iPhone 14 Series</p>
          </div>

          <h2 className="text-5xl inline-block font-bold">
            Up to 10% off Voucher
          </h2>
          <span className="inline-block cursor-pointer text-lg border-gray-50  p-2">
            Shop now
            <ArrowForwardIcon />
          </span>
        </div>

        <img
          src="https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JMQUE6ZItw78EOtLANp~~7jmZDDqe6KaMNXFgeD8LWJjNUZS8wlOzMtBwoM9POxz9eJsz~QryHHmpwHp36QEmcgBo7~uXTFSpSYkAlI80Qj2qOGSpyFvgTnOaSJIgCQU1Hx-NsONVyau3vVAoWfFMl75VgTQsVcnIXhA3xnQp4-U~0y-9k6T8HpuriVsqv03V-LZda1fpJDgzOBT6PU9~nCEnhV6QNpkvwd~EC5HmkmRnzK8aceJ30DVEHQnXZmsRv0lN9bLvcyw2mS~wmf4VIgvJcaFig10Z8m0VYjmleyJ5RlHQ-XroORozcJw2PwtfL~vIvYCTwWgFArhPBr00Q__"
          alt=""
          width={496}
          height={352}
          className="mt-12 "
        />
      </div>
    </div>
  );
};

export default Hero;
