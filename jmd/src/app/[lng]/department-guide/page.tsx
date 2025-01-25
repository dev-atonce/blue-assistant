import MainHeading from "@/components/website/atom/heading/MainHeading";
import Cover from "@/components/website/layout/Cover";
import CoverVisa from "@/components/website/layout/CoverVisa";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ContentEN = () => {
  return (
    <div className="grid grid-cols-1 gap-10 text-[#333333] font-medium mb-20">
      <div className="border-b-2 pb-15 border-[#DBDBDB]">
        <h1 className="mt-20 text-[48px] text-[#3562AE]">Medical Department Guide</h1>
        <div className="grid grid-cols-12 gap-5 py-20  text-slate-600 font-semibold">
          <Link
            href="/department-guide#internal-medicine"
            className="bg-[#FCFCFC] py-5 border rounded-3xl shadow-lg flex flex-col justify-center items-center gap-5 col-span-6 md:col-span-4"
          >
            <Image
              src={"/img/jmd/department-guide/internal-medicine.png"}
              alt=""
              width={67}
              height={67}
            ></Image>
            <p className="lg:text-xl text-lg font-semibold text-center">
              Internal Medicine
            </p>
          </Link>
          <Link
            href="/department-guide#surgery"
            className="bg-[#FCFCFC] py-5 border rounded-3xl shadow-lg flex flex-col justify-center items-center gap-5  col-span-6 md:col-span-4"
          >
            <Image
              src={"/img/jmd/department-guide/surgery.png"}
              alt=""
              width={67}
              height={67}
            ></Image>
            <p className="lg:text-xl text-lg font-semibold text-center">
              Surgery
            </p>
          </Link>
          <Link
            href="/department-guide#orthopedics"
            className="bg-[#FCFCFC] py-5 border rounded-3xl shadow-lg flex flex-col justify-center items-center gap-5  col-span-6 md:col-span-4"
          >
            <Image
              src={"/img/jmd/department-guide/orthopedics.png"}
              alt=""
              width={67}
              height={67}
            ></Image>
            <p className="lg:text-xl text-lg font-semibold text-center">
              Orthopedics
            </p>
          </Link>
          <Link
            href="/department-guide#rehabilitation"
            className="bg-[#FCFCFC] py-5 border rounded-3xl shadow-lg flex flex-col justify-center items-center gap-5  col-span-6 md:col-span-4"
          >
            <Image
              src={"/img/jmd/department-guide/rehabilitation.png"}
              alt=""
              width={67}
              height={67}
            ></Image>
            <p className="lg:text-xl text-lg font-semibold text-center">
              Rehabilitation
            </p>
          </Link>
          <Link
            href="/department-guide#ophthalmology"
            className="bg-[#FCFCFC] py-5 border rounded-3xl shadow-lg flex flex-col justify-center items-center gap-5  col-span-6 md:col-span-4"
          >
            <Image
              src={"/img/jmd/department-guide/ophthalmology.png"}
              alt=""
              width={67}
              height={67}
            ></Image>
            <p className="lg:text-xl text-lg font-semibold text-center">
              Ophthalmology
            </p>
          </Link>
          <Link
            href="/department-guide#otolaryngology-ent"
            className="bg-[#FCFCFC] py-5 border rounded-3xl shadow-lg flex flex-col justify-center items-center gap-5  col-span-6 md:col-span-4"
          >
            <Image
              src={"/img/jmd/department-guide/otolaryngology-ent.png"}
              alt=""
              width={67}
              height={67}
            ></Image>
            <p className="lg:text-xl text-lg font-semibold text-center">
              Otolaryngology (ENT)
            </p>
          </Link>
          <Link
            href="/department-guide#emergency-medicine"
            className="bg-[#FCFCFC] py-5 border rounded-3xl shadow-lg flex flex-col justify-center items-center gap-5  col-span-6 md:col-span-4"
          >
            <Image
              src={"/img/jmd/department-guide/emergency-medicine.png"}
              alt=""
              width={67}
              height={67}
            ></Image>
            <p className="lg:text-xl text-lg font-semibold text-center">
              Emergency Medicine
            </p>
          </Link>
          <Link
            href="/department-guide#health-check-ups"
            className="bg-[#FCFCFC] py-5 border rounded-3xl shadow-lg flex flex-col justify-center items-center gap-5  col-span-6 md:col-span-4"
          >
            <Image
              src={"/img/jmd/department-guide/health-check-ups.png"}
              alt=""
              width={67}
              height={67}
            ></Image>
            <p className="lg:text-xl text-lg font-semibold text-center">
              Health Check-ups
            </p>
          </Link>
          <Link
            href="/department-guide#other-information"
            className="bg-[#FCFCFC] py-5 border rounded-3xl shadow-lg flex flex-col justify-center items-center gap-5  col-span-6 md:col-span-4"
          >
            <Image
              src={"/img/jmd/department-guide/other-information.png"}
              alt=""
              width={67}
              height={67}
            ></Image>
            <p className="lg:text-xl text-lg font-semibold text-center">
              Other Information
            </p>
          </Link>
        </div>
        <p className="text-md font-thin">Please note that the availability of each specialty and the scope of treatment may vary depending on the medical institution. For more details, please contact the Japanese Medical Desk (JMD) in each country.</p>
      </div>
      <div className="gap-10">
        <h1 className="text-[48px] text-[#3562AE]">Symptom-Based Medical Department Guide</h1>
        <div id="internal-medicine" className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">Internal Medicine</h2>
          <div className="flex gap-2">
            <Image className="object-contain object-top" src={"/img/jmd/department-guide/icon-guide.png"} alt="Internall Medicine" width={25} height={25} />
            <p className="font-thin"><span className="font-bold">Symptoms: </span> Fever, cough, sore throat, stomach ache, abdominal pain, fatigue, dizziness, high blood pressure, diabetes management, etc.</p>
          </div>
          <div className="flex gap-2">
            <Image className="object-contain object-top" src={"/img/jmd/department-guide/icon-guide.png"} alt="Internall Medicine" width={25} height={25} />
            <p className="font-thin"><span className="font-bold">Care: </span> Internal Medicine deals with a wide range of symptoms including common colds, influenza, gastrointestinal issues, and chronic diseases. They may also provide initial care for skin inflammation, bloodshot eyes, or ear inflammation when specialist departments are unavailable.
            </p>
          </div>
        </div>
        <div id="surgery" className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">Surgery</h2>
          <div className="flex gap-2">
            <Image className="object-contain object-top" src={"/img/jmd/department-guide/icon-guide.png"} alt="Internall Medicine" width={25} height={25} />
            <p className="font-thin"><span className="font-bold">Symptoms: </span> Cuts, burns, fractures, conditions requiring surgery, skin tumors or growths, etc.</p>
          </div>
          <div className="flex gap-2">
            <Image className="object-contain object-top" src={"/img/jmd/department-guide/icon-guide.png"} alt="Internall Medicine" width={25} height={25} />
            <p className="font-thin"><span className="font-bold">Care: </span> Surgery department handles injuries and conditions requiring surgical intervention. This includes emergency procedures and post-operative care.</p>
          </div>
        </div>
        <div id="orthopedics" className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">Orthopedics</h2>
          <div className="flex gap-2">
            <Image className="object-contain object-top" src={"/img/jmd/department-guide/icon-guide.png"} alt="Internall Medicine" width={25} height={25} />
            <p className="font-thin"><span className="font-bold">Symptoms: </span> Joint pain, muscle pain, fractures, sprains, sports injuries, rheumatism, etc</p>
          </div>
          <div className="flex gap-2">
            <Image className="object-contain object-top" src={"/img/jmd/department-guide/icon-guide.png"} alt="Internall Medicine" width={25} height={25} />
            <p className="font-thin"><span className="font-bold">Care: </span> Orthopedics specializes in bone, joint, and muscle issues. They provide comprehensive support from diagnosis to treatment and rehabilitation.</p>
          </div>
        </div>
        <div id="rehabilitation" className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">Rehabilitation</h2>
          <div className="flex gap-2">
            <Image className="object-contain object-top" src={"/img/jmd/department-guide/icon-guide.png"} alt="Internall Medicine" width={25} height={25} />
            <p className="font-thin"><span className="font-bold">Symptoms: </span> Post-surgery recovery, chronic back pain or stiff shoulders, sports-related rehabilitation, etc.</p>
          </div>
          <div className="flex gap-2">
            <Image className="object-contain object-top" src={"/img/jmd/department-guide/icon-guide.png"} alt="Internall Medicine" width={25} height={25} />
            <p className="font-thin"><span className="font-bold">Care: </span> Rehabilitation department aims to restore and improve physical function, offering individualized rehab plans.</p>
          </div>
        </div>
        <div id="ophthalmology" className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">Ophthalmology</h2>
          <div className="flex gap-2">
            <Image className="object-contain object-top" src={"/img/jmd/department-guide/icon-guide.png"} alt="Internall Medicine" width={25} height={25} />
            <p className="font-thin"><span className="font-bold">Symptoms: </span> Vision loss, eye pain, blurred vision, conjunctivitis, cataracts, glaucoma, etc.</p>
          </div>
          <div className="flex gap-2">
            <Image className="object-contain object-top" src={"/img/jmd/department-guide/icon-guide.png"} alt="Internall Medicine" width={25} height={25} />
            <p className="font-thin"><span className="font-bold">Care: </span> Ophthalmology conducts eye examinations, eye health checks, and treats eye diseases.</p>
          </div>
        </div>
        <div id="ophthalmology-ent" className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">Otolaryngology (ENT)</h2>
          <div className="flex gap-2">
            <Image className="object-contain object-top" src={"/img/jmd/department-guide/icon-guide.png"} alt="Internall Medicine" width={25} height={25} />
            <p className="font-thin"><span className="font-bold">Symptoms: </span> Tinnitus, hearing loss, nasal congestion, sore throat, hay fever, tonsillitis, sleep apnea, etc.</p>
          </div>
          <div className="flex gap-2">
            <Image className="object-contain object-top" src={"/img/jmd/department-guide/icon-guide.png"} alt="Internall Medicine" width={25} height={25} />
            <p className="font-thin"><span className="font-bold">Care: </span> ENT specializes in ear, nose, and throat issues. They also diagnose and treat allergies.</p>
          </div>
        </div>
        <div id="emergency-medicine" className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">Emergency Medicine</h2>
          <div className="flex gap-2">
            <Image className="object-contain object-top" src={"/img/jmd/department-guide/icon-guide.png"} alt="Internall Medicine" width={25} height={25} />
            <p className="font-thin"><span className="font-bold">Symptoms: </span> Sudden injuries or accidents, acute chest pain, difficulty breathing, loss of consciousness, severe allergic reactions, poisoning, etc.</p>
          </div>
          <div className="flex gap-2">
            <Image className="object-contain object-top" src={"/img/jmd/department-guide/icon-guide.png"} alt="Internall Medicine" width={25} height={25} />
            <p className="font-thin"><span className="font-bold">Care: </span> Emergency Medicine responds quickly to life-threatening situations. They operate 24/7, providing initial treatment and referrals to specialists.</p>

          </div>
        </div>
        <div id="health-check-ups" className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">Health Check-ups</h2>
          <div className="flex gap-2">
            <Image className="object-contain object-top" src={"/img/jmd/department-guide/icon-guide.png"} alt="Internall Medicine" width={25} height={25} />
            <p className="font-thin"><span className="font-bold">Symptoms: </span> Regular health checks, early disease detection, health status confirmation. Also conducted for license renewals or work permit renewals.</p>
          </div>
          <div className="flex gap-2">
            <Image className="object-contain object-top" src={"/img/jmd/department-guide/icon-guide.png"} alt="Internall Medicine" width={25} height={25} />
            <p className="font-thin"><span className="font-bold">Care: </span> Health check-ups involve comprehensive health evaluations through blood tests, urine tests, chest X-rays, ECGs, etc. Referrals to specialists are made as needed.</p>
          </div>
        </div>
        <div id="other-information" className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">Other Information</h2>
          <div className="flex gap-2">
            <Image className="object-contain object-top" src={"/img/jmd/department-guide/icon-guide.png"} alt="Internall Medicine" width={25} height={25} />
            <p className="font-thin"><span className="font-bold">Symptoms: </span> Regular health checks, early disease detection, health status confirmation. Also conducted for license renewals or work permit renewals.</p>
          </div>
          <div className="flex gap-2">
            <Image className="object-contain object-top" src={"/img/jmd/department-guide/icon-guide.png"} alt="Internall Medicine" width={25} height={25} />
            <p className="font-thin"><span className="font-bold">Care: </span> Health check-ups involve comprehensive health evaluations through blood tests, urine tests, chest X-rays, ECGs, etc. Referrals to specialists are made as needed.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContentJP = () => {
  return <ContentEN />;
};

const ContentTH = () => {
  return <ContentEN />;
};

export default function Price({ params }: { params: { lng: string } }) {
  const t = useTranslations("header");
  const lang = params.lng;
  const title = {
    th: "อัตราค่าบริการ",
    jp: "代行サービス料金一覧",
    en: "Service Fee",
  };

  const content =
    lang == "jp" ? <ContentJP /> : lang == "en" ? <ContentEN /> : <ContentTH />;
  return (
    <>
      <div className="">
        <CoverVisa
          // @ts-ignore
          pageName={t("dep-guide")}
          prevPage={{ pageName: t("home"), url: "/" }}
        />
        <div className="container mx-auto ">{content}</div>
      </div>
    </>
  );
}
