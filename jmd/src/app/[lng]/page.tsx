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
import MainHeading from "@/components/website/atom/heading/MainHeading";
import JmdServiceSection from "@/components/website/layout/JmdSeviceSection";
import Collapse from "@/components/website/organism/Collapse";

import type { CollapseProps } from "antd";
import { FaPlus } from "react-icons/fa";
import NewsList from "@/components/website/layout/NewsList";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: (
      <div className="flex justify-between items-center text-xs md:text-sm">
        <p>
          弊社の代行手数料と、役所への申請料金がございます。詳細は「料金表」をご参照ください
        </p>
        <FaPlus color="#3562AE" />
      </div>
    ),
    children: (
      <p>
        弊社の代行手数料と、役所への申請料金がございます。詳細は「料金表」をご参照ください
      </p>
    ),
  },
  {
    key: "2",
    label: (
      <div className="flex justify-between items-center text-xs md:text-sm">
        <p>
          弊社の代行手数料と、役所への申請料金がございます。詳細は「料金表」をご参照ください
        </p>
        <FaPlus color="#3562AE" />
      </div>
    ),
    children: <p>タイバーツでのお支払い。クレカ対応？</p>,
  },
  {
    key: "3",
    label: (
      <div className="flex justify-between items-center text-xs md:text-sm">
        <p>
          弊社の代行手数料と、役所への申請料金がございます。詳細は「料金表」をご参照ください
        </p>
        <FaPlus color="#3562AE" />
      </div>
    ),
    children: <p>初回は来社必須？</p>,
  },
  {
    key: "4",
    label: (
      <div className="flex justify-between items-center text-xs md:text-sm">
        <p>
          弊社の代行手数料と、役所への申請料金がございます。詳細は「料金表」をご参照ください
        </p>
        <FaPlus color="#3562AE" />
      </div>
    ),
    children: <p>弊社メッセンジャーにて対応？</p>,
  },
];
export default function Home({ params }: { params: { lng: string } }) {
  const h = useTranslations("header");
  const l = useTranslations("location");
  const b = useTranslations("blog-section");
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
          <div className=" text-[#3562AE] my-10  w-full shadow-lg bg-blue-100/60 rounded-2xl p-2  md:p-4 lg:p-10">
            <div className="mt-[-40px]">
              <MainHeading
                text="ジャパニーズメディカル（JMD）とは"
                heading="2"
              />
            </div>
            <div className="font-semibold text-xs md:text-sm">
              <p>
                ジャパニーズメディカルデスク（JMD）は、タイ及び東南アジアにおける医療設備が整っていない地域にお住まいの在住者様の生活に『日本語の医療サポート』をご提供する事を目的とし設立した、「日本語医療サポートデスク」です。
              </p>
              <p>
                タイ・ミャンマー・ラオス各国の医療機関内にジャパニーズメディカルデスク(JMD)を開設、日本語医療通訳が常駐し、日本語医療サービスのご提供を行っております。
              </p>
            </div>
          </div>
          <div className="py-t-6 pb-20 border-b border-slate-200">
            <MainHeading text="はじめての方へ" heading="2" />
            <JmdServiceSection lng={params?.lng} />
          </div>
          <div className="py-6 border-b border-slate-100">
            <MainHeading text="はじめての方へ" heading="2" />
            <div className="py-4">
              {/* @ts-ignore */}
              <Collapse items={items} />
            </div>
            <div className="flex justify-center mt-10">
              <Link
                href="/faq"
                className="bg-[#3562AE] text-white py-2 px-16 rounded-lg hover:bg-[#FDBD59]"
              >
                {b("see-more")}
              </Link>
            </div>
          </div>
        </div>
        <div className="py-6 pb-10 bg-slate-200/60 ">
          <div className="container mx-auto">
            <MainHeading text={h("news")} heading="2" />
            <NewsList
              lng={params.lng}
              limit={5}
              module={"jmd"}
              forPage={"jmd"}
            />
            <div className="flex justify-center items-center mt-6">
              <Link
                className="text-white bg-[#3462af] rounded-md py-2 px-5 "
                href={"/visa-workpermit/news-activity"}
              >
                {b("more")}
              </Link>
            </div>
          </div>
        </div>

        <ContactSection home={false} />
      </div>
    </div>
  );
}
