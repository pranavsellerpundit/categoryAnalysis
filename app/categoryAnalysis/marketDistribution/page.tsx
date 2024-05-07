import { BarChartWithLegend, BrandCardWhite } from "@/components";
import BarChart from "@/components/BarChart";
import { SmallBrandhCardWhite } from "@/components/SmallBrandhCardWhite";
import StackedBarChart from "@/components/StackedBarChart";
import React from "react";

const page = () => {
  const data = [45, 15, 15, 9, 12, 15, 10, 10, 10];
  const labels = [
    "Airforce",
    "Air Max",
    "Jordans",
    "Air Jordan 1",
    "Basketball",
    "Football studs",
    "Running spikes",
    "Joggers",
    "Others",
  ];
  const displayXTitle = "Best Shoes by Nike";
  const displayYTitle = "Percentage of Products Sold";
  const barColor = "#1B59F8";
  const yAxisTicksType = "percentage";
  const yAxisMin = 0;
  const yAxisMax = 100;
  const yAxisStepSize = 25;

  const stackedBarChartlabels = [
    "250/210",
    "150/200",
    "180/150",
    "200/230",
    "180/60",
    "110/90",
    "130/110",
  ];
  const datasets = [
    {
      data: [10, 30, 25, 21, 37, 50, 13, 41, 60, 20],
      backgroundColor: ["#4339F2"],
      borderWidth: 1,
      barPercentage: 0.2,
      borderRadius: 50,
      borderSkipped: false,
      categoryPercentage: 1.2,
    },
    {
      data: [20, 15, 14, 21, 13, 16, 28, 14, 15, 17],
      backgroundColor: ["#34B53A"],
      borderWidth: 1,
      barPercentage: 0.2,
      borderRadius: 50,
      borderSkipped: false,
      categoryPercentage: 1.2,
    },
    {
      data: [18, 6, 11, 7, 12, 13, 17, 8, 11, 6],
      backgroundColor: ["#FFB200"],
      borderWidth: 1,
      barPercentage: 0.2,
      borderRadius: 50,
      borderSkipped: false,
      categoryPercentage: 1.2,
    },
    {
      data: [25, 30, 55, 45, 29, 30, 41, 14, 11, 20],
      backgroundColor: ["#DF655A"],
      borderWidth: 1,
      barPercentage: 0.2,
      borderRadius: 50,
      borderSkipped: false,
      categoryPercentage: 1.2,
    },
  ];
  return (
    <div>
      <div className="text-[#16252D80]">
        <div className="flex w-full p-4 gap-4">
          <div className="text-[#16252D80] w-1/2 space-y-20 shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
            <div className="">
              <div className="text-black text-xl font-semibold">
                NIKE TOP PRODUCTS IN VARIOUS MARKETPLACES
              </div>
            </div>
            <div>
              <StackedBarChart
                labels={stackedBarChartlabels}
                datasets={datasets}
              />
            </div>
          </div>
          <div className="text-[#16252D80] w-1/2 space-y-10 shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
            <div className="">
              <div className="text-black text-xl font-semibold">
                NIKE TOP PRODUCTS LISTING
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <SmallBrandhCardWhite />
              <SmallBrandhCardWhite />
              <SmallBrandhCardWhite />
              <SmallBrandhCardWhite />
              <SmallBrandhCardWhite />
              <SmallBrandhCardWhite />
            </div>
          </div>
        </div>
        <div className="flex w-full -mt-3 p-4 gap-4">
          <div className="text-[#16252D80] w-1/2 space-y-4 shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
            <div className="text-black text-xl font-semibold">KEY INSIGHTS</div>

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
                  Total brand count is 123 where 70% of  brands have product
                  range from 1-10 as per the keywords searched.
                </li>
                <li>Lorem ipsum sit dolor amet sin delor pen do stratum</li>
                <li>
                  Total brand count is 123 where 70% of  brands have product
                  range from 1-10 as per the keywords searched.
                </li>
                <li>Lorem ipsum sit dolor amet sin delor pen do stratum</li>
              </ul>
            </div>
          </div>

          <div className="text-[#16252D80] w-1/2 space-y-4 shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
            <div className="text-black text-xl font-semibold">
              BEST SELLER SHOES
            </div>
            <p>Nike shoes categories shares breakout</p>
            <div>
              <BarChart
                data={data}
                labels={labels}
                displayXTitle={displayXTitle}
                displayYTitle={displayYTitle}
                barColor={barColor}
                yAxisTicksType={yAxisTicksType}
                yAxisMin={yAxisMin}
                yAxisMax={yAxisMax}
                yAxisStepSize={yAxisStepSize}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
