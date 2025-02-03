"use client";
import { useContext, useState } from "react";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import Link from "next/link";

import { FaPhone } from "react-icons/fa6";
import Image from "next/image";
import { MdEmail, MdOutlineMailOutline } from "react-icons/md";
import BackToTopBtn from "../atom/button/BackToTopBtn";
import Modal from "./Modal";

export default function Footer({ contact, colors, owner, lng }: any) {
  const { primaryColor }: any = useContext(PageSettingContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const companyName = lng == "th" ? owner.name.th : owner.name.en;

  return (
    <div className={`text-white bg-[${colors.main}]`}>
      <div className="">
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-6 md:grid-cols-12">
            <div className="col-span-6">
              <div className=" flex items-center justify-between">
                <div>
                  <div className="border-4 p-4">
                    <p className="text-xl">{owner.name.en}</p>
                    <p>ブルーアシスタンス　株式会社</p>
                    {/* <p>{owner.name.jp}</p> */}
                  </div>
                  <div className="mt-6 text-sm">
                    No.D 9th Floor, PRIME BUILDING,
                    <br />
                    24 Sukhumvit Soi 21(Asoke), Sukhumvit Road,
                    <br />
                    Klongtoey-Nua, Wattana, Bangkok 10110, Thailand.
                  </div>
                  <div className="flex gap-3 mt-6">
                    <div>
                      <div
                        className="rounded-full border"
                        style={{ padding: "6px" }}
                      >
                        <FaPhone size="12" />
                      </div>
                    </div>
                    <div className="text-xs md:text-sm">
                      <Link href="tel:02-661-7687" className="block">
                        TEL : +66 (0)2-661-7687~88
                      </Link>
                      <Link href="tel:02-661-7689" className="block">
                        FAX : +66 (0)2-661-7689
                      </Link>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <div>
                      <div
                        className="rounded-full border"
                        style={{ padding: "6px" }}
                      >
                        <MdEmail size="12" />
                      </div>
                    </div>
                    <div className="text-xs md:text-sm">
                      <p>医療アシスタンス業務</p>
                      <p>medical@blue-assistance.co.th</p>
                      <p>ビザ&労働許可証コンサルタント業務</p>
                      <p>visa@blue-assistance.co.th</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6 flex justify-start xl:justify-end">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex flex-col items-start"
                // href="https://www.google.com/maps/place/Blue+Assistance+Company+Limited/data=!4m2!3m1!1s0x0:0x2cd7d65872b3b0bf?sa=X&ved=1t:2428&ictx=111"
              >
                <strong className="mb-2 block">Google Map</strong>
                <img src="/img/image.png" alt="google map" />
              </button>
              <Modal
                // @ts-ignore
                modalContent={
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.655604628866!2d100.56208869444275!3d13.739288686437572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ee366cbf9bf%3A0x2cd7d65872b3b0bf!2sBlue%20Assistance%20Company%20Limited!5e0!3m2!1sen!2sth!4v1738564635514!5m2!1sen!2sth"
                    width="100%"
                    height="600"
                    loading="lazy"
                  ></iframe>
                }
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2E5BA8]">
        <div className="container px-4 mx-auto py-4 flex items-center justify-center  text-xs">
          <div>
            <div className="text-center text-[10px]">
              ©Copyright {currentYear} {owner.name.en} - All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
      <BackToTopBtn />
    </div>
  );
}
