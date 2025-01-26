import ContactSection from "@/components/website/layout/ContactSection";

import CoverVisa from "@/components/website/layout/CoverVisa";

import LocationSection from "@/components/website/layout/LocationSection";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

import MainHeading from "@/components/website/atom/heading/MainHeading";
import JmdServiceSection from "@/components/website/layout/JmdSeviceSection";
import Collapse from "@/components/website/organism/Collapse";

import type { CollapseProps } from "antd";
import { FaPlus } from "react-icons/fa";
import NewsList from "@/components/website/layout/NewsList";
const Ans = ({ text }: any) => {
  return (
    <div className="flex justify-between items-center text-xs md:text-sm">
      <p>{text}</p>
    </div>
  );
};
const Q = ({ text }: any) => {
  return (
    <div className="flex justify-between items-center text-xs md:text-sm">
      <p>{text}</p>
      <FaPlus color="#3562AE" />
    </div>
  );
};
// to do jp & th qa
const consultItems = {
  en: [
    {
      key: "1",
      label: <Q text="・When Visiting the Hospital for the First Time" />,
      children: (
        <Ans text="・When visiting a hospital where the Japanese Medical Desk (JMD) is stationed, please contact each JMD via LINE, phone, or email. We will confirm your symptoms and preferred date, and guide you accordingly." />
      ),
    },
    {
      key: "2",
      label: <Q text="・Is it necessary to make an appointment?" />,
      children: (
        <Ans text="・Some departments may not have specialists available. If your schedule allows, please contact JMD in advance to make an appointment." />
      ),
    },
    {
      key: "3",
      label: <Q text="・Can I receive treatment in case of an emergency?" />,
      children: (
        <Ans text="・We also provide support for Emergency Room (ER) visits. In some cases, assistance may be provided via on-call (phone interpretation)." />
      ),
    },
    {
      key: "4",
      label: <Q text="・What should I bring to the hospital?" />,
      children: (
        <Ans text="・Please bring your passport, insurance policy, and any medications you are currently taking (e.g., medication notebook if available)." />
      ),
    },
  ],
  jp: [
    {
      key: "1",
      label: <Q text="・When Visiting the Hospital for the First Time" />,
      children: (
        <Ans text="・When visiting a hospital where the Japanese Medical Desk (JMD) is stationed, please contact each JMD via LINE, phone, or email. We will confirm your symptoms and preferred date, and guide you accordingly." />
      ),
    },
    {
      key: "2",
      label: <Q text="・Is it necessary to make an appointment?" />,
      children: (
        <Ans text="・Some departments may not have specialists available. If your schedule allows, please contact JMD in advance to make an appointment." />
      ),
    },
    {
      key: "3",
      label: <Q text="・Can I receive treatment in case of an emergency?" />,
      children: (
        <Ans text="・We also provide support for Emergency Room (ER) visits. In some cases, assistance may be provided via on-call (phone interpretation)." />
      ),
    },
    {
      key: "4",
      label: <Q text="・What should I bring to the hospital?" />,
      children: (
        <Ans text="・Please bring your passport, insurance policy, and any medications you are currently taking (e.g., medication notebook if available)." />
      ),
    },
  ],
  th: [
    {
      key: "1",
      label: <Q text="・When Visiting the Hospital for the First Time" />,
      children: (
        <Ans text="・When visiting a hospital where the Japanese Medical Desk (JMD) is stationed, please contact each JMD via LINE, phone, or email. We will confirm your symptoms and preferred date, and guide you accordingly." />
      ),
    },
    {
      key: "2",
      label: <Q text="・Is it necessary to make an appointment?" />,
      children: (
        <Ans text="・Some departments may not have specialists available. If your schedule allows, please contact JMD in advance to make an appointment." />
      ),
    },
    {
      key: "3",
      label: <Q text="・Can I receive treatment in case of an emergency?" />,
      children: (
        <Ans text="・We also provide support for Emergency Room (ER) visits. In some cases, assistance may be provided via on-call (phone interpretation)." />
      ),
    },
    {
      key: "4",
      label: <Q text="・What should I bring to the hospital?" />,
      children: (
        <Ans text="・Please bring your passport, insurance policy, and any medications you are currently taking (e.g., medication notebook if available)." />
      ),
    },
  ],
};

export default function Home({ params }: { params: { lng: string } }) {
  const h = useTranslations("header");
  const l = useTranslations("location");
  const b = useTranslations("blog-section");
  const a = useTranslations("about-section");
  const s = useTranslations("service-section");
  const lang = params.lng;
  return (
    <div className="">
      <CoverVisa img="/img/cover.png" home={true} />

      <div className="relative ">
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
          <div
            id="about"
            className=" text-[#3562AE] my-10  w-full shadow-lg bg-blue-100/60 rounded-2xl p-2  md:p-4 lg:p-10"
          >
            <div className="mt-[-40px]">
              <MainHeading text={a("heading")} heading="2" />
            </div>
            <div className="font-semibold text-xs md:text-sm">
              <p>{a("p1")}</p>
              <p>{a("p2")}</p>
            </div>
          </div>
          <div id="service" className="py-t-6 pb-20 border-b border-slate-200">
            <MainHeading text={s("h")} heading="2" />
            <JmdServiceSection lng={params?.lng} />
          </div>
          <div id="faq" className="py-6 border-b border-slate-100">
            <MainHeading text={h("faq")} heading="2" />
            <div className="py-4">
              {/* @ts-ignore */}
              <Collapse items={consultItems[lang]} />
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
                href={"/news-activity"}
              >
                {b("more")}
              </Link>
            </div>
          </div>
        </div>

        <ContactSection home={false} topic="jmd" />
      </div>
    </div>
  );
}
