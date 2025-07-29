import ContactSection from "@/components/website/layout/ContactSection";
import Cover from "@/components/website/layout/Cover";
import NewsSection from "@/components/website/layout/NewsSection";
import OtherSection from "@/components/website/layout/OtherSection";
import ServiceSection from "@/components/website/layout/ServiceSection";
import StrongServiceSection from "@/components/website/layout/StrongServiceSection";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutJP = () => {
  return (
    <div className="relative">
        <div className="container  mx-auto mt-20">
          {/* <img className="absolute" src="/img/our-business-bg.png" alt="" /> */}
          <div className="grid grid-cols-1">
            <div className="flex items-center justify-center">
              <h3
                id="our-business"
                className="font-bold text-4xl text-center relative flex items-center justify-center mb-14"
              >
                <div className=" text-[#3562AE] border-b-4 border-orange-400 w-fit pb-4">
                  医療アシスタンス業務
                </div>
                {/* <div className="border-b-4 border-orange-200 w-[100px] absolute bottom-0 mt-4"></div> */}
              </h3>
            </div>
          </div>
          <div className="bg-[#EDF4FF] text-[#3562AE] rounded-2xl shadow-xl py-10 px-2 md:px-20 font-semibold">
            <ul>
              <li>
                - タイと周辺地域における医療機関へのキャッシュレス手配代行
              </li>
              <li>- 日本人スタッフによるアテンド (患者様ご本人、ご家族など)</li>
              <li>- 緊急搬送の代理手配 (医療機関、搬送会社との連携)</li>
              <li>- 帰国搬送の代理手配 (医療機関や企業様経由)</li>
              <li>
                - ご遺体搬送の手配 (大使館/葬儀会社/クーリエ会社など一括手配)
              </li>
              <li>- クレームドキュメントのコレクションと処理手続き</li>
              <li>
                - 各必要書類（医療機関や官公庁発行書類など）の取り付け及び翻訳
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#EDF4FF] py-20 mt-10">
          <div className="container mx-auto grid grid-cols-10 text-[#3562AE] font-semibold gap-2 xl:px-20 ">
            <div className="bg-[#B7D2FF] col-span-10 sm:col-span-5 lg:col-span-2 rounded-[100%] w-[240px] h-[240px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px] flex flex-col items-center mx-auto ">
              <div className="h-[50%] flex items-end">
                <Image
                  src="/img/med-as/2-1.png"
                  alt="icon"
                  width="70"
                  height="70"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <span>医療通訳</span>
                <span>サービス</span>
              </div>
            </div>
            <div className="bg-[#B7D2FF] col-span-10 sm:col-span-5 mx-auto lg:col-span-2 rounded-[100%]  w-[240px] h-[240px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px] flex flex-col items-center  ">
              <div className="h-[50%] flex items-end ">
                <Image
                  src="/img/med-as/2-2.png"
                  alt="icon"
                  width="70"
                  height="70"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <span>治療費</span>
                <span>キャッシュレス</span>
                <span>サービス</span>
              </div>
            </div>
            <div className="bg-[#B7D2FF] col-span-10 sm:col-span-5 mx-auto lg:col-span-2 rounded-[100%] w-[240px] h-[240px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px]   flex flex-col items-center  ">
              <div className="h-[50%] flex items-end ">
                <Image
                  src="/img/med-as/2-3.png"
                  alt="icon"
                  width="70"
                  height="70"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <span>緊急医療搬送</span>
                <span>手続き代行</span>
              </div>
            </div>
            <div className="bg-[#B7D2FF] col-span-10 sm:col-span-5 mx-auto lg:col-span-2 rounded-[100%]  w-[240px] h-[240px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px]   flex flex-col items-center  ">
              <div className="h-[50%] flex items-end ">
                <Image
                  src="/img/med-as/2-4.png"
                  alt="icon"
                  width="70"
                  height="70"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <span>ご遺体搬送</span>
              </div>
            </div>
            {/* to do link */}
            <a
              // href="https://jmd.oncewebdesign.com/jp"
              href="https://jmd.blue-assistance.co.th"
              className="bg-[#B7D2FF] col-span-10 sm:col-span-5 mx-auto lg:col-span-2 rounded-[100%]  w-[240px] h-[240px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px]  flex flex-col items-center  "
            >
              <div className="h-[50%] flex items-end ">
                <Image
                  src="/img/med-as/2-5.png"
                  alt="icon"
                  width="70"
                  height="70"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <span>ジャパニーズ</span>
                <span>メディカル</span>
                <span>デスク(JMD)</span>
              </div>
            </a>
          </div>
        </div>
        <div className="container  mx-auto mt-20 text-[#3562AE]">
          {/* <img className="absolute" src="/img/our-business-bg.png" alt="" /> */}
          <div className="grid grid-cols-1">
            <div className="flex items-center justify-start">
              <h3
                id="our-business"
                className="font-bold text-4xl text-center relative flex items-center justify-center mb-14"
              >
                <div className=" text-[#3562AE] border-b-4 border-orange-400 w-fit pb-4">
                  業務実例
                </div>
                {/* <div className="border-b-4 border-orange-200 w-[100px] absolute bottom-0 mt-4"></div> */}
              </h3>
            </div>
          </div>
          <p className="text-lg font-bold">●緊急搬送</p>
          <p>
            　タイから搬送チームを派遣し、東南アジアからタイへの搬送手配が可能です。
            <br />
            　またタイ・近隣諸国から日本への搬送手配も行っております。
            <br />
            　※弊社が患者様・ご家族様に代わり保険会社や医療機関、各関係機関との調整や各種手配を行います。
          </p>
          <div className="mt-10 bg-[#EDF4FF] text-[#3562AE] rounded-2xl shadow-xl py-10 px-2  md:px-20 ">
            <h3 className="text-lg font-bold">商用機での搬送ケース</h3>
            <ul className="list-disc pl-8">
              <li>ダッカからバンコクへの医療搬送（ストレッチャー移送）</li>
              <li>ヤンゴンからバンコクへの医療搬送（ナースエスコート付き）</li>
              <li>バンコク、チェンマイ、プーケット間の医療搬送</li>
              <li>バンコクから日本への医療搬送</li>
            </ul>
          </div>
          <div className="mt-10 bg-[#EDF4FF] text-[#3562AE] rounded-2xl shadow-xl py-10 px-2 md:px-20 ">
            <h3 className="text-lg font-bold">チャーター機での搬送ケース</h3>
            <ul className="list-disc pl-8">
              <li>ネピドーからバンコクへのチャーター機搬送</li>
              <li>ヤンゴンからバンコクへのチャーター機搬送</li>
              <li>プノンペンからバンコクへのチャター機搬送</li>
              <li>ダッカからのチャター機搬送</li>
              <li>チェンライから成田へのチャーター機搬送</li>
            </ul>
          </div>
          <p className="text-lg font-bold my-10">●ご遺体搬送</p>
          <p className="font-bold">
            対応可能地域：タイ、ミャンマー、ラオス、カンボジア、ベトナム
          </p>
          <ul className="list-disc pl-8">
            <li>
              現地の手配会社や大使館、保険会社と連携し、ご遺体搬送や火葬の手配を行います
            </li>
            <li>
              弊社日本人スタッフが、ご遺族様に寄り添ったきめ細かなアテンドサービスを
              行っております　
            </li>
          </ul>
          <p>
            ※現在、日本人によるアテンドは、タイ、ミャンマー、ラオスのみ対応しております。
          </p>
        </div>
        <div className="bg-[#EDF4FF] py-20 mt-10">
          <div className="container mx-auto grid grid-cols-12 text-[#3562AE] font-semibold gap-3  ">
            <div className="col-span-12 sm:col-span-4">
              <Image
                src="/img/med-as/4.png"
                alt="icon"
                width="400"
                height="400"
                className="w-full"
              />
            </div>
            <div className="col-span-12 sm:col-span-4">
              <Image
                src="/img/med-as/2.png"
                alt="icon"
                width="400"
                height="400"
                className="w-full"
              />
            </div>
            <div className="col-span-12 sm:col-span-4">
              <Image
                src="/img/med-as/3.png"
                alt="icon"
                width="400"
                height="400"
                className="w-full"
              />
            </div>
          </div>
        </div>

        <ContactSection medical={true} home={true} />
      </div>
  );
}

