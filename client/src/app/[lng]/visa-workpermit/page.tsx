import MainHeading from "@/components/website/atom/heading/MainHeading";
import CoverVisa from "@/components/website/layout/CoverVisa";
import NewsList from "@/components/website/layout/NewsList";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import VisaServiceSection from "@/components/website/layout/VisaServiceSection";


export default function VisaWorkpermit({ params }: { params: { lng: string } }) {
    return (
        <>
            <div className="visa-workpermit">
                <CoverVisa />
                <div className="container py-10">
                    <div className="mb-[80px] " id="service">
                        <MainHeading text="Service" heading="2" />
                        <VisaServiceSection />
                    </div>

                    <Link
                        href="/visa-workpermit/price"
                        className="flex justify-center hover:bg-[#3462af] hover:text-white transition-all border-[#3462af] border-8 py-4 text-center font-semibold text-[24px] text-[#3462af] mb-[80px] w-full"
                    >
                        料金表はこちら
                    </Link>

                    <div className=" " id="info">
                        <MainHeading text="Help Info." heading="2" />
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
                                <p>Information on Institutions</p>
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
                                <p>Visa info for other countiries</p>
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
                                <p>Useful links</p>
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
                                <p>FAQ</p>
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
                            <MainHeading text="News" heading="2" />
                            <NewsList lng={params.lng} limit={5} module={'visa'} forPage={'visa'}/>
                        </div>
                        <div className="flex justify-center items-center">
                            <Link
                                className="text-white bg-[#3462af] rounded-md py-2 px-5 "
                                href={"/visa-workpermit/news-activity"}
                            >
                                See More
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container py-10 border-b">
                    <div className="">
                        <MainHeading text="Contact" heading="2" />
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
                <div className="container mx-auto lg:py-10" id="contact">
                    <MainHeading text="Contact Form" heading="2" />
                    <div className="grid grid-cols-6 lg:grid-cols-12 gap-10">
                        <div className="col-span-6 hidden lg:flex">
                            <Image
                                src={"/img/visa-workpermit/contact-form.png"}
                                alt=""
                                width={600}
                                height={400}
                            ></Image>
                        </div>
                        <div className="col-span-6 border-t">
                            <div className="grid grid-cols-12 my-8 text-slate-800 text-sm md:text-base">
                                <div className="me-6 col-span-12 md:col-span-3 font-bold min-w-[180px] text-[#3562AE]">
                                    お客様情報
                                </div>
                                <div className="flex justify-between items-stretch col-span-12 md:col-span-9">
                                    <label className="me-6" htmlFor="customer1">
                                        <input
                                            type="radio"
                                            id="customer1"
                                            name="customer"
                                            value="company"
                                            className="me-2"
                                        />
                                        法人企業様
                                    </label>
                                    <label className="me-6" htmlFor="customer2">
                                        <input
                                            type="radio"
                                            id="customer2"
                                            name="customer"
                                            value="individual"
                                            className="me-2"
                                        />
                                        個人のお客様
                                    </label>
                                    <label htmlFor="customer3">
                                        <input
                                            type="radio"
                                            id="customer3"
                                            name="customer"
                                            value="other"
                                            className="me-2"
                                        />
                                        その他
                                    </label>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 mb-4">
                                <div className="col-span-12 md:col-span-3 font-bold min-w-[180px] text-[#3562AE]">
                                    会社名（任意）
                                </div>
                                <div className="w-full col-span-12 md:col-span-9">
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder={``}
                                        className="w-full border rounded-md text-slate-500 focus:outline-blue-400 py-2 px-4"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-12  mb-4">
                                <div className="font-bold min-w-[180px] text-[#3562AE] col-span-12 md:col-span-3">
                                    お名前　(漢字)
                                </div>
                                <div className="w-full col-span-12 md:col-span-9">
                                    <input
                                        type="text"
                                        name="name_kanji"
                                        placeholder={``}
                                        className="w-full border rounded-md text-slate-500 focus:outline-blue-400 py-2 px-4"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-12 mb-4">
                                <div className="font-bold min-w-[180px] text-[#3562AE] col-span-12 md:col-span-3">
                                    お名前　(英字)
                                </div>
                                <div className="w-full col-span-12 md:col-span-9">
                                    <input
                                        type="text"
                                        name="name_eng"
                                        placeholder={``}
                                        className="w-full border rounded-md text-slate-500 focus:outline-blue-400 py-2 px-4"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-12 mb-4">
                                <div className="font-bold min-w-[180px] text-[#3562AE] col-span-12 md:col-span-3">
                                    メールアドレス
                                </div>
                                <div className="w-full col-span-12 md:col-span-9">
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder={``}
                                        className="w-full border rounded-md text-slate-500 focus:outline-blue-400 py-2 px-4"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-12 mb-4">
                                <div className="font-bold min-w-[180px] text-[#3562AE] col-span-12 md:col-span-3">
                                    電話番号
                                </div>
                                <div className="w-full col-span-12 md:col-span-9">
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder={``}
                                        className="w-full border rounded-md text-slate-500 focus:outline-blue-400 py-2 px-4"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-12 mb-4">
                                <div className="font-bold min-w-[180px] text-[#3562AE] col-span-12 md:col-span-3">
                                    お問い合わせ内容
                                </div>
                                <div className="w-full col-span-12 md:col-span-9">
                                    <textarea
                                        name="inqurey"
                                        rows={5}
                                        placeholder={``}
                                        className="w-full border rounded-md text-slate-500 focus:outline-blue-400 py-2 px-4 mb-4"
                                    />
                                    <button
                                        type="submit"
                                        className="border py-2 px-4 rounded-md bg-[#3562AE] text-white hover:bg-[#FDBD59] w-full md:w-fit"
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
