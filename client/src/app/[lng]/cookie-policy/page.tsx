import MainHeading from "@/components/website/atom/heading/MainHeading";
import Cover from "@/components/website/layout/Cover";
import { useTranslations } from "next-intl";
import type { Metadata, ResolvingMetadata } from "next";

const pageName = "about";
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
    <div className="grid grid-cols-1 gap-6 text-[#333333] font-medium">
      <div className="">
        <MainHeading text="個人情報保護に対する取り組み " heading="2" />
        <p>
          ブルーアシスタンス株式会社（以下「当社」）は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。
        </p>
      </div>
      <div className="flex flex-col gap-6 pb-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="bg-[#3562AE] px-4 text-lg font-bold text-white w-fit rounded-xl">
              個人情報の管理
            </h3>
            <p className="mb-6">
              当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
            </p>
            <h3 className="bg-[#3562AE] px-4 text-lg font-bold text-white w-fit rounded-xl">
              個人情報の利用目的
            </h3>
            <p className="mb-6">
              お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。
            </p>
            <h3 className="bg-[#3562AE] px-4 text-lg font-bold text-white w-fit rounded-xl">
              個人情報の第三者への開示・提供の禁止
            </h3>
            <p className="mb-6">
              当社は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
            </p>
            <ul className="pl-8 list-disc text-lg font-bold mb-6">
              <li>お客さまの同意がある場合</li>
              <li>
                お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合
              </li>
              <li>法令に基づき開示することが必要である場合</li>
            </ul>
            <h3 className="bg-[#3562AE] px-4 text-lg font-bold text-white w-fit rounded-xl">
              個人情報の安全対策
            </h3>
            <p className="mb-6">
              当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。
            </p>
            <h3 className="bg-[#3562AE] px-4 text-lg font-bold text-white w-fit rounded-xl">
              ご本人の照会
            </h3>
            <p className="mb-6">
              お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。{" "}
            </p>
            <h3 className="bg-[#3562AE] px-4 text-lg font-bold text-white w-fit rounded-xl">
              SSL（Secure Socket Layer）について
            </h3>
            <p className="mb-6">
              当社のWebサイトはSSLに対応しております。WebブラウザとWebサーバーとの通信を暗号化しており、ユーザーが入力する氏名や住所、電話番号などの個人情報は自動的に暗号化されます。{" "}
            </p>
            <h3 className="bg-[#3562AE] px-4 text-lg font-bold text-white w-fit rounded-xl">
              cookieについて
            </h3>
            <p className="mb-6">
              cookieとは、WebサーバーからWebブラウザに送信されるデータのことです。当ウエッブサイトのWebサーバーがcookieを参照することでユーザーのパソコンを識別でき、効率的に当社Webサイトを利用することができます。当社Webサイトがcookieとして送るファイルは、個人を特定するような情報は含んでおりません。お使いのWebブラウザの設定により、cookieを無効にすることも可能です。{" "}
            </p>
            <h3 className="bg-[#3562AE] px-4 text-lg font-bold text-white w-fit rounded-xl">
              法令、規範の遵守と見直し
            </h3>
            <p className="mb-6">
              当社は、保有する個人情報に関して適用されるタイ王国の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。{" "}
            </p>
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
        <Cover
          noHeading={true}
          pageName={"個人情報保護に対する取り組み"}
          //   pageName={h("about")}
          image="/img/service/branch_banner.jpg"
          prevPage={{ pageName: h("home"), url: "/" }}
        />
        <div className="container mx-auto ">{content}</div>
      </div>
    </>
  );
}
