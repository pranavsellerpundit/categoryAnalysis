import Image from "next/image";
import React from "react";

const Breadcrumbs = () => {
  return (
    <div className="text-sm mt-1">
      <div className="flex justify-between pr-4">
        <div className="flex items-center">
          <p className="text-gray-400">
            <a href="#" className="text-blue-600">
              Dashboarsd
            </a>{" "}
            {">"} <a href="#">Category Analysis</a>
          </p>
        </div>
        <div className="flex items-center">
          <div>
            <button className="bg-[#054BD8] p-2 px-4 rounded-md text-white shadow-lg shadow-blue-500/50">
              Download Full Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