const AboutEN = () => {
  return (
    <div className="relative">
        <div className="container  mx-auto mt-20">
          {/* <img className="absolute" src="/img/our-business-bg.png" alt="" /> */}
          <div className="grid grid-cols-1">
            <div className="flex items-center justify-center">
              <h3
                id="our-business"
                className="font-bold text-4xl text-center relative flex items-center justify-center mb-14"
              >
                <div className=" text-[#3562AE] border-b-4 border-orange-400 w-fit pb-4">
                  Medical Assistance Service
                </div>
                {/* <div className="border-b-4 border-orange-200 w-[100px] absolute bottom-0 mt-4"></div> */}
              </h3>
            </div>
          </div>
          <div className="bg-[#EDF4FF] text-[#3562AE] rounded-2xl shadow-xl py-10 px-2 md:px-20 font-semibold">
            <ul>
              <li>
                - Cashless medical billing support in Thailand and abroad.
              </li>
              <li>- Japanese-speaking staff to assist patients and families.</li>
              <li>- Emergency medical transport coordination.</li>
              <li>- Repatriation arrangements via hospitals or companies.</li>
              <li>
                - Remains transport support (embassies, funeral homes, etc.)
              </li>
              <li>- Insurance claim document handling.</li>
              <li>
                - Translation and arrangement of medical or official documents.
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#EDF4FF] py-20 mt-10">
          <div className="container mx-auto grid grid-cols-10 text-[#3562AE] font-semibold gap-2 xl:px-20 ">
            <div className="bg-[#B7D2FF] col-span-10 sm:col-span-5 lg:col-span-2 rounded-[100%] w-[240px] h-[240px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px] flex flex-col items-center mx-auto ">
              <div className="h-[50%] flex items-end">
                <Image
                  src="/img/med-as/2-1.png"
                  alt="icon"
                  width="70"
                  height="70"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <span>Medical Interpretation</span>
                <span>Service</span>
              </div>
            </div>
            <div className="bg-[#B7D2FF] col-span-10 sm:col-span-5 mx-auto lg:col-span-2 rounded-[100%]  w-[240px] h-[240px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px] flex flex-col items-center  ">
              <div className="h-[50%] flex items-end ">
                <Image
                  src="/img/med-as/2-2.png"
                  alt="icon"
                  width="70"
                  height="70"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <span>Cashless Medical</span>
                <span>Payment Service</span>
              </div>
            </div>
            <div className="bg-[#B7D2FF] col-span-10 sm:col-span-5 mx-auto lg:col-span-2 rounded-[100%] w-[240px] h-[240px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px]   flex flex-col items-center  ">
              <div className="h-[50%] flex items-end ">
                <Image
                  src="/img/med-as/2-3.png"
                  alt="icon"
                  width="70"
                  height="70"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <span>Emergency Medical</span>
                <span>Transport Coordination</span>
              </div>
            </div>
            <div className="bg-[#B7D2FF] col-span-10 sm:col-span-5 mx-auto lg:col-span-2 rounded-[100%]  w-[240px] h-[240px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px]   flex flex-col items-center  ">
              <div className="h-[50%] flex items-end ">
                <Image
                  src="/img/med-as/2-4.png"
                  alt="icon"
                  width="70"
                  height="70"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <span>Repatriation</span>
                <span>of Remains</span>
              </div>
            </div>
            <a
              // href="https://jmd.oncewebdesign.com/jp"
              href="https://jmd.blue-assistance.co.th"
              className="bg-[#B7D2FF] col-span-10 sm:col-span-5 mx-auto lg:col-span-2 rounded-[100%]  w-[240px] h-[240px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px]  flex flex-col items-center  "
            >
              <div className="h-[50%] flex items-end ">
                <Image
                  src="/img/med-as/2-5.png"
                  alt="icon"
                  width="70"
                  height="70"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <span>Japanese Medical</span>
                <span>Desk(JMD)</span>
              </div>
            </a>
          </div>
        </div>
        <div className="container  mx-auto mt-20 text-[#3562AE]">
          {/* <img className="absolute" src="/img/our-business-bg.png" alt="" /> */}
          <div className="grid grid-cols-1">
            <div className="flex items-center justify-start">
              <h3
                id="our-business"
                className="font-bold text-4xl text-center relative flex items-center justify-center mb-14"
              >
                <div className=" text-[#3562AE] border-b-4 border-orange-400 w-fit pb-4">
                  Case Example
                </div>
                {/* <div className="border-b-4 border-orange-200 w-[100px] absolute bottom-0 mt-4"></div> */}
              </h3>
            </div>
          </div>
          <p className="text-lg font-bold">●Emergency Medical Transport</p>
          <p>
            　We dispatch transport teams from Thailand and can arrange medical transfers from Southeast Asia to Thailand.
            <br />
            　We also coordinate transfers from Thailand and nearby countries to Japan.
            <br />
            　※We coordinate with insurers, hospitals, and related parties on behalf of patients and families.
          </p>
          <div className="mt-10 bg-[#EDF4FF] text-[#3562AE] rounded-2xl shadow-xl py-10 px-2  md:px-20 ">
            <h3 className="text-lg font-bold">Medical Transport via Commercial Flights</h3>
            <ul className="list-disc pl-8">
              <li>Dhaka → Bangkok　/ Stretcher transport</li>
              <li>Yangon → Bangkok　/ Nurse-escorted transport</li>
              <li>Chiang Mai, Phuket → Bangkok</li>
              <li>Bangkok → Japan</li>
            </ul>
          </div>
          <div className="mt-10 bg-[#EDF4FF] text-[#3562AE] rounded-2xl shadow-xl py-10 px-2 md:px-20 ">
            <h3 className="text-lg font-bold">Medical Transport via Charter Flights</h3>
            <ul className="list-disc pl-8">
              <li>Naypyidaw → Bangkok</li>
              <li>Yangon → Bangkok</li>
              <li>Phnom Penh → Bangkok</li>
              <li>Dhaka → Bangkok → Japan</li>
              <li>Chiang Rai → Japan (Narita)</li>
            </ul>
          </div>
          <p className="text-lg font-bold my-10">●Repatriation of Remains</p>
          <p className="font-bold">
            Available areas: Thailand, Myanmar, Laos, Cambodia, Vietnam.
          </p>
          <ul className="list-disc pl-8">
            <li>
              We arrange transportation and cremation of the bereaved body in cooperation with 
              Embassies, Insurance companies and other local feneral companies.
            </li>
            <li>
              Our Japanese staff members provide attentive services to the bereaved family.
            </li>
          </ul>
          <p>
            ※Currently, Japanese attendants are available only in Thailand, Myanmar, and Laos.
          </p>
        </div>
        <div className="bg-[#EDF4FF] py-20 mt-10">
          <div className="container mx-auto grid grid-cols-12 text-[#3562AE] font-semibold gap-3  ">
            <div className="col-span-12 sm:col-span-4">
              <Image
                src="/img/med-as/4.png"
                alt="icon"
                width="400"
                height="400"
                className="w-full"
              />
            </div>
            <div className="col-span-12 sm:col-span-4">
              <Image
                src="/img/med-as/2.png"
                alt="icon"
                width="400"
                height="400"
                className="w-full"
              />
            </div>
            <div className="col-span-12 sm:col-span-4">
              <Image
                src="/img/med-as/3.png"
                alt="icon"
                width="400"
                height="400"
                className="w-full"
              />
            </div>
          </div>
        </div>

        <ContactSection medical={true} home={true} />
      </div>
  );
}
const AboutTH = () => {
  return (
    <div className="relative">
        <div className="container  mx-auto mt-20">
          {/* <img className="absolute" src="/img/our-business-bg.png" alt="" /> */}
          <div className="grid grid-cols-1">
            <div className="flex items-center justify-center">
              <h3
                id="our-business"
                className="font-bold text-4xl text-center relative flex items-center justify-center mb-14"
              >
                <div className=" text-[#3562AE] border-b-4 border-orange-400 w-fit pb-4">
                  บริการความช่วยเหลือทางการแพทย์
                </div>
                {/* <div className="border-b-4 border-orange-200 w-[100px] absolute bottom-0 mt-4"></div> */}
              </h3>
            </div>
          </div>
          <div className="bg-[#EDF4FF] text-[#3562AE] rounded-2xl shadow-xl py-10 px-2 md:px-20 font-semibold">
            <ul>
              <li>
                - บริการสำรองค่าใช้จ่ายทางการแพทย์ให้แก่ผู้ป่วย และเป็นตัวแทนชำระค่าบริการทางการแพทย์ให้แก่สถานบริการทางการแพทย์
                  ทั้งในประเทศไทยและต่างประเทศ
              </li>
              <li>- บริการช่วยเหลือผู้ป่วยและครอบครัวโดยเจ้าหน้าที่ที่สื่อสารภาษาญี่ปุ่น</li>
              <li>- บริการประสานงานเคลื่อนย้ายผู้ป่วยทางการแพทย์ฉุกเฉิน</li>
              <li>- บริการจัดเตรียมการขนส่งศพกลับประเทศผ่านโรงพยาบาลหรือบริษัทต่างๆ</li>
              <li>- ประสานงานการขนส่งศพกลับประเทศ (สถานทูต, บริษัทจัดงานศพ ฯลฯ)</li>
              <li>- บริการจัดการและรวบรวมเอกสารเพื่อเรียกร้องการเอาประกันภัน</li>
              <li>- บริการแปลเอกสาร และดำเนินการเอกสารทางราชการ</li>
            </ul>
          </div>
        </div>
        <div className="bg-[#EDF4FF] py-20 mt-10">
          <div className="container mx-auto grid grid-cols-10 text-[#3562AE] font-semibold gap-2 xl:px-20 ">
            <div className="bg-[#B7D2FF] col-span-10 sm:col-span-5 lg:col-span-2 rounded-[100%] w-[240px] h-[240px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px] flex flex-col items-center mx-auto ">
              <div className="h-[50%] flex items-end">
                <Image
                  src="/img/med-as/2-1.png"
                  alt="icon"
                  width="70"
                  height="70"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <span>บริการล่ามทางการแพทย์</span>
              </div>
            </div>
            <div className="bg-[#B7D2FF] col-span-10 sm:col-span-5 mx-auto lg:col-span-2 rounded-[100%]  w-[240px] h-[240px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px] flex flex-col items-center  ">
              <div className="h-[50%] flex items-end ">
                <Image
                  src="/img/med-as/2-2.png"
                  alt="icon"
                  width="70"
                  height="70"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <span>บริการชำระ</span>
                <span>ค่าบริการทางแพทย์</span>
                <span>แบบไม่ใช้เงินสด</span>
              </div>
            </div>
            <div className="bg-[#B7D2FF] col-span-10 sm:col-span-5 mx-auto lg:col-span-2 rounded-[100%] w-[240px] h-[240px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px]   flex flex-col items-center  ">
              <div className="h-[50%] flex items-end ">
                <Image
                  src="/img/med-as/2-3.png"
                  alt="icon"
                  width="70"
                  height="70"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <span>บริการประสานงาน</span>
                <span>เคลื่อนย้ายผู้ป่วย</span>
                <span>ทางการแพทย์ฉุกเฉิน</span>
              </div>
            </div>
            <div className="bg-[#B7D2FF] col-span-10 sm:col-span-5 mx-auto lg:col-span-2 rounded-[100%]  w-[240px] h-[240px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px]   flex flex-col items-center  ">
              <div className="h-[50%] flex items-end ">
                <Image
                  src="/img/med-as/2-4.png"
                  alt="icon"
                  width="70"
                  height="70"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <span>บริการจัดเตรียมการ</span>
                <span>ขนส่งศพกลับประเทศ</span>
              </div>
            </div>
            <a
              // href="https://jmd.oncewebdesign.com/jp"
              href="https://jmd.blue-assistance.co.th"
              className="bg-[#B7D2FF] col-span-10 sm:col-span-5 mx-auto lg:col-span-2 rounded-[100%]  w-[240px] h-[240px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px]  flex flex-col items-center  "
            >
              <div className="h-[50%] flex items-end ">
                <Image
                  src="/img/med-as/2-5.png"
                  alt="icon"
                  width="70"
                  height="70"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <span>บริการล่ามทาง</span>
                <span>การแพทย์ภาษาญี่ปุ่น</span>
              </div>
            </a>
          </div>
        </div>
        <div className="container  mx-auto mt-20 text-[#3562AE]">
          {/* <img className="absolute" src="/img/our-business-bg.png" alt="" /> */}
          <div className="grid grid-cols-1">
            <div className="flex items-center justify-start">
              <h3
                id="our-business"
                className="font-bold text-4xl text-center relative flex items-center justify-center mb-14"
              >
                <div className=" text-[#3562AE] border-b-4 border-orange-400 w-fit pb-4">
                  กรณีตัวอย่าง
                </div>
                {/* <div className="border-b-4 border-orange-200 w-[100px] absolute bottom-0 mt-4"></div> */}
              </h3>
            </div>
          </div>
          <p className="text-lg font-bold">●บริการประสานงานเคลื่อนย้ายผู้ป่วยทางการแพทย์ฉุกเฉิน</p>
          <p>
            　เราส่งทีมเคลื่อนย้ายจากประเทศไทยและสามารถจัดการเคลื่อนย้ายผู้ป่วยทางการแพทย์จากเอเชียตะวันออกเฉียงใต้มายังประเทศไทยได้
            <br />
            　เรายังประสานงานเคลื่อนย้ายทางการแพทย์จากประเทศไทยและประเทศใกล้เคียงไปยังประเทศญี่ปุ่นด้วย
            <br />
            　※เราประสานงานกับบริษัทประกัน โรงพยาบาล และหน่วยงานที่เกี่ยวข้องในนามของผู้ป่วยและครอบครัว
          </p>
          <div className="mt-10 bg-[#EDF4FF] text-[#3562AE] rounded-2xl shadow-xl py-10 px-2  md:px-20 ">
            <h3 className="text-lg font-bold">การขนส่งทางการแพทย์ผ่านเที่ยวบินเชิงพาณิชย์</h3>
            <ul className="list-disc pl-8">
              <li>ธากา → กรุงเทพฯ / การคลื่อนย้ายด้วยเปลหาม</li>
              <li>ย่างกุ้ง → กรุงเทพฯ / การเคลื่อนย้ายโดยมีพยาบาลดูแล</li>
              <li>เชียงใหม่, ภูเก็ต → กรุงเทพฯ</li>
              <li>กรุงเทพฯ → ประเทศญี่ปุ่น</li>
            </ul>
          </div>
          <div className="mt-10 bg-[#EDF4FF] text-[#3562AE] rounded-2xl shadow-xl py-10 px-2 md:px-20 ">
            <h3 className="text-lg font-bold">การขนส่งทางการแพทย์ผ่านเที่ยวบินเช่าเหมาลำ</h3>
            <ul className="list-disc pl-8">
              <li>เนปยีดอว์ → กรุงเทพฯ</li>
              <li>ย่างกุ้ง → กรุงเทพฯ</li>
              <li>พนมเปญ → กรุงเทพฯ</li>
              <li>แดกกา → กรุงเทพฯ → ประเทศญี่ปุ่น</li>
              <li>จังหวัดเชียงราย → ประเทศญี่ปุ่น (นาริตะ)</li>
            </ul>
          </div>
          <p className="text-lg font-bold my-10">●บริการจัดเตรียมการขนส่งศพกลับประเทศ</p>
          <p className="font-bold">
            พื้นที่ที่ให้บริการ: ประเทศไทย, พม่า, ลาว, กัมพูชา, เวียดนาม
          </p>
          <ul className="list-disc pl-8">
            <li>
              เราดำเนินการจัดการขนส่งและเผาศพของผู้เสียชีวิต ร่วมกับสถานทูต บริษัทประกันภัย และบริษัทจัดงานศพในท้องถิ่น
            </li>
            <li>
              เจ้าหน้าที่ชาวญี่ปุ่นของเรา บริการและช่วยเหลือต่อครอบครัวผู้สูญเสีย
            </li>
          </ul>
          <p>
            ※ปัจจุบัน ผู้ช่วยชาวญี่ปุ่นมีให้บริการเฉพาะในประเทศไทย เมียนมา และลาว เท่านั้น
          </p>
        </div>
        <div className="bg-[#EDF4FF] py-20 mt-10">
          <div className="container mx-auto grid grid-cols-12 text-[#3562AE] font-semibold gap-3  ">
            <div className="col-span-12 sm:col-span-4">
              <Image
                src="/img/med-as/4.png"
                alt="icon"
                width="400"
                height="400"
                className="w-full"
              />
            </div>
            <div className="col-span-12 sm:col-span-4">
              <Image
                src="/img/med-as/2.png"
                alt="icon"
                width="400"
                height="400"
                className="w-full"
              />
            </div>
            <div className="col-span-12 sm:col-span-4">
              <Image
                src="/img/med-as/3.png"
                alt="icon"
                width="400"
                height="400"
                className="w-full"
              />
            </div>
          </div>
        </div>

        <ContactSection medical={true} home={true} />
      </div>
  );
}


export default function Home({ params }: { params: { lng: string } }) {
  const h = useTranslations("header");
  const lang = params.lng;
  const content = lang == "jp" ? <AboutJP /> : lang == "en" ? <AboutEN /> : <AboutTH />;
  return (
    <>
      <section className="banner-section">
        <div className="relative" style={{ overflow: "hidden", zIndex: 0 }}>
          <Image
            src="/img/med-as/cover.png"
            width={4838}
            height={2198}
            quality={100}
            alt="Blue Assistance"
            className="w-full"
            priority={true}
          />
        </div>
      </section>
      {content}
    </>
  );
}
