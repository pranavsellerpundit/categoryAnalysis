import React from "react";
import { BrandCardGrey, BrandCardWhite } from ".";

const Top10Brands = () => {
  return (
    <div className="mt-6">
      <div className="h-full shadow-md shadow-gray-300 bg-white rounded-2xl">
        <div className="pt-4 pl-4 text-black text-xl font-semibold">
          TOP 10 BRANDS IN YOUT CATEGORY (By Market Share)
        </div>
        <div className="pl-4 pt-2 text-black grid grid-cols-4">
          <BrandCardWhite />
          <BrandCardWhite />
          <BrandCardWhite />
          <BrandCardWhite />
          <BrandCardWhite />
          <BrandCardWhite />
          <BrandCardWhite />
          <BrandCardWhite />
          <BrandCardWhite />
          <BrandCardWhite />
        </div>
      </div>
    </div>
  );
};

export default Top10Brands;
