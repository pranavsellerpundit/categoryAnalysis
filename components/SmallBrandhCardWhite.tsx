import Image from "next/image";

export const SmallBrandhCardWhite = () => {
  return (
    <div>
      <div className="rounded-2xl p-2 px-4 w-fit border-2 border-gray-100">
        <div className="flex space-x-4">
          <div className="flex space-x-3">
            <div className="items-center flex">
              <h1 className="text-5xl text-[#034BD9]">1</h1>
            </div>
            <div className="block">
              <div className="text-black text-xl font-extrabold">Jordans</div>
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

          <div className="block space-y-8">
            <div className="text-2xl text-black font-bold">28.34%</div>
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
