import Image from "next/image";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function VisaServiceSection({ lng }: any) {
  const lang = lng.toUpperCase();
  const s = useTranslations("service-section");

  const menuItem = [
    {
      image: "/img/visa-workpermit/service-1.png",
      titleJP: "タイで働くには",
      titleEN: "Work In Thailand",
      titleTH: "การทำงานในประเทศไทย",
      items: [
        {
          key: "1",
          label: (
            <Link href="/visa-workpermit/work-in-thailand#t-1">{s("t-1")}</Link>
          ),
        },
        {
          key: "2",
          label: (
            <Link href="/visa-workpermit/work-in-thailand#t-2">{s("t-2")}</Link>
          ),
        },
        {
          key: "3",
          label: (
            <Link href="/visa-workpermit/work-in-thailand#t-3">{s("t-3")}</Link>
          ),
        },
      ],
    },
    {
      image: "/img/visa-workpermit/service-2.png",
      titleJP: "労働許可証",
      titleEN: "Work Permit",
      titleTH: "ใบอนุญาตทำงาน",
      items: [
        {
          key: "1",
          label: (
            <Link href="/visa-workpermit/work-permit#t-4">{s("t-4")}</Link>
          ),
        },
        {
          key: "2",
          label: (
            <Link href="/visa-workpermit/work-permit#t-5">{s("t-5")}</Link>
          ),
        },
        {
          key: "3",
          label: (
            <Link href="/visa-workpermit/work-permit#t-6">{s("t-6")}</Link>
          ),
        },
        {
          key: "4",
          label: (
            <Link href="/visa-workpermit/work-permit#t-7">{s("t-7")}</Link>
          ),
        },
      ],
    },
    {
      image: "/img/visa-workpermit/service-3.png",
      titleJP: "ビザ",
      titleEN: "Visa",
      titleTH: "วีซ่า",
      items: [
        {
          key: "1",
          label: <Link href="/visa-workpermit/visa#t-8">{s("t-8")}</Link>,
        },
        {
          key: "2",
          label: <Link href="/visa-workpermit/visa#t-9">{s("t-9")} </Link>,
        },
        {
          key: "3",
          label: <Link href="/visa-workpermit/visa#t-10">{s("t-10")} </Link>,
        },
        {
          key: "4",
          label: <Link href="/visa-workpermit/visa#t-11">{s("t-11")}</Link>,
        },
      ],
    },
    {
      image: "/img/visa-workpermit/service-4.png",
      titleJP: "その他",
      titleEN: "Others",
      titleTH: "อื่นๆ",
      items: [
        {
          key: "1",
          label: <Link href="/visa-workpermit/others#t-12">{s("t-12")}</Link>,
        },
        {
          key: "2",
          label: <Link href="/visa-workpermit/others#t-13">{s("t-13")}</Link>,
        },
        {
          key: "3",
          label: <Link href="/visa-workpermit/others#t-14">{s("t-14")}</Link>,
        },
      ],
    },
  ];
  return (
    <div className="grid grid-cols-12 gap-5  text-xl text-[#3462af] font-semibold">
      {menuItem?.map((i: any, key: any) => {
        const { items } = i;
        return (
          <Dropdown
            key={key}
            menu={{ items }}
            trigger={["click"]}
            placement="bottom"
          >
            <button className="hover:shadow-3 hover:scale-95 transition-all py-3 col-span-12 md:col-span-6 xl:col-span-3 border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5">
              <Image src={i?.image} alt="" width={120} height={120}></Image>
              <h3>{i[`title${lang}`]}</h3>
            </button>
          </Dropdown>
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
