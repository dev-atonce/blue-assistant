"use client";
import Image from "next/image";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import Modal from "./Modal";

export default function LocationSection({ lng }: any) {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const lang = lng.toUpperCase();
  const s = useTranslations("service-section");
  const province = {
    p1: {
      th: "อยุธยา",
      jp: "アユタヤ",
      en: "Ayutthaya",
    },
    p2: {
      th: "ปราจีนบุรี",
      jp: "プラチンブリ",
      en: "Prachinburi",
    },
  };

  const menuItem = [
    {
      image: "/img/jmd/th.png",
      titleJP: "タイ",
      titleEN: "Thailand",
      titleTH: "ประเทศไทย",
      items: [
        {
          key: "1",
          label: (
            // @ts-ignore
            <Link href="/ayutthaya">{province?.p1[lng]}</Link>
          ),
        },
        {
          key: "2",
          label: (
            // @ts-ignore
            <Link href="/prachinburi">{province?.p2[lng]}</Link>
          ),
        },
      ],
    },
    {
      image: "/img/jmd/my.png",
      titleJP: "ミャンマー",
      titleEN: "Myanmar",
      titleTH: "ประเทศเมียนมาร์",
      link: "/myanmar",
    },
    {
      image: "/img/jmd/la.png",
      titleJP: "ラオス",
      titleEN: "Laos",
      titleTH: "ประเทศลาว",
      link: "/laos",
    },
  ];

  console.log({ modal1, modal2, modal3, modal4 });
  return (
    <>
      <div className="grid grid-cols-12 lg:px-16 gap-y-4  text-xl text-[#3462af] font-semibold">
        {menuItem?.map((i: any, key: any) => {
          const { items } = i;

          if (items) {
            return (
              <Dropdown
                key={key}
                menu={{ items }}
                trigger={["click"]}
                placement="bottom"
              >
                <button className=" hover:scale-95 transition-all py-3 col-span-12 md:col-span-4  rounded-lg flex flex-col justify-center items-center gap-5">
                  <Image src={i?.image} alt="" width={200} height={200}></Image>
                  <div className="flex justify-between items-center">
                    <h3>{i[`title${lang}`]}</h3>
                    {key == 0 && <FaCaretDown />}
                  </div>
                </button>
              </Dropdown>
            );
          } else {
            return (
              <Link
                href={i?.link}
                className=" hover:scale-95 transition-all py-3 col-span-12 md:col-span-4  rounded-lg flex flex-col justify-center items-center gap-5"
              >
                <Image src={i?.image} alt="" width={200} height={200}></Image>
                <div className="flex justify-between items-center">
                  <h3>{i[`title${lang}`]}</h3>
                  {key == 0 && <FaCaretDown />}
                </div>
              </Link>
            );
          }
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
    </>
  );
}
