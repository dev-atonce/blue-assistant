import Image from "next/image";
// import Link from "next/link";
import { Link } from "@/i18n/routing";
export default function ServiceCard({ item }: any) {
  return (
    <div
      //   href={`/service/${item?.id}`}
      className="z-10 group flex flex-col items-center gap-3 bg-white shadow-md px-4 pb-6 transition-all duration-500 col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 overflow-hidden rounded-xl border border-slate-200"
    >
      <Link href={`/service/${item?.id}`}>
        <h4 className="text-white px-1 py-3 w-full text-center rounded-bl-3xl rounded-br-3xl font-bold text-md bg-[#3562AE]">{item?.serviceNameTH}</h4>
        <div className="w-full h-40 overflow-hidden flex justify-center">
          <img
            // src={
            //   item?.image
            //     ? `${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`
            //     : `${process.env.NEXT_PUBLIC_BASE_URL}public\\image\\no_image.webp`
            // }
            src={`${item?.image}`}
            alt={item?.serviceNameTH}
            className="h-full"
            loading="lazy"
          />
        </div>
        <div className="pt-2 min-h-32 overflow-hidden border-t-[2px]">
          <p className="text-center text-sm w-full text-[#3562AE]">{item?.descriptionEN}</p>
        </div>
      </Link>
    </div>
  );
}
