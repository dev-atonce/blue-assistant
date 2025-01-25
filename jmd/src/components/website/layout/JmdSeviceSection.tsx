import Image from "next/image";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function JmdServiceSection({ lng }: any) {
  const lang = lng.toUpperCase();
  const s = useTranslations("service-section");

  const menuItem = [
    {
      image: "/img/jmd/s-1-1.png",
      image2: "/img/jmd/s-1-2.png",
      titleJP: "JMDサービス内容",
      titleEN: "JMDサービス内容",
      titleTH: "JMDサービス内容",
      link: "/about-us/t-1",
    },
    {
      image: "/img/jmd/s-2-1.png",
      image2: "/img/jmd/s-2-2.png",
      titleJP: "サービスのご利用の流れ",
      titleEN: "サービスのご利用の流れ",
      titleTH: "サービスのご利用の流れ",
      link: "/about-us/t-2",
    },
    {
      image: "/img/jmd/s-3-1.png",
      image2: "/img/jmd/s-3-2.png",
      titleJP: "海外旅行保険のご利用",
      titleEN: "海外旅行保険のご利用",
      titleTH: "海外旅行保険のご利用",
      link: "/about-us/t-3",
    },
    {
      image: "/img/jmd/s-4-1.png",
      image2: "/img/jmd/s-4-2.png",
      titleJP: "診療科別ガイド",
      titleEN: "Others",
      titleTH: "อื่นๆ",
      link: "/department-guide",
    },
  ];
  return (
    <div className="grid grid-cols-12 gap-5  text-xl text-[#3462af] font-semibold">
      {menuItem?.map((i: any, key: any) => {
        return (
          <button className="group hover:shadow-3 hover:bg-[#3462af] hover:text-white hover:md:translate-y-[-20px] transition-all py-6 col-span-12 md:col-span-6 xl:col-span-3 border rounded-lg shadow-xl flex flex-col justify-center items-center gap-5">
            <Image
              src={i?.image}
              alt=""
              width={180}
              height={180}
              className="group-hover:hidden"
            ></Image>
            <Image
              src={i?.image2}
              alt=""
              width={180}
              height={180}
              className="group-hover:block hidden"
            ></Image>
            <h3 className="font-semibold">{i[`title${lang}`]}</h3>
          </button>
        );
      })}
      {/* <Dropdown menu={{ items }} trigger={["click"]} placement="bottom">
        <button className="hover:shadow-3 hover:scale-95 transition-all py-3 col-span-12 md:col-span-6 xl:col-span-3 border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5">
          <Image
            src={"/img/visa-workpermit/service-1.png"}
            alt=""
            width={120}
            height={120}
          ></Image>
          <p>タイで働くには</p>
        </button>
      </Dropdown>

      <button className="hover:shadow-3 hover:scale-95 transition-all py-3 col-span-12 md:col-span-6 xl:col-span-3 border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5">
        <Image
          src={"/img/visa-workpermit/service-2.png"}
          alt=""
          width={120}
          height={120}
        ></Image>
        <p>労働許可証</p>
      </button>
      <button className="hover:shadow-3 hover:scale-95 transition-all py-3 col-span-12 md:col-span-6 xl:col-span-3 border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5">
        <Image
          src={"/img/visa-workpermit/service-3.png"}
          alt=""
          width={120}
          height={120}
        ></Image>
        <p>ビザ</p>
      </button>
      <button className="hover:shadow-3 hover:scale-95 transition-all py-3 col-span-12 md:col-span-6 xl:col-span-3 border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5">
        <Image
          src={"/img/visa-workpermit/service-4.png"}
          alt=""
          width={120}
          height={120}
        ></Image>
        <p>その他</p>
      </button> */}
    </div>
  );
}
