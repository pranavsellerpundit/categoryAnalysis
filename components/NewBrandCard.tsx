import Image from "next/image";
import React from "react";

const NewBrandCard = () => {
  return (
    <div>
      <div className="bg-[#F0F0F0] p-4 py-6 text-black  rounded-lg space-y-2">
        <div className="flex">
          <div className="text-4xl ml-2">1</div>
          <div className="flex w-full justify-center">
            <Image
              src="/productimage.png"
              width={45}
              height={45}
              alt="Seller Pundit Logo"
            />
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-sm font-semibold">Headphone holder - Black</div>
          <div className="text-[#4b4242] text-xs">
            Headphone holder {">"} Black color
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div>
            <Image
              src="/brandImage.png"
              width={13}
              height={13}
              alt="Seller Pundit Logo"
            />
          </div>
          <div className="text-xs">Amazon</div>
        </div>
        <div className="flex text-[#34B53A] space-x-3 items-center">
          <div className="font-semibold">+2.65%</div>
          <div>
            <Image
              src="/greenArrow.png"
              width={20}
              height={20}
              alt="Seller Pundit Logo"
            />
          </div>
          <div className="text-xs">Since last month</div>
        </div>
      </div>
    </div>
  );
};

export default NewBrandCard;
