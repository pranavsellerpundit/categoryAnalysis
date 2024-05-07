import React from "react";
import { DoubleBarChart } from ".";

const Competitor = () => {
  const bar1Data = [250, 150, 180, 200, 180, 110, 130];
  const bar2Data = [210, 200, 150, 230, 60, 90, 110];

  const datasets = [
    {
      label: "Legend 1",
      data: bar1Data,
      backgroundColor: ["#02A0FC"],
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
      borderRadius: Number.MAX_VALUE,
      borderSkipped: false,
      barPercentage: 0.7,
      categoryPercentage: 0.5,
    },
    {
      label: "Legend 2",
      data: bar2Data,
      backgroundColor: ["#34B53A"],
      borderColor: "rgba(75, 255, 34, 1)",
      borderWidth: 1,
      borderRadius: Number.MAX_VALUE,
      borderSkipped: false,
      barPercentage: 0.7,
      categoryPercentage: 0.5,
    },
  ];

  return (
    <div className="">
      <div>
        <div>
          <div className="text-[#16252D80] space-y-4 h-full shadow-md shadow-gray-300 bg-white rounded-2xl">
            <div className="pt-4 pl-4">
              <div className="text-black text-xl font-semibold ">
                COMPETITOR V/S YOUR PRODUCT
              </div>
              <p>Top sales as per number of Ratings and Reviews</p>
            </div>
            <div className="w-full border-t-2 border-gray"></div>
            <div className="p-4 h-56">
              <DoubleBarChart datasets={datasets} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competitor;
