import React from "react";

const CatergoryInsightsCard = () => {
  return (
    <div className="">
      <div className="text-[#16252D80] space-y-4 h-full shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
        <div className="">
          <div className="text-black text-xl font-semibold">
            CATEGORY INSIGHTS
          </div>
          <p>Products in specific price range</p>
        </div>
        <div className="ml-4">
          <ul className="list-disc">
            <li>
              Between May 29 and June 25, 2022, the Headphone category sales on
              UAE eCommerce reached AED 1.79 M - this is up by{" "}
              <span className="text-blue-600">+0.42%</span> compared to the
              prior period
            </li>
            <li>
              The average retail price of the category increased by{" "}
              <span className="text-blue-600">+2.04%</span>, reaching AED 111.99
            </li>
            <li>
              Within the category, Braun remained at the top spot as the market
              leader, despite decreasing by{" "}
              <span className="text-red-600">-1.65%</span> in terms of market
              share
            </li>
            <li>
              Top 3 performing brands made up 60% of total category market share
            </li>
            <li>
              Promotion count of category stood at 140, decreasing further by
              <span className="text-red-600"> -21%</span> from prior period
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CatergoryInsightsCard;
