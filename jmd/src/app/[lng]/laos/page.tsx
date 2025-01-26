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
  th: "ประเทศลาว",
  en: "Laos",
  jp: "ラオス",
};

const ContentEN = () => {
  return (
    <div className="py-4 md:py-10 border-b-2 border-slate-200 ">
      <div className=" text-sm ">
        <div className="w-full grid grid-cols-12 gap-y-10 lg:gap-x-10 py-6 bg ">
          <div className="flex flex-col col-span-12 lg:col-span-6  w-full">
            <div className=" grid-flow-col grid grid-rows-2 gap-2 bg-blue-20 grid-cols-12">
              <div className="row-span-2 object-cover  col-span-6">
                <Image
                  width="400"
                  height="400"
                  alt="hospital"
                  src="/img/visa-workpermit/ministry_map2.png"
                  className="object-cover h-full"
                />
              </div>
              <div className="row-span-1 object-cover col-span-6">
                <AntImage src="/img/visa-workpermit/ministry_map2.png" />
              </div>

              <div className="row-span-1 object-cover col-span-6">
                <AntImage src="/img/visa-workpermit/ministry_map2.png" />
              </div>
            </div>
            <a
              className="rounded-lg shadow-lg"
              href="https://www.google.com/maps/place/Kasemrad+International+Hospital+Vientiane/@17.9374208,102.6117105,13z/data=!4m6!3m5!1s0x312467a3522c3837:0x2881e0ccd7dc0a30!8m2!3d17.9396154!4d102.6427276!16s%2Fg%2F11m_w1_72g?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
            >
              <Image
                width="400"
                height="400"
                alt="hospital"
                src="/img/jmd/la_hos1.png"
                className="object-cover w-full rounded-lg shadow-lg"
              />
            </a>
          </div>
          <div className="text-blue-900 w-full col-span-12 lg:col-span-6">
            <FadeHeading
              text="Kasemrad International Hospital Vientiane"
              heading="2"
            />
            <div className="pb-6">
              <span className="text-lg mb-2 font-semibold">
                JMD Reception Hours
              </span>
              <p>1: 9:00 - 18:00</p>
              <p>2 :　9:00 - 12:00</p>
              <p>*Closed on Sundays and holidays</p>
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
                  <div>+856‐(0)20-540-24002</div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                >
                  <MdMail size={25} />
                </div>
                <div>
                  <div>jmd-lao@blue-assistance.co.th</div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                >
                  <FaHospital size={25} />
                </div>
                <div>
                  <div>＋856-21-833-333</div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-4">
              <div className="col-span-4 font-bold">Hospital info :</div>
              <div className="col-span-8">
                カセムラート病院ビエンチャン Kasemrad International Hospital
                Vientiane
              </div>
              <div className="col-span-4 font-bold">Address：</div>
              <div className="col-span-8">
                no 999,450 years Road, Donnokkhoum Village,Sisattanak
                District,Vientiane Capital, Lao PDR
              </div>
              <div className="col-span-4 font-bold">Reception Hours： </div>
              <div className="col-span-8">
                <p>General out-patient：8AM-8PM</p>

                <p>Emergency Center: 24-hour Service</p>
              </div>
            </div>
            <div className="flex justify-start gap-4 mt-10">
              <a
                href="https://line.me/ti/p/~@197nlufp"
                className="flex gap-2  items-center bg-[#3562AE] text-white py-2 px-4 rounded-lg hover:bg-[#FDBD59]"
              >
                <FaLine size={25} /> ADD LINE
              </a>
              <a
                href="https://kasemradvientiane.com/index.php/en/"
                className="flex gap-2 items-center bg-[#3562AE] text-white py-2 px-4 rounded-lg hover:bg-[#FDBD59]"
              >
                <IoIosGlobe size={25} /> WEBSITE
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-sm ">
        <div className="w-full grid grid-cols-12 gap-y-10 lg:gap-x-10 py-6 bg ">
          <div className="flex flex-col col-span-12 lg:col-span-6  w-full">
            <div className=" grid-flow-col grid grid-rows-2 gap-2 bg-blue-20 grid-cols-12">
              <div className="row-span-2 object-cover  col-span-6">
                <Image
                  width="400"
                  height="400"
                  alt="hospital"
                  src="/img/visa-workpermit/ministry_map2.png"
                  className="object-cover h-full"
                />
              </div>
              <div className="row-span-1 object-cover col-span-6">
                <AntImage src="/img/visa-workpermit/ministry_map2.png" />
              </div>

              <div className="row-span-1 object-cover col-span-6">
                <AntImage src="/img/visa-workpermit/ministry_map2.png" />
              </div>
            </div>
            <a
              className="rounded-lg shadow-lg"
              href="https://www.google.com/maps/place/Alliance+International+Medical+Centre/@17.968486,102.5351399,13z/data=!4m6!3m5!1s0x312469aac499a20d:0x4a29c1153843285e!8m2!3d17.9702924!4d102.5746971!16s%2Fg%2F1txnly2q?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
            >
              <Image
                width="400"
                height="400"
                alt="hospital"
                src="/img/jmd/la_hos2.png"
                className="object-cover w-full rounded-lg shadow-lg"
              />
            </a>
          </div>
          <div className="text-blue-900 w-full col-span-12 lg:col-span-6">
            <FadeHeading
              text="Alliance International Medical Centre (AIMC)"
              heading="2"
            />
            <div className="pb-6">
              <span className="text-lg mb-2 font-semibold">
                JMD Reception Hours
              </span>
              <p>1: 9:00 - 18:00</p>
              <p>2 :　9:00 - 12:00</p>
              <p>*Closed on Sundays and holidays</p>
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
                  <div>+856‐(0)20-540-24002</div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                >
                  <MdMail size={25} />
                </div>
                <div>
                  <div>jmd-lao@blue-assistance.co.th</div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                >
                  <FaHospital size={25} />
                </div>
                <div>
                  <div>＋856-21-513-095</div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-4">
              <div className="col-span-4 font-bold">Hospital info :</div>
              <div className="col-span-8">
                アライアンスインターナショナルメディカルセンター(AIMC)　Alliance
                International Medical Centre
              </div>
              <div className="col-span-4 font-bold">Address：</div>
              <div className="col-span-8">
                Honda Complex, Souphanuvong Road, Ban Wattayyaithong <br />
                Sikhottabong District, Vientiane Capital, Lao P.D.R
              </div>
              <div className="col-span-4 font-bold">Reception Hours： </div>
              <div className="col-span-8">
                <p>General out-patient - Weekdays：8AM-8PM</p>
                <p>Weekends：8AM-5PM</p>

                <p>Emergency Center: 24-hour Service</p>
              </div>
            </div>
            <div className="flex justify-start gap-4 mt-10">
              <a
                href="https://line.me/ti/p/~@197nlufp"
                className="flex gap-2  items-center bg-[#3562AE] text-white py-2 px-4 rounded-lg hover:bg-[#FDBD59]"
              >
                <FaLine size={25} /> ADD LINE
              </a>
              <a
                href="http://www.aimclao.com/"
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
      <div className=" text-sm ">
        <div className="w-full grid grid-cols-12 gap-y-10 lg:gap-x-10 py-6 bg ">
          <div className="flex flex-col col-span-12 lg:col-span-6  w-full">
            <div className=" grid-flow-col grid grid-rows-2 gap-2 bg-blue-20 grid-cols-12">
              <div className="row-span-2 object-cover  col-span-6">
                <Image
                  width="400"
                  height="400"
                  alt="hospital"
                  src="/img/visa-workpermit/ministry_map2.png"
                  className="object-cover h-full"
                />
              </div>
              <div className="row-span-1 object-cover col-span-6">
                <AntImage src="/img/visa-workpermit/ministry_map2.png" />
              </div>

              <div className="row-span-1 object-cover col-span-6">
                <AntImage src="/img/visa-workpermit/ministry_map2.png" />
              </div>
            </div>
            <a
              className="rounded-lg shadow-lg"
              href="https://www.google.com/maps/place/Kasemrad+International+Hospital+Vientiane/@17.9374208,102.6117105,13z/data=!4m6!3m5!1s0x312467a3522c3837:0x2881e0ccd7dc0a30!8m2!3d17.9396154!4d102.6427276!16s%2Fg%2F11m_w1_72g?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
            >
              <Image
                width="400"
                height="400"
                alt="hospital"
                src="/img/jmd/la_hos1.png"
                className="object-cover w-full rounded-lg shadow-lg"
              />
            </a>
          </div>
          <div className="text-blue-900 w-full col-span-12 lg:col-span-6">
            <FadeHeading
              text="Kasemrad International Hospital Vientiane"
              heading="2"
            />
            <div className="pb-6">
              <span className="text-lg mb-2 font-semibold">JMD受付時間</span>
              <p>1: 9:00 - 18:00</p>
              <p>2 :　9:00 - 12:00</p>
              <p>※日祝はお休み</p>
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
                  <div>+856‐(0)20-540-24002</div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                >
                  <MdMail size={25} />
                </div>
                <div>
                  <div>jmd-lao@blue-assistance.co.th</div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                >
                  <FaHospital size={25} />
                </div>
                <div>
                  <div>＋856-21-833-333</div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-4">
              <div className="col-span-4 font-bold">病院情報：</div>
              <div className="col-span-8">
                カセムラート病院ビエンチャン Kasemrad International Hospital
                Vientiane
              </div>
              <div className="col-span-4 font-bold">病院の住所：</div>
              <div className="col-span-8">
                no 999,450 years Road, Donnokkhoum Village,Sisattanak
                District,Vientiane Capital, Lao PDR
              </div>
              <div className="col-span-4 font-bold">受付時間： </div>
              <div className="col-span-8">
                <p>外来受付：8AM-8PM</p>

                <p>受付時間外は、24時間救急センターで対応</p>
              </div>
            </div>
            <div className="flex justify-start gap-4 mt-10">
              <a
                href="https://line.me/ti/p/~@197nlufp"
                className="flex gap-2  items-center bg-[#3562AE] text-white py-2 px-4 rounded-lg hover:bg-[#FDBD59]"
              >
                <FaLine size={25} /> ADD LINE
              </a>
              <a
                href="https://kasemradvientiane.com/index.php/en/"
                className="flex gap-2 items-center bg-[#3562AE] text-white py-2 px-4 rounded-lg hover:bg-[#FDBD59]"
              >
                <IoIosGlobe size={25} /> WEBSITE
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-sm ">
        <div className="w-full grid grid-cols-12 gap-y-10 lg:gap-x-10 py-6 bg ">
          <div className="flex flex-col col-span-12 lg:col-span-6  w-full">
            <div className=" grid-flow-col grid grid-rows-2 gap-2 bg-blue-20 grid-cols-12">
              <div className="row-span-2 object-cover  col-span-6">
                <Image
                  width="400"
                  height="400"
                  alt="hospital"
                  src="/img/visa-workpermit/ministry_map2.png"
                  className="object-cover h-full"
                />
              </div>
              <div className="row-span-1 object-cover col-span-6">
                <AntImage src="/img/visa-workpermit/ministry_map2.png" />
              </div>

              <div className="row-span-1 object-cover col-span-6">
                <AntImage src="/img/visa-workpermit/ministry_map2.png" />
              </div>
            </div>
            <a
              className="rounded-lg shadow-lg"
              href="https://www.google.com/maps/place/Alliance+International+Medical+Centre/@17.968486,102.5351399,13z/data=!4m6!3m5!1s0x312469aac499a20d:0x4a29c1153843285e!8m2!3d17.9702924!4d102.5746971!16s%2Fg%2F1txnly2q?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
            >
              <Image
                width="400"
                height="400"
                alt="hospital"
                src="/img/jmd/la_hos2.png"
                className="object-cover w-full rounded-lg shadow-lg"
              />
            </a>
          </div>
          <div className="text-blue-900 w-full col-span-12 lg:col-span-6">
            <div className="pb-6">
              <span className="text-lg mb-2 font-semibold">JMD受付時間</span>
              <p>1: 9:00 - 18:00</p>
              <p>2 :　9:00 - 12:00</p>
              <p>※日祝はお休み</p>
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
                  <div>+856‐(0)20-540-24002</div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                >
                  <MdMail size={25} />
                </div>
                <div>
                  <div>jmd-lao@blue-assistance.co.th</div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                >
                  <FaHospital size={25} />
                </div>
                <div>
                  <div>＋856-21-513-095</div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-4">
              <div className="col-span-4 font-bold">病院情報：</div>
              <div className="col-span-8">
                アライアンスインターナショナルメディカルセンター(AIMC)　Alliance
                International Medical Centre
              </div>
              <div className="col-span-4 font-bold">病院の住所：</div>
              <div className="col-span-8">
                Honda Complex, Souphanuvong Road, Ban Wattayyaithong <br />
                Sikhottabong District, Vientiane Capital, Lao P.D.R
              </div>
              <div className="col-span-4 font-bold">受付時間： </div>
              <div className="col-span-8">
                <p>外来受付：平日：8AM-8PM</p>
                <p>土曜日・日曜日：8AM-5PM</p>

                <p>受付時間外は、24時間救急センターで対応</p>
              </div>
            </div>
            <div className="flex justify-start gap-4 mt-10">
              <a
                href="https://line.me/ti/p/~@197nlufp"
                className="flex gap-2  items-center bg-[#3562AE] text-white py-2 px-4 rounded-lg hover:bg-[#FDBD59]"
              >
                <FaLine size={25} /> ADD LINE
              </a>
              <a
                href="http://www.aimclao.com/"
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
                text="Japanese Medical Desk (JMD) - Laos"
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
