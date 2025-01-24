import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function StickyMenu() {
  const t = useTranslations("header");
  return (
    <div className="shadow-lg bg-[#3462af] py-4 text-white sticky top-0 z-50">
      <div className="container h-full flex justify-center items-center gap-2 sm:gap-4 xl:gap-12 text-[8px] md:text-xs lg:text-[16px] font-semibold">
        <Link href={"/visa-workpermit"}>{t("visa-work")}</Link>
        <Link href={"/visa-workpermit#service"}>{t("service")}</Link>
        <Link href={"/visa-workpermit#info"}>{t("help-info")}</Link>
        <Link href={"/visa-workpermit/news-activity"}>{t("news")}</Link>
        <Link href={"/visa-workpermit/faq"}>{t("faq")}</Link>
        <Link href={"/visa-workpermit#contact"}>{t("contact")}</Link>
      </div>
    </div>
  );
}
