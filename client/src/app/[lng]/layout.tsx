import type { Metadata, ResolvingMetadata } from "next";
import Header from "@/components/website/layout/Header";
import Footer from "@/components/website/layout/Footer";
import PageSettingProvider from "@/contexts/PageSettingContext";
import {
  Noto_Sans,
  Noto_Sans_JP,
  Roboto,
  Kanit,
  Zen_Old_Mincho,
} from "next/font/google";
import { ConfigProvider } from "antd";
import { GoogleTagManager } from "@next/third-parties/google";
import Favicon from "../[lng]/favicon.ico";
import "./globals.css";
import "./../../css/all.scss";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import CookiePopUp from "@/components/website/layout/CookiePopUp";

const noto = Noto_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const notoJP = Noto_Sans_JP({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const kanit = Kanit({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const mincho = Zen_Old_Mincho({
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mincho",
});

const owner = {
  name: {
    th: "บริษัท บลู แอสซิสแท็นซ จำกัด",
    en: "Blue Assistance Co., Ltd.",
    ja: "ブルーアシスタンス 株式会社",
  },
  address: {
    th: "เลขที่ 24 ชั้น 9 อาคารไฟม์ \r\nซอย สุขุมวิท 24 แขวงคลองเตยเหนือ เขตวัฒนา กรุงเทพมหานคร 10110",
    en: `No.D 9th Floor, PRIME BUILDING,\r\n24 Sukhumvit Soi 21(Asoke), Sukhumvit Road,\r\nKlongtoey-Nua, Wattana, Bangkok 10110, Thailand.`,
    ja: "",
  },
  telephone: "+66 (0)2-661-7687~88",
  mobile: " 	+66 (0)2-661-7689",
  lineID: "",
  instagram: "",
  gmap: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7751.293634429288!2d100.562314!3d13.73982!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ee366cbf9bf%3A0x2cd7d65872b3b0bf!2sBlue%20Assistance%20Company%20Limited!5e0!3m2!1sen!2sus!4v1731572079527!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
};

const colors = {
  main: "#3562AE",
  secondary: "",
  success: "",
  danger: "#ED1F23",
  warning: "",
};

const pageName = "home";
export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const lng = params.lng?.toUpperCase();

  const seoRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/seo/page-name/${pageName}`;

  // fetch data
  const response = await fetch(seoRoute, { cache: "no-store" }).then((res) =>
    res.json()
  );

  return {
    metadataBase: new URL("https://blue-assistant.co.th"),
    title: response[`seoTitle${lng}`],
    description: response[`seoDescription${lng}`],
    keywords: response[`seoKeyword${lng}`],
    alternates: {
      canonical: "./",
    },
    icons: [{ rel: "icon", url: Favicon.src }],
  };
}

export default async function RootLayout({
  children,
  params: { lng },
}: Readonly<{ children: React.ReactNode; params: { lng: string } }>) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(lng as any)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={lng}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: notoJP.style.fontFamily,
          },
          components: {
            Pagination: {
              colorPrimary: "blue",
              colorPrimaryHover: "blue",
              borderRadius: 60,
              colorBgTextHover: "white",
            },
          },
        }}
      >
        <PageSettingProvider>
          <body
            className={`${
              lng == "jp"
                ? `${notoJP.className} `
                : lng == "th"
                ? `${kanit.className}`
                : `${noto.className} `
            }, ${mincho.variable}`}
          >
            <NextIntlClientProvider messages={messages}>
              <Header colors={colors} owner={owner} lng={lng} />
              {children}
              <Footer colors={colors} owner={owner} lng={lng} />
              <CookiePopUp />
            </NextIntlClientProvider>
          </body>
          <GoogleTagManager gtmId="GTM-MFH3RWL8" />
        </PageSettingProvider>
      </ConfigProvider>
    </html>
  );
}
