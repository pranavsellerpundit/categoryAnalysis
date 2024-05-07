import React from "react";

const Tabs = () => {
  return (
    <div>
      <div className="flex flex-wrap mt-3">
        <button className="text-xs text-black bg-white border-[1px] border-[#3D4D4D4] p-3 rounded-md">
          Product Research
        </button>
        <button className=" text-xs text-white bg-[#060A26] border-[1px] border-[#3D4D4D4] p-3 rounded-md">
          Category Analysis
        </button>
        <button className=" text-xs text-black bg-white border-[1px] border-[#3D4D4D4] p-3 rounded-md">
          Check Your Performence
        </button>
        <button className=" text-xs text-black bg-white border-[1px] border-[#3D4D4D4] p-3 rounded-md">
          Brand Analysis
        </button>
        <button className=" text-xs text-black bg-white border-[1px] border-[#3D4D4D4] p-3 rounded-md">
          Rockstar Sellers
        </button>
      </div>
    </div>
  );
};

export default Tabs;
