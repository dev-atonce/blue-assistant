import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function VisaWorkpermit() {
    return (
        <>
            <div className="visa-workpermit">
                <div className="relative">
                    <div className="absolute text-[#3462af] drop-shadow-xl text-[96px] font-bold left-40 top-24">VISA & <br />WORK PERMIT</div>
                    <Image src="/img/visa-workpermit/banner-visa.png" alt="visa-workpermit" width={1980} height={478}></Image>
                </div>
                <div className="shadow-lg bg-[#3462af] h-[70px] lg:block hidden">
                    <div className="container h-full flex justify-center items-center gap-16 text-[16px] font-semibold">
                        <Link href={"/"}>Location</Link>
                        <Link href={"/"}>About</Link>
                        <Link href={"/"}>Service</Link>
                        <Link href={"/"}>Blog</Link>
                        <Link href={"/"}>FAQ</Link>
                        <Link href={"/"}>Contact</Link>
                    </div>
                </div>
                <div className="container py-[110px]">
                    <div className="mb-[80px]">
                        <h1 className="font-bold text-[#3462af] text-[40px] mb-[80px]">Services</h1>
                        <div className="grid grid-cols-4 gap-5 h-[289px] text-xl text-[#3462af] font-semibold">
                            <button className="border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5">
                                <Image src={"/img/visa-workpermit/service-1.png"} alt="" width={120} height={120}></Image>
                                <p>タイで働くには</p>
                            </button>
                            <button className="border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5">
                                <Image src={"/img/visa-workpermit/service-2.png"} alt="" width={120} height={120}></Image>
                                <p>労働許可証</p>
                            </button>
                            <button className="border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5">
                                <Image src={"/img/visa-workpermit/service-3.png"} alt="" width={120} height={120}></Image>
                                <p>ビザ</p>
                            </button>
                            <button className="border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5">
                                <Image src={"/img/visa-workpermit/service-4.png"} alt="" width={120} height={120}></Image>
                                <p>その他</p>
                            </button>
                        </div>
                    </div>
                    <div className="border-[#3462af] border-8 p-4 text-center font-semibold text-[24px] text-[#3462af] mb-[80px]">
                        料金表はこちら
                    </div>
                    <div className="mb-[70px]">
                        <h2 className="font-bold text-[#3462af] text-[40px] mb-[80px]">Help Info</h2>
                        <div className="grid grid-cols-4 gap-20 h-[289px] text-xl text-[#3462af] font-semibold">
                            <button className="flex flex-col justify-center items-center gap-5">
                                <Image src={"/img/visa-workpermit/help-1.png"} alt="" width={110} height={110}></Image>
                                <p>Information on Institutions</p>
                            </button>
                            <button className="flex flex-col justify-center items-center gap-5">
                                <Image src={"/img/visa-workpermit/help-2.png"} alt="" width={110} height={110}></Image>
                                <p>Visa info for other countiries</p>
                            </button>
                            <button className="flex flex-col justify-center items-center gap-5">
                                <Image src={"/img/visa-workpermit/help-3.png"} alt="" width={110} height={110}></Image>
                                <p>Useful links</p>
                            </button>
                            <button className="flex flex-col justify-center items-center gap-5">
                                <Image src={"/img/visa-workpermit/help-4.png"} alt="" width={110} height={110}></Image>
                                <p>FAQ</p>
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <Link className="bg-[#3462af] rounded-md py-2 px-5 " href={"/"}>More Info About us</Link>
                    </div>
                </div>
                <div className="bg-[#fafafa] py-[50px]">
                    <div className="container">
                        <h2 className="font-bold text-[#3462af] text-[40px] mb-[60px]">News</h2>
                        <div>
                            <div>

                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}