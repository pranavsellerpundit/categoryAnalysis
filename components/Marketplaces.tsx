import React from "react";
import MarketplaceCard from "./MarketplaceCard";

const Marketplaces = () => {
  return (
    <div>
      <div className="grid grid-cols-5 mt-6">
        <MarketplaceCard />
        <MarketplaceCard />
        <MarketplaceCard />
        <MarketplaceCard />
        <MarketplaceCard />
      </div>
    </div>
  );
};

export default Marketplaces;
