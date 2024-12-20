import Image from "next/image";
// import Link from "next/link";
import { Link } from "@/i18n/routing";
export default function ServiceCard({ item }: any) {
  return (
    <div
      //   href={`/service/${item?.id}`}
      className="z-10 group flex flex-col items-center gap-3 bg-gray-50 px-1 py-6 transition-all duration-500 col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 overflow-hidden rounded-xl border border-slate-200"
    >
      <h4 className="text-[#3562AE] font-bold text-lg">{item?.serviceNameTH}</h4>
      <div className="w-full h-48 overflow-hidden">
        <Image
          // src={
          //   item?.image
          //     ? `${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`
          //     : `${process.env.NEXT_PUBLIC_BASE_URL}public\\image\\no_image.webp`
          // }
          src={`${item?.image}`}
          alt={item?.serviceNameTH}
          width={`500`}
          height={`60`}
          className="w-100"
          loading="lazy"
        />
      </div>
      <div className="px-4 pt-2 min-h-44 overflow-hidden">
        <p className="text-center w-full">{item?.descriptionEN}</p>
      </div>
      <div className="mb-6">
        <Link
          href={`/service/${item?.id}`}
          className="bg-[#3562AE] text-white hover:bg-yellow-400 rounded-md py-2 px-4"
        >More detail
        </Link>
      </div>
    </div>
  );
}
