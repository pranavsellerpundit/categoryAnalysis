import React from "react";
import { TopPerformingProductsTable } from ".";

const TopPositionCard = () => {
  return (
    <div className="">
      <div>
        <div className="text-[#16252D80] space-y-4 overflow-y-auto h-[358px] shadow-md shadow-gray-300 bg-white rounded-2xl">
          <div className="">
            <div className="text-black text-xl font-semibold pt-4 pl-4">
              TOP 10 PERFORMING PRODUCTS
            </div>
            <div className="flex space-x-64 mt-4 pl-4">
              <div className="">
                <p>Product</p>
              </div>
              <div className="flex space-x-16">
                <p>Retails Price</p>
                <p>Market Share</p>
              </div>
            </div>
          </div>
          <div className="w-full border-t-2 border-gray"></div>
          <div className=" pl-4 pb-4">
            <TopPerformingProductsTable />
            <TopPerformingProductsTable />
            <TopPerformingProductsTable />
            <TopPerformingProductsTable />
            <TopPerformingProductsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPositionCard;
