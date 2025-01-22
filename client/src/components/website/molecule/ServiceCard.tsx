"use client";
import Image from "next/image";
// import Link from "next/link";
import { Link } from "@/i18n/routing";
import { useState } from "react";
import Modal from "../layout/Modal";
export default function ServiceCard({ item }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div
      //   href={`/service/${item?.id}`}
      className=" group flex flex-col items-center gap-3 bg-white shadow-md px-4 pb-6 transition-all duration-500 col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 overflow-hidden rounded-xl border border-slate-200"
    >
      {item?.link && (
        <a href={item?.link}>
          <h4 className="text-white px-1 py-3 w-full text-center rounded-bl-3xl rounded-br-3xl font-bold text-base xl:text-sm bg-[#3562AE]">
            {item?.serviceNameTH}
          </h4>
          <div className="w-full h-40 overflow-hidden flex justify-center">
            <img
              // src={
              //   item?.image
              //     ? `${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`
              //     : `${process.env.NEXT_PUBLIC_BASE_URL}public\\image\\no_image.webp`
              // }
              src={`${item?.image}`}
              alt={item?.serviceNameTH}
              className=" w-full object-contain"
              loading="lazy"
            />
          </div>
          <div className="pt-2 lg:min-h-32 overflow-hidden border-t-[2px]">
            <p className="text-center text-sm w-full text-[#3562AE]">
              {item?.descriptionEN}
            </p>
          </div>
        </a>
      )}
      {!item?.link && !item?.modal && (
        <Link href={`/${item?.id}`}>
          <h4 className="text-white px-1 py-3 w-full text-center rounded-bl-3xl rounded-br-3xl font-bold text-base xl:text-sm bg-[#3562AE]">
            {item?.serviceNameTH}
          </h4>
          <div className="w-full h-40 overflow-hidden flex justify-center">
            <img
              // src={
              //   item?.image
              //     ? `${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`
              //     : `${process.env.NEXT_PUBLIC_BASE_URL}public\\image\\no_image.webp`
              // }
              src={`${item?.image}`}
              alt={item?.serviceNameTH}
              className=" w-full object-contain"
              loading="lazy"
            />
          </div>
          <div className="pt-2 lg:min-h-32 overflow-hidden border-t-[2px]">
            <p className="text-center text-sm w-full text-[#3562AE]">
              {item?.descriptionEN}
            </p>
          </div>
        </Link>
      )}
      {item?.modal && (
        <div>
          <button onClick={() => setIsModalOpen(true)}>
            <h4 className="text-white px-1 py-3 w-full text-center rounded-bl-3xl rounded-br-3xl font-bold text-base xl:text-sm bg-[#3562AE]">
              {item?.serviceNameTH}
            </h4>
            <div className="w-full h-40 overflow-hidden flex justify-center">
              <img
                // src={
                //   item?.image
                //     ? `${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`
                //     : `${process.env.NEXT_PUBLIC_BASE_URL}public\\image\\no_image.webp`
                // }
                src={`${item?.image}`}
                alt={item?.serviceNameTH}
                className=" w-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="pt-2 lg:min-h-32 overflow-hidden border-t-[2px]">
              <p className="text-center text-sm w-full text-[#3562AE]">
                {item?.descriptionEN}
              </p>
            </div>
          </button>
        </div>
      )}
      <Modal
        // @ts-ignore
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modalContent={item?.modal}
      />
    </div>
  );
}
