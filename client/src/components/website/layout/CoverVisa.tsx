import Image from "next/image";
import { Link } from "@/i18n/routing";
import Breadcrumb from "../molecule/Breadcrumb";
export default function CoverVisa({ pageName, prevPage }: any) {
  return (
    <>
      <div className="relative ">
        <div>
          <div className="container mx-auto">
            <div
              style={{ textShadow: "2px 2px #2F2F2F" }}
              className="absolute  flex flex-col sm:gap-4 md:gap-10 xl:gap-24 text-[#3462af] drop-shadow-xl text-xl md:text-4xl xl:text-[96px] font-bold   top-6 sm:top-10 md:top-16 xl:top-24  "
            >
              <span>VISA &</span>
              <span>WORK PERMIT</span>
            </div>
          </div>

          <Image
            src="/img/visa-workpermit/banner-visa.png"
            alt="visa-workpermit"
            width={1980}
            height={478}
          ></Image>
        </div>
      </div>
      <div className="shadow-lg bg-[#3462af] py-4 text-white sticky top-0 z-50">
        <div className="container h-full flex justify-center items-center gap-2 sm:gap-6 xl:gap-12 text-xs lg:text-[16px] font-semibold">
          <Link href={"/visa-workpermit"}>Visa&Work Permit</Link>
          <Link href={"/visa-workpermit#service"}>Service</Link>
          <Link href={"/visa-workpermit#info"}>Info</Link>
          <Link href={"/visa-workpermit/news-activity"}>News</Link>
          <Link href={"/visa-workpermit/faq"}>FAQ</Link>
          <Link href={"/visa-workpermit#contact"}>Contact</Link>
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
