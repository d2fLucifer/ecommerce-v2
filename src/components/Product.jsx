import React from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
const Product = () => {
  return (
    <Link to="/products/1">
      <div className=" flex flex-col gap-2 ">
        <div className=" bg-gray-200">
          <img
            className="object-contain cursor-pointer"
            src="https://s3-alpha-sig.figma.com/img/ee9a/3800/1e9f94261b28e16ea21bacb4144473e8?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G2zoqq8MqVASuAwnLap7oG5inL8l8n30Y3DX-EseCmKl4cU3dMCLPJM4TO-aWOxi~Sxy-RufmDboOC0TLkRxide1olLS9YwEP6crOHlSX742BDqlEQXWhrrihr~kX7YKQrL2Vb0vVhom5Ypv6Mx05eevGCenihScyfuxnIhYArWIrEIQPmWxR6rx6ndtpSxEnc1BPhm37awsIiSb6UBQdzvfMNeEuXHzQ~o8Lb4yxz4Pvwwtb8MKrjHZ5X0qgfNNheSgWUnxs972POeRXapcJA1So9yJ2kE7VitiY8yJendsyNMniMlpMkuyeSL~3o4~VA7EtSGIp2vxU~glcoN3AA__"
            alt=""
          />
        </div>
        <h3 className="text-xl cursor-pointer">The north coat</h3>
        <span className="text-red-500 text-lg font-medium font-Poppins">
          $230
        </span>
        <div>
          <Rating name="read-only" value={2} readOnly />
        </div>
      </div>
    </Link>
  );
};

export default Product;
