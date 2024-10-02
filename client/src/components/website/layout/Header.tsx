"use client";
// import Link from "next/link";
import { Logo } from "../atom/logo/Logo";
import { useEffect, useContext, useState } from "react";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import Image from "next/image";
import NavBar from "../organism/menu/NavBar";
// import SideBar from "./SideBar";
// import NavBar from "./NavBar";

export default function Header({ logo, contact }: any) {
  const [currentLanguage, setCurrentLanguage] = useState<string>("th");
  const [openLang, setOpenLang] = useState<Boolean>(false);
  const [openID, setOpenID] = useState<String>("");

  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const { primaryColor }: any = useContext(PageSettingContext);
  const [openSubMenu, setOpenSubMenu] = useState<Boolean>(false);

  const languages = [
    { label: "Thai", value: "th" },
    { label: `English`, value: "en" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    document.querySelector("html")?.classList.toggle("nav-open");
  };
  const closeSideBar = () => {
    setIsOpen(false);
    document.querySelector("html")?.classList.remove("nav-open");
  };
  const toggleSubMenu = (e: any) => {
    const subMenu = e.currentTarget.parentElement?.querySelector(".sub-menu");
    if (subMenu) {
      e.preventDefault();
      setOpenSubMenu(!openSubMenu);
      setTimeout;
      e.currentTarget.closest(".menu-item").classList.toggle("active");
      const icon = e.currentTarget.parentElement?.querySelector(".plus-icon");
      icon?.classList.toggle("rotate-135");
      subMenu?.classList.toggle("open");
    } else {
      closeSideBar();
    }
  };

  const adjust = () => {
    if (window.innerWidth > 768) {
      closeSideBar();
    }
  };

  return (
    <div className="shadow-md bg-white ">
      <div className="bg-[#3662AE] h-2 w-full"></div>
      {/* <div className="flex">
        <div
          className={`fixed block lg:none top-0 left-0 h-full w-80 text-black bg-slate-200 transition-transform duration-300 z-40 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="grid content-stretch">
            <SideBar sideBar={{ toggleSubMenu, closeSideBar }} />
          </div>
        </div>
      </div> */}
      <div className="header  ">
        <div className="container mx-auto flex justify-between items-center h-full ">
          <div className="logo  ">
            <div className="py-4">
              <Logo img={logo} />
            </div>
          </div>

          <div className="lg:flex justify-end  h-full hidden gap-6">
            <div className="flex justify-end h-full ">
              <NavBar />
            </div>
            {/* <div className="more-menu"></div> */}

            {/* <div className="flex justify-center items-center lg:hidden">
                <div
                  className="cursor-pointer flex flex-col items-center justify-around w-8 h-8 burger"
                  onClick={toggleSidebar}
                >
                  <div
                    className={`w-full h-1 ${
                      isOpen ? `bg-white` : `bg-black`
                    } ${
                      isOpen ? "transform rotate" : ""
                    } transition-transform duration-300`}
                  ></div>
                  <div
                    className={`w-full h-1 ${
                      isOpen ? `bg-white` : `bg-black`
                    } ${
                      isOpen ? "opacity-0" : ""
                    } transition-opacity duration-300`}
                  ></div>
                  <div
                    className={`w-full h-1 ${
                      isOpen ? `bg-white` : `bg-black`
                    } ${
                      isOpen ? "transform -rotate" : ""
                    } transition-transform duration-300`}
                  ></div>
                </div>
              </div> */}

            <div className="hidden lg:flex items-center justify-end  gap-1  ">
              <a href="https://www.google.com">
                {/* <a href={contact?.facebook}> */}
                <Image src="/img/Tel.png" alt="tel" width={50} height={50} />
              </a>
              <a href={contact?.instagram}>
                <Image src="/img/Line.png" alt="line" width={50} height={50} />
              </a>
              <a href={contact?.line}>
                <Image
                  src="/img/Email.png"
                  alt="emails"
                  width={50}
                  height={50}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
