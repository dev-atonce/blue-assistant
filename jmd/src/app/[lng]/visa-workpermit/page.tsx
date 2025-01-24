import MainHeading from "@/components/website/atom/heading/MainHeading";
import CoverVisa from "@/components/website/layout/CoverVisa";
import NewsList from "@/components/website/layout/NewsList";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import VisaServiceSection from "@/components/website/layout/VisaServiceSection";
import ContactSection from "@/components/website/layout/ContactSection";
import { useTranslations } from "next-intl";

export default function VisaWorkpermit({
  params,
}: {
  params: { lng: string };
}) {
  const s = useTranslations("service-section");
  const h = useTranslations("header");
  const b = useTranslations("blog-section");

  return (
    <>
      <div className="visa-workpermit">
        <CoverVisa />
        <div className="container py-10">
          <div className="mb-[80px] " id="service">
            <MainHeading text={h("service")} heading="2" />
            <VisaServiceSection lng={params?.lng} />
          </div>

          <Link
            href="/visa-workpermit/price"
            className="flex justify-center hover:bg-[#3462af] hover:text-white transition-all border-[#3462af] border-8 py-4 text-center font-semibold text-[24px] text-[#3462af] mb-[80px] w-full"
          >
            {s("fee")}
          </Link>

          <div className=" " id="info">
            <MainHeading text={h("help-info")} heading="2" />
            <div className="grid grid-cols-12 gap-y-10  text-xl text-[#3462af] font-semibold ">
              <Link
                href="/visa-workpermit/info-institution"
                className="hover:shadow-3 hover:scale-95 transition-all col-span-12 md:col-span-6 xl:col-span-3 flex flex-col justify-center items-center gap-5 w-full"
              >
                <Image
                  src={"/img/visa-workpermit/help-1.png"}
                  alt=""
                  width={110}
                  height={110}
                ></Image>
                <p>{s("institution")}</p>
              </Link>
              <Link
                href="/visa-workpermit/visa-info-other-countries"
                className="hover:shadow-3 hover:scale-95 transition-all col-span-12 md:col-span-6 xl:col-span-3 flex flex-col justify-center items-center gap-5 w-full"
              >
                <Image
                  src={"/img/visa-workpermit/help-2.png"}
                  alt=""
                  width={110}
                  height={110}
                ></Image>
                <p>{s("visa-other")}</p>
              </Link>
              <Link
                href="/visa-workpermit/links"
                className="hover:shadow-3 hover:scale-95 transition-all col-span-12 md:col-span-6 xl:col-span-3 flex flex-col justify-center items-center gap-5 w-full"
              >
                <Image
                  src={"/img/visa-workpermit/help-3.png"}
                  alt=""
                  width={110}
                  height={110}
                ></Image>
                <p>{s("links")}</p>
              </Link>
              <Link
                href="/visa-workpermit/faq"
                className="hover:shadow-3 hover:scale-95 transition-all col-span-12 md:col-span-6 xl:col-span-3 flex flex-col justify-center items-center gap-5 w-full"
              >
                <Image
                  src={"/img/visa-workpermit/help-4.png"}
                  alt=""
                  width={110}
                  height={110}
                ></Image>
                <p>{s("faq")}</p>
              </Link>
            </div>
          </div>
          {/* <div className="flex justify-center items-center">
                        <Link
                            className="text-white bg-[#3462af] rounded-md py-2 px-5 "
                            href={"/"}
                        >
                            More Info About us
                        </Link>
                    </div> */}
        </div>
        <div className="bg-[#fafafa] py-[50px]">
          <div className="container">
            <div className="mb-[50px]">
              <MainHeading text={h("news")} heading="2" />
              <NewsList
                lng={params.lng}
                limit={5}
                module={"visa"}
                forPage={"visa"}
              />
            </div>
            <div className="flex justify-center items-center">
              <Link
                className="text-white bg-[#3462af] rounded-md py-2 px-5 "
                href={"/visa-workpermit/news-activity"}
              >
                {b("more")}
              </Link>
            </div>
          </div>
        </div>
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
                <Image
                  src={"/img/visa-workpermit/map.png"}
                  alt=""
                  width={600}
                  height={400}
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <ContactSection home={false} />
      </div>
    </>
  );
}
