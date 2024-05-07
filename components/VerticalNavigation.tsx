import Image from "next/image";
import Link from "next/link";
import React from "react";

const VerticalNavigation = () => {
  return (
    <div>
      <div className="block bg-white mt-4 w-52 rounded-md">
        <button className=" text-xs text-[#718096] font-medium block bg-white p-4 ">
          <div className="flex space-x-2">
            <div>
              <Image
                src="/clipBoard.png"
                width={15}
                height={15}
                alt="Seller Pundit Logo"
              />
            </div>
            <div>
              <Link href="/categoryAnalysis/">Key Insights</Link>
            </div>
          </div>
        </button>
        <hr />
        <button className=" text-xs text-[#718096] font-medium block bg-white p-4 ">
          <div className="flex space-x-2">
            <div>
              <Image
                src="/clipBoard.png"
                width={15}
                height={15}
                alt="Seller Pundit Logo"
              />
            </div>
            <div>
              <Link href="/categoryAnalysis/dataAssumptions">
                Data Assumptions
              </Link>
            </div>
          </div>
        </button>
        <hr />
        <button className=" text-xs text-[#718096] font-medium block bg-white p-4 ">
          <div className="flex space-x-2">
            <div>
              <Image
                src="/OnlineStore.png"
                width={15}
                height={15}
                alt="Seller Pundit Logo"
              />
            </div>
            <Link href="/categoryAnalysis/marketplaceAnalysis">
              Marketplace Analysis
            </Link>
          </div>
        </button>
        <hr />
        <button className=" text-xs text-[#718096] font-medium block bg-white p-4 ">
          <div className="flex space-x-2">
            <div>
              <Image
                src="/HotPriceTag.png"
                width={15}
                height={15}
                alt="Seller Pundit Logo"
              />
            </div>
            <Link href="/categoryAnalysis/priceAndRatingAnalysis">
              Price & Rating Analysis
            </Link>
          </div>
        </button>
        <hr />
        <button className=" text-xs text-[#718096] font-medium block bg-white p-4 ">
          <div className="flex space-x-2">
            <div>
              <Image
                src="/Categorize.png"
                width={15}
                height={15}
                alt="Seller Pundit Logo"
              />
            </div>
            <Link href="/categoryAnalysis/brandAnalysis">Brand Analysis</Link>
            <div></div>
          </div>
        </button>
        <hr />
        <button className=" text-xs text-[#718096] font-medium block bg-white p-4 ">
          <div className="flex space-x-2">
            <div>
              <Image
                src="/BestSeller.png"
                width={15}
                height={15}
                alt="Seller Pundit Logo"
              />
            </div>
            <Link href="/categoryAnalysis/targetCategories">
              Target Categories
            </Link>
          </div>
        </button>
        <hr />
        <button className=" text-xs text-[#718096] font-medium block bg-white p-4 ">
          <div className="flex space-x-2">
            <div>
              <Image
                src="/ShipmentLogistic.png"
                width={15}
                height={15}
                alt="Seller Pundit Logo"
              />
            </div>
            <Link href="/categoryAnalysis/bestSellers">Best Sellers</Link>
          </div>
        </button>
        <hr />
        <button className=" text-xs text-[#718096] font-medium block bg-white p-4 ">
          <div className="flex space-x-2">
            <div>
              <Image
                src="/android.png"
                width={15}
                height={15}
                alt="Seller Pundit Logo"
              />
            </div>
            <Link href="/categoryAnalysis/marketDistribution">
              Market Distribution
            </Link>
          </div>
        </button>
        <hr />
        <button className=" text-xs text-[#718096] font-medium block bg-white p-4 ">
          <div className="flex space-x-2">
            <div>
              <Image
                src="/Age.png"
                width={15}
                height={15}
                alt="Seller Pundit Logo"
              />
            </div>
            <Link href="/categoryAnalysis/additionalParameters">
              Additional Parameters
            </Link>
          </div>
        </button>
        <hr />
        <button className=" text-xs text-[#718096] font-medium block bg-white p-4 ">
          <div className="flex space-x-2">
            <div>
              <Image
                src="/ComboChart.png"
                width={15}
                height={15}
                alt="Seller Pundit Logo"
              />
            </div>
            <Link href="/categoryAnalysis/ageingOfProducts">
              Ageing of Products
            </Link>
          </div>
        </button>
        <hr />
        <button className=" text-xs text-[#718096] font-medium block bg-white p-4 ">
          <div className="flex space-x-2">
            <div>
              <Image
                src="/clipBoard.png"
                width={15}
                height={15}
                alt="Seller Pundit Logo"
              />
            </div>
            <div>Further Potential Analysis</div>
          </div>
        </button>
        <hr />
      </div>
    </div>
  );
};

export default VerticalNavigation;
