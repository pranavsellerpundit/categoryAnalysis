import {
  BarChartWithLegend,
  BrandCardGrey,
  PricePositionChart,
} from "@/components";
import BarChart from "@/components/BarChart";
import React from "react";

const page = () => {
  const data = [1800, 800, 800, 1300, 1400, 1110, 1200, 500, 800];
  const labels = [
    "0-10",
    "10-20",
    "20-50",
    "50-100",
    "100-200",
    "200-300",
    "300-500",
    "500-1k",
    "1k-2k",
  ];
  const displayXTitle = "Products Count Range";
  const displayYTitle = "Number of Brands";
  const barColor = "#1B59F8";
  const yAxisTicksType = "k";
  const yAxisMin = 0;
  const yAxisMax = 2000;
  const yAxisStepSize = 500;
  return (
    <div className="text-[#16252D80]">
      <div className="flex w-full p-4 gap-4">
        <div className="text-[#16252D80] w-1/2 space-y-4 h-full shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
          <div className="">
            <div className="text-black text-xl font-semibold">
              MARKET OVERVIEW
            </div>
            <p>Products in specific price range</p>
          </div>
          <div className="ml-4">
            <ul className="list-disc">
              <li>
                Flipkart categories are set on the brand level. Shoes is an
                overall category and then the Brand name follows.
              </li>
              <li>
                Amazon’s Categorisation of products is much better in terms of
                product identification
              </li>
              <li>
                Total brand count is 123 where 70% of  brands have product range
                from 1-10 as per the keywords searched.
              </li>
              <li>Lorem ipsum sit dolor amet sin delor pen do stratum</li>
              <li>
                Total brand count is 123 where 70% of  brands have product range
                from 1-10 as per the keywords searched.
              </li>
              <li>Lorem ipsum sit dolor amet sin delor pen do stratum</li>
            </ul>
          </div>
        </div>
        <div className="text-[#16252D80] w-1/2 space-y-4 shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
          <div className="">
            <div className="text-black text-xl font-semibold">
              BRANDS OPERATING IN PRODUCT RANGE
            </div>
          </div>
          <div className=" text-black grid grid-cols-2 gap-2">
            <BrandCardGrey />
            <BrandCardGrey />
            <BrandCardGrey />
            <BrandCardGrey />
          </div>
        </div>
      </div>
      <div className="flex w-full -mt-3 p-4 gap-4">
        <div className="text-[#16252D80] w-1/2 space-y-10 shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
          <div className="text-black text-xl font-semibold">
            BRAND COUNT BY PRODUCT RANGE
          </div>
          <div className="">
            <BarChart
              data={data}
              labels={labels}
              displayXTitle={displayXTitle}
              displayYTitle={displayYTitle}
              barColor={barColor}
              yAxisTicksType="k"
              yAxisMin={yAxisMin}
              yAxisMax={yAxisMax}
              yAxisStepSize={yAxisStepSize}
            />
          </div>
        </div>

        <div className="text-[#16252D80] w-1/2 space-y-4 shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
          <div className="text-black text-xl font-semibold">
            KEY ACTIONABLES FOR NIKE MARKETPLACE CATALOGUE:
          </div>

          <div className="ml-4">
            <ul className="list-disc">
              <li>
                Flipkart categories are set on the brand level. Shoes is an
                overall category and then the Brand name follows.
              </li>
              <li>
                Amazon’s Categorisation of products is much better in terms of
                product identification
              </li>
              <li>
                Total brand count is 123 where 70% of  brands have product range
                from 1-10 as per the keywords searched.
              </li>
              <li>Lorem ipsum sit dolor amet sin delor pen do stratum</li>
              <li>
                Total brand count is 123 where 70% of  brands have product range
                from 1-10 as per the keywords searched.
              </li>
              <li>Lorem ipsum sit dolor amet sin delor pen do stratum</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
