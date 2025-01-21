import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { useState } from "react";
import { SiLine } from "react-icons/si";

export default function SocialMedia() {
  const [btnHover, setBtnHover] = useState<Boolean>(false);
  const PrimaryColor = "#3d5daa";

  return (
    <div className="flex items-center gap-1 ms-20 text-[#3d5daa]">
      <a
        // to do
        href={`tel:098348734`}
        target="_blank"
        className={` bg-white border transition-all ease-in-out border-[#dcdcdc] drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none hover:text-white hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2 flex items-center justify-center`}
      >
        <FaPhoneAlt />
      </a>
      <a
        href={`tel:098348734`}
        target="_blank"
        onMouseEnter={() => setBtnHover(true)}
        onMouseLeave={() => setBtnHover(false)}
        className="  bg-white border text-[#3d5daa] transition-all ease-in-out border-[#dcdcdc] drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none hover:text-white hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2 flex items-center justify-center"
      >
        <SiLine size={25} />
      </a>
      <a
        href={`tel:098348734`}
        target="_blank"
        className={` hover:text-white bg-white border transition-all ease-in-out border-[#dcdcdc] drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
      >
        <MdMail size="md" />
      </a>
    </div>
  );
}
