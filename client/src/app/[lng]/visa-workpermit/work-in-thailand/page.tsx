import FadeHeading from "@/components/website/atom/heading/FadeHeading";
import MainHeading from "@/components/website/atom/heading/MainHeading";
import Cover from "@/components/website/layout/Cover";
import CoverVisa from "@/components/website/layout/CoverVisa";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaEye } from "react-icons/fa";

const title = {
  jp: "タイで働くには",
  en: "Work In Thailand",
  th: "การทำงานในประเทศไทย",
};
const ContentJP = () => {
  return (
    <div className="grid grid-cols-1 gap-6 text-[#333333] font-medium">
      <div className="">
        <MainHeading text="タイで働くには" heading="1" />
        <div id="t-1" className="py-4 md:py-10 border-b-2 border-slate-200 ">
          <FadeHeading text="手続きの流れ" heading="2" />
          <div className="relative">
            <Image
              src={"/img/visa-workpermit/work-thailand-flow-1.png"}
              alt=""
              width={1900}
              height={1200}
              className="w-full "
            ></Image>
            <Link
              href="/visa-workpermit/work-in-thailand#t-2"
              className="hover:scale-110 absolute top-[18%] left-[20%] text-blue-500"
            >
              <FaEye size={20} />
            </Link>
            <Link
              href="/visa-workpermit/work-permit#t-4"
              className="hover:scale-110 absolute top-[5%] left-[73%] text-blue-500"
            >
              <FaEye size={20} />
            </Link>
            <Link
              href="/visa-workpermit/visa#t-10"
              className="hover:scale-110 absolute top-[18%] left-[73%] text-blue-500"
            >
              <FaEye size={20} />
            </Link>
          </div>
          <div className="flex flex-col gap-2  text-sm sm:text-base">
            <p>※補足説明</p>
            <p className="font-bold">3.労働許可証の申請について</p>
            <ul className="list-disc pl-6">
              <li>労働省申請の場合：10日程度</li>
              <li>ワンストップサービスの場合：1日</li>
            </ul>
            <p className="font-bold">4.就労ビザの延長申請について</p>
            <ul className="list-disc pl-6">
              <li>
                移民局申請 の場合 : 滞在許可期限45日前以降から申請可能 です。
                <br />
                申請後21日間の審査期間後、入国日の滞在許可期限より換算して1年迄発行されます。
              </li>
              <li>
                ワンストップサービスでの申請 :
                入国日より90日以内に申請が必要です。1年から最長2年まで発行されます。
              </li>
            </ul>
          </div>
        </div>
        <div id="t-2" className="py-4 md:py-10 border-b-2 border-slate-200">
          <FadeHeading
            text="就労ビザ・ノンイミグラント（B）ビザの取得"
            heading="2"
          />
          <div className="flex flex-col gap-2  text-sm sm:text-base">
            <p>
              2024年よりタイ国外でのビザ申請は、全てオンラインによるE-Visa申請に変更となりまし
              た。タイ外務省管理下のE-Visa公式サイトに必要書類をアップロードし申請を行います。
            </p>
            <p>ビザ発給までの所要日数は15営業日以内となります。</p>
            <p>詳しくは、e-Visa公式サイトをご確認下さい。</p>
            <span>
              E-Visa 公式サイト：
              <a href="https://www.thaievisa.go.th/">
                https://www.thaievisa.go.th/
              </a>
            </span>
            <span>
              在京タイ大使館Visaサイト：
              <a href="https://site.thaiembassy.jp/jp/visa/about/">
                https://site.thaiembassy.jp/jp/visa/about/
              </a>
            </span>
          </div>
        </div>
        <div id="t-3" className="py-4 md:py-10 border-b-2 border-slate-200">
          <FadeHeading text="２年目以降の更新" heading="2" />
          <div className="relative">
            <Image
              src={"/img/visa-workpermit/work-thailand-flow-2.png"}
              alt=""
              width={1900}
              height={1200}
              className="w-full "
            ></Image>
            <Link
              href="/visa-workpermit/visa#t-11"
              className="hover:scale-110 absolute top-[22%] left-[90%] text-blue-500"
            >
              <FaEye size={20} />
            </Link>
            <Link
              href="/visa-workpermit/visa#t-10"
              className="hover:scale-110 absolute top-[22%] left-[50%] text-blue-500"
            >
              <FaEye size={20} />
            </Link>
            <Link
              href="/visa-workpermit/work-permit#t-5"
              className="hover:scale-110 absolute top-[22%] left-[23%] text-blue-500"
            >
              <FaEye size={20} />
            </Link>
          </div>
          <div className="flex flex-col gap-2 mt-6  text-sm sm:text-base">
            <p>※補足説明</p>
            <p className="font-bold">２.就労ビザの更新申請について</p>
            <ul className="list-disc pl-6">
              <li>
                移民局申請 の場合：滞在許可期限45日前以降から申請可能 です。
                <br />
                申請後21日間の審査期間後、入国日の滞在許可期限より換算して1年迄発行されます。
              </li>
            </ul>
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
  return (
    <div className="grid grid-cols-1 gap-6 text-[#333333] font-medium">
      <div className="">
        <MainHeading text="การทำงานในประเทศไทย" heading="1" />
        <div id="t-1" className="py-4 md:py-10 border-b-2 border-slate-200 ">
          <FadeHeading text="ขั้นตอนการทำงานในประเทศไทย" heading="2" />
          <div className="relative">
            <Image
              src={"/img/visa-workpermit/IMGRQ1.png"}
              alt=""
              width={1900}
              height={1200}
              className="w-full"
            ></Image>
            <Link
              href="/visa-workpermit/work-in-thailand#t-2"
              className="hover:scale-110 absolute top-[26%] left-[20%] text-blue-500"
            >
              <FaEye size={20} />
            </Link>
            <Link
              href="/visa-workpermit/work-permit#t-4"
              className="hover:scale-110 absolute top-[11%] left-[73.1%] text-blue-500"
            >
              <FaEye size={20} />
            </Link>
            <Link
              href="/visa-workpermit/visa#t-10"
              className="hover:scale-110 absolute top-[24%] left-[73.1%] text-blue-500"
            >
              <FaEye size={20} />
            </Link>
          </div>
          <div className="flex flex-col gap-2  text-sm sm:text-base">
            <p>※คำอธิบายเพิ่มเติม</p>
            <p className="font-bold">3.การยื่นขอใบอนุญาตทำงาน</p>
            <ul className="list-disc pl-6">
              <li>หากยื่นเรื่องกับกระทรวงแรงงาน หรือ เขตพื้นที่ : ประมาณ 5-10 วัน สำหรับสัญชาติ ญี่ปุ่น</li>
              <li>หากใช้บริการแบบ one stop service: 1 วัน</li>
            </ul>
            <p className="font-bold">4.การยื่นคำร้องขอต่อวีซ่าทำงาน</p>
            <ul className="list-disc pl-6">
              <li>
                หากยื่นคำร้องที่สำนักงานตรวจคนเข้าเมือง: สามารถยื่นคำร้องได้ก่อนวันหมดอายุวีซ่า 45 วัน หลังจากผ่านช่วงระยะเวลาตรวจสอบ 21 วันแล้ว วีซ่าจะออกให้ไม่เกิน 1 ปี นับจากวันที่อนุญาตในวันเดินทางเข้าประเทศ
              </li>
              <li>
                หากยื่นคำร้องผ่านบริการ One-Stop Service:สำหรับต่อวีซ่าในปีแรกสามารถยื่นขอต่อวีซ่า ได้หลังจากมี เอกสาร ภงด.1 แล้ว และ จะ ประทับตราวีซ่า 1 ปี เลยโดยไม่ต้องรอตรวจสอบ 21 วันและ ใบอนุญาตทำงานจะออกให้เป็นระยะเวลาตั้งแต่ 1 ปีถึงสูงสุด 2 ปี
              </li>
            </ul>
          </div>
        </div>
        <div id="t-2" className="py-4 md:py-10 border-b-2 border-slate-200">
          <FadeHeading
            text="การขอวีซ่าทำงานหรือวีซ่าประเภทไม่อพยพ (B)"
            heading="2"
          />
          <div className="flex flex-col gap-2  text-sm sm:text-base">
            <p>
              ตั้งแต่ปี 2024 เป็นต้นไป การยื่นคำร้องขอวีซ่าทุกประเภทนอกประเทศไทยจะต้องทำผ่านระบบออนไลน์โดยใช้แบบฟอร์ม E-Visa 
              โดยยื่นคำร้องได้โดยการอัปโหลดเอกสารที่จำเป็นไปยังเว็บไซต์ E-Visa อย่างเป็นทางการซึ่งบริหารจัดการโดยกระทรวงการต่างประเทศของไทย
              การยื่นคำร้องจะใช้เวลาประมาณ 15 วันทำการ。
            </p>
            <p>สำหรับข้อมูลเพิ่มเติม โปรดดูที่เว็บไซต์ e-Visa อย่างเป็นทางการ</p>
            <span>
              เว็บไซต์ e-Visa อย่างเป็นทางการ：
              <a href="https://www.thaievisa.go.th/">
                https://www.thaievisa.go.th/
              </a>
            </span>
            <span>
              เว็บไซต์วีซ่าของสถานเอกอัครราชทูตไทยในโตเกียว: ：
              <a href="https://site.thaiembassy.jp/jp/visa/about/">
                https://site.thaiembassy.jp/jp/visa/about/
              </a>
            </span>
          </div>
        </div>
        <div id="t-3" className="py-4 md:py-10 border-b-2 border-slate-200">
          <FadeHeading text="ปีที่ 2 เป็นต้นไป" heading="2" />
          <div className="relative">
            <Image
              src={"/img/visa-workpermit/IMGRQ2.png"}
              alt=""
              width={1900}
              height={1200}
              className="w-full "
            ></Image>
            <Link
              href="/visa-workpermit/visa#t-11"
              className="hover:scale-110 absolute top-[27%] left-[90%] text-blue-500"
            >
              <FaEye size={20} />
            </Link>
            <Link
              href="/visa-workpermit/visa#t-10"
              className="hover:scale-110 absolute top-[27%] left-[50%] text-blue-500"
            >
              <FaEye size={20} />
            </Link>
            <Link
              href="/visa-workpermit/work-permit#t-5"
              className="hover:scale-110 absolute top-[27%] left-[23%] text-blue-500"
            >
              <FaEye size={20} />
            </Link>
          </div>
          <div className="flex flex-col gap-2 mt-6  text-sm sm:text-base">
            <p>※คำอธิบายเพิ่มเติม</p>
            <p className="font-bold">２.เกี่ยวกับการยื่นขอต่ออายุวีซ่าทำงาน</p>
            <ul className="list-disc pl-6">
              <li>
                หากยื่นคำร้องต่อสำนักงานตรวจคนเข้าเมือง สามารถยื่นคำร้องได้ก่อนวันหมดอายุใบอนุญาตพำนักไม่เกิน 45 วัน หลังจากผ่านช่วงการพิจารณา 21 วัน วีซ่าจะออกให้ไม่เกิน 1 ปี
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Work({ params }: { params: { lng: string } }) {
  const t = useTranslations("header");
  const s = useTranslations("service-section");
  const lang = params.lng;
  const content =
    lang == "jp" ? <ContentJP /> : lang == "en" ? <ContentEN /> : <ContentTH />;
  return (
    <>
      <div className="">
        <CoverVisa
          // @ts-ignore
          pageName={title[lang]}
          prevPage={{ pageName: t("visa-work"), url: "/visa-workpermit" }}
        />
        <div className="container mx-auto">{content}</div>
      </div>
    </>
  );
}
