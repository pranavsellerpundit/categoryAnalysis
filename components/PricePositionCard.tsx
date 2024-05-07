import React from "react";
import { PricePositionChart } from ".";
import BarChart from "./BarChart";

const PricePositionCard = () => {
  const data = [1800, 800, 800, 1300, 1400, 110, 130, 140, 110, 200];
  const labels = [
    "0-1k",
    "1k-2k",
    "2k-3k",
    "3k-4k",
    "4k-5k",
    "5k-6k",
    "6k-7k",
    "6k-7k",
    "6k-7k",
    "6k-7k",
  ];
  const displayXTitle = "";
  const displayYTitle = "";
  const barColor = "#1B59F8";
  const yAxisTicksType = "k";
  const yAxisMin = 0;
  const yAxisMax = 2000;
  const yAxisStepSize = 500;

  return (
    <div className="">
      <div>
        <div className="text-[#16252D80] space-y-4 pb-[35px] shadow-md shadow-gray-300 bg-white rounded-2xl">
          <div className="p-4">
            <div className="text-black text-xl font-semibold ">
              PRICE POSITION
            </div>
            <p>Products in specific price range</p>
          </div>
          <div className="w-full border-t-2 border-gray"></div>
          <div className="p-4">
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
  );
};

export default PricePositionCard;
