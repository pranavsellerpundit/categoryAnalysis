import Image from "next/image";
import React from "react";

const ResultInsights = () => {
  return (
    <div>
      <div className=" pb-6 space-y-4 h-full shadow-md shadow-gray-300 bg-white rounded-2xl">
        <div className="pt-4 pl-4">
          <div className="text-black text-xl font-semibold ">
            RESULT INSIGHTS
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex px-4 space-x-4">
            <div className="bg-[#F6F6F6] rounded-lg p-4 py-6">
              <p className="text-sm">Initial Product Count</p>
              <span className="font-semibold text-2xl">21000</span>
            </div>
            <div className="bg-[#F6F6F6] rounded-lg p-4 py-6">
              <p className="text-sm">Product Count after Filtering</p>
              <span className="text-[#034BD9] font-semibold text-2xl">
                16000
              </span>
            </div>
          </div>
          <div className="bg-[#F6F6F6] space-y-2 rounded-lg p-4 px-6 mx-4">
            <p className="font-sm">Market places analysed</p>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center space-x-2 px-2 rounded-sm bg-white">
                <div className="">
                  <Image
                    src="/flipkartLogo.png"
                    width={15}
                    height={15}
                    alt="Seller Pundit Logo"
                  />
                </div>
                <div>Flipkart</div>
              </div>
              <div className="flex items-center space-x-2 px-2 rounded-sm bg-white">
                <div>
                  <Image
                    src="/amazonLogo.png"
                    width={15}
                    height={15}
                    alt="Seller Pundit Logo"
                  />
                </div>
                <p>Amazon</p>
              </div>
              <div className="flex items-center space-x-2 px-2 rounded-sm bg-white">
                <div>
                  <Image
                    src="/snapdealLogo.png"
                    width={15}
                    height={15}
                    alt="Seller Pundit Logo"
                  />
                </div>
                <p>Snapdeal</p>
              </div>
              <div className="flex items-center space-x-2 px-2 rounded-sm bg-white">
                <div>
                  <Image
                    src="/amazonLogo.png"
                    width={15}
                    height={15}
                    alt="Seller Pundit Logo"
                  />
                </div>
                <p>Amazon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultInsights;
