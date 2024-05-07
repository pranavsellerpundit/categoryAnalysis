import Image from "next/image";

const SideBar = () => {
  return (
    <div
      className="bg-[#FFF] w-fit p-6 space-y-60"
      style={{ minHeight: "100vh" }}
    >
      <div className="space-y-8">
        <div className="space-y-4 mt-4">
          <div className="justify-center flex">
            <Image
              src="/sellerPunditLogo.png"
              width={40}
              height={40}
              alt="Seller Pundit Logo"
            />
          </div>
          <div className="justify-center flex text-gray-500 text-sm font-medium">
            Menu
          </div>
        </div>
        <div className="space-y-8">
          <div className="justify-center flex">
            <Image
              src="/grid-4.png"
              width={18}
              height={18}
              alt="Seller Pundit Logo"
            />
          </div>
          <div className="justify-center flex">
            <Image
              src="/account.png"
              width={16}
              height={16}
              alt="Seller Pundit Logo"
            />
          </div>
          <div className="justify-center flex">
            <Image
              src="/gear.png"
              width={16}
              height={16}
              alt="Seller Pundit Logo"
            />
          </div>
          <div className="justify-center flex">
            <Image
              src="/notification.png"
              width={16}
              height={16}
              alt="Seller Pundit Logo"
            />
          </div>
          <div className="justify-center flex">
            <Image
              src="/inbox.png"
              width={16}
              height={16}
              alt="Seller Pundit Logo"
            />
          </div>
          <div className="justify-center flex">
            <Image
              src="/iconDP.png"
              width={75}
              height={75}
              alt="Seller Pundit Logo"
            />
          </div>
        </div>
      </div>
      <div className="justify-center flex">
        <Image
          src="/newExit.png"
          width={25}
          height={25}
          alt="Seller Pundit Logo"
        />
      </div>
    </div>
  );
};

export default SideBar;
