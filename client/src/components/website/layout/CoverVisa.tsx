import Image from "next/image";
import { Link } from "@/i18n/routing";
import Breadcrumb from "../molecule/Breadcrumb";
import { useTranslations } from "next-intl";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
})
export default function CoverVisa({ pageName, prevPage, lng }: any) {
  const t = useTranslations("header");
  //   // to do z-inddex
  return (
    <>
      <div className="relative ">
        <div>
          <div className="container mx-auto">
            <div className="absolute   text-[#3462af] drop-shadow-xl text-xl md:text-4xl xl:text-[96px] font-bold   top-1 sm:top-10 md:top-10 xl:top-18 2xl:top-24  ">
              <div
                style={{ textShadow: "2px 2px #2F2F2F" }}
                className="flex flex-col sm:gap-4 md:gap-6 xl:gap-24"
              >
                <span>VISA &</span>
                <span>WORK PERMIT</span>
              </div>
              <span
                className="text-[8px] sm:text-base lg:text-xl 2xl:text-2xl drop-shadow-xl "
                style={{ textShadow: "1px 1px white" }}
              >
                タイ国内でのビザ＆労働許可証のことは弊社にお任せください ！
              </span>
            </div>
          </div>

          <Image
            src="/img/visa-workpermit/banner-visa.png"
            alt="visa-workpermit"
            width={1980}
            height={478}
            priority={true}
          ></Image>
        </div>
      </div>
      <div className={`${ lng == "th" ? `${kanit.className}` : `` }`}>
      <div className="shadow-lg bg-[#3462af] py-4 text-white sticky top-0 z-50 hidden md:block">
        <div className="container h-full hidden md:flex justify-center items-center gap-2 sm:gap-8 xl:gap-16 text-[8px] md:text-xs lg:text-[16px] font-semibold ">
          <Link href={"/visa-workpermit"}>{t("visa-work")}</Link>
          <Link href={"/visa-workpermit#service"}>{t("service")}</Link>
          <Link href={"/visa-workpermit#info"}>{t("help-info")}</Link>
          <Link href={"/visa-workpermit/news-activity"}>{t("news")}</Link>
          <Link href={"/visa-workpermit/faq"}>{t("faq")}</Link>
          <Link href={"/visa-workpermit#contact"}>{t("contact")}</Link>
        </div>
      </div>
      </div>
      <div className="bg-slate-500/10  w-full hidden md:block">
        <div className="container mx-auto">
          <Breadcrumb pageName={pageName} prevPage={prevPage} />
        </div>
      </div>
    </>
  );
}
