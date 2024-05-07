import Image from "next/image";

const TopPerformingProductsTable = () => {
  return (
    <div>
      <div className="flex space-x-14 text-black items-center bg-[#F8F8F8] p-2 px-4 rounded-lg mx-2">
        <div className=" flex items-center">
          <div className=" flex space-x-2 items-center">
            <div className="w-8">
              <Image
                src="/productimage.png"
                width={25}
                height={25}
                alt="Seller Pundit Logo"
              />
            </div>
            <div className="w-44 text-sm">
              Headphone holder - Cosmic Byte RGB
            </div>
          </div>
          <div className="items-center bg-[#F2F2F2] object-contain w-8 p-2 flex justify-center">
            <Image
              src="/brandImage.png"
              width={20}
              height={20}
              alt="Seller Pundit Logo"
            />
          </div>
        </div>
        <div className="flex space-x-12 items-center">
          <div className="font-semibold text-2xl">₹2,900</div>
          <div className="font-semibold text-[#34B53A]">7.65%</div>
        </div>
      </div>
      <div className="flex space-x-14 text-black items-center  p-2 px-4 rounded-lg mx-2">
        <div className=" flex items-center">
          <div className=" flex space-x-2 items-center">
            <div className="w-8">
              <Image
                src="/productimage.png"
                width={25}
                height={25}
                alt="Seller Pundit Logo"
              />
            </div>
            <div className="w-44 text-sm">
              Headphone holder - Cosmic Byte RGB
            </div>
          </div>
          <div className="items-center bg-[#F2F2F2] object-contain w-8 p-2 flex justify-center">
            <Image
              src="/brandImage.png"
              width={20}
              height={20}
              alt="Seller Pundit Logo"
            />
          </div>
        </div>
        <div className="flex space-x-12 items-center">
          <div className="font-semibold text-2xl">₹2,900</div>
          <div className="font-semibold text-[#34B53A]">7.65%</div>
        </div>
      </div>
    </div>
  );
};

export default TopPerformingProductsTable;
