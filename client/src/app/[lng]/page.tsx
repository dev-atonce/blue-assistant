// import CoverSwiper from "@/components/website/layout/CoverSwiper";
// import Blog from "@/components/website/layout/Blog";
import ContactSection from "@/components/website/layout/ContactSection";
import Cover from "@/components/website/layout/Cover";
import NewsSection from "@/components/website/layout/NewsSection";
import OtherSection from "@/components/website/layout/OtherSection";
import ServiceSection from "@/components/website/layout/ServiceSection";
import StrongServiceSection from "@/components/website/layout/StrongServiceSection";
import Image from "next/image";

interface Props {
  params: { lng: string };
}
// const fetchBlog = async () => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/blog/limit/4`,
//     {
//       cache: "no-store",
//     }
//   );
//   const data = await res.json();
//   return data;
// };

// const fetchBanner = async () => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/banner`,
//     {
//       cache: "no-store",
//     }
//   );
//   const data = await res.json();
//   return data;
// };

export default async function Home({ params }: Props) {
  const lng = params.lng;

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
          />
          <div className="container  mx-auto">
            <div
              className="absolute top-0 h-full flex items-center"
              style={{ textShadow: "1px 1px #2F2F2F" }}
            >
              <div>
                <p className="text-white font-bold text-2xl xl:text-6xl drop-shadow-md py-4">
                  Always By Your Side
                </p>
                <h1 className="text-white font-bold text-2xl xl:text-4xl drop-shadow-md">
                  Blue Assistance Co., Ltd.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="container mx-auto overflow-hidden absolute top-[-150px] left-0 sm:left-10 font-bold text-[#8098c2] text-[140px] xl:text-[320px] opacity-5 z-[-20] select-none ">
          BLUE ASSISTANT
        </div>
        <div className="container  mx-auto mt-32">
          {/* <img className="absolute" src="/img/our-business-bg.png" alt="" /> */}
          <div className="grid grid-cols-1">
            <div className="flex items-center justify-center">
              <h3
                id="our-business"
                className="font-bold text-5xl text-center relative flex items-center justify-center mb-14"
              >
                <div className="mb-4 text-[#3562AE]">私たちの事業</div>
                <div className="border-b-4 border-orange-200 w-[100px] absolute bottom-0 mt-4"></div>
              </h3>
            </div>
          </div>
          <ServiceSection />
        </div>
        <StrongServiceSection />
        <NewsSection />
        <ContactSection />
        <OtherSection />
      </div>
    </>
  );
}
