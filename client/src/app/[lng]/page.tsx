// import CoverSwiper from "@/components/website/layout/CoverSwiper";
// import Blog from "@/components/website/layout/Blog";
import ContactSection from "@/components/website/layout/ContactSection";
import Cover from "@/components/website/layout/Cover";
import NewsSection from "@/components/website/layout/NewsSection";
import OtherSection from "@/components/website/layout/OtherSection";
import ServiceSection from "@/components/website/layout/ServiceSection";
import StrongServiceSection from "@/components/website/layout/StrongServiceSection";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home({ params }: { params: { lng: string } }) {
  const h = useTranslations("header");
  return (
    <>
      <section className="banner-section">
        <div className="relative" style={{ overflow: "hidden", zIndex: 0 }}>
          <Image
            src="/img/cover.png"
            width={4838}
            height={2198}
            quality={100}
            alt="Blue Assistance"
            className="w-full"
            priority={true}
          />
          <div className="container  mx-auto">
            <div className="absolute top-0 h-full flex flex-col justify-center pt-0 xl:pt-20 ">
              <div
                className="hidden lg:block"
                style={{ textShadow: "4px 4px white" }}
              >
                <p className="text-[#5d6e8a]  text-xl lg:text-4xl xl:text-5xl drop-shadow-md lg:py-4 font-mincho font-[700] ">
                  つながる力、広がるサポート
                </p>
                <p className="text-[#5d6e8a]  text-xl lg:text-4xl xl:text-5xl drop-shadow-md lg:py-4 font-mincho font-[700] ">
                  企業と人を支え、未来を創る
                </p>

                {/* <h1 className="text-white font-bold text-2xl xl:text-4xl drop-shadow-md">
                  Blue Assistance Co., Ltd.
                </h1> */}
              </div>
              <div
                className="block lg:hidden"
                style={{ textShadow: "1px 1px white" }}
              >
                <p className="text-[#5d6e8a]  text-xl lg:text-4xl xl:text-5xl drop-shadow-md lg:py-4 font-mincho font-[700] ">
                  つながる力、広がるサポート
                </p>
                <p className="text-[#5d6e8a]  text-xl lg:text-4xl xl:text-5xl drop-shadow-md lg:py-4 font-mincho font-[700] ">
                  企業と人を支え、未来を創る
                </p>

                {/* <h1 className="text-white font-bold text-2xl xl:text-4xl drop-shadow-md">
                  Blue Assistance Co., Ltd.
                </h1> */}
              </div>
              <p
                style={{ textShadow: "1px 1px white" }}
                className="text-slate-600  text-xs xl:text-xl drop-shadow-md xl:py-4  font-mincho font-[700]"
              >
                Connecting Strength, Expanding Support.
                <br /> Empowering Businesses and People, Shaping the Future.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="container mx-auto overflow-hidden absolute top-[-150px] left-0 sm:left-10 font-bold text-[#8098c2] text-[140px] xl:text-[320px] opacity-5 z-[-20] select-none ">
          BLUE ASSISTANT
        </div>
        <div className="container  mx-auto mt-20">
          {/* <img className="absolute" src="/img/our-business-bg.png" alt="" /> */}
          <div className="grid grid-cols-1">
            <div className="flex items-center justify-center">
              <h3
                id="our-business"
                className="font-bold text-5xl text-center relative flex items-center justify-center mb-14"
              >
                <div className=" text-[#3562AE] border-b-4 border-orange-400 w-fit pb-4">
                  {h("our-business")}
                </div>
                {/* <div className="border-b-4 border-orange-200 w-[100px] absolute bottom-0 mt-4"></div> */}
              </h3>
            </div>
          </div>
          <ServiceSection lng={params.lng} />
        </div>
        <StrongServiceSection />
        <NewsSection lng={params.lng} />
        {/* @ts-ignore */}
        <ContactSection home={true} />
        <OtherSection />
      </div>
    </>
  );
}
