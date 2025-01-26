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
              <p className=" text-sm w-full text-slate-800 ">
                医療機関に日本語の通訳スタッフが常駐し、予約受付からお薬の受取、会計まで、トータルサポートいたします。患者様は言葉の心配なく治療に専念することができます。
              </p>
              <p className=" text-sm w-full text-red-500 mt-4 ">
                ※詳しくはJMDご利用のながれ、をご参照ください
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
              <p className=" text-sm w-full text-slate-800 ">
                日本の海外旅行傷害保険へご加入の患者様で、保険の対象となる治療を受ける場合には患者様がその場でお支払いいただく必要はございません。弊社にて病院へのお支払い、保険会社への請求を代行いたします。
              </p>
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
              <p className=" text-sm w-full text-slate-800 ">
                医療設備の整っていない地域から国内の都市部までの搬送はもちろん、近隣国や日本への医療搬送が必要となった場合には各医療機関、保険会社と連携し、医療搬送の代行手配を承っております。
              </p>
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
                  <li>
                    保険をご利用の方は保険証券（原本・コピー・PDFデータなど）
                  </li>
                </ul>
                <p>
                  JMD受付にて保険会社の確認を行い、病院の受付フォームにご記入いただきます。
                </p>
                <h4 className="font-semibold text-[#3562AE] text-xl mt-6">
                  ＜海外旅行保険をご利用の方へ＞
                </h4>
                <ul className="list-disc pl-8">
                  <li>
                    保険会社への請求フォームにご記入いただきます。ご記入方法はJMDスタッフがご説明いたします。
                  </li>
                  <li>
                    キャッシュレスサービスご利用にあたり、保険会社へ連絡確認が必要となります。
                    <br />
                    承認をいただくまで少々お時間をいただきます。また、場合によってはご本人様確認の為、保険会社様の担当者様とお話をいただく場合がございます。
                  </li>
                  <li>
                    ご利用されいている保険会社によっては、出入国のスタンプページの提出が必要な場合がございます。
                  </li>
                </ul>
              </div>
              <div className="py-6">
                <FadeHeading text="2. 診察" heading="3" />
                <p>
                  医師による診察を行います。診察時にはJMDスタッフが医療通訳サポートを行います。
                  血液検査やレントゲン検査、点滴処置や傷の縫合時などもJMDスタッフが帯同し医療通訳サポートをいたします。
                </p>
                <p className="text-blue-700 mt-4">
                  JMD受付時間外、土曜日午後、日曜日、祝日は電話通訳での対応となります。
                </p>
              </div>
              <div className="py-6">
                <FadeHeading text="3. お薬の処方" heading="3" />
                <p>
                  病院またはクリニック内でお薬を処方いたします。薬剤師からのお薬説明時にもJMDスタッフによる通訳サポートがございます。
                </p>
              </div>
              <div className="py-6">
                <FadeHeading text="4. お会計" heading="3" />
                <p>下記のいずれかの方法で治療費のお支払いが可能です。</p>
                <ul className="list-disc pl-8">
                  <li>現金（バーツでのお支払いに限られます）</li>
                  <li>
                    クレジットカード
                    (JMDデスクのある病院にて使用できるカードが異なります。詳細は各デスクにお問合せ下さいませ)
                  </li>
                  <li>QRコード決済</li>
                </ul>
                <p>
                  お持ちの保険で保険会社よりキャッシュレスサービスをご利用可能な方は、お支払いが不要です。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="t-3"></div>
        <MainHeading text="海外保険のご利用について" heading="2" />
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
                  ※※その他の保険もご利用いただけます。予めお問い合わせください
                </p>
              </div>
              <div className="p-4 border border-blue-400 rounded-lg mt-6">
                <FadeHeading
                  text="クレジットカード付帯の海外傷害保険について"
                  heading="3"
                />
                <div className="flex flex-col gap-4">
                  <p>
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
                  </p>
                </div>
                <FadeHeading
                  text="キャッシュレスご提供が出来ないケース"
                  heading="3"
                />
                <ul className="pl-8 list-disc">
                  <li>国民健康保険 / 社会保険</li>
                </ul>
                <FadeHeading
                  text="海外旅行保険の補償対象外ケース"
                  heading="3"
                />
                <div className="flex flex-col gap-4">
                  <ul className="pl-8 list-disc">
                    <li>保険契約開始日以前に発生した病気及び怪我</li>
                    <li>
                      事故の発生日、初診日から180日以上経っている病気及び怪我
                    </li>
                    <li>歯科 （ご契約内容による）</li>
                    <li>予防接種、健康診断など治療行為以外の診察</li>
                    <li>妊娠、出産及びそれらに起因する疾病</li>
                  </ul>
                  <p>
                    ※上記以外で、保険会社に確認後、承認がいただけず適用できないケースもございます。
                  </p>
                </div>
                <FadeHeading
                  text="海外療養費制度のご利用について
"
                  heading="3"
                />
                <div className="flex flex-col gap-4">
                  <p>
                    JMDデスクでは、国民健康保険・社会保険の海外療養費請求制度をご利用希望の方に、書類の作成をお手伝いしております。
                    ご希望の際は受診前にJMDスタッフにお申し付けください。{" "}
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
