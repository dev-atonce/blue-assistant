import CoverVisa from "@/components/website/layout/CoverVisa";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function VisaWorkpermit() {
  return (
    <>
      <div className="visa-workpermit">
        <CoverVisa />
        <div className="container py-[110px]">
          <div className="mb-[80px]">
            <h1 className="font-bold text-[#3462af] text-[40px] mb-[80px]">
              Services
            </h1>
            <div className="grid grid-cols-4 gap-5 h-[289px] text-xl text-[#3462af] font-semibold">
              <button className="border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5">
                <Image
                  src={"/img/visa-workpermit/service-1.png"}
                  alt=""
                  width={120}
                  height={120}
                ></Image>
                <p>タイで働くには</p>
              </button>
              <button className="border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5">
                <Image
                  src={"/img/visa-workpermit/service-2.png"}
                  alt=""
                  width={120}
                  height={120}
                ></Image>
                <p>労働許可証</p>
              </button>
              <button className="border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5">
                <Image
                  src={"/img/visa-workpermit/service-3.png"}
                  alt=""
                  width={120}
                  height={120}
                ></Image>
                <p>ビザ</p>
              </button>
              <button className="border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5">
                <Image
                  src={"/img/visa-workpermit/service-4.png"}
                  alt=""
                  width={120}
                  height={120}
                ></Image>
                <p>その他</p>
              </button>
            </div>
          </div>

          <Link
            href="/visa-workpermit/price"
            className="flex justify-center border-[#3462af] border-8 py-4 text-center font-semibold text-[24px] text-[#3462af] mb-[80px] w-full"
          >
            料金表はこちら
          </Link>

          <div className="mb-[70px]">
            <h2 className="font-bold text-[#3462af] text-[40px] mb-[80px]">
              Help Info
            </h2>
            <div className="grid grid-cols-4 gap-20 h-[289px] text-xl text-[#3462af] font-semibold">
              <button className="flex flex-col justify-center items-center gap-5">
                <Image
                  src={"/img/visa-workpermit/help-1.png"}
                  alt=""
                  width={110}
                  height={110}
                ></Image>
                <p>Information on Institutions</p>
              </button>
              <button className="flex flex-col justify-center items-center gap-5">
                <Image
                  src={"/img/visa-workpermit/help-2.png"}
                  alt=""
                  width={110}
                  height={110}
                ></Image>
                <p>Visa info for other countiries</p>
              </button>
              <button className="flex flex-col justify-center items-center gap-5">
                <Image
                  src={"/img/visa-workpermit/help-3.png"}
                  alt=""
                  width={110}
                  height={110}
                ></Image>
                <p>Useful links</p>
              </button>
              <button className="flex flex-col justify-center items-center gap-5">
                <Image
                  src={"/img/visa-workpermit/help-4.png"}
                  alt=""
                  width={110}
                  height={110}
                ></Image>
                <p>FAQ</p>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Link className="bg-[#3462af] rounded-md py-2 px-5 " href={"/"}>
              More Info About us
            </Link>
          </div>
        </div>
        <div className="bg-[#fafafa] py-[50px]">
          <div className="container">
            <div className="mb-[50px]">
              <h2 className="font-bold text-[#3462af] text-[40px] mb-[60px]">
                News
              </h2>
              <div>
                <div className="bg-white text-[#3D3D3D] p-6 border-b">
                  <Link href={"/"}>
                    <span>2023.09.05</span>
                    <span> | </span>
                    <span>When Visiting the Hospital for the First Time</span>
                  </Link>
                </div>
                <div className="bg-white text-[#3D3D3D] p-6 border-b">
                  <Link href={"/"}>
                    <span>2023.09.05</span>
                    <span> | </span>
                    <span>When Visiting the Hospital for the First Time</span>
                  </Link>
                </div>
                <div className="bg-white text-[#3D3D3D] p-6 border-b">
                  <Link href={"/"}>
                    <span>2023.09.05</span>
                    <span> | </span>
                    <span>When Visiting the Hospital for the First Time</span>
                  </Link>
                </div>
                <div className="bg-white text-[#3D3D3D] p-6 border-b">
                  <Link href={"/"}>
                    <span>2023.09.05</span>
                    <span> | </span>
                    <span>When Visiting the Hospital for the First Time</span>
                  </Link>
                </div>
                <div className="bg-white text-[#3D3D3D] p-6 border-b">
                  <Link href={"/"}>
                    <span>2023.09.05</span>
                    <span> | </span>
                    <span>When Visiting the Hospital for the First Time</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Link className="bg-[#3462af] rounded-md py-2 px-5 " href={"/"}>
                See More
              </Link>
            </div>
          </div>
        </div>
        <div className="container py-[100px] border-b">
          <div className="">
            <h2 className="font-bold text-[#3462af] text-[40px] mb-[60px]">
              Contact
            </h2>
            <div className="grid grid-cols-2 gap-20">
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
                  <strong>Telephone :</strong>
                </div>
                <div>
                  <strong>Email :</strong>
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
        <div className="container py-[100px]">
          <h2 className="font-bold text-[#3462af] text-[40px] mb-[60px]">
            Contact Form
          </h2>
          <div className="grid grid-cols-5 gap-10">
            <div className="col-span-2">
              <Image
                src={"/img/visa-workpermit/contact-form.png"}
                alt=""
                width={600}
                height={400}
              ></Image>
            </div>
            <div className="col-span-3 border-t">
              <div className="grid grid-cols-5 gap-10 py-5">
                <div className="col-span-2">
                  <div>
                    <strong className="text-[#3462af]">Customer Info</strong>
                  </div>
                  <div>
                    <strong className="text-[#3462af]">Customer Info</strong>
                    <input type="text" className="border" />
                  </div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
