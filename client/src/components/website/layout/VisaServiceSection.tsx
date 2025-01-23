import Image from "next/image";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";
import { Link } from "@/i18n/routing";

const menuItem = [
  {
    image: "/img/visa-workpermit/service-1.png",
    titleJP: "タイで働くには",
    titleEN: "タイで働くには",
    titleTH: "タイで働くには",
    items: [
      {
        key: "1",
        label: (
          <Link href="/visa-workpermit/work-in-thailand#t-1">手続きの流れ</Link>
        ),
      },
      {
        key: "2",
        label: (
          <Link href="/visa-workpermit/work-in-thailand#t-2">
            就労ビザの取得
          </Link>
        ),
      },
      {
        key: "3",
        label: (
          <Link href="/visa-workpermit/work-in-thailand#t-3">
            2年目以降の更新
          </Link>
        ),
      },
    ],
  },
  {
    image: "/img/visa-workpermit/service-2.png",
    titleJP: "労働許可証",
    titleEN: "労働許可証",
    titleTH: "労働許可証",
    items: [
      {
        key: "1",
        label: (
          <Link href="/visa-workpermit/work-permit#t-4">労働許可証とは</Link>
        ),
      },
      {
        key: "2",
        label: <Link href="/visa-workpermit/work-permit#t-5">必要書類</Link>,
      },
      {
        key: "3",
        label: (
          <Link href="/visa-workpermit/work-permit#t-6">
            タイ国内での転職・退職{" "}
          </Link>
        ),
      },
      {
        key: "4",
        label: (
          <Link href="/visa-workpermit/work-permit#t-7">
            BOI認可企業・ワンストップサービス{" "}
          </Link>
        ),
      },
    ],
  },
  {
    image: "/img/visa-workpermit/service-3.png",
    titleJP: "ビザ",
    titleEN: "ビザ",
    titleTH: "ビザ",
    items: [
      {
        key: "1",
        label: <Link href="/visa-workpermit/visa#t-8">ビザとは</Link>,
      },
      {
        key: "2",
        label: <Link href="/visa-workpermit/visa#t-9">ビザの種類 </Link>,
      },
      {
        key: "3",
        label: <Link href="/visa-workpermit/visa#t-10">必要書類 </Link>,
      },
      {
        key: "4",
        label: (
          <Link href="/visa-workpermit/visa#t-11">
            再入国許可・リエントリーパーミット
          </Link>
        ),
      },
    ],
  },
  {
    image: "/img/visa-workpermit/service-4.png",
    titleJP: "その他",
    titleEN: "その他",
    titleTH: "その他",
    items: [
      {
        key: "1",
        label: (
          <Link href="/visa-workpermit/others#t-12">90日レポート申請</Link>
        ),
      },
      {
        key: "2",
        label: (
          <Link href="/visa-workpermit/others#t-13">
            90日レポート期間が過ぎたら
          </Link>
        ),
      },
      {
        key: "3",
        label: (
          <Link href="/visa-workpermit/others#t-14">
            オーバーステイについて
          </Link>
        ),
      },
    ],
  },
];
export default function VisaServiceSection() {
  return (
    <div className="grid grid-cols-12 gap-5  text-xl text-[#3462af] font-semibold">
      {menuItem?.map((i: any, key: any) => {
        const { items } = i;
        return (
          <Dropdown menu={{ items }} trigger={["click"]} placement="bottom">
            <button className="hover:shadow-3 hover:scale-95 transition-all py-3 col-span-12 md:col-span-6 xl:col-span-3 border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5">
              <Image src={i?.image} alt="" width={120} height={120}></Image>
              <h3>{i?.titleJP}</h3>
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
