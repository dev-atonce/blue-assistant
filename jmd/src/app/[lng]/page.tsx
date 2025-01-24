// import CoverSwiper from "@/components/website/layout/CoverSwiper";
// import Blog from "@/components/website/layout/Blog";
import ContactSection from "@/components/website/layout/ContactSection";
import Cover from "@/components/website/layout/Cover";
import CoverVisa from "@/components/website/layout/CoverVisa";
import NewsSection from "@/components/website/layout/NewsSection";
import OtherSection from "@/components/website/layout/OtherSection";
import LocationSection from "@/components/website/layout/LocationSection";
import StrongServiceSection from "@/components/website/layout/StrongServiceSection";
import StickyMenu from "@/components/website/organism/menu/StickyMenu";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home({ params }: { params: { lng: string } }) {
  const h = useTranslations("header");
  const l = useTranslations("location");
  return (
    <div className="">
      <CoverVisa img="/img/cover.png" home={true} />

      <div className="relative">
        <div className="container  mx-auto mt-16">
          {/* <img className="absolute" src="/img/our-business-bg.png" alt="" /> */}
          <div className="grid grid-cols-1">
            <div className="flex items-center justify-center">
              <h2
                id="location"
                className="font-bold text-3xl text-center relative flex items-center justify-center mb-14"
              >
                <div className="mb-4 text-[#3562AE]">{l("h1")}</div>
                <div className="border-b-4 border-orange-200 w-[100px] absolute bottom-0 mt-4"></div>
              </h2>
            </div>
          </div>
          <LocationSection lng={params.lng} />
        </div>
        <StrongServiceSection />
        <NewsSection lng={params.lng} />
        <ContactSection home={true} />
        <OtherSection />
      </div>
    </div>
  );
}
