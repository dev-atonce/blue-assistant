// import CoverSwiper from "@/components/website/layout/CoverSwiper";
// import Blog from "@/components/website/layout/Blog";
import Cover from "@/components/website/layout/Cover";
import ServiceSection from "@/components/website/layout/ServiceSection";
import Image from "next/image";

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

export default async function Home() {
  // const blogs = await fetchBlog();
  // const banner = await fetchBanner();

  return (
    <>
      <div className="relative" style={{overflow:'hidden',zIndex:0}}>
        <Image src="/img/cover.png" width={4838} height={2198} quality={100} alt="Blue Assistance" />
        <div className="container px-4 mx-auto">
          <div
            className="absolute top-0 h-full flex items-center"
            style={{ textShadow: "1px 1px #2F2F2F" }}
          >
            <div>
              <h1 className="text-white font-bold text-6xl drop-shadow-md py-4">Always By Your Side</h1>
              <h2 className="text-white font-bold text-4xl drop-shadow-md">Blue Assistance Co., Ltd.</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-10 left-10 font-bold text-[#8098c2] text-[70px] md:text-[140px] xl:text-[320px] opacity-5 z-0 select-none mt-[-240px]">BLUE ASSISTANT</div>
        <div className="container xl:px-4 2xl:px-4 px-4 mx-auto mt-52">
          {/* <img className="absolute" src="/img/our-business-bg.png" alt="" /> */}
          <div className="grid grid-cols-1">
            <div className="flex items-center justify-center">
              <h3 className="font-bold text-5xl text-center relative flex items-center justify-center mb-14">
                <div className="mb-4 text-[#3562AE]">Our Business</div>
                <div className="border-b-4 border-orange-200 w-[100px] absolute bottom-0 mt-4"></div>
              </h3>
            </div>
          </div>
          <ServiceSection />
        </div>
      </div>
    </>
  );
}
