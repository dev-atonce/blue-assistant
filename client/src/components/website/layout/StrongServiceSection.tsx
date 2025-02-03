import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function StrongServiceSection() {
  const s = useTranslations("service-section");
  return (
    <>
      <div id="about-us" className="bg-[#EDF4FF]">
        <div className="container mx-auto mt-20 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3562AE] text-center ">
            {s("strong.h1")}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-bold text-[#3562AE] text-center mt-6">
            {s("strong.h2")}
          </p>
          <p className="text-xs  sm:text-base lg:text-base font-bold text-[#3562AE] text-center mt-6">
            {s("strong.h3")}
            <br />
            {s("strong.h4")}
            <br />
            {s("strong.h5")}
          </p>
          <div className="grid grid-cols-12 gap-y-8 md:gap-2 lg:gap-x-4 mt-20 text-[#0C2B4B]">
            <div className="col-span-12 md:col-span-4 bg-white p-6 rounded-2xl border">
              <div className="flex justify-center h-32">
                <img
                  src="/img/our-business/Group 229.png"
                  alt="19年の実績と経験"
                />
              </div>
              <h6 className="mt-6 text-center">
                {s("strong.i1")}
                <br />
                <span className="font-bold"> {s("strong.i1-2")}</span>
              </h6>
            </div>
            <div className="col-span-12 md:col-span-4 bg-white p-6 rounded-2xl border">
              <div className="flex justify-center h-32">
                <img
                  src="/img/our-business/Frame.png"
                  alt="24-hour support system"
                />
              </div>
              <h6 className="mt-6 text-center">
                {s("strong.i2")}
                <br />
                <span className="font-bold"> {s("strong.i2-2")}</span>
              </h6>
            </div>
            <div className="col-span-12 md:col-span-4 bg-white p-6 rounded-2xl border">
              <div className="flex justify-center h-32">
                <img
                  src="/img/our-business/Frame (1).png"
                  alt="travel agency"
                />
              </div>
              <h6 className="mt-6 text-center">
                <span className="font-bold"> {s("strong.i3")}</span>
                <br />
                {s("strong.i3-2")}
              </h6>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/about-us"
              className="bg-[#3562AE] py-2 px-4 rounded-md text-white hover:bg-[#FDBD59]"
            >
              {s("strong.read")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
