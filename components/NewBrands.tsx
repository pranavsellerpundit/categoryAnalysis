import React from "react";
import { NewBrandCard } from ".";

const NewBrands = () => {
  return (
    <div className="mt-6">
      <div className="h-full shadow-md shadow-gray-300 bg-white rounded-2xl">
        <div className="pt-4 pl-4 text-black text-xl font-semibold">
          New Brands/products in your category
        </div>
        <div className="justify-center flex">
          <div className="p-4 text-black grid grid-cols-5 gap-5">
            <NewBrandCard />
            <NewBrandCard />
            <NewBrandCard />
            <NewBrandCard />
            <NewBrandCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBrands;
