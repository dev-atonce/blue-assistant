import ContactSection from "@/components/website/layout/ContactSection";
import Cover from "@/components/website/layout/Cover";
import NewsSection from "@/components/website/layout/NewsSection";
import OtherSection from "@/components/website/layout/OtherSection";
import ServiceSection from "@/components/website/layout/ServiceSection";
import StrongServiceSection from "@/components/website/layout/StrongServiceSection";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home({ params }: { params: { lng: string } }) {
  const h = useTranslations("header");
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
              href="https://jmd.oncewebdesign.com/jp"
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
    </>
  );
}
