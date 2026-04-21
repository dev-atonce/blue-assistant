import FadeHeading from "@/components/website/atom/heading/FadeHeading";
import MainHeading from "@/components/website/atom/heading/MainHeading";
import Cover from "@/components/website/layout/Cover";
import CoverVisa from "@/components/website/layout/CoverVisa";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaArrowCircleDown, FaEye, FaHospital, FaLine } from "react-icons/fa";
import { Image as AntImage } from "antd";
import Modal from "@/components/website/layout/Modal";
import AddressModal from "@/components/website/organism/AddressModal";
import { MdMail } from "react-icons/md";
import { IoIosCall, IoIosGlobe } from "react-icons/io";
import SwiperSquare from "@/components/website/molecule/SwiperSquare";
import { SiGooglemaps, SiLine } from "react-icons/si";
import { RiArrowUpSLine } from "react-icons/ri";

const title = {
  th: "กรุงเทพมหานคร",
  en: "Bangkok",
  jp: "バンコク",
};

const ContentJP = () => {
  return (
    <div className="py-4 md:py-10 border-b-2 border-slate-200 ">
      <FadeHeading text="Bangkok Christian Hospital" heading="2" />

      <div className="detail-sty text-sm ">
        <div className="w-full grid grid-cols-12 gap-y-10 lg:gap-x-10 py-6 bg ">
          <div className="col-span-12 lg:col-span-6  w-full">
            <SwiperSquare
              imgs={[
                "/img/thailand/BCH1.jpg",
                "/img/thailand/BCH2.jpg",
              ]}
            />
          </div>
          <div className="text-blue-900 w-full col-span-12 lg:col-span-6">
            <div className="pb-6 ">
              <span className="text-lg mb-2 font-semibold col-span-6">
                JMD受付時間
              </span>
              <p>月～金 &nbsp;&nbsp;: 8:00 - 17:00または20:00</p>
              <p>土日祝&nbsp;&nbsp;&nbsp;: 8:00 - 17:00</p>
            </div>
            <div className="">
              <span className="text-lg mb-2 font-semibold">JMD専用ライン</span>
              <div className="flex gap-2 items-center">
                <div
                  className={` hover:text-white bg-white border border-blue-700 transition-all ease-in-out  drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                >
                  <IoIosCall size={25} />
                </div>
                <div>
                  <div>+66(0)92-265-1854</div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                >
                  <MdMail size={25} />
                </div>
                <div>
                  <div>jmd-bch@blue-assistance.co.th</div>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-12 gap-4 mt-6">
              <div className="col-span-4 font-bold">病院情報：</div>
              <div className="col-span-8">
                バンコククリスチャン病院　Bangkok Christian Hospital
              </div>
              <div className="col-span-4 font-bold">病院の住所</div>
              <div className="col-span-8">
                124 Si Lom Rd, Suriya Wong, Bang Rak, Bangkok 10500
              </div>

              <div className="col-span-4 font-bold">受付時間： </div>
              <div className="col-span-8">
                <p>一般外来：8:00～</p>
                <p>救急センターは24時間体制</p>
              </div>
              <div className={`col-span-4 font-bold`}>病院の電話番号：</div>
              <div className="col-span-8">
                <div>+66(0)2-625-9000</div>
              </div>
            </div>
            <div className="flex justify-start gap-1 mt-10">
              <a
                href="https://www.bch.in.th/"
                className="flex gap-1 items-center bg-[#3562AE] text-white py-2 px-1 rounded-lg hover:bg-[#FDBD59]"
              >
                <IoIosGlobe size={25} /> WEBSITE
              </a>
              <a
                href="https://maps.app.goo.gl/N2Gvskzz6zBGnqJLA"
                className="flex gap-1 items-center bg-[#3562AE] text-white py-2 px-1 rounded-lg hover:bg-[#FDBD59]"
              >
                <SiGooglemaps size={25} />
                GOOGLE MAP
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContentEN = () => {
  return <ContentJP />;
};

const ContentTH = () => {
  return <ContentJP />;
};

export default function Work({ params }: { params: { lng: string } }) {
  const lang = params?.lng;
  const t = useTranslations("header");
  const s = useTranslations("service-section");

  const content =
    lang == "jp" ? <ContentJP /> : lang == "en" ? <ContentEN /> : <ContentTH />;
  return (
    <>
      <div className="">
        <CoverVisa
          // @ts-ignore
          pageName={title[lang]}
          prevPage={{ pageName: t("home"), url: "/#location" }}
        />
        <div className="container mx-auto  ">
          <div className="grid grid-cols-1 gap-6 text-[#333333] font-medium">
            <div className="">
              <MainHeading
                text="Japanese Medical Desk (JMD) - Bangkok"
                heading="1"
              />

              {content}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
