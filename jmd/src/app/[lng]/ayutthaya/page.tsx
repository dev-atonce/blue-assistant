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

const title = {
  th: "พระนครศรีอยุธยา",
  en: "Ayutthaya",
  jp: "アユタヤ",
};

const ContentEN = () => {
  return (
    <div className="py-4 md:py-10 border-b-2 border-slate-200 ">
      <FadeHeading text="Ayutthaya Rajthanee Hospital" heading="2" />

      <div className="detail-sty text-sm ">
        <div className="w-full grid grid-cols-12 gap-y-10 lg:gap-x-10 py-6 bg ">
          <div className="flex flex-col col-span-12 lg:col-span-6  w-full">
            <div className=" grid-flow-col grid grid-rows-2 gap-2 bg-blue-20 grid-cols-12">
              <div className="row-span-2 object-cover  col-span-6">
                <Image
                  width="400"
                  height="400"
                  alt="hospital"
                  src="/img/thailand/4.jpg"
                  className="object-cover h-full"
                />
              </div>
              <div className="row-span-1 object-cover col-span-6">
                <Image
                  alt="hospital"
                  width="400"
                  height="400"
                  src="/img/thailand/5.jpg"
                  className="h-full object-cover"
                />
              </div>

              <div className="row-span-1 object-cover col-span-6">
                <Image
                  width="400"
                  height="400"
                  alt="hospital"
                  src="/img/thailand/6.jpg"
                  className="object-cover h-full"
                />
              </div>
            </div>
            <a
              className="rounded-lg shadow-lg"
              href="https://www.google.com/maps/search/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5/@14.346045,100.5912173,14z?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
            >
              <Image
                width="400"
                height="400"
                alt="hospital"
                src="/img/jmd/ay_hos.png"
                className="object-cover w-full rounded-lg shadow-lg"
              />
            </a>
          </div>
          <div className="text-blue-900 w-full col-span-12 lg:col-span-6">
            <div className="pb-6">
              <span className="text-lg mb-2 font-semibold">
                JMD Reception Hours
              </span>
              <p>Mon- Fri: 8:00 - 20:00</p>
              <p>Sat・Sun・Public Holidays :　8:00 - 17:00</p>
            </div>
            <div className="pb-6">
              <span className="text-lg mb-2 font-semibold">
                Dedicated Line for JMD
              </span>
              <div className="flex gap-2 items-center">
                <div
                  className={` hover:text-white bg-white border border-blue-700 transition-all ease-in-out  drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                >
                  <IoIosCall size={25} />
                </div>
                <div>
                  <div>+66(0)98-815-6696 ジャイ (JAI)</div>
                  <div>+66(0)92-889-6448 プー (POOH)</div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                >
                  <MdMail size={25} />
                </div>
                <div>
                  <div>jmd-ayu@blue-assistance.co.th</div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                >
                  <FaHospital size={25} />
                </div>
                <div>
                  <div>0-3533-5555 </div>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-12 gap-4">
              <div className="col-span-4 font-bold">Hospital info :</div>
              <div className="col-span-8">
                ラチャタニー病院　Rajthanee Hospital
              </div>
              <div className="col-span-4 font-bold">Address：</div>
              <div className="col-span-8">
                111 Moo 3, Khlong Suan Phlu Sub-district, Phra nakhon Si
                Ayutthaya District, Phra Nakhon Si Ayutthaya 13000
              </div>
              <div className="col-span-4 font-bold">Reception Hours： </div>
              <div className="col-span-8">
                <p>General out-patient：8AM-8PM</p>
                <p>Night out-patient：8PM - 8AM</p>
                <p>Emergency Center: 24-hour Service</p>
              </div>
            </div>
            <div className="flex justify-start gap-4 mt-10">
              <a
                href="https://line.me/ti/p/~@jmd-ayu"
                className="flex gap-2  items-center bg-[#3562AE] text-white py-2 px-4 rounded-lg hover:bg-[#FDBD59]"
              >
                <FaLine size={25} /> ADD LINE
              </a>
              <a
                href="https://www.rajthanee.com/en/"
                className="flex gap-2 items-center bg-[#3562AE] text-white py-2 px-4 rounded-lg hover:bg-[#FDBD59]"
              >
                <IoIosGlobe size={25} /> WEBSITE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ContentJP = () => {
  return (
    <div className="py-4 md:py-10 border-b-2 border-slate-200 ">
      <FadeHeading text="Ayutthaya Rajthanee Hospital" heading="2" />

      <div className="detail-sty text-sm ">
        <div className="w-full grid grid-cols-12 gap-y-10 lg:gap-x-10 py-6 bg ">
          <div className="flex flex-col col-span-12 lg:col-span-6  w-full">
            <div className=" grid-flow-col grid grid-rows-2 gap-2 bg-blue-20 grid-cols-12">
              <div className="row-span-2 object-cover  col-span-6">
                <Image
                  width="400"
                  height="400"
                  alt="hospital"
                  src="/img/thailand/4.jpg"
                  className="object-cover h-full"
                />
              </div>
              <div className="row-span-1 object-cover col-span-6">
                <Image
                  alt="hospital"
                  width="400"
                  height="400"
                  src="/img/thailand/5.jpg"
                  className="h-full object-cover"
                />
              </div>

              <div className="row-span-1 object-cover col-span-6">
                <Image
                  width="400"
                  height="400"
                  alt="hospital"
                  src="/img/thailand/6.jpg"
                  className="object-cover h-full"
                />
              </div>
            </div>
            <a
              className="rounded-lg shadow-lg"
              href="https://www.google.com/maps/search/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5/@14.346045,100.5912173,14z?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
            >
              <Image
                width="400"
                height="400"
                alt="hospital"
                src="/img/jmd/ay_hos.png"
                className="object-cover w-full rounded-lg shadow-lg"
              />
            </a>
          </div>
          <div className="text-blue-900 w-full col-span-12 lg:col-span-6">
            <div className="pb-6">
              <span className="text-lg mb-2 font-semibold">JMD受付時間</span>
              <p>月～金: 8:00 - 20:00</p>
              <p>土・日・祝日 :　8:00 - 17:00</p>
            </div>
            <div className="pb-6">
              <span className="text-lg mb-2 font-semibold">JMD専用ライン</span>
              <div className="flex gap-2 items-center">
                <div
                  className={` hover:text-white bg-white border border-blue-700 transition-all ease-in-out  drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                >
                  <IoIosCall size={25} />
                </div>
                <div>
                  <div>+66(0)98-815-6696 ジャイ (JAI)</div>
                  <div>+66(0)92-889-6448 プー (POOH)</div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                >
                  <MdMail size={25} />
                </div>
                <div>
                  <div>jmd-ayu@blue-assistance.co.th</div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                >
                  <FaHospital size={25} />
                </div>
                <div>
                  <div>0-3533-5555</div>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-12 gap-4">
              <div className="col-span-4 font-bold">病院情報：</div>
              <div className="col-span-8">
                ラチャタニー病院　Rajthanee Hospital
              </div>
              <div className="col-span-4 font-bold">病院の住所：</div>
              <div className="col-span-8">
                111 Moo 3, Khlong Suan Phlu Sub-district, Phra nakhon Si
                Ayutthaya District, Phra Nakhon Si Ayutthaya 13000
              </div>
              <div className="col-span-4 font-bold">受付時間： </div>
              <div className="col-span-8">
                <p>一般外来：8AM-8PM</p>
                <p>夜間外来：8PM - 8AM</p>
                <p>救急センターは24時間体制</p>
              </div>
            </div>
            <div className="flex justify-start gap-4 mt-10">
              <a
                href="https://line.me/ti/p/~@jmd-ayu"
                className="flex gap-2  items-center bg-[#3562AE] text-white py-2 px-4 rounded-lg hover:bg-[#FDBD59]"
              >
                <FaLine size={25} /> ADD LINE
              </a>
              <a
                href="https://www.rajthanee.com/en/"
                className="flex gap-2 items-center bg-[#3562AE] text-white py-2 px-4 rounded-lg hover:bg-[#FDBD59]"
              >
                <IoIosGlobe size={25} /> WEBSITE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ContentTH = () => {
  return <ContentEN />;
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
                text="Japanese Medical Desk (JMD) - Ayutthaya"
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
