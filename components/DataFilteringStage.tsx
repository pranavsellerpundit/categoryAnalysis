import React from "react";

const DataFilteringStage = () => {
  return (
    <div>
      <div className="text-[#16252D80] space-y-4 h-full shadow-md shadow-gray-300 bg-white p-4 rounded-2xl">
        <div className="">
          <div className="text-black text-xl font-semibold">
            DATA FILTERING STAGE
          </div>
          <p>Products in specific price range</p>
        </div>
        <div className="ml-4">
          <ul className="list-disc">
            <li>All Syrups removed</li>
            <li>All Pets category removed</li>
            <li>Any product which did not have a dog keyword removed</li>
            <li>Liquid Keyword removed</li>
            <li>All the combos having liquid products have been removed</li>
            <li>Any product which did not have a dog keyword removed</li>
            <li>Liquid Keyword removed</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DataFilteringStage;
