import { BarChartWithLegend } from "@/components";
import BarChart from "@/components/BarChart";
import StackedBarChart from "@/components/StackedBarChart";
import Image from "next/image";
import React from "react";

const page = () => {
  const data1 = [45, 20, 15, 9, 6, 5, 10, 10, 10];
  const labels1 = [
    "Nike",
    "Adidas",
    "Puma",
    "Reebok",
    "New Balance",
    "Balenci-aga",
    "Vans",
    "Sketchers",
    "Others",
  ];
  const displayXTitle1 = "";
  const displayYTitle1 = "Percentage of Products";
  const barColor1 = "#1B59F8";
  const yAxisTicksType1 = "percentage";
  const yAxisMin1 = 0;
  const yAxisMax1 = 100;
  const yAxisStepSize1 = 25;

  const data2 = [1800, 1500, 800, 1200, 1500, 1100, 800, 600, 500];
  const labels2 = [
    "0-1000",
    "1k-2k",
    "2k-3k",
    "3k-4k",
    "4k-5k",
    "5k-10k",
    "10k-15k",
    "15k-20k",
    "20k+",
  ];
  const displayXTitle2 = "Price Range (INR)";
  const displayYTitle2 = "Count of Products";
  const barColor2 = "#1B59F8";
  const yAxisTicksType2 = "k";
  const yAxisMin2 = 0;
  const yAxisMax2 = 2000;
  const yAxisStepSize2 = 500;

  const data3 = [1800, 1500, 800, 1200, 1500, 1100, 800, 600, 500];
  const labels3 = [
    "0-1000",
    "1k-2k",
    "2k-3k",
    "3k-4k",
    "4k-5k",
    "5k-10k",
    "10k-15k",
    "15k-20k",
    "20k+",
  ];
  const displayXTitle3 = "Price Range (INR)";
  const displayYTitle3 = "Count of Products";
  const barColor3 = "#34B53ACC";
  const yAxisTicksType3 = "k";
  const yAxisMin3 = 0;
  const yAxisMax3 = 2000;
  const yAxisStepSize3 = 500;

  const data4 = [1800, 1500, 800, 1200, 1500, 1100, 800, 600, 500];
  const labels4 = [
    "0-1000",
    "1k-2k",
    "2k-3k",
    "3k-4k",
    "4k-5k",
    "5k-10k",
    "10k-15k",
    "15k-20k",
    "20k+",
  ];
  const displayXTitle4 = "Price Range (INR)";
  const displayYTitle4 = "Count of Products";
  const barColor4 = "#DF655ACC";
  const yAxisTicksType4 = "k";
  const yAxisMin4 = 0;
  const yAxisMax4 = 2000;
  const yAxisStepSize4 = 500;

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
              BRAND HOLD INSIGHTS
            </div>
            <p>Products in specific price range</p>
          </div>
          <div className="ml-4">
            <ul className="list-disc">
              <li>
                Nike is the best player in the market and having a market share
                of 80% + in the top 100 rating products.
              </li>
              <li>Followed by Adidas</li>
              <li>Lorem ipsum sit dolor amet sin delor pen do stratum</li>
            </ul>
            <div className="bg-[#034BD91A] rounded-md p-2 mt-4">
              <span className="text-black font-semibold">
                Opportunity: drools
              </span>{" "}
              has a big market share and the difference in the leader and second
              player is huge. Therefore, a new entrant with good product
              offerings and good pricing range can grab a significant market
              share.
            </div>
          </div>
        </div>
        <div className="text-[#16252D80] w-1/2 space-y-10 shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
          <div className="">
            <div className="text-black text-xl font-semibold">
              BRAND WISE PRODUCTS PERCENTAGE
            </div>
            <p>Most selling products to least</p>
          </div>
          <div className="mt-4">
            <BarChart
              data={data1}
              labels={labels1}
              displayXTitle={displayXTitle1}
              displayYTitle={displayYTitle1}
              barColor={barColor1}
              yAxisTicksType={yAxisTicksType1}
              yAxisMin={yAxisMin1}
              yAxisMax={yAxisMax1}
              yAxisStepSize={yAxisStepSize1}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full -mt-3 p-4 gap-4">
        <div className="text-[#16252D80] w-1/2 space-y-10 shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
          <div className="text-black text-xl font-semibold">
            BSR IN SHARE IN AMAZON
          </div>
          <div className="">
            <StackedBarChart labels={labels} datasets={datasets} />
          </div>
        </div>

        <div className="text-[#16252D80] w-1/2 space-y-4 shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
          <div className="text-black text-xl font-semibold">Data filtering</div>

          <div className="ml-4">
            <ul className="list-disc">
              <li>
                Nike has the highest number of products in the shoes category
                which have star rating {">"} 4 followed by Adidas
              </li>
              <li>
                We have found 2 Adidas Brands. We have not clubbed them together
                as both of them are mentioned with different names on Amazon
              </li>
              <li>Lorem ipsum sit dolor amet sin delor pen do stratum</li>
              <li>Lorem ipsum sit dolor amet sin delor pen do stratum</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="font-bold text-2xl ml-6 text-black py-2">
        D2C websites Price Analysis (Top Competitors)
      </div>
      <div className="flex w-full -mt-3 p-4 gap-4">
        <div className="text-[#16252D80] w-1/2 space-y-10 shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
          <div className="text-black text-xl font-semibold">
            BSR IN SHARE IN AMAZON
          </div>
          <div className="">
            <BarChart
              data={data2}
              labels={labels2}
              displayXTitle={displayXTitle2}
              displayYTitle={displayYTitle2}
              barColor={barColor2}
              yAxisTicksType={yAxisTicksType2}
              yAxisMin={yAxisMin2}
              yAxisMax={yAxisMax2}
              yAxisStepSize={yAxisStepSize2}
            />
          </div>
        </div>

        <div className="text-[#16252D80] w-1/2 space-y-4 shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
          <div className="text-black text-xl font-semibold">Key Insights</div>

          <div className="ml-4">
            <ul className="list-disc">
              <li>
                Three websites were analysed for further analysis on the Shoes
                category and it was found that Nike has the highest count of the
                products.
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
      <div className="flex w-full -mt-3 p-4 gap-4">
        <div className="text-[#16252D80] w-1/2 space-y-10 shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
          <div className="text-black text-xl font-semibold">
            ADIDAS PRICE RANGE ANALYSIS
          </div>
          <div className="">
            <BarChart
              data={data3}
              labels={labels3}
              displayXTitle={displayXTitle3}
              displayYTitle={displayYTitle3}
              barColor={barColor3}
              yAxisTicksType={yAxisTicksType3}
              yAxisMin={yAxisMin3}
              yAxisMax={yAxisMax3}
              yAxisStepSize={yAxisStepSize3}
            />
          </div>
        </div>

        <div className="text-[#16252D80] w-1/2 space-y-10 shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
          <div className="text-black text-xl font-semibold">
            REEBOK PRICE RANGE ANALYSIS
          </div>
          <div className="">
            <BarChart
              data={data4}
              labels={labels4}
              displayXTitle={displayXTitle4}
              displayYTitle={displayYTitle4}
              barColor={barColor4}
              yAxisTicksType={yAxisTicksType4}
              yAxisMin={yAxisMin4}
              yAxisMax={yAxisMax4}
              yAxisStepSize={yAxisStepSize4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
