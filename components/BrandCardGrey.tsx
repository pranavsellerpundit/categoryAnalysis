import Image from "next/image";

export const BrandCardGrey = () => {
  return (
    <div>
      <div className="bg-[#F6F6F6] rounded-2xl p-4">
        <div className="flex justify-between">
          <div className="space-y-2">
            <div className="flex space-x-3">
              <div className="items-center flex">
                <h1 className="text-5xl text-[#034BD9]">1</h1>
              </div>
              <div className="block">
                <div>
                  <Image
                    src="/Nike.png"
                    width={40}
                    height={40}
                    alt="Seller Pundit Logo"
                  />
                </div>
                <p className="font-semibold text-sm">Nike - India</p>
              </div>
            </div>
            <div>
              <p className="text-[#16252D80] text-sm">Previous month: 2</p>
            </div>
          </div>
          <div className="block space-y-8">
            <div className="text-2xl font-bold">28.34%</div>
            <div className="flex">
              <div className="text-[#34B53A] ">+2.65%</div>
              <div>
                <Image
                  src="/greenArrow.png"
                  width={20}
                  height={20}
                  alt="Seller Pundit Logo"
                />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
