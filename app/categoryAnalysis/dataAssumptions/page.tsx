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
import DataFilteringStage from "@/components/DataFilteringStage";
import KeywordsResearched from "@/components/KeywordsResearched";
import ProductCountByMarketplace from "@/components/ProductCountByMarketplace";
import ResultInsights from "@/components/ResultInsights";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="p-4 w-full">
        <div className="grid grid-cols-2 gap-4">
          <DataFilteringStage />
          <KeywordsResearched />
          <ProductCountByMarketplace />
          <ResultInsights />
        </div>
      </div>
    </div>
  );
};

export default page;
