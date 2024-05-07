import { BarChartWithLegend, DoughnutChart } from "@/components";
import HorizontalBarChart from "@/components/HorizontalBarChart";
import StackedBarChart from "@/components/StackedBarChart";
import Image from "next/image";
import React from "react";

const page = () => {
  const backgroundColor = ["#497AF9", "#C2D6FD", "#789DFB", "#F0F0F0"];
  const chartData = [60.34, 8, 13, 2];

  const labels = [
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
    <div className="text-[#16252D80]">
      <div className="flex w-full p-4 gap-4">
        <div className="text-[#16252D80] w-1/2 space-y-4 shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
          <div className="">
            <div className="text-black text-xl font-semibold">
              NIKE TARGET CATEGORIES
            </div>
          </div>
          <div className="ml-4">
            <ul className="list-disc ">
              <li>
                Marketplaces have not categorized shoes into further categories
                on the basis of categories. Therefore the keywords were
                identified from title for:
                <ul className="list-disc ml-8">
                  <li>Sports Shoes</li>
                  <li>Sneakers</li>
                  <li>Casuals</li>
                </ul>
              </li>
              <li>
                There were some other categories in which products are available
                like Jordans & Sneakers. Rest of the products were added in the
                miscellaneous categories.
              </li>
              <li>65% of the products have rating greater than 4</li>
              <li>Lorem ipsum sit dolor amet sin delor pen do stratum</li>
            </ul>
          </div>
        </div>
        <div className="text-[#16252D80] w-1/2 space-y-4 shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
          <div className="">
            <div className="text-black text-xl font-semibold">
              CATEGORY PRODUCTS SHARE
            </div>
            <p>Nike shoes categories shares breakout</p>
          </div>
          <div className="flex space-x-16 items-center text-black">
            <div className="bg-[#034BD91A] space-x-12 pr-8 p-4 rounded-md">
              <div>
                <div className="flex">
                  <p>Sneakers has the maximum share of</p>
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
            PRODUCT CATEGORIES SPREAD IN BSR
          </div>
          <div className="ml-4">
            <StackedBarChart labels={labels} datasets={datasets} />
          </div>
        </div>

        <div className="text-[#16252D80] w-1/2 space-y-4 shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
          <div className="text-black text-xl font-semibold">
            Important Insights
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
      <div className="font-bold text-2xl ml-6 text-black py-2">
        CATEGORY ANALYSIS BY SHOE TYPE
      </div>
      <div className="flex w-full -mt-3 p-4 gap-4">
        <div className="text-[#16252D80] w-1/2 space-y-4 shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
          <div className="text-black text-xl font-semibold">Key Insights</div>

          <div className="ml-4">
            <ul className="list-disc">
              <li>
                Nike has 162 products in the top 100 BSR products in this
                category and has the biggest market share followed by Adidas
                Forte which has only 8 products in top 500 products.
              </li>
              <li>
                The price can be given with per count analysis on the daily
                basis or any other frequency required by Nike.
              </li>
              <li>
                Total brand count is 123 where 70% of  brands have product range
                from 1-10 as per the keywords searched.
              </li>
              <li>Lorem ipsum sit dolor amet sin delor pen do stratum</li>
              <li>Lorem ipsum sit dolor amet sin delor pen do stratum</li>
            </ul>
          </div>
        </div>
        <div className="text-[#16252D80] w-1/2 space-y-10 shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
          <div className="text-black text-xl font-semibold">
            SNEKAERS PRICE-PERCENTAGE BREAKDOWN
          </div>
          <div className="">
            <HorizontalBarChart />
          </div>
        </div>
      </div>
      <div className="flex w-full -mt-3 p-4 gap-4">
        <div className="text-[#16252D80] w-1/2 space-y-10 shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
          <div className="text-black text-xl font-semibold">
            SNEAKERS SIZE BREAKDOWN
          </div>
          <div className="">
            <HorizontalBarChart />
          </div>
        </div>

        <div className="text-[#16252D80] w-1/2 space-y-4 shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
          <div className="text-black text-xl font-semibold">Key Insights</div>

          <div className="ml-4">
            <ul className="list-disc">
              <li>
                Nike has 162 products in the top 100 BSR products in this
                category and has the biggest market share followed by Adidas
                Forte which has only 8 products in top 500 products.
              </li>
              <li>
                The price can be given with per count analysis on the daily
                basis or any other frequency required by Nike.
              </li>
              <li>
                Total brand count is 123 where 70% of  brands have product range
                from 1-10 as per the keywords searched.
              </li>
              <li>Lorem ipsum sit dolor amet sin delor pen do stratum</li>
              <li>Lorem ipsum sit dolor amet sin delor pen do stratum</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
