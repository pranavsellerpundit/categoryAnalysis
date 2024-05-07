import { BarChartWithLegend, BrandCardGrey, DoughnutChart } from "@/components";
import BarChart from "@/components/BarChart";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [45, 15, 15, 9, 12, 15, 1, 1, 1];
  const labels = [
    "OOS",
    "100-200",
    "200-500",
    "500-800",
    "100-200",
    "200-300",
    "300-500",
    "500-1k",
    "1k-2k",
  ];
  const displayXTitle = "Price Range (INR)";
  const displayYTitle = "Percentage of Products";
  const barColor = "#1B59F8";
  const yAxisTicksType = "percentage";
  const yAxisMin = 0;
  const yAxisMax = 100;
  const yAxisStepSize = 25;

  const backgroundColor = ["#497AF9", "#C2D6FD", "#789DFB", "#F0F0F0"];
  const chartData = [60.34, 8, 13, 2];
  return (
    <div className="text-[#16252D80]">
      <div className="flex w-full p-4 gap-4">
        <div className="text-[#16252D80] w-1/2 space-y-4 shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
          <div className="">
            <div className="text-black text-xl font-semibold">
              MARKET OVERVIEW
            </div>
            <p>Products in specific price range</p>
          </div>
          <div className="ml-4">
            <ul className="list-disc">
              <li>
                This price analysis is without  considering the weight and count
                of the products.
              </li>
              <li>Around 80% of the products have rating greater than 3.</li>
              <li>65% of the products have rating greater than 4</li>
              <li>Lorem ipsum sit dolor amet sin delor pen do stratum</li>
              <li>
                Lorem ipsum sit dolor amet sin delor pen do stratum Lorem ipsum
                sit dolor amet sin delor pen do stratum
              </li>
              <li>Lorem ipsum sit dolor amet sin delor pen do stratum</li>
            </ul>
          </div>
        </div>
        <div className="text-[#16252D80] w-1/2 space-y-4 shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
          <div className="">
            <div className="text-black text-xl font-semibold">
              RATING WISE PRODUCT COUNT DISTRIBUTION
            </div>
            <p>Products in specific price range</p>
          </div>
          <div className="flex space-x-24 items-center text-black">
            <div className="bg-[#034BD91A] space-x-12 pr-8 p-4 rounded-md">
              <div>
                <div className="flex space-x-1">
                  <div>
                    <Image
                      src="/star2.png"
                      width={30}
                      height={30}
                      alt="Seller Pundit Logo"
                    />
                  </div>
                  <p>Max Rating</p>
                </div>
                <div className="text-2xl font-semibold">47.34%</div>
              </div>
              <div className="space-y-1">
                <div className="flex space-x-3 items-center">
                  <div className="bg-[#497AF9] w-6 h-3 rounded-md "></div>
                  <div>23%</div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div className="bg-[#C2D6FD] w-6 h-3 rounded-md "></div>
                  <div>15%</div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div className="bg-[#789DFB] w-6 h-3 rounded-md "></div>
                  <div>11%</div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div className="bg-[#F0F0F0] w-6 h-3 rounded-md "></div>
                  <div>2% </div>
                </div>
              </div>
            </div>
            <div className="w-44">
              <DoughnutChart
                backgroundColor={backgroundColor}
                chartData={chartData}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full -mt-3 p-4 gap-4">
        <div className="text-[#16252D80] w-1/2 space-y-10 shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
          <div className="text-black text-xl font-semibold">
            PRODUCTS BY PRICE RANGE
          </div>

          <div className="ml-4">
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

        <div className="text-[#16252D80] w-1/2 space-y-4 shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
          <div className="text-black text-xl font-semibold">Price Analysis</div>

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
