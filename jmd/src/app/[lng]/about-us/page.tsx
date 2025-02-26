import MainHeading from "@/components/website/atom/heading/MainHeading";
import Cover from "@/components/website/layout/Cover";
import { useTranslations } from "next-intl";
import type { Metadata, ResolvingMetadata } from "next";
import CoverVisa from "@/components/website/layout/CoverVisa";
import { BsPersonAdd } from "react-icons/bs";
import FadeHeading from "@/components/website/atom/heading/FadeHeading";
import { Image } from "antd";

const pageName = "JMD About-Us";
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
    // icons: [{ rel: "icon", url: Favicon.src }],
  };
}

const AboutTH = () => {
  return <AboutJP />;
};
// translation to do
const AboutEN = () => {
  return <AboutJP />;
};
const AboutJP = () => {
  return (
    <div className="grid grid-cols-1 gap-6  text-[#333333] font-medium">
      <div id="t-1" className="border-b-2 pb-6 border-slate-200">
        <MainHeading text="JMDサービス内容" heading="2" />
        <div className="grid grid-cols-12 gap-6 py-10">
          <div className="group flex flex-col items-center gap-3 bg-white  px-4 pb-6 transition-all duration-500 col-span-12  md:col-span-4 overflow-hidden rounded-xl ">
            <div className="w-full h-40 overflow-hidden flex justify-center">
              <img
                src="/img/jmd/about1.png"
                className=" w-full object-contain"
                loading="lazy"
              />
            </div>
            <h4 className="w-full text-center font-bold text-base  text-[#3562AE]">
              医療通訳スタッフの常駐
            </h4>
            <div className="pt-2 lg:min-h-32  ">
              <ul className=" text-sm w-full text-slate-800 list-disc pl-6">
                <li>
                  医療機関に常駐の日本語スタッフが、予約からお薬の受取、会計までトータルサポート{" "}
                </li>
                <li>患者様は言葉の心配なく、治療に専念することが出来ます </li>
              </ul>
              <p className=" text-sm w-full text-red-500 mt-4 ">
                ※詳しくはJMDご利用のながれをご参照ください
              </p>
            </div>
          </div>
          <div className="group flex flex-col items-center gap-3 bg-white  px-4 pb-6 transition-all duration-500 col-span-12  md:col-span-4 overflow-hidden rounded-xl ">
            <div className="w-full h-40 overflow-hidden flex justify-center">
              <img
                src="/img/jmd/about2.png"
                className=" w-full object-contain"
                loading="lazy"
              />
            </div>
            <h4 className="w-full text-center font-bold text-base  text-[#3562AE]">
              治療費キャッシュレスサービス
            </h4>
            <div className="pt-2 lg:min-h-32  ">
              <ul className=" text-sm w-full text-slate-800 list-disc pl-6">
                <li>
                  海外旅行保険へご加入の場合、保険対象となる治療は
                  キャッシュレスでのご受診が可能です
                </li>
                <li>
                  弊社にて病院へのお支払い、保険会社への請求を代行いたします
                </li>
              </ul>
            </div>
          </div>
          <div className="group flex flex-col items-center gap-3 bg-white  px-4 pb-6 transition-all duration-500 col-span-12  md:col-span-4 overflow-hidden rounded-xl ">
            <div className="w-full h-40 overflow-hidden flex justify-center">
              <img
                src="/img/jmd/about3.png"
                className=" w-full object-contain"
                loading="lazy"
              />
            </div>
            <h4 className="w-full text-center font-bold text-base  text-[#3562AE]">
              その他の医療アシスタンス業務
            </h4>
            <div className="pt-2 lg:min-h-32  ">
              <ul className=" text-sm w-full text-slate-800 list-disc pl-6">
                <li>
                  医療設備の整っていない地域から都市部までの搬送はもちろん、
                  近隣国や日本への医療搬送など
                </li>
                <li>
                  医療機関、保険会社等の各機関と連携し手配代行をおこないます
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="t-2" className="flex flex-col gap-6  pb-6 ">
        <MainHeading text="JMDご利用のながれ" heading="2" />
        <div className="flex flex-col gap-6 border-b border-slate-400">
          <div className="flex flex-col gap-3">
            <h3 className="bg-[#3562AE] flex items-center gap-2 px-4 text-lg font-bold text-white w-fit rounded-xl">
              <BsPersonAdd size={20} />
              患者樣
            </h3>
            <Image
              src="/img/jmd/jmd_flow.png"
              className=" w-full object-contain"
              loading="lazy"
            />
            <div className="text-sm text-blue-950 ">
              <div>
                <FadeHeading text="1. JMD受付" heading="3" />
                <h4 className="font-semibold text-[#3562AE] text-xl">
                  JMDデスクで下記の書類をご提示ください。
                </h4>
                <ul className="list-disc pl-8">
                  <li>パスポート</li>
                  <li>保険証券（保険ご利用の場合）</li>
                </ul>
                <p>※ご本人様確認後、病院の受付フォームにご記入いただきます。</p>
                <h4 className="font-semibold text-[#3562AE] text-xl mt-6">
                  ＜海外旅行保険をご利用の方へ＞
                </h4>
                <ul className="list-disc pl-8">
                  <li>
                    JMDデスクにて、保険会社へ提出するための必要書類へご記入をお願いします。
                  </li>
                  <li>
                    保険のご利用の可否にあたり、保険会社への連絡確認にお時間をいただく場合がございます。
                  </li>
                  <li>
                    ご利用されている保険会社により、パスポートの出入国スタンプページもしくはEチケットのご提出が必要な場合がございます。
                  </li>
                </ul>
              </div>
              <div className="py-6">
                <FadeHeading text="2. 診察" heading="3" />
                <ul className="list-disc pl-8">
                  <li>
                    JMDスタッフが医師の診察、血液検査やレントゲン検査、点滴処置や傷の縫合時など{" "}
                    <br />
                    すべての工程に同行し、医療通訳を行います。
                  </li>
                </ul>

                <p className="text-blue-700 mt-4">
                  ※JMD受付時間外は、電話通訳での対応となります。
                </p>
              </div>
              <div className="py-6">
                <FadeHeading text="3. お薬の処方" heading="3" />
                <ul className="list-disc pl-8">
                  <li>病院またはクリニック内での処方となります。</li>
                  <li>
                    薬剤師からの説明時にも、JMDスタッフによる通訳サポートがございます。
                  </li>
                  <li>
                    アレルギーや常用薬については、必ず事前にお知らせください。
                  </li>
                </ul>
              </div>
              <div className="py-6">
                <FadeHeading text="4. お会計" heading="3" />
                <p>
                  キャッシュレスサービスをご利用されない場合、下記の方法で治療費のお支払が可能です。
                </p>
                <ul className="list-disc pl-8">
                  <li>現金（現地通貨）</li>
                  <li>クレジットカード</li>
                  <li>QRコード決済</li>
                </ul>
                <p>※詳細は各デスクにお問い合わせください。</p>
              </div>
            </div>
          </div>
        </div>
        <div id="t-3"></div>
        <MainHeading text="海外旅行保険のご利用について" heading="2" />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="text-sm text-blue-950 ">
              <div className="p-4 border border-blue-400 rounded-lg">
                <FadeHeading text="ご利用可能な海外旅行保険" heading="3" />

                <ul className="list-disc pl-8">
                  <li>損害保険ジャパン日本興亜株式会社</li>
                  <li>あいおいニッセイ同和損害保険株式会社</li>
                  <li>東京海上日動火災保険株式会社</li>
                  <li>三井住友海上火災保険株式会社</li>
                  <li>AIG損害保険株式会社 </li>
                  <li>エイチ・エス（HS）損害保険株式会社</li>
                  <li>朝日火災海上保険株式会社</li>
                  <li>日新火災海上保険株式会社</li>
                </ul>
                <p>
                  ※その他の保険もご利用いただけます。各デスクまでお問い合わせください。
                </p>
              </div>
              <div className="p-4 border border-blue-400 rounded-lg mt-6">
                <FadeHeading
                  text="クレジットカード付帯の海外傷害保険について"
                  heading="3"
                />
                <div className="flex flex-col gap-4">
                  {/* <p>
                    自動付帯：
                    クレジットカードが有効かつ、日本出国後90日間以内海外傷害保険の利用可能。
                  </p>
                  <p>
                    利用付帯：
                    該当のクレジットカードで航空券を購入した場合にのみ海外傷害保険の利用が可能
                    。
                  </p>
                  <p>
                    ※クレジットカード付帯保険は、カード会社への利用可否確認に時間がかかります。事前にご自身でクレジットカー
                    ド会社にお問い合わせいただき、ご利用が可能かどうかご確認の上ご来院いただいますと幸いです。
                  </p>
                  <p>
                    ※利用付帯の場合には、どのような条件で海外傷害保険が付帯されるかはクレジットカードにより異なります。
                    事前にご自身でご確認いただく事で、よりスムーズなサービスのご提供が可能となります。
                  </p> */}
                  <ul className="list-disc pl-8">
                    <li>
                      日本出国から90日もしくは3ヶ月以内*のご症状についてご利用が可能です　＊カード会社の規定による
                    </li>
                    <li>
                      クレジットカード会社への保険照会にお時間がかかる場合がございます。
                    </li>
                    <li>
                      カードの種類によっては、出国前に旅行代金のカード決済が必要など利用条件がございますので、ご注意ください。
                    </li>
                    <li>
                      可能でしたら、事前にクレジットカード会社にお問い合わせの上ご来院ください。
                    </li>
                  </ul>
                </div>
                {/* <FadeHeading
                  text="キャッシュレスご提供が出来ないケース"
                  heading="3"
                />
                <ul className="pl-8 list-disc">
                  <li>国民健康保険 / 社会保険</li>
                </ul> */}
                <FadeHeading
                  text="保険がご利用いただけないケース"
                  heading="3"
                />
                <div className="flex flex-col gap-4">
                  <ul className="pl-8 list-disc">
                    <li>保険期間開始前に発生した病気または怪我</li>
                    <li>事故日、もしくは治療開始日から180日以上経過した治療</li>
                    <li>歯科治療（ご契約内容による）</li>
                    <li>予防接種、健康診断など治療行為以外の診察</li>
                    <li>妊娠、出産、及びそれらに起因する検査、治療</li>
                  </ul>
                  <p>
                    ※その他、保険会社より承認がいただけずキャッシュレスサービスがご利用いただけないケースもございます。
                  </p>
                </div>
                <FadeHeading
                  text="海外療養費制度のご利用について
"
                  heading="3"
                />
                <div className="flex flex-col gap-4">
                  <p>
                    JMDデスクでは、日本の国民健康保険・社会保険の海外療養費制度をご利用の方向けに、書類作成のお手伝いを行っております。
                    <br />
                    ご希望の際は受診前にJMDスタッフへお申し付けください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function About({ params }: { params: { lng: string } }) {
  const lang = params.lng;
  const h = useTranslations("header");

  const content =
    lang == "jp" ? <AboutJP /> : lang == "en" ? <AboutEN /> : <AboutTH />;
  return (
    <>
      <div className="about-us">
        <CoverVisa
          pageName={h("jmd-process")}
          prevPage={{ pageName: h("home"), url: "/" }}
        />
        <div className="container mx-auto ">{content}</div>
      </div>
    </>
  );
}
