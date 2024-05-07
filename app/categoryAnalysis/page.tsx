import {
  CatergoryInsightsCard,
  Competitor,
  Marketplaces,
  NewBrands,
  PricePositionCard,
  Ratings,
  Top10Brands,
  TopBrandsCard,
  TopPositionCard,
} from "@/components";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="p-4 w-full">
        <div className="grid grid-cols-2 gap-4">
          <CatergoryInsightsCard />
          <TopBrandsCard />
          <PricePositionCard />
          <TopPositionCard />
        </div>
        <Top10Brands />
        <NewBrands />
        <div className="grid grid-cols-2 gap-4 mt-6">
          <Ratings />
          <Competitor />
        </div>
        <Marketplaces />
      </div>
    </div>
  );
};

export default page;
