import Image from "next/image";
import { Link } from "@/i18n/routing";
import Breadcrumb from "../molecule/Breadcrumb";
import { useTranslations } from "next-intl";
import StickyMenu from "../organism/menu/StickyMenu";
export default function CoverVisa({ pageName, prevPage, lng, home, img }: any) {
  // to do z-inddex
  const t = useTranslations("header");
  return (
    <>
      <div className="relative ">
        <div>
          <Image
            src={img || "/img/jmd/sub-cover.png"}
            alt="visa-workpermit"
            width={1980}
            height={478}
            priority={true}
          ></Image>
        </div>
      </div>

      <div
        className={`${
          home ? "bg-[#3462af] text-white" : "bg-slate-200 text-slate-700"
        } shadow-lg  py-4  sticky top-0 z-40 hidden md:block`}
      >
        <div className="container h-full flex justify-center items-center gap-2 sm:gap-4 xl:gap-12 text-[8px] md:text-xs lg:text-[16px] font-semibold ">
          <Link href={"/#location"}>{t("location")}</Link>
          <Link href={"/#about"}>{t("about-jmd")}</Link>
          <Link href={"/#service"}>{t("service")}</Link>
          <Link href={"/news-activity"}>{t("news")}</Link>
          <Link href={"/#faq"}>{t("faq")}</Link>
          <Link href={"/#contact"}>{t("contact")}</Link>
        </div>
      </div>

      <div
        className={`${
          home ? "md:hidden" : " md:block"
        } bg-slate-500/10  w-full hidden`}
      >
        <div className="container mx-auto">
          <Breadcrumb pageName={pageName} prevPage={prevPage} />
        </div>
      </div>
    </>
  );
}
