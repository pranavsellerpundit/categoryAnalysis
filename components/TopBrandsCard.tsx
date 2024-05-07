import React from "react";
import { BrandCardGrey } from ".";

const TopBrandsCard = () => {
  return (
    <div className="">
      <div className="text-[#16252D80] space-y-4 pb-[56px] shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
        <div className="">
          <div className="text-black text-xl font-semibold">TOP 4 BRANDS</div>
          <p>Products in specific price range</p>
        </div>
        <div className=" text-black grid grid-cols-2 gap-2">
          <BrandCardGrey />
          <BrandCardGrey />
          <BrandCardGrey />
          <BrandCardGrey />
        </div>
      </div>
    </div>
  );
};

export default TopBrandsCard;
