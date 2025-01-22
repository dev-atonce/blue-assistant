import Image from "next/image";
import { Link } from "@/i18n/routing";
export default function CoverVisa() {
  return (
    <>
      <div className="relative">
        <div className="absolute text-[#3462af] drop-shadow-xl text-[96px] font-bold left-40 top-24">
          VISA & <br />
          WORK PERMIT
        </div>
        <Image
          src="/img/visa-workpermit/banner-visa.png"
          alt="visa-workpermit"
          width={1980}
          height={478}
        ></Image>
      </div>
      <div className="shadow-lg bg-[#3462af] h-[70px] lg:block hidden">
        <div className="container h-full flex justify-center items-center gap-16 text-[16px] font-semibold">
          <Link href={"/"}>Location</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Service</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>FAQ</Link>
          <Link href={"/"}>Contact</Link>
        </div>
      </div>
    </>
  );
}
