import { BarChartWithLegend, DoughnutChart } from "@/components";
import BarChart from "@/components/BarChart";
import { SmallBrandhCardWhite } from "@/components/SmallBrandhCardWhite";
import StackedBarChart from "@/components/StackedBarChart";
import ThinDoughnutChart from "@/components/ThinDoughnutChart";
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
  const displayXTitle = "Brands";
  const displayYTitle = "Percentage of Products";
  const barColor = "#1B59F8";
  const yAxisTicksType = "percentage";
  const yAxisMin = 0;
  const yAxisMax = 100;
  const yAxisStepSize = 25;

  const backgroundColor = ["#497AF9", "#C2D6FD", "#789DFB", "#F0F0F0"];
  const chartData = [60.34, 8, 13, 2];
  return (
    <div>
      <div className="text-[#16252D80]">
        <div className="flex w-full p-4 gap-4">
          <div className="text-[#16252D80] w-1/2 space-y-20 shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
            <div className="">
              <div className="text-black text-xl font-semibold">
                SPONSORED PRODUCTS
              </div>
            </div>
            <div className="flex space-x-12">
              <div className="w-44">
                <ThinDoughnutChart />
              </div>
              <div className="space-y-8">
                <div className="flex text-black text-sm space-x-4">
                  <div className="bg-[#497AF9] h-1 w-8 rounded-3xl mt-2"></div>
                  <div>
                    <p>Sponsored</p>
                    <span className="font-bold">61.4%</span>
                  </div>
                </div>
                <div className="flex text-black text-sm space-x-4">
                  <div className="bg-[#E5E5E5] h-1 w-8 rounded-3xl mt-2"></div>
                  <div>
                    <p>Not Sponsored</p>
                    <span className="font-bold">38.6%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-black w-1/2 space-y-10 shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
            <div className="">
              <div className="text-black text-xl font-semibold">
                AMAZON ASSURED TAG
              </div>
            </div>
            <div className="flex space-x-20">
              <div className="bg-[#034BD91A] w-52 rounded-lg p-4 space-y-6">
                <div className="space-y-3">
                  <div className="text-[#4D4D4D] font-medium">
                    Total Number of shoes on Amazon
                  </div>

                  <div className="font-bold text-3xl">48,000</div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex space-x-3">
                      <div className="bg-[#497AF9] h-2 w-8 rounded-3xl mt-2"></div>
                      <div>
                        <div className="text-[#497AF9] font-bold">59.50%</div>
                        <div>27,000 shoes</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex space-x-3">
                      <div className="bg-[#E5E5E5] h-2 w-8 rounded-3xl mt-2"></div>
                      <div>
                        <div className="text-[#497AF9] font-bold">47.34%</div>
                        <div>31,000 shoes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-44">
                  <DoughnutChart
                    backgroundColor={backgroundColor}
                    chartData={chartData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full -mt-3 p-4 gap-4">
          <div className="text-black w-1/2 space-y-10 shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
            <div className="">
              <div className="text-black text-xl font-semibold">
                FULFILLED BY MYNTRA TAG
              </div>
            </div>
            <div className="flex space-x-20">
              <div className="bg-[#034BD91A] w-52 rounded-lg p-4 space-y-6">
                <div className="space-y-3">
                  <div className="text-[#4D4D4D] font-medium">
                    Total Number of shoes on Amazon
                  </div>

                  <div className="font-bold text-3xl">48,000</div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex space-x-3">
                      <div className="bg-[#497AF9] h-2 w-8 rounded-3xl mt-2"></div>
                      <div>
                        <div className="text-[#497AF9] font-bold">59.50%</div>
                        <div>27,000 shoes</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex space-x-3">
                      <div className="bg-[#E5E5E5] h-2 w-8 rounded-3xl mt-2"></div>
                      <div>
                        <div className="text-[#497AF9] font-bold">47.34%</div>
                        <div>31,000 shoes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-44">
                  <DoughnutChart
                    backgroundColor={backgroundColor}
                    chartData={chartData}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-[#16252D80] w-1/2 space-y-10 shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
            <div className="text-black text-xl font-semibold">
              BEST SELLER PRODUCT COUNT PERCENTAGE OF EACH BRAND
            </div>
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
