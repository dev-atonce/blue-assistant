import Image from "next/image";
import Breadcrumb from "../molecule/Breadcrumb";
export default function Cover({ pageName, prevPage, engName, noHeading }: any) {
  return (
    <div className="w-full ">
      <div className="relative  ">
        <Image
          className="w-full shadow-sm lg:block hidden"
          src="/img/page-cover.png"
          width={2000}
          height={500}
          quality={80}
          alt="cover"
          priority={true}
        />
        <div className="container  mx-auto lg:block hidden">
          <div
            className="absolute top-[17%] hidden xl:block"
            style={{ textShadow: "1px 1px #CAD5E4" }}
          >
            <p className="text-[#3562AE]  text-5xl py-4 font-semibold">
              Always By Your Side
            </p>
            <p className="text-black text-3xl font-semibold">
              Blue Assistance Co., Ltd.
            </p>
          </div>
        </div>
        <div className="bg-[#3462AF]  w-full">
          <div className=" container mx-auto py-2">
            <p className="text-sm sm:text-base xl:text-xl text-white">
              「親切・丁寧・迅速」なサービスをモットーに、みなさまの海外生活をサポートいたします。
            </p>
          </div>
        </div>
        <div className="bg-slate-500/10  w-full">
          <div className="container mx-auto">
            <Breadcrumb pageName={pageName} prevPage={prevPage} />
          </div>
        </div>
      </div>
      {!noHeading && (
        <div className="container px-4 mx-auto mt-4 ">
          <div className="pb-4 border-b mb-4">
            <span className="text-red-600">{engName}</span>
            <h1 className="text-black text-2xl ">{pageName}</h1>
          </div>
        </div>
      )}
    </div>
  );
}
