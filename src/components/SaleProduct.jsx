import React from "react";

const SaleProduct = () => {
  return (
    <div className="mt-12 flex flex-row justify-between bg-black cursor-pointer">
      <div className="text-white py-36 flex flex-col gap-8 mx-16 font-Poppins">
        <p className="text-green-500 text-xl font-bold">Categories</p>
        <span className="text-6xl ">Enhance Your Music Experience</span>
        <button className="flex justify-start">
          <span className="bg-green-500 py-2 px-6 text-xl ">Buy Now</span>
        </button>
      </div>

      <img
        src="https://s3-alpha-sig.figma.com/img/3cc9/43ca/7e210f637fc0504b7d93cd207df744c2?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W1Xn7qkeDNBYcuiADr1oSiTD40XuFYeE86NRC~WP37a1t4LXSboNFMQEdoa1vzpZauKHJnBKGVE0TX4DPCntLHTz0Cs2MJmVq7OU8ukCtPVlV4RT65B9JAAem6zNt4GoDg9Tc9sI7o~sW6SX6PwY~in8JgLSN3nA7lOjzp~iNS7DMyS6M3YH~UhrxBuz64JvgLAtRmzsUmQ~fPdOX6Mmzgefg21l17monrexDuXHNo4O08fi4a~vpYkAbbSEHc-M2~64aPm6Oszq43fhh945VQkWu2nPo0JnY6hKK6E8vc1iZmd-CMBiI3WfnsyrnAPFKhrPQKCbu0L6JzjiNwck4Q__"
        alt=""
        width={568}
        height={330}
      />
    </div>
  );
};

export default SaleProduct;
