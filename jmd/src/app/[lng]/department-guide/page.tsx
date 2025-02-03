import CoverVisa from "@/components/website/layout/CoverVisa";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";
import MainHeading from "@/components/website/atom/heading/MainHeading";

const ContentEN = () => {
  return (
    <div className="grid grid-cols-1 gap-10 text-[#333333] font-medium mb-20">
      <div className="border-b-2 pb-15 border-[#DBDBDB]">
        <MainHeading text="Medical Department Guide" heading="1" />
        <div className="grid grid-cols-12 gap-5 py-10  text-slate-600 font-semibold">
          <Link
            href="/department-guide#internal-medicine"
            className="bg-[#FCFCFC] py-5 border rounded-3xl shadow-lg flex flex-col justify-center items-center gap-5 col-span-4 md:col-span-4"
          >
            <Image
              src={"/img/jmd/department-guide/internal-medicine.png"}
              alt=""
              width={67}
              height={67}
            ></Image>
            <p className="lg:text-xl text-sm md:text-base font-semibold text-center">
              Internal Medicine
            </p>
          </Link>
          <Link
            href="/department-guide#surgery"
            className="bg-[#FCFCFC] py-5 border rounded-3xl shadow-lg flex flex-col justify-center items-center gap-5  col-span-4 md:col-span-4"
          >
            <Image
              src={"/img/jmd/department-guide/surgery.png"}
              alt=""
              width={67}
              height={67}
            ></Image>
            <p className="lg:text-xl text-sm md:text-base font-semibold text-center">
              Surgery
            </p>
          </Link>
          <Link
            href="/department-guide#orthopedics"
            className="bg-[#FCFCFC] py-5 border rounded-3xl shadow-lg flex flex-col justify-center items-center gap-5  col-span-4 md:col-span-4"
          >
            <Image
              src={"/img/jmd/department-guide/orthopedics.png"}
              alt=""
              width={67}
              height={67}
            ></Image>
            <p className="lg:text-xl text-sm md:text-base font-semibold text-center">
              Orthopedics
            </p>
          </Link>
          <Link
            href="/department-guide#rehabilitation"
            className="bg-[#FCFCFC] py-5 border rounded-3xl shadow-lg flex flex-col justify-center items-center gap-5  col-span-4 md:col-span-4"
          >
            <Image
              src={"/img/jmd/department-guide/rehabilitation.png"}
              alt=""
              width={67}
              height={67}
            ></Image>
            <p className="lg:text-xl text-sm md:text-base font-semibold text-center">
              Rehabilitation
            </p>
          </Link>
          <Link
            href="/department-guide#ophthalmology"
            className="bg-[#FCFCFC] py-5 border rounded-3xl shadow-lg flex flex-col justify-center items-center gap-5  col-span-4 md:col-span-4"
          >
            <Image
              src={"/img/jmd/department-guide/ophthalmology.png"}
              alt=""
              width={67}
              height={67}
            ></Image>
            <p className="lg:text-xl text-sm md:text-base font-semibold text-center">
              Ophthalmology
            </p>
          </Link>
          <Link
            href="/department-guide#otolaryngology-ent"
            className="bg-[#FCFCFC] py-5 border rounded-3xl shadow-lg flex flex-col justify-center items-center gap-5  col-span-4 md:col-span-4"
          >
            <Image
              src={"/img/jmd/department-guide/otolaryngology-ent.png"}
              alt=""
              width={67}
              height={67}
            ></Image>
            <p className="lg:text-xl text-sm md:text-base font-semibold text-center">
              Otolaryngology (ENT)
            </p>
          </Link>
          <Link
            href="/department-guide#emergency-medicine"
            className="bg-[#FCFCFC] py-5 border rounded-3xl shadow-lg flex flex-col justify-center items-center gap-5  col-span-4 md:col-span-4"
          >
            <Image
              src={"/img/jmd/department-guide/emergency-medicine.png"}
              alt=""
              width={67}
              height={67}
            ></Image>
            <p className="lg:text-xl text-sm md:text-base font-semibold text-center">
              Emergency Medicine
            </p>
          </Link>
          <Link
            href="/department-guide#health-check-ups"
            className="bg-[#FCFCFC] py-5 border rounded-3xl shadow-lg flex flex-col justify-center items-center gap-5  col-span-4 md:col-span-4"
          >
            <Image
              src={"/img/jmd/department-guide/health-check-ups.png"}
              alt=""
              width={67}
              height={67}
            ></Image>
            <p className="lg:text-xl text-sm md:text-base font-semibold text-center">
              Health Check-ups
            </p>
          </Link>
          <Link
            href="/department-guide#other-information"
            className="bg-[#FCFCFC] py-5 border rounded-3xl shadow-lg flex flex-col justify-center items-center gap-5  col-span-4 md:col-span-4"
          >
            <Image
              src={"/img/jmd/department-guide/other-information.png"}
              alt=""
              width={67}
              height={67}
            ></Image>
            <p className="lg:text-xl text-sm md:text-base font-semibold text-center">
              Other Information
            </p>
          </Link>
        </div>
        <p className="text-md font-thin">
          Please note that the availability of each specialty and the scope of
          treatment may vary depending on the medical institution. For more
          details, please contact the Japanese Medical Desk (JMD) in each
          country.
        </p>
      </div>
      <div>
        <MainHeading
          text="Symptom-Based Medical Department Guide"
          heading="2"
        />
        <div id="internal-medicine" className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">Internal Medicine</h2>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">Symptoms: </span> Fever, cough, sore
              throat, stomach ache, abdominal pain, fatigue, dizziness, high
              blood pressure, diabetes management, etc.
            </p>
          </div>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">Care: </span> Internal Medicine deals
              with a wide range of symptoms including common colds, influenza,
              gastrointestinal issues, and chronic diseases. They may also
              provide initial care for skin inflammation, bloodshot eyes, or ear
              inflammation when specialist departments are unavailable.
            </p>
          </div>
        </div>
        <div id="surgery" className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">Surgery</h2>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">Symptoms: </span> Cuts, burns,
              fractures, conditions requiring surgery, skin tumors or growths,
              etc.
            </p>
          </div>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">Care: </span> Surgery department
              handles injuries and conditions requiring surgical intervention.
              This includes emergency procedures and post-operative care.
            </p>
          </div>
        </div>
        <div id="orthopedics" className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">Orthopedics</h2>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">Symptoms: </span> Joint pain, muscle
              pain, fractures, sprains, sports injuries, rheumatism, etc
            </p>
          </div>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">Care: </span> Orthopedics specializes
              in bone, joint, and muscle issues. They provide comprehensive
              support from diagnosis to treatment and rehabilitation.
            </p>
          </div>
        </div>
        <div id="rehabilitation" className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">Rehabilitation</h2>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">Symptoms: </span> Post-surgery
              recovery, chronic back pain or stiff shoulders, sports-related
              rehabilitation, etc.
            </p>
          </div>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">Care: </span> Rehabilitation
              department aims to restore and improve physical function, offering
              individualized rehab plans.
            </p>
          </div>
        </div>
        <div id="ophthalmology" className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">Ophthalmology</h2>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">Symptoms: </span> Vision loss, eye
              pain, blurred vision, conjunctivitis, cataracts, glaucoma, etc.
            </p>
          </div>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">Care: </span> Ophthalmology conducts
              eye examinations, eye health checks, and treats eye diseases.
            </p>
          </div>
        </div>
        <div id="ophthalmology-ent" className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">Otolaryngology (ENT)</h2>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">Symptoms: </span> Tinnitus, hearing
              loss, nasal congestion, sore throat, hay fever, tonsillitis, sleep
              apnea, etc.
            </p>
          </div>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">Care: </span> ENT specializes in ear,
              nose, and throat issues. They also diagnose and treat allergies.
            </p>
          </div>
        </div>
        <div id="emergency-medicine" className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">Emergency Medicine</h2>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">Symptoms: </span> Sudden injuries or
              accidents, acute chest pain, difficulty breathing, loss of
              consciousness, severe allergic reactions, poisoning, etc.
            </p>
          </div>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <div>
              <p className="font-thin">
                <span className="font-bold">Care: </span> Emergency Medicine
                responds quickly to life-threatening situations. They operate
                24/7, providing initial treatment and referrals to specialists.
              </p>
              <p className="font-thin">
                <span className="font-thin text-[#FF4E4E]">Note: </span>{" "}
                Emergency departments often provide temporary first aid, so you
                may need to follow up with a specialist the next day or during
                regular hours.
              </p>
            </div>
          </div>
        </div>
        <div id="health-check-ups" className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">Health Check-ups</h2>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">Symptoms: </span> Regular health
              checks, early disease detection, health status confirmation. Also
              conducted for license renewals or work permit renewals.
            </p>
          </div>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">Care: </span> Health check-ups involve
              comprehensive health evaluations through blood tests, urine tests,
              chest X-rays, ECGs, etc. Referrals to specialists are made as
              needed.
            </p>
          </div>
        </div>
        <div id="other-information" className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">Other Information</h2>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">Symptoms: </span> Regular health
              checks, early disease detection, health status confirmation. Also
              conducted for license renewals or work permit renewals.
            </p>
          </div>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">Care: </span> Health check-ups involve
              comprehensive health evaluations through blood tests, urine tests,
              chest X-rays, ECGs, etc. Referrals to specialists are made as
              needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContentJP = () => {
  return (
    <div className="grid grid-cols-1 gap-10 text-[#333333] font-medium mb-20 text-sm">
      <div className="border-b-2 pb-15 border-[rgb(219,219,219)]">
        <MainHeading text="診療科別ガイド" heading="1" />
        <div className="grid grid-cols-12 gap-5 py-10  text-slate-600 font-semibold">
          <Link
            href="/department-guide#internal-medicine"
            className="bg-[#FCFCFC] py-5 border rounded-3xl shadow-lg flex flex-col justify-center items-center gap-5 col-span-4 "
          >
            <Image
              src={"/img/jmd/department-guide/internal-medicine.png"}
              alt=""
              width={67}
              height={67}
            ></Image>
            <p className="lg:text-xl text-sm md:text-base font-semibold text-center">
              内科
            </p>
          </Link>
          <Link
            href="/department-guide#surgery"
            className="bg-[#FCFCFC] py-5 border rounded-3xl shadow-lg flex flex-col justify-center items-center gap-5  col-span-4 "
          >
            <Image
              src={"/img/jmd/department-guide/surgery.png"}
              alt=""
              width={67}
              height={67}
            ></Image>
            <p className="lg:text-xl text-sm md:text-base font-semibold text-center">
              外科
            </p>
          </Link>
          <Link
            href="/department-guide#orthopedics"
            className="bg-[#FCFCFC] py-5 border rounded-3xl shadow-lg flex flex-col justify-center items-center gap-5  col-span-4 "
          >
            <Image
              src={"/img/jmd/department-guide/orthopedics.png"}
              alt=""
              width={67}
              height={67}
            ></Image>
            <p className="lg:text-xl text-sm md:text-base font-semibold text-center">
              整形外科
            </p>
          </Link>
          <Link
            href="/department-guide#rehabilitation"
            className="bg-[#FCFCFC] py-5 border rounded-3xl shadow-lg flex flex-col justify-center items-center gap-5  col-span-4 "
          >
            <Image
              src={"/img/jmd/department-guide/rehabilitation.png"}
              alt=""
              width={67}
              height={67}
            ></Image>
            <p className="lg:text-xl text-sm md:text-base font-semibold text-center">
              リハビリテーション
            </p>
          </Link>
          <Link
            href="/department-guide#ophthalmology"
            className="bg-[#FCFCFC] py-5 border rounded-3xl shadow-lg flex flex-col justify-center items-center gap-5  col-span-4 "
          >
            <Image
              src={"/img/jmd/department-guide/ophthalmology.png"}
              alt=""
              width={67}
              height={67}
            ></Image>
            <p className="lg:text-xl text-sm md:text-base font-semibold text-center">
              眼科
            </p>
          </Link>
          <Link
            href="/department-guide#otolaryngology-ent"
            className="bg-[#FCFCFC] py-5 border rounded-3xl shadow-lg flex flex-col justify-center items-center gap-5  col-span-4 "
          >
            <Image
              src={"/img/jmd/department-guide/otolaryngology-ent.png"}
              alt=""
              width={67}
              height={67}
            ></Image>
            <p className="lg:text-xl text-sm md:text-base font-semibold text-center">
              耳鼻咽喉科
            </p>
          </Link>
          <Link
            href="/department-guide#emergency-medicine"
            className="bg-[#FCFCFC] py-5 border rounded-3xl shadow-lg flex flex-col justify-center items-center gap-5  col-span-4 "
          >
            <Image
              src={"/img/jmd/department-guide/emergency-medicine.png"}
              alt=""
              width={67}
              height={67}
            ></Image>
            <p className="lg:text-xl text-sm md:text-base font-semibold text-center">
              救急医療
            </p>
          </Link>
          <Link
            href="/department-guide#health-check-ups"
            className="bg-[#FCFCFC] py-5 border rounded-3xl shadow-lg flex flex-col justify-center items-center gap-5  col-span-4 "
          >
            <Image
              src={"/img/jmd/department-guide/health-check-ups.png"}
              alt=""
              width={67}
              height={67}
            ></Image>
            <p className="lg:text-xl text-sm md:text-base font-semibold text-center">
              健康診断
            </p>
          </Link>
          <Link
            href="/department-guide#other-information"
            className="bg-[#FCFCFC] py-5 border rounded-3xl shadow-lg flex flex-col justify-center items-center gap-5  col-span-4 "
          >
            <Image
              src={"/img/jmd/department-guide/other-information.png"}
              alt=""
              width={67}
              height={67}
            ></Image>
            <p className="lg:text-xl text-sm md:text-base font-semibold text-center">
              その他の情報
            </p>
          </Link>
        </div>
        <p className="text-md font-thin">
          各専門科の利用可能性や治療範囲は、医療機関によって異なる場合があります。詳細については、各国の日本医療デスク（JMD）にお問い合わせください。
        </p>
      </div>
      <div>
        <MainHeading text="診療科別ガイド" heading="2" />
        <div id="internal-medicine" className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">内科</h2>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">症状: </span>{" "}
              発熱、咳、のどの痛み、胃痛、腹痛、疲労感、めまい、高血
              圧、糖尿病の管理など。
            </p>
          </div>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">対応: </span>{" "}
              一般的な風邪やインフルエンザ、胃腸のトラブル、
              慢性疾患など幅広い症状に対応します。予防接種も行っています。
            </p>
          </div>
        </div>
        <div id="surgery" className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">外科</h2>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">症状: </span>{" "}
              切り傷、やけど、骨折、手術が必要な状態、皮膚の腫瘍やでき
              ものなど。
            </p>
          </div>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">対応: </span>{" "}
              外傷や手術が必要な病状に対応します。緊急処置や
              術後のケアも含まれます。
            </p>
          </div>
        </div>
        <div id="orthopedics" className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">整形外科</h2>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">症状: </span>{" "}
              関節痛、筋肉痛、骨折、捻挫、スポーツ障害、リウマチなど。
            </p>
          </div>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">対応: </span>{" "}
              骨や関節、筋肉のトラブルに特化しています。診
              断から治療、リハビリまで包括的にサポートします。
            </p>
          </div>
        </div>
        <div id="rehabilitation" className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">リハビリテーション科</h2>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">症状: </span>
              手術後の回復、慢性的な腰痛や肩こり、スポーツ後のリハビリ
            </p>
          </div>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">対応: </span>{" "}
              身体機能の回復や改善を目指し、
              個々の状態に応じたリハビリプランを提供します。
            </p>
          </div>
        </div>
        <div id="ophthalmology" className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">眼科</h2>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">症状: </span>{" "}
              視力低下、目の痛み、かすみ目、結膜炎、白内障、緑内障な ど。
            </p>
          </div>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">対応: </span>{" "}
              視力検査や目の健康診断、目の病気の治療を行いま す。
            </p>
          </div>
        </div>
        <div id="ophthalmology-ent" className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">耳鼻咽喉科</h2>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">症状: </span>{" "}
              耳鳴り、難聴、鼻づまり、のどの痛み、花粉症、扁桃炎など。
            </p>
          </div>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">対応: </span>{" "}
              耳、鼻、のどのトラブルに特化しています。アレルギーの診断や治療も行って
              います。
            </p>
          </div>
        </div>
        <div id="emergency-medicine" className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">救急科</h2>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">症状: </span>{" "}
              夜間に発症した病気や、急な怪我や事故、急性の胸痛、呼吸困難、意識喪失、重篤なアレルギ
              一反応、中毒など。
            </p>
          </div>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <div>
              <p className="font-thin">
                <span className="font-bold">対応: </span>{" "}
                生命の危険がある緊急事態に迅速に対応します。24時間体制で、初期治療から専
                門医への引き継ぎまでを行います。
              </p>
              <p className="font-thin">
                <span className="font-thin text-[#FF4E4E]">注意: </span>{" "}
                救急外来では一時的な応急処置を実施することも多いため、翌日あるいは日中などに専門医
                による再診をしていただく場合もございます。
              </p>
            </div>
          </div>
        </div>
        <div id="health-check-ups" className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">健康診断</h2>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">症状: </span>{" "}
              定期的な健康チェック、病気の早期発見、健康状態の確認。免許の更新や、労働許可証の更新のための健康診断も行います。
            </p>
          </div>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin">
              <span className="font-bold">対応: </span>{" "}
              血液検査や尿検査、胸部レントゲン、心電図などを通じて総合的に健康状態を評価します。必要に応じて各専門医への紹介も行います。
            </p>
          </div>
        </div>
        <div id="other-information" className="mt-10 flex flex-col gap-2">
          <h2 className="text-2xl">その他</h2>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin text-red-800">
              専門医の医師が不在、もしくは診察日でない場合は、まずは内科や外科等の対応可能な意思にて診察と処方を行います。その後、必要に応じて専門医の予約をお取りしています。
            </p>
          </div>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin text-red-800">
              各専門診療科の有無、治療内容については各医療機関にて異なりますため、
            </p>
          </div>
          <div className="flex gap-2">
            <Image
              className="object-contain object-top"
              src={"/img/jmd/department-guide/icon-guide.png"}
              alt="Internall Medicine"
              width={25}
              height={25}
            />
            <p className="font-thin text-red-800">
              詳しくは各国のジャパニーズメディカルデスク（JMD）へお問い合わせください。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
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
