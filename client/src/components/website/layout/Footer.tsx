"use client";
import { useContext } from "react";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import Link from "next/link";

import { FaPhone } from "react-icons/fa6";
import Image from "next/image";
import { MdEmail, MdOutlineMailOutline } from "react-icons/md";
import BackToTopBtn from "../atom/button/BackToTopBtn";


export default function Footer({ contact, colors, owner, lng}: any) {
  const { primaryColor }: any = useContext(PageSettingContext);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const companyName = lng == 'th' ? owner.name.th: owner.name.en

  return (
    <div className={`text-white bg-[${colors.main}]`} >
      <div className="">
        <div className="container py-14">
          <div className="grid grid-cols-12">
            <div className="col-span-6">
              <div className="py-5 flex items-center justify-between">
                <div>
                  <div className="border-4 p-4">
                    <p className="text-2xl">{owner.name.en}</p>
                    <p>ブルーアシスタンス　株式会社</p>
                    {/* <p>{owner.name.jp}</p> */}
                  </div>
                  <div className="mt-6">
                    No.D 9th Floor, PRIME BUILDING,<br/>
                    24 Sukhumvit Soi 21(Asoke), Sukhumvit Road,<br/>
                    Klongtoey-Nua, Wattana, Bangkok 10110, Thailand.
                  </div>
                  <div className="flex gap-3 mt-6">
                    <div><div className="rounded-full border" style={{padding:'6px'}}><FaPhone size="12"/></div></div>
                    <div>
                      <Link href="tel:02-661-7687" className="block">TEL : +66 (0)2-661-7687~88</Link>
                      <Link href="tel:02-661-7689" className="block">FAX : +66 (0)2-661-7689</Link>
                    </div>
                  </div>
                  <div  className="flex gap-3 mt-6">
                    <div><div className="rounded-full border" style={{padding:'6px'}}><MdEmail size="12"/></div></div>
                    <div>
                      <p>医療アシスタンス業務</p>
                      <p>medical@blue-assistance.co.th</p>
                      <p>ビザ&労働許可証コンサルタント業務</p>
                      <p>visa@blue-assistance.co.th</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6 flex justify-end">
              <div className="">
                <strong className="mb-2 block">Google Map</strong>
                <img src="/img/image.png" alt="google map" />
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="bg-[#2E5BA8]">
        <div className="container px-4 mx-auto py-4 flex items-center justify-center  text-xs">
          <div>
            <span className="">
              ©Copyright {currentYear} {owner.name.en} - All Rights
              Reserved.
            </span>
          </div>
        </div>
      </div>
      <BackToTopBtn />
    </div>
  );
}
