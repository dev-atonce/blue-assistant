import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { useState } from "react";
import { SiLine } from "react-icons/si";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function SocialMedia({ language }: any) {
  const pathname = usePathname();
  const [btnHover, setBtnHover] = useState<Boolean>(false);
  const PrimaryColor = "#3d5daa";

  return (
    <div className="flex flex-col items-end gap-2">
      <div className="text-black notranslate flex gap-1">
        <a
          href={pathname.replace(`/${language.currentLanguage}`, `/th`)}
          // onClick={(e: any) => language?.switchLanguage("th")}
          title="thai"
        >
          <Image src="/img/th_flag.png" alt="th" width={18} height={18} />
        </a>

        <a
          href={pathname.replace(`/${language.currentLanguage}`, `/en`)}
          // onClick={(e: any) => language?.switchLanguage("en")}
          title="english"
        >
          {" "}
          <Image src="/img/uk_flag.png" alt="th" width={18} height={18} />
        </a>
        <a
          href={pathname.replace(`/${language.currentLanguage}`, `/jp`)}
          // onClick={(e: any) => language?.switchLanguage("jp")}
          title="japanese"
        >
          <Image src="/img/jp_flag.png" alt="th" width={18} height={18} />
        </a>
      </div>
      <div className="flex items-center gap-1 ms-20 text-[#3d5daa]">
        <a
          href={`tel:026617687`}
          target="_blank"
          className={` bg-white border transition-all ease-in-out border-[#dcdcdc] drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none hover:text-white hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2 flex items-center justify-center`}
        >
          <FaPhoneAlt />
        </a>
        {/* <a
          // to do
          href={`tel:098348734`}
          target="_blank"
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
          className="  bg-white border text-[#3d5daa] transition-all ease-in-out border-[#dcdcdc] drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none hover:text-white hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2 flex items-center justify-center"
        >
          <SiLine size={25} />
        </a> */}
        <a
          href={`mailto:medical@blue-assistance.co.th`}
          target="_blank"
          className={` hover:text-white bg-white border transition-all ease-in-out border-[#dcdcdc] drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
        >
          <MdMail size={25} />
        </a>
      </div>
    </div>
  );
}
