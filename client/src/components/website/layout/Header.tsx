"use client";
import { Logo } from "../atom/logo/Logo";
import { useEffect, useState } from "react";
import Image from "next/image";
import NavBar from "../organism/menu/NavBar";
import SideBar from "./SideBar";
import { GiHamburgerMenu } from "react-icons/gi";
import Script from "next/script";
import { hasCookie, setCookie } from "cookies-next";
import SocialMedia from "../molecule/menu/SocialMedia";

export default function Header({ logo, contact, owner, colors, lng }: any) {
  // @ts-ignore
  const [currentLanguage, setCurrentLanguage] = useState<string>(lng);
  const [openLang, setOpenLang] = useState<Boolean>(false);
  const [openID, setOpenID] = useState<String>("");
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [openSubMenu, setOpenSubMenu] = useState<Boolean>(false);

  const languages = [
    { label: "Thai", value: "th" },
    { label: `English`, value: "en" },
    { label: `Japanese`, value: "jp" },
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

  useEffect(() => {
    // Define googleTranslateElementInit in the client
    const googleTranslateElementInit = () => {
      // @ts-ignore
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "auto",
          autoDisplay: false,
          // @ts-ignore
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    // Ensure googleTranslateElementInit is defined on the window object in the client
    if (typeof window !== "undefined") {
      // @ts-ignore
      window.googleTranslateElementInit = googleTranslateElementInit;
    }
  }, []);

  const switchLanguage = (lng: any) => {
    if (hasCookie("googtrans")) {
      setCookie("googtrans", decodeURI("/auto/" + lng));
    } else {
      setCookie("googtrans", "/auto/" + lng);
    }
    setCurrentLanguage(lng);
    window.location.reload();
  };

  return (
    <div className="shadow-md bg-white relative" style={{ zIndex: 1 }}>
      <div className={`bg-[#3562AE] w-full h-2`}></div>
      <div className="header ps-2 pe-2 md:ps-10 md:pe-10 mx-auto">
        <div className="mx-auto flex justify-between items-center h-full ">
          <div className="logo ">
            <div className="py-2 flex items-end">
              <Logo img={logo} />

              {/* <div className="flex justify-items-end h-[100%]">
                <span className={`text-xl text-blue-900 font-[900] sm:none`}>
                  {owner.name.en}
                </span>
              </div> */}
            </div>
          </div>

          <div className="xl:flex flex-col h-full hidden  w-[60%]">
            <div className="flex h-full justify-end items-center">
              <NavBar colors={colors} />
              <SocialMedia
                language={{
                  currentLanguage,
                  setCurrentLanguage,
                  openID,
                  setOpenID,
                  openLang,
                  setOpenLang,
                  languages,
                  switchLanguage,
                }}
              />
            </div>
          </div>
          <div className="flex justify-center items-center xl:hidden ">
            <div
              className="cursor-pointer flex flex-col items-center justify-around w-8 h-8 burger"
              onClick={toggleSidebar}
            >
              <GiHamburgerMenu size={35} color="#3462af" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div
          className={`fixed block lg:none top-0 right-0 h-full w-80 text-black bg-white transition-transform duration-300 z-9999 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="grid content-stretch">
            <SideBar
              contact={contact}
              sideBar={{ toggleSubMenu, closeSideBar }}
              language={{
                currentLanguage,
                setCurrentLanguage,
                openID,
                setOpenID,
                openLang,
                setOpenLang,
                languages,
                switchLanguage,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
