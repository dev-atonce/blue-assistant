import { useEffect } from "react";
import { RiArrowUpSLine } from "react-icons/ri";

const BackToTop = () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth",
    })
}
export default function BackToTopBtn()
{
    return(<div 
        className="fixed right-10 bottom-12 w-10 h-10 border bg-[#3562AE] flex items-center justify-center rounded-full p-2 cursor-pointer" 
        onClick={()=>BackToTop()}
    >
        <RiArrowUpSLine size="md" />
    </div>)
}