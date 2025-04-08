import FadeHeading from "@/components/website/atom/heading/FadeHeading";
import MainHeading from "@/components/website/atom/heading/MainHeading";
import Cover from "@/components/website/layout/Cover";
import CoverVisa from "@/components/website/layout/CoverVisa";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaArrowCircleDown, FaEye, FaHospital, FaLine } from "react-icons/fa";
import { Image as AntImage } from "antd";
import Modal from "@/components/website/layout/Modal";
import AddressModal from "@/components/website/organism/AddressModal";
import { MdMail } from "react-icons/md";
import { IoIosCall, IoIosGlobe } from "react-icons/io";
import SwiperSquare from "@/components/website/molecule/SwiperSquare";
import { SiGooglemaps, SiLine } from "react-icons/si";

const title = {
  th: "ประเทศเมียนมาร์",
  en: "Myanmar",
  jp: "ミャンマー",
};

const ContentEN = () => {
  return (
    // <div className="py-4 md:py-10 border-b-2 border-slate-200 ">
    //   <>
    //     <FadeHeading text="Yangon Japan Medical Center（YJMC)" heading="2" />

    //     <div className="detail-sty text-sm ">
    //       <div className="w-full grid grid-cols-12 gap-y-10 lg:gap-x-10 py-6 bg ">
    //         <div className="col-span-12 lg:col-span-6  ">
    //           <SwiperSquare
    //             imgs={["/img/myanmar/yjmc1.jpg", "/img/myanmar/yjmc2.jpg"]}
    //           />
    //           {/* <a
    //           className="rounded-lg shadow-lg"
    //           href="https://www.google.com/maps/place/Ar+Yu+International+Hospital/@16.8103538,96.1653143,15z/data=!4m6!3m5!1s0x30c1ed1f31639c31:0x17d8229ae7004826!8m2!3d16.8128957!4d96.1757427!16s%2Fg%2F11f9v5lwp5?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    //         >
    //           <Image
    //             width="400"
    //             height="400"
    //             alt="hospital"
    //             src="/img/jmd/my_hos1.png"
    //             className="object-cover w-full rounded-lg shadow-lg"
    //           />
    //         </a> */}
    //         </div>
    //         <div className="text-blue-900 w-full col-span-12 lg:col-span-6">
    //           <div className="pb-6">
    //             <span className="text-lg mb-2 font-semibold">
    //               JMD Reception Hours
    //             </span>
    //             <p>1: 8:00 - 18:00</p>
    //             <p>2: 9:00 - 12:00</p>
    //             <p>*Closed on Sundays and holidays</p>
    //           </div>
    //           <div className="pb-6">
    //             <span className="text-lg mb-2 font-semibold">
    //               Dedicated Line for JMD
    //             </span>
    //             <div className="flex gap-2 items-center">
    //               <div
    //                 className={` hover:text-white bg-white border border-blue-700 transition-all ease-in-out  drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
    //               >
    //                 <IoIosCall size={25} />
    //               </div>
    //               <div>
    //                 <div>+95-(0) 9-4513-20490 </div>
    //               </div>
    //             </div>
    //             <div className="flex gap-2 items-center">
    //               <div
    //                 className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
    //               >
    //                 <MdMail size={25} />
    //               </div>
    //               <div>
    //                 <div>jmd-myanmar@blue-assistance.co.th</div>
    //               </div>
    //             </div>
    //             {/* <div className="flex gap-2 items-center">
    //               <div
    //                 className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
    //               >
    //                 <FaHospital size={25} />
    //               </div>
    //               <div>
    //                 <div>+95 1 937 6200</div>
    //               </div>
    //             </div> */}
    //           </div>
    //           <div className="grid lg:grid-cols-12 gap-4">
    //             <div className="col-span-4 font-bold">Hospital info :</div>
    //             <div className="col-span-8">
    //               Yangon Japan Medical Center （YJMC){" "}
    //             </div>
    //             <div className="col-span-4 font-bold">Address：</div>
    //             <div className="col-span-8">
    //               No.168/A, Dhama Zedi Road, Shwegonedaing Ward (West) Bahan
    //               Township, Yangon
    //             </div>
    //             {/* <div className="col-span-4 font-bold">Reception Hours： </div>
    //           <div className="col-span-8">
    //             <p>General out-patient：8AM-8PM</p>
    //             <p>Night out-patient：8PM - 8AM</p>
    //             <p>Emergency Center: 24-hour Service</p>
    //           </div> */}
    //           </div>
    //           <div className="flex justify-start gap-1 mt-10">
    //             <a
    //               href="https://line.me/ti/p/~@jmd-mmr"
    //               className="flex gap-2  items-center bg-[#3562AE] text-white py-2 px-4 rounded-lg hover:bg-[#FDBD59]"
    //             >
    //               <FaLine size={25} /> ADD LINE
    //             </a>
    //             <a
    //               href="https://www.facebook.com/YJMCmyanmar?mibextid=LQQJ4d"
    //               className="flex gap-2 items-center bg-[#3562AE] text-white py-2 px-4 rounded-lg hover:bg-[#FDBD59]"
    //             >
    //               <IoIosGlobe size={25} /> WEBSITE
    //             </a>
    //             <a
    //               href="https://www.google.com/maps/place/Yangon+Japan+Medical+Centre/data=!4m2!3m1!1s0x0:0x1bf8cf04f936b51f?sa=X&ved=1t:2428&ictx=111"
    //               className="flex gap-2 items-center bg-[#3562AE] text-white py-2 px-4 rounded-lg hover:bg-[#FDBD59]"
    //             >
    //               <SiGooglemaps size={25} />
    //               GOOGLE MAP
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </>
    //   <>
    //     <FadeHeading
    //       text="Myanmar Premium J Medical Clinic (MPM)"
    //       heading="2"
    //     />

    //     <div className="detail-sty text-sm ">
    //       <div className="w-full grid grid-cols-12 gap-y-10 lg:gap-x-10 py-6 bg ">
    //         <div className="col-span-12 lg:col-span-6  ">
    //           <SwiperSquare
    //             imgs={["/img/myanmar/mpm.jpg", "/img/myanmar/1.jpg"]}
    //           />
    //           {/* <a
    //           className="rounded-lg shadow-lg"
    //           href="https://www.google.com/maps/place/Ar+Yu+International+Hospital/@16.8103538,96.1653143,15z/data=!4m6!3m5!1s0x30c1ed1f31639c31:0x17d8229ae7004826!8m2!3d16.8128957!4d96.1757427!16s%2Fg%2F11f9v5lwp5?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    //         >
    //           <Image
    //             width="400"
    //             height="400"
    //             alt="hospital"
    //             src="/img/jmd/my_hos1.png"
    //             className="object-cover w-full rounded-lg shadow-lg"
    //           />
    //         </a> */}
    //         </div>
    //         <div className="text-blue-900 w-full col-span-12 lg:col-span-6">
    //           <div className="pb-6">
    //             <span className="text-lg mb-2 font-semibold">
    //               JMD Reception Hours
    //             </span>
    //             <p>1: 8:00 - 18:00</p>
    //             <p>2: 9:00 - 12:00</p>
    //             <p>*Closed on Sundays and holidays</p>
    //           </div>
    //           <div className="pb-6">
    //             <span className="text-lg mb-2 font-semibold">
    //               Dedicated Line for JMD
    //             </span>
    //             <div className="flex gap-2 items-center">
    //               <div
    //                 className={` hover:text-white bg-white border border-blue-700 transition-all ease-in-out  drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
    //               >
    //                 <IoIosCall size={25} />
    //               </div>
    //               <div>
    //                 <div>+95-(0) 9-4513-20490 </div>
    //               </div>
    //             </div>
    //             <div className="flex gap-2 items-center">
    //               <div
    //                 className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
    //               >
    //                 <MdMail size={25} />
    //               </div>
    //               <div>
    //                 <div>jmd-myanmar@blue-assistance.co.th</div>
    //               </div>
    //             </div>
    //             {/* <div className="flex gap-2 items-center">
    //               <div
    //                 className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
    //               >
    //                 <FaHospital size={25} />
    //               </div>
    //               <div>
    //                 <div>+95 1 937 6200</div>
    //               </div>
    //             </div> */}
    //           </div>
    //           <div className="grid lg:grid-cols-12 gap-4">
    //             <div className="col-span-4 font-bold">Hospital info :</div>
    //             <div className="col-span-8">
    //               Myanmar Premium J Medical Clinic (MPM)
    //             </div>
    //             <div className="col-span-4 font-bold">Address：</div>
    //             <div className="col-span-8">
    //               No.3/A, Corner Of Bogyoke Aung San Road& 27th Street, Level 5,
    //               Junction City Tower,Pabaedan Township, Yangon.
    //             </div>
    //             {/* <div className="col-span-4 font-bold">Reception Hours： </div>
    //           <div className="col-span-8">
    //             <p>General out-patient：8AM-8PM</p>
    //             <p>Night out-patient：8PM - 8AM</p>
    //             <p>Emergency Center: 24-hour Service</p>
    //           </div> */}
    //           </div>
    //           <div className="flex justify-start gap-1 mt-10">
    //             <a
    //               href="https://line.me/ti/p/~@jmd-mmr"
    //               className="flex gap-2  items-center bg-[#3562AE] text-white py-2 px-4 rounded-lg hover:bg-[#FDBD59]"
    //             >
    //               <FaLine size={25} /> ADD LINE
    //             </a>
    //             <a
    //               href="https://www.mpm-clinic-ishii.com/"
    //               className="flex gap-2 items-center bg-[#3562AE] text-white py-2 px-4 rounded-lg hover:bg-[#FDBD59]"
    //             >
    //               <IoIosGlobe size={25} /> WEBSITE
    //             </a>
    //             <a
    //               href="https://www.google.com/maps/place/MYANMAR+PREMIUM+J+MEDICAL+CLINIC/data=!4m2!3m1!1s0x0:0x3f0e40249ac72f39?sa=X&ved=1t:2428&ictx=111"
    //               className="flex gap-2 items-center bg-[#3562AE] text-white py-2 px-4 rounded-lg hover:bg-[#FDBD59]"
    //             >
    //               <SiGooglemaps size={25} />
    //               GOOGLE MAP
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </>
    //   <>
    //     <FadeHeading text="Samitivej International Clinic " heading="2" />

    //     <div className="detail-sty text-sm ">
    //       <div className="w-full grid grid-cols-12 gap-y-10 lg:gap-x-10 py-6 bg ">
    //         <div className="col-span-12 lg:col-span-6  ">
    //           <SwiperSquare
    //             imgs={["/img/myanmar/s1.jpg", "/img/myanmar/s2.jpg"]}
    //           />
    //           {/* <a
    //           className="rounded-lg shadow-lg"
    //           href="https://www.google.com/maps/place/Ar+Yu+International+Hospital/@16.8103538,96.1653143,15z/data=!4m6!3m5!1s0x30c1ed1f31639c31:0x17d8229ae7004826!8m2!3d16.8128957!4d96.1757427!16s%2Fg%2F11f9v5lwp5?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    //         >
    //           <Image
    //             width="400"
    //             height="400"
    //             alt="hospital"
    //             src="/img/jmd/my_hos1.png"
    //             className="object-cover w-full rounded-lg shadow-lg"
    //           />
    //         </a> */}
    //         </div>
    //         <div className="text-blue-900 w-full col-span-12 lg:col-span-6">
    //           <div className="pb-6">
    //             <span className="text-lg mb-2 font-semibold">
    //               JMD Reception Hours
    //             </span>
    //             <p>1: 8:00 - 18:00</p>
    //             <p>2: 9:00 - 12:00</p>
    //             <p>*Closed on Sundays and holidays</p>
    //           </div>
    //           <div className="pb-6">
    //             <span className="text-lg mb-2 font-semibold">
    //               Dedicated Line for JMD
    //             </span>
    //             <div className="flex gap-2 items-center">
    //               <div
    //                 className={` hover:text-white bg-white border border-blue-700 transition-all ease-in-out  drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
    //               >
    //                 <IoIosCall size={25} />
    //               </div>
    //               <div>
    //                 <div>+95-(0) 9-4513-20490 </div>
    //               </div>
    //             </div>
    //             <div className="flex gap-2 items-center">
    //               <div
    //                 className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
    //               >
    //                 <MdMail size={25} />
    //               </div>
    //               <div>
    //                 <div>jmd-myanmar@blue-assistance.co.th</div>
    //               </div>
    //             </div>
    //             {/* <div className="flex gap-2 items-center">
    //               <div
    //                 className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
    //               >
    //                 <FaHospital size={25} />
    //               </div>
    //               <div>
    //                 <div>+95 1 937 6200</div>
    //               </div>
    //             </div> */}
    //           </div>
    //           <div className="grid lg:grid-cols-12 gap-4">
    //             <div className="col-span-4 font-bold">Hospital info :</div>
    //             <div className="col-span-8">Samitivej International Clinic</div>
    //             <div className="col-span-4 font-bold">Address：</div>
    //             <div className="col-span-8">
    //               9E/2.Kabar Aye Pagoda Road,Ward No.(7),Mayangone Township,
    //               Yangon, Myanmar
    //             </div>
    //             {/* <div className="col-span-4 font-bold">Reception Hours： </div>
    //           <div className="col-span-8">
    //             <p>General out-patient：8AM-8PM</p>
    //             <p>Night out-patient：8PM - 8AM</p>
    //             <p>Emergency Center: 24-hour Service</p>
    //           </div> */}
    //           </div>
    //           <div className="flex justify-start gap-1 mt-10">
    //             <a
    //               href="https://line.me/ti/p/~@jmd-mmr"
    //               className="flex gap-2  items-center bg-[#3562AE] text-white py-2 px-4 rounded-lg hover:bg-[#FDBD59]"
    //             >
    //               <FaLine size={25} /> ADD LINE
    //             </a>
    //             <a
    //               href="https://www.samitivejhospitals.com/page/samitivej-international-myanmar-8-mile-clinic"
    //               className="flex gap-2 items-center bg-[#3562AE] text-white py-2 px-4 rounded-lg hover:bg-[#FDBD59]"
    //             >
    //               <IoIosGlobe size={25} /> WEBSITE
    //             </a>
    //             <a
    //               href="https://www.google.com/maps/place/Samitivej+International+Clinic/data=!4m2!3m1!1s0x0:0x759fdab2818871ab?sa=X&ved=1t:2428&ictx=111"
    //               className="flex gap-2 items-center bg-[#3562AE] text-white py-2 px-4 rounded-lg hover:bg-[#FDBD59]"
    //             >
    //               <SiGooglemaps size={25} />
    //               GOOGLE MAP
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </>
    //   <>
    //     <FadeHeading text="ARYU Hospital" heading="2" />

    //     <div className="detail-sty text-sm ">
    //       <div className="w-full grid grid-cols-12 gap-y-10 lg:gap-x-10 py-6 bg ">
    //         <div className="col-span-12 lg:col-span-6  ">
    //           <SwiperSquare
    //             imgs={[
    //               "/img/myanmar/ar1.jpg",
    //               "/img/myanmar/0.jpg",
    //               "/img/myanmar/mpm2.jpg",
    //             ]}
    //           />
    //           {/* <a
    //           className="rounded-lg shadow-lg"
    //           href="https://www.google.com/maps/place/Ar+Yu+International+Hospital/@16.8103538,96.1653143,15z/data=!4m6!3m5!1s0x30c1ed1f31639c31:0x17d8229ae7004826!8m2!3d16.8128957!4d96.1757427!16s%2Fg%2F11f9v5lwp5?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    //         >
    //           <Image
    //             width="400"
    //             height="400"
    //             alt="hospital"
    //             src="/img/jmd/my_hos1.png"
    //             className="object-cover w-full rounded-lg shadow-lg"
    //           />
    //         </a> */}
    //         </div>
    //         <div className="text-blue-900 w-full col-span-12 lg:col-span-6">
    //           <div className="pb-6">
    //             <span className="text-lg mb-2 font-semibold">
    //               JMD Reception Hours
    //             </span>
    //             <p>1: 8:00 - 18:00</p>
    //             <p>2: 9:00 - 12:00</p>
    //             <p>*Closed on Sundays and holidays</p>
    //           </div>
    //           <div className="pb-6">
    //             <span className="text-lg mb-2 font-semibold">
    //               Dedicated Line for JMD
    //             </span>
    //             <div className="flex gap-2 items-center">
    //               <div
    //                 className={` hover:text-white bg-white border border-blue-700 transition-all ease-in-out  drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
    //               >
    //                 <IoIosCall size={25} />
    //               </div>
    //               <div>
    //                 <div>+95-(0) 9-4513-20490 </div>
    //               </div>
    //             </div>
    //             <div className="flex gap-2 items-center">
    //               <div
    //                 className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
    //               >
    //                 <MdMail size={25} />
    //               </div>
    //               <div>
    //                 <div>jmd-myanmar@blue-assistance.co.th</div>
    //               </div>
    //             </div>
    //             <div className="flex gap-2 items-center">
    //               <div
    //                 className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
    //               >
    //                 <FaHospital size={25} />
    //               </div>
    //               <div>
    //                 <div>+95 1 937 6200</div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="grid lg:grid-cols-12 gap-4">
    //             <div className="col-span-4 font-bold">Hospital info :</div>
    //             <div className="col-span-8">ARYUインターナショナル病院</div>
    //             <div className="col-span-4 font-bold">Address：</div>
    //             <div className="col-span-8">
    //               400 Kyaik Ka San Rd., Tamwe Tsp, Yangon Myanmar
    //             </div>
    //             {/* <div className="col-span-4 font-bold">Reception Hours： </div>
    //           <div className="col-span-8">
    //             <p>General out-patient：8AM-8PM</p>
    //             <p>Night out-patient：8PM - 8AM</p>
    //             <p>Emergency Center: 24-hour Service</p>
    //           </div> */}
    //           </div>
    //           <div className="flex justify-start gap-1 mt-10">
    //             <a
    //               href="https://line.me/ti/p/~@jmd-mmr"
    //               className="flex gap-2  items-center bg-[#3562AE] text-white py-2 px-4 rounded-lg hover:bg-[#FDBD59]"
    //             >
    //               <FaLine size={25} /> ADD LINE
    //             </a>
    //             <a
    //               href="https://aryuhospital.com/"
    //               className="flex gap-2 items-center bg-[#3562AE] text-white py-2 px-4 rounded-lg hover:bg-[#FDBD59]"
    //             >
    //               <IoIosGlobe size={25} /> WEBSITE
    //             </a>
    //             <a
    //               href="https://www.google.com/maps/place/Ar+Yu+International+Hospital/@16.8103538,96.1653143,15z/data=!4m6!3m5!1s0x30c1ed1f31639c31:0x17d8229ae7004826!8m2!3d16.8128957!4d96.1757427!16s%2Fg%2F11f9v5lwp5?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    //               className="flex gap-2 items-center bg-[#3562AE] text-white py-2 px-4 rounded-lg hover:bg-[#FDBD59]"
    //             >
    //               <SiGooglemaps size={25} />
    //               GOOGLE MAP
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </>
    //   <>
    //     <FadeHeading text="Grand Hantha International Hospital" heading="2" />

    //     <div className="detail-sty text-sm ">
    //       <div className="w-full grid grid-cols-12 gap-y-10 lg:gap-x-10 py-6 bg ">
    //         <div className="col-span-12 lg:col-span-6  ">
    //           <SwiperSquare
    //             imgs={["/img/myanmar/g1.jpg", "/img/myanmar/g2.jpg"]}
    //           />
    //           {/* <a
    //           className="rounded-lg shadow-lg"
    //           href="https://www.google.com/maps/place/Ar+Yu+International+Hospital/@16.8103538,96.1653143,15z/data=!4m6!3m5!1s0x30c1ed1f31639c31:0x17d8229ae7004826!8m2!3d16.8128957!4d96.1757427!16s%2Fg%2F11f9v5lwp5?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    //         >
    //           <Image
    //             width="400"
    //             height="400"
    //             alt="hospital"
    //             src="/img/jmd/my_hos1.png"
    //             className="object-cover w-full rounded-lg shadow-lg"
    //           />
    //         </a> */}
    //         </div>
    //         <div className="text-blue-900 w-full col-span-12 lg:col-span-6">
    //           <div className="pb-6">
    //             <span className="text-lg mb-2 font-semibold">
    //               JMD Reception Hours
    //             </span>
    //             <p>1: 8:00 - 18:00</p>
    //             <p>2: 9:00 - 12:00</p>
    //             <p>*Closed on Sundays and holidays</p>
    //           </div>
    //           <div className="pb-6">
    //             <span className="text-lg mb-2 font-semibold">
    //               Dedicated Line for JMD
    //             </span>
    //             <div className="flex gap-2 items-center">
    //               <div
    //                 className={` hover:text-white bg-white border border-blue-700 transition-all ease-in-out  drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
    //               >
    //                 <IoIosCall size={25} />
    //               </div>
    //               <div>
    //                 <div>+95-(0) 9-4513-20490 </div>
    //               </div>
    //             </div>
    //             <div className="flex gap-2 items-center">
    //               <div
    //                 className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
    //               >
    //                 <MdMail size={25} />
    //               </div>
    //               <div>
    //                 <div>jmd-myanmar@blue-assistance.co.th</div>
    //               </div>
    //             </div>
    //             {/* <div className="flex gap-2 items-center">
    //               <div
    //                 className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
    //               >
    //                 <FaHospital size={25} />
    //               </div>
    //               <div>
    //                 <div>+95 1 937 6200</div>
    //               </div>
    //             </div> */}
    //           </div>
    //           <div className="grid lg:grid-cols-12 gap-4">
    //             <div className="col-span-4 font-bold">Hospital info :</div>
    //             <div className="col-span-8">
    //               Grand Hantha International Hospital
    //             </div>
    //             <div className="col-span-4 font-bold">Address：</div>
    //             <div className="col-span-8">
    //               No (3), Corner of Nar Nat Taw Street and Kyee Myin Daing Kan
    //               Nar Road, Kamaryut Township,Yangon
    //             </div>
    //             {/* <div className="col-span-4 font-bold">Reception Hours： </div>
    //           <div className="col-span-8">
    //             <p>General out-patient：8AM-8PM</p>
    //             <p>Night out-patient：8PM - 8AM</p>
    //             <p>Emergency Center: 24-hour Service</p>
    //           </div> */}
    //           </div>
    //           <div className="flex justify-start gap-1 mt-10">
    //             <a
    //               href="https://line.me/ti/p/~@jmd-mmr"
    //               className="flex gap-2  items-center bg-[#3562AE] text-white py-2 px-4 rounded-lg hover:bg-[#FDBD59]"
    //             >
    //               <FaLine size={25} /> ADD LINE
    //             </a>
    //             <a
    //               href="https://grandhantha.com/"
    //               className="flex gap-2 items-center bg-[#3562AE] text-white py-2 px-4 rounded-lg hover:bg-[#FDBD59]"
    //             >
    //               <IoIosGlobe size={25} /> WEBSITE
    //             </a>
    //             <a
    //               href="https://www.google.com/maps/place/Grand+Hantha+International+Hospital/@16.8212882,96.1231461,17z/data=!3m1!4b1!4m6!3m5!1s0x30c194cd2ca88cb9:0x452d8e755e6d807c!8m2!3d16.8212882!4d96.1231461!16s%2Fg%2F11f39p67vn?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D"
    //               className="flex gap-2 items-center bg-[#3562AE] text-white py-2 px-4 rounded-lg hover:bg-[#FDBD59]"
    //             >
    //               <SiGooglemaps size={25} />
    //               GOOGLE MAP
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </>
    // </div>
    <ContentJP />
  );
};
const ContentJP = () => {
  return (
    <div className="py-4 md:py-10 border-b-2 border-slate-200 ">
      <>
        <FadeHeading text="Yangon Japan Medical Center（YJMC)" heading="2" />

        <div className="detail-sty text-sm ">
          <div className="w-full grid grid-cols-12 gap-y-10 lg:gap-x-10 py-6 bg ">
            <div className="col-span-12 lg:col-span-6  w-full">
              <SwiperSquare
                imgs={["/img/myanmar/yjmc1.jpg", "/img/myanmar/yjmc2.jpg"]}
              />
              {/* <a
                className="rounded-lg shadow-lg"
                href="https://www.google.com/maps/place/Ar+Yu+International+Hospital/@16.8103538,96.1653143,15z/data=!4m6!3m5!1s0x30c1ed1f31639c31:0x17d8229ae7004826!8m2!3d16.8128957!4d96.1757427!16s%2Fg%2F11f9v5lwp5?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
              >
                <Image
                  width="400"
                  height="400"
                  alt="hospital"
                  src="/img/jmd/my_hos1.png"
                  className="object-cover w-full rounded-lg shadow-lg"
                />
              </a> */}
            </div>
            <div className="text-blue-900 w-full col-span-12 lg:col-span-6">
              <div className="pb-6">
                <span className="text-lg mb-2 font-semibold">JMD受付時間</span>
                <p>月～金 &nbsp;: 8:00 - 18:00</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;土&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                  9:00 - 12:00
                </p>
                <p>※日祝はお休み</p>
              </div>
              <div className="">
                <span className="text-lg mb-2 font-semibold">
                  JMD専用ライン
                </span>
                <div className="flex gap-2 items-center">
                  <div
                    className={` hover:text-white bg-white border border-blue-700 transition-all ease-in-out  drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                  >
                    <IoIosCall size={25} />
                  </div>
                  <div>
                    <div>+95-(0) 9-4513-20490 </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div
                    className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                  >
                    <MdMail size={25} />
                  </div>
                  <div>
                    <div>jmd-myanmar@blue-assistance.co.th</div>
                  </div>
                </div>
                {/* <div className="flex gap-2 items-center">
                  <div
                    className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                  >
                    <FaHospital size={25} />
                  </div>
                  <div>
                    <div>+95 1 937 6200</div>
                  </div>
                </div> */}
              </div>
              <div className="flex   py-6">
                <a
                  href="https://line.me/ti/p/~@jmd-mmr"
                  className="flex gap-1  items-center bg-[#3562AE] text-white py-2 px-2 rounded-lg hover:bg-[#FDBD59]  justify-center"
                >
                  <FaLine size={25} /> ADD LINE
                </a>
              </div>
              <div className="grid lg:grid-cols-12 gap-4">
                <div className="col-span-4 font-bold">病院情報：</div>
                <div className="col-span-8">
                  Yangon Japan Medical Center（YJMC)
                </div>
                <div className="col-span-4 font-bold">病院の住所：</div>
                <div className="col-span-8">
                  No.168/A, Dhama Zedi Road, Shwegonedaing Ward (West) Bahan
                  Township, Yangon
                </div>
                {/* <div className="col-span-4 font-bold">Reception Hours： </div>
              <div className="col-span-8">
                <p>General out-patient：8AM-8PM</p>
                <p>Night out-patient：8PM - 8AM</p>
                <p>Emergency Center: 24-hour Service</p>
              </div> */}
              </div>
              <div className="flex justify-start gap-1 mt-10">
                <a
                  href="https://www.facebook.com/YJMCmyanmar?mibextid=LQQJ4d"
                  className="flex gap-1 items-center bg-[#3562AE] text-white py-1 px-1 rounded-lg hover:bg-[#FDBD59]"
                >
                  <IoIosGlobe size={25} /> WEBSITE
                </a>
                <a
                  href="https://www.google.com/maps/place/Yangon+Japan+Medical+Centre/data=!4m2!3m1!1s0x0:0x1bf8cf04f936b51f?sa=X&ved=1t:2428&ictx=111"
                  className="flex gap-1 items-center bg-[#3562AE] text-white py-1 px-1 rounded-lg hover:bg-[#FDBD59]"
                >
                  <SiGooglemaps size={25} />
                  GOOGLE MAP
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        <FadeHeading
          text="Myanmar Premium J Medical Clinic (MPM)"
          heading="2"
        />

        <div className="detail-sty text-sm ">
          <div className="w-full grid grid-cols-12 gap-y-10 lg:gap-x-10 py-6 bg ">
            <div className="col-span-12 lg:col-span-6  w-full">
              <SwiperSquare
                imgs={["/img/myanmar/mpm.jpg", "/img/myanmar/1.jpg"]}
              />
              {/* <a
                className="rounded-lg shadow-lg"
                href="https://www.google.com/maps/place/Ar+Yu+International+Hospital/@16.8103538,96.1653143,15z/data=!4m6!3m5!1s0x30c1ed1f31639c31:0x17d8229ae7004826!8m2!3d16.8128957!4d96.1757427!16s%2Fg%2F11f9v5lwp5?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
              >
                <Image
                  width="400"
                  height="400"
                  alt="hospital"
                  src="/img/jmd/my_hos1.png"
                  className="object-cover w-full rounded-lg shadow-lg"
                />
              </a> */}
            </div>
            <div className="text-blue-900 w-full col-span-12 lg:col-span-6">
              <div className="pb-6">
                <span className="text-lg mb-2 font-semibold">JMD受付時間</span>
                <p>月～金 &nbsp;: 8:00 - 18:00</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;土&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                  9:00 - 12:00
                </p>
                <p>※日祝はお休み</p>
              </div>
              <div className="">
                <span className="text-lg mb-2 font-semibold">
                  JMD専用ライン
                </span>
                <div className="flex gap-2 items-center">
                  <div
                    className={` hover:text-white bg-white border border-blue-700 transition-all ease-in-out  drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                  >
                    <IoIosCall size={25} />
                  </div>
                  <div>
                    <div>+95-(0) 9-4513-20490 </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div
                    className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                  >
                    <MdMail size={25} />
                  </div>
                  <div>
                    <div>jmd-myanmar@blue-assistance.co.th</div>
                  </div>
                </div>
                {/* <div className="flex gap-2 items-center">
                  <div
                    className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                  >
                    <FaHospital size={25} />
                  </div>
                  <div>
                    <div>+95 1 937 6200</div>
                  </div>
                </div> */}
              </div>
              <div className="flex   py-6">
                <a
                  href="https://line.me/ti/p/~@jmd-mmr"
                  className="flex gap-1  items-center bg-[#3562AE] text-white py-2 px-2 rounded-lg hover:bg-[#FDBD59]  justify-center"
                >
                  <FaLine size={25} /> ADD LINE
                </a>
              </div>
              <div className="grid lg:grid-cols-12 gap-4">
                <div className="col-span-4 font-bold">病院情報：</div>
                <div className="col-span-8">
                  Myanmar Premium J Medical Clinic (MPM)
                </div>
                <div className="col-span-4 font-bold">病院の住所：</div>
                <div className="col-span-8">
                  No.3/A, Corner Of Bogyoke Aung San Road& 27th Street, Level 5,
                  Junction City Tower,Pabaedan Township, Yangon.
                </div>
                {/* <div className="col-span-4 font-bold">Reception Hours： </div>
              <div className="col-span-8">
                <p>General out-patient：8AM-8PM</p>
                <p>Night out-patient：8PM - 8AM</p>
                <p>Emergency Center: 24-hour Service</p>
              </div> */}
              </div>
              <div className="flex justify-start gap-1 mt-10">
                <a
                  href="https://www.mpm-clinic-ishii.com/"
                  className="flex gap-1 items-center bg-[#3562AE] text-white py-1 px-1 rounded-lg hover:bg-[#FDBD59]"
                >
                  <IoIosGlobe size={25} /> WEBSITE
                </a>
                <a
                  href="https://www.google.com/maps/place/MYANMAR+PREMIUM+J+MEDICAL+CLINIC/data=!4m2!3m1!1s0x0:0x3f0e40249ac72f39?sa=X&ved=1t:2428&ictx=111"
                  className="flex gap-1 items-center bg-[#3562AE] text-white py-1 px-1 rounded-lg hover:bg-[#FDBD59]"
                >
                  <SiGooglemaps size={25} />
                  GOOGLE MAP
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        <FadeHeading text="Samitivej International Clinic" heading="2" />

        <div className="detail-sty text-sm ">
          <div className="w-full grid grid-cols-12 gap-y-10 lg:gap-x-10 py-6 bg ">
            <div className="col-span-12 lg:col-span-6  w-full">
              <SwiperSquare
                imgs={["/img/myanmar/s1.jpg", "/img/myanmar/s2.jpg"]}
              />
              {/* <a
                className="rounded-lg shadow-lg"
                href="https://www.google.com/maps/place/Ar+Yu+International+Hospital/@16.8103538,96.1653143,15z/data=!4m6!3m5!1s0x30c1ed1f31639c31:0x17d8229ae7004826!8m2!3d16.8128957!4d96.1757427!16s%2Fg%2F11f9v5lwp5?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
              >
                <Image
                  width="400"
                  height="400"
                  alt="hospital"
                  src="/img/jmd/my_hos1.png"
                  className="object-cover w-full rounded-lg shadow-lg"
                />
              </a> */}
            </div>
            <div className="text-blue-900 w-full col-span-12 lg:col-span-6">
              <div className="pb-6">
                <span className="text-lg mb-2 font-semibold">JMD受付時間</span>
                <p>月～金 &nbsp;: 8:00 - 18:00</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;土&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                  9:00 - 12:00
                </p>
                <p>※日祝はお休み</p>
              </div>
              <div className="pb-6">
                <span className="text-lg mb-2 font-semibold">
                  JMD専用ライン
                </span>
                <div className="flex gap-2 items-center">
                  <div
                    className={` hover:text-white bg-white border border-blue-700 transition-all ease-in-out  drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                  >
                    <IoIosCall size={25} />
                  </div>
                  <div>
                    <div>+95-(0) 9-4513-20490 </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div
                    className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                  >
                    <MdMail size={25} />
                  </div>
                  <div>
                    <div>jmd-myanmar@blue-assistance.co.th</div>
                  </div>
                </div>
                <div className="flex   py-6">
                  <a
                    href="https://line.me/ti/p/~@jmd-mmr"
                    className="flex gap-1  items-center bg-[#3562AE] text-white py-2 px-2 rounded-lg hover:bg-[#FDBD59]  justify-center"
                  >
                    <FaLine size={25} /> ADD LINE
                  </a>
                </div>
                {/* <div className="flex gap-2 items-center">
                  <div
                    className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                  >
                    <FaHospital size={25} />
                  </div>
                  <div>
                    <div>+95 1 937 6200</div>
                  </div>
                </div> */}
              </div>
              <div className="grid lg:grid-cols-12 gap-4">
                <div className="col-span-4 font-bold">病院情報：</div>
                <div className="col-span-8">Samitivej International Clinic</div>
                <div className="col-span-4 font-bold">病院の住所：</div>
                <div className="col-span-8">
                  9E/2.Kabar Aye Pagoda Road,Ward No.(7),Mayangone Township,
                  Yangon, Myanmar
                </div>
                {/* <div className="col-span-4 font-bold">Reception Hours： </div>
              <div className="col-span-8">
                <p>General out-patient：8AM-8PM</p>
                <p>Night out-patient：8PM - 8AM</p>
                <p>Emergency Center: 24-hour Service</p>
              </div> */}
              </div>

              <div className="flex justify-start gap-1 mt-10">
                <a
                  href="https://www.samitivejhospitals.com/page/samitivej-international-myanmar-8-mile-clinic"
                  className="flex gap-1 items-center bg-[#3562AE] text-white py-1 px-1 rounded-lg hover:bg-[#FDBD59]"
                >
                  <IoIosGlobe size={25} /> WEBSITE
                </a>
                <a
                  href="https://www.google.com/maps/place/Samitivej+International+Clinic/data=!4m2!3m1!1s0x0:0x759fdab2818871ab?sa=X&ved=1t:2428&ictx=111"
                  className="flex gap-1 items-center bg-[#3562AE] text-white py-1 px-1 rounded-lg hover:bg-[#FDBD59]"
                >
                  <SiGooglemaps size={25} />
                  GOOGLE MAP
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        <FadeHeading text="ARYU Hospital" heading="2" />

        <div className="detail-sty text-sm ">
          <div className="w-full grid grid-cols-12 gap-y-10 lg:gap-x-10 py-6 bg ">
            <div className="col-span-12 lg:col-span-6  w-full">
              <SwiperSquare
                imgs={[
                  "/img/myanmar/ar1.jpg",
                  "/img/myanmar/0.jpg",
                  "/img/myanmar/mpm2.jpg",
                ]}
              />
              {/* <a
                className="rounded-lg shadow-lg"
                href="https://www.google.com/maps/place/Ar+Yu+International+Hospital/@16.8103538,96.1653143,15z/data=!4m6!3m5!1s0x30c1ed1f31639c31:0x17d8229ae7004826!8m2!3d16.8128957!4d96.1757427!16s%2Fg%2F11f9v5lwp5?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
              >
                <Image
                  width="400"
                  height="400"
                  alt="hospital"
                  src="/img/jmd/my_hos1.png"
                  className="object-cover w-full rounded-lg shadow-lg"
                />
              </a> */}
            </div>
            <div className="text-blue-900 w-full col-span-12 lg:col-span-6">
              <div className="pb-6">
                <span className="text-lg mb-2 font-semibold">JMD受付時間</span>
                <p>月～金 &nbsp;: 8:00 - 18:00</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;土&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                  9:00 - 12:00
                </p>
                <p>※日祝はお休み</p>
              </div>
              <div className="">
                <span className="text-lg mb-2 font-semibold">
                  JMD専用ライン
                </span>
                <div className="flex gap-2 items-center">
                  <div
                    className={` hover:text-white bg-white border border-blue-700 transition-all ease-in-out  drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                  >
                    <IoIosCall size={25} />
                  </div>
                  <div>
                    <div>+95-(0) 9-4513-20490 </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div
                    className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                  >
                    <MdMail size={25} />
                  </div>
                  <div>
                    <div>jmd-myanmar@blue-assistance.co.th</div>
                  </div>
                </div>
              </div>
              <div className="flex   py-6">
                <a
                  href="https://line.me/ti/p/~@jmd-mmr"
                  className="flex gap-1  items-center bg-[#3562AE] text-white py-2 px-2 rounded-lg hover:bg-[#FDBD59]  justify-center"
                >
                  <FaLine size={25} /> ADD LINE
                </a>
              </div>
              <div className="grid lg:grid-cols-12 gap-4">
                <div className="col-span-4 font-bold">病院情報：</div>
                <div className="col-span-8">ARYUインターナショナル病院</div>
                <div className="col-span-4 font-bold">病院の住所：</div>
                <div className="col-span-8">
                  400 Kyaik Ka San Rd., Tamwe Tsp, Yangon Myanmar　
                </div>
                {/* <div className="col-span-4 font-bold">Reception Hours： </div>
              <div className="col-span-8">
                <p>General out-patient：8AM-8PM</p>
                <p>Night out-patient：8PM - 8AM</p>
                <p>Emergency Center: 24-hour Service</p>
              </div> */}
              </div>
              <div className="flex justify-start gap-1 mt-10">
                <a
                  href="https://aryuhospital.com/"
                  className="flex gap-1 items-center bg-[#3562AE] text-white py-1 px-1 rounded-lg hover:bg-[#FDBD59]"
                >
                  <IoIosGlobe size={25} /> WEBSITE
                </a>
                <a
                  href="https://www.google.com/maps/place/Ar+Yu+International+Hospital/@16.8103538,96.1653143,15z/data=!4m6!3m5!1s0x30c1ed1f31639c31:0x17d8229ae7004826!8m2!3d16.8128957!4d96.1757427!16s%2Fg%2F11f9v5lwp5?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
                  className="flex gap-1 items-center bg-[#3562AE] text-white py-1 px-1 rounded-lg hover:bg-[#FDBD59]"
                >
                  <SiGooglemaps size={25} />
                  GOOGLE MAP
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        <FadeHeading text="Grand Hantha International Hospital" heading="2" />

        <div className="detail-sty text-sm ">
          <div className="w-full grid grid-cols-12 gap-y-10 lg:gap-x-10 py-6 bg ">
            <div className="col-span-12 lg:col-span-6  w-full">
              <SwiperSquare
                imgs={["/img/myanmar/g1.jpg", "/img/myanmar/g2.jpg"]}
              />
              {/* <a
                className="rounded-lg shadow-lg"
                href="https://www.google.com/maps/place/Ar+Yu+International+Hospital/@16.8103538,96.1653143,15z/data=!4m6!3m5!1s0x30c1ed1f31639c31:0x17d8229ae7004826!8m2!3d16.8128957!4d96.1757427!16s%2Fg%2F11f9v5lwp5?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
              >
                <Image
                  width="400"
                  height="400"
                  alt="hospital"
                  src="/img/jmd/my_hos1.png"
                  className="object-cover w-full rounded-lg shadow-lg"
                />
              </a> */}
            </div>
            <div className="text-blue-900 w-full col-span-12 lg:col-span-6">
              <div className="pb-6">
                <span className="text-lg mb-2 font-semibold">JMD受付時間</span>
                <p>月～金 &nbsp;: 8:00 - 18:00</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;土&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                  9:00 - 12:00
                </p>
                <p>※日祝はお休み</p>
              </div>
              <div className="">
                <span className="text-lg mb-2 font-semibold">
                  JMD専用ライン
                </span>
                <div className="flex gap-2 items-center">
                  <div
                    className={` hover:text-white bg-white border border-blue-700 transition-all ease-in-out  drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                  >
                    <IoIosCall size={25} />
                  </div>
                  <div>
                    <div>+95-(0) 9-4513-20490 </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div
                    className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                  >
                    <MdMail size={25} />
                  </div>
                  <div>
                    <div>jmd-myanmar@blue-assistance.co.th</div>
                  </div>
                </div>
                {/* <div className="flex gap-2 items-center">
                  <div
                    className={` hover:text-white bg-white border  border-blue-700 transition-all ease-in-out drop-shadow-[0_0_2px_rgba(0,0,0,0.125)] focus:outline-none  hover:bg-[#3d5daa] focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 w-10 h-10 me-2 mb-2   flex items-center justify-center`}
                  >
                    <FaHospital size={25} />
                  </div>
                  <div>
                    <div>+95 1 937 6200</div>
                  </div>
                </div> */}
              </div>
              <div className="flex   py-6">
                <a
                  href="https://line.me/ti/p/~@jmd-mmr"
                  className="flex gap-1  items-center bg-[#3562AE] text-white py-2 px-2 rounded-lg hover:bg-[#FDBD59]  justify-center"
                >
                  <FaLine size={25} /> ADD LINE
                </a>
              </div>
              <div className="grid lg:grid-cols-12 gap-4">
                <div className="col-span-4 font-bold">病院情報：</div>
                <div className="col-span-8">
                  Grand Hantha International Hospital
                </div>
                <div className="col-span-4 font-bold">病院の住所：</div>
                <div className="col-span-8">
                  No (3), Corner of Nar Nat Taw Street and Kyee Myin Daing Kan
                  Nar Road, Kamaryut Township,Yangon
                </div>
                {/* <div className="col-span-4 font-bold">Reception Hours： </div>
              <div className="col-span-8">
                <p>General out-patient：8AM-8PM</p>
                <p>Night out-patient：8PM - 8AM</p>
                <p>Emergency Center: 24-hour Service</p>
              </div> */}
              </div>
              <div className="flex justify-start gap-1 mt-10">
                <a
                  href="https://grandhantha.com/"
                  className="flex gap-1 items-center bg-[#3562AE] text-white py-1 px-1 rounded-lg hover:bg-[#FDBD59]"
                >
                  <IoIosGlobe size={25} /> WEBSITE
                </a>
                <a
                  href="https://www.google.com/maps/place/Grand+Hantha+International+Hospital/@16.8212882,96.1231461,17z/data=!3m1!4b1!4m6!3m5!1s0x30c194cd2ca88cb9:0x452d8e755e6d807c!8m2!3d16.8212882!4d96.1231461!16s%2Fg%2F11f39p67vn?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D"
                  className="flex gap-1 items-center bg-[#3562AE] text-white py-1 px-1 rounded-lg hover:bg-[#FDBD59]"
                >
                  <SiGooglemaps size={25} />
                  GOOGLE MAP
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        <MainHeading
          text="ジャパニーズメディカルデスク（JMD）サービスが受けられる病院"
          heading="2"
        />

        <div className=" text-sm ">
          <FadeHeading text="Yangon / ヤンゴン" heading="2" />
          <ul className="list-disc pl-8">
            <li>
              <span className="font-bold text-blue-900 text-lg">
                Pun Hlaing Siloam Hospital
              </span>
              <br />

              <a href="https://maps.app.goo.gl/ojMstRW3iTXVBTNn7">
                Pun Hlaing Golf Estate Avenue, Hlaing Thayar Township, Yangon,
                Myanmar
              </a>
            </li>
            <li>
              <span className="font-bold text-blue-900 text-lg">
                Pun Hlaing Clinic - Taw Win
              </span>
              <br />

              <a href="https://maps.app.goo.gl/zV1xaGvz4uc44UXg7">
                No.238, Bogyoke Aung San Road, Botahtaung Township, Yangon,
                Myanmar
              </a>
            </li>
            <li>
              <span className="font-bold text-blue-900 text-lg">
                Pun Hlaing Star City Clinic
              </span>
              <br />

              <a href="https://maps.app.goo.gl/vQfWtXM2Rc1Q8PA17">
                Star City, Building A-5, Ground Floor Wing A, Thanlyin Township,
                Yangon, Myanmar
              </a>
            </li>
            <li>
              <span className="font-bold text-blue-900 text-lg">
                Pun Hlaing Clinic - North Dagon
              </span>
              <br />

              <a href="https://maps.app.goo.gl/a3bVxCxUXLGTRU716">
                No. 34, Bandoola Street, 45th District, North Dagon Township,
                Yangon, Myanmar
              </a>
            </li>
            <li>
              <span className="font-bold text-blue-900 text-lg">
                Asia Royal Hospital
              </span>
              <br />

              <a href="https://maps.app.goo.gl/cArZjM9FJHVMVtR1A">
                No. 14, Baho Street, Sanchaung Township, Yangon, Myanmar
              </a>
            </li>
            <li>
              <span className="font-bold text-blue-900 text-lg">
                Victoria Hospital
              </span>
              <br />

              <a href="https://maps.app.goo.gl/x7h9bHUgjZrLoWjg9">
                No.68, Taw Win Street, 9 mile, Mayangone Township, Yangon,
                Myanmar
              </a>
            </li>
            <li>
              <span className="font-bold text-blue-900 text-lg">
                OSC Hospital
              </span>
              <br />

              <a href="https://maps.app.goo.gl/CcWNJHwbr7vcLJM7A">
                137/D, Thudhamma Rd, North Okkalapa Township, Yangon, Myanmar
              </a>
            </li>
            <li>
              <span className="font-bold text-blue-900 text-lg">
                SSC – Shwe Gon Daing Hospital
              </span>
              <br />

              <a href="https://maps.app.goo.gl/Z7aM6osiFiLHd7ScA">
                7, East Shwegondaing Rd., Bahan.Tsp, Yangon, Myanmar
              </a>
            </li>
            <li>
              <span className="font-bold text-blue-900 text-lg">
                American Vision
              </span>
              <br />

              <a href="https://maps.app.goo.gl/B915DLmefSmdtSKm6">
                No. 397, Shwe Bon Thar St (Upper), Infront of Bogyoke Market,
                Pabedan Tsp, Yangon , Myanmar
              </a>
            </li>
            <li>
              <span className="font-bold text-blue-900 text-lg">
                ISEC Eye Centre Myanmar
              </span>
              <br />

              <a href="https://maps.app.goo.gl/L9JhKJJ9fLqW9b5y8">
                A5, MinYeKyawSwar Street, MinYeKyawSwar Business Building,
                Corner of St.John City Mall, Lanmadaw Township, Yangon,Myanmar
              </a>
            </li>
            <li>
              <span className="font-bold text-blue-900 text-lg">
                Chan Myae Myittar General Hospital
              </span>
              <br />

              <a href="https://maps.app.goo.gl/pAy76PUYYMTDqnpp8">
                No(53),. KyeikKhauk Pagoda Road,. ThautTawTwin Quarter,.
                Thanlyinn Township, Yangon
              </a>
            </li>
            <li>
              <span className="font-bold text-blue-900 text-lg">
                Parami General Hospital International Emergency Services
                (PARAMI)
              </span>
              <br />

              <a href="https://maps.app.goo.gl/6E8LgEtxq3FyMpec6">
                No.(60)(G-1),New Parami Road,Mayangone Township,Yangon,Myanmar
              </a>
            </li>
            <li>
              <span className="font-bold text-blue-900 text-lg">
                Bumrungrad Clinic Yangon
              </span>

              <br />
              <a href="https://maps.app.goo.gl/YTyPAUSNNRm13GK69">
                No.9, Ma Naw Hari St, Dagon Twonship, Yangon
              </a>
            </li>
          </ul>
          <FadeHeading text="Mandalay / マンダレー" heading="2" />
          <ul className="list-disc pl-8">
            <li>
              <span className="font-bold text-blue-900 text-lg">
                Mandalar Hospital
              </span>

              <br />
              <a href="https://maps.app.goo.gl/g7rgpxkDUcmjP9Md8">
                33rd street, between 68th & 69th street, Mandalay, Myanmar
              </a>
            </li>
            <li>
              <span className="font-bold text-blue-900 text-lg">
                Pun Hlaing Hospital Mandalay
              </span>

              <br />
              <a href="https://maps.app.goo.gl/KKW47vMmCrf3TDnA7">
                No.97, At the corner of 73 Street and 31A Street, Chan Aye
                Tharzan Township, Mandalay, Myanmar
              </a>
            </li>
          </ul>
          <FadeHeading text="Taunggyi / タウンジー" heading="2" />
          <ul className="list-disc pl-8">
            <li>
              <span className="font-bold text-blue-900 text-lg">
                Myat Taw Win Hospital
              </span>
              <br />
              No. 22, Kyant Khaing Yae St, Pyi Taw Thar Qtr, Taunggyi, Myanmar
              <br />
              <a href="https://maps.app.goo.gl/HocxroYmzeC25HUT9">
                https://maps.app.goo.gl/HocxroYmzeC25HUT9{" "}
              </a>
            </li>
            <li>
              <span className="font-bold text-blue-900 text-lg">
                Pun Hlaing Hospital Taungyi
              </span>

              <br />
              <a href="https://maps.app.goo.gl/zY6MUthBuS3wvsGz6">
                No.310, East Circular Street, Thit Taw Quarter, Taunggyi
                Township, Shan State, Myanmar
              </a>
            </li>
          </ul>
          <FadeHeading text="Naypidaw / ネピドー" heading="2" />
          <ul className="list-disc pl-8">
            <li>
              <span className="font-bold text-blue-900 text-lg">
                Bawga Theiddhi Hospital
              </span>
              <br />

              <a href="https://maps.app.goo.gl/rzmXdkcA5HKh8pYe8">
                Za-1/2, Ziwaka Shop Row, Thabyay Gone Market, Zabu
                Thiri.Naypyidaw
              </a>
            </li>
          </ul>
          <p className="mt-10 text-lg font-bold">
            上記以外にも、ヤンゴン市内、地方にてお手配が可能な医療機関がございます。
            <br />
            お気軽にお問い合わせください。
          </p>
        </div>
      </>
    </div>
  );
};
const ContentTH = () => {
  return <ContentEN />;
};
export default function Work({ params }: { params: { lng: string } }) {
  const lang = params?.lng;
  const t = useTranslations("header");
  const s = useTranslations("service-section");

  const content =
    lang == "jp" ? <ContentJP /> : lang == "en" ? <ContentEN /> : <ContentTH />;
  return (
    <>
      <div className="">
        <CoverVisa
          // @ts-ignore
          pageName={title[lang]}
          prevPage={{ pageName: t("home"), url: "/#location" }}
        />
        <div className="container mx-auto  ">
          <div className="grid grid-cols-1 gap-6 text-[#333333] font-medium">
            <div className="">
              <MainHeading
                text="Japanese Medical Desk (JMD) - Myanmar"
                heading="1"
              />
              {content}
            </div>
            <a
              href="https://line.me/ti/p/~@jmd-mmr"
              className="fixed right-10 bottom-22 w-20 h-20 border bg-[#3562AE] flex items-center justify-center rounded-full p-2 cursor-pointer text-white z-10 hover:scale-105 transition-all"
            >
              <SiLine size={30} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
