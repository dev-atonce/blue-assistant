"use client";
import MainHeading from "../atom/heading/MainHeading";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Modal from "./Modal";
import { useState } from "react";
export default function AddressSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const h = useTranslations("header");
  return (
    <div className="container py-10 border-b">
      <div className="">
        <MainHeading text={h("contact")} heading="2" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="col-span-1 text-[#3D3D3D]">
            <div>
              <strong>Address :</strong>
              <p className="whitespace-pre-wrap">
                No.D 9th Floor, PRIME BUILDING,
                <br />
                24 Sukhumvit Soi 21(Asoke), Sukhumvit Road,
                <br />
                Klongtoey-Nua, Wattana, Bangkok 10110, Thailand.
              </p>
            </div>
            <div>
              <strong>Telephone :</strong> +66 (0)2-661-7687~88
            </div>
            <div>
              <strong>Email : </strong>visa@blue-assistance.co.th
            </div>
          </div>
          <div className="col-span-1">
            <button
              onClick={() => setIsModalOpen(true)}
              className=""
              // href="https://www.google.com/maps/place/Blue+Assistance+Company+Limited/data=!4m2!3m1!1s0x0:0x2cd7d65872b3b0bf?sa=X&ved=1t:2428&ictx=111"
            >
              <Image
                src={"/img/visa-workpermit/map.png"}
                alt=""
                width={600}
                height={400}
              ></Image>
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
  );
}
