import React from "react";
import { DoughnutChart } from ".";

const Ratings = () => {
  const backgroundColor = ["#497AF9", "#C2D6FD", "#789DFB", "#F0F0F0"];
  const chartData = [60.34, 8, 13, 2];
  return (
    <div className="">
      <div>
        <div>
          <div className="text-[#16252D80] pb-6 space-y-4 h-full shadow-md shadow-gray-300 bg-white rounded-2xl">
            <div className="pt-4 pl-4">
              <div className="text-black text-xl font-semibold ">
                RATINGS OF THE PRODUCTS
              </div>
              s<p>Top sales differentiated per marketplaces</p>
            </div>
            <div className="w-full border-t-2 border-gray"></div>
            <div className="flex space-x-8">
              <div className="pl-8 text-black space-y-8">
                <div className="space-y-2">
                  <div className="text-sm font-medium">Amazon Sales</div>
                  <div className="text-3xl font-bold">4,209</div>
                </div>
                <div className="grid grid-rows-2 gap-4 pb-12">
                  <div>
                    <div className="flex space-x-12 text-sm">
                      <div className="flex space-x-3 ">
                        <div className="bg-[#497AF9] w-6 h-3 rounded-md "></div>
                        <div>
                          <span className="font-semibold">60.34%</span> Amazon
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <div className="bg-[#C2D6FD]  w-6 h-3 rounded-md"></div>
                        <div>
                          <span className="font-semibold">8%</span> Meesho
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex space-x-20 text-sm">
                      <div className="flex space-x-3 ">
                        <div className="bg-[#789DFB] w-6 h-3 rounded-md "></div>
                        <div>
                          <span className="font-semibold">13%</span> Myntra
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <div className="bg-[#F0F0F0]  w-6 h-3 rounded-md"></div>
                        <div>
                          <span className="font-semibold">2%</span> Others
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-40 items-center flex">
                <DoughnutChart
                  backgroundColor={backgroundColor}
                  chartData={chartData}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
