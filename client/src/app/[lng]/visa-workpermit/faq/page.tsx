import FadeHeading from "@/components/website/atom/heading/FadeHeading";
import MainHeading from "@/components/website/atom/heading/MainHeading";

import CoverVisa from "@/components/website/layout/CoverVisa";
import Collapse from "@/components/website/organism/Collapse";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import type { CollapseProps } from "antd";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "申請から許可まで何日くらいかかりますか",
    children: <p>Coming soon</p>,
  },
  {
    key: "2",
    label: "ビザの新規申請はタイ国内でできますか",
    children: <p>Coming soon</p>,
  },
  {
    key: "3",
    label: "観光ビザや留学、配偶者ビザから就労ビザへの切り替えは可能ですか",
    children: <p>Coming soon</p>,
  },
  {
    key: "4",
    label: "更新の何日前までに連絡が必要ですか",
    children: <p>Coming soon</p>,
  },
];

const items2: CollapseProps["items"] = [
  {
    key: "1",
    label: "申請から許可まで何日くらいかかりますか",
    children: <p>Coming soon</p>,
  },
  {
    key: "2",
    label: "勤務先が変わっても有効期限内であれば使用できますか",
    children: <p>Coming soon</p>,
  },
  {
    key: "3",
    label: "必要書類を教えてください",
    children: <p>Coming soon</p>,
  },
];

const items3: CollapseProps["items"] = [
  {
    key: "1",
    label: "相談は無料ですか",
    children: (
      <p>
        一般的な内容でございましたら無料です。書類内容の確認や、個別の案件に関する内容についてはお見積り後の対応となります。
      </p>
    ),
  },
  {
    key: "2",
    label: "バンコク以外でも対応可能ですか",
    children: <p>現在はサムットプラカーンが対応可能です</p>,
  },
  {
    key: "3",
    label: "日本人以外でも相談可能ですか",
    children: <p>Coming soon</p>,
  },
  {
    key: "4",
    label: "万が一、申請が認められなかった場合はどうなりますか",
    children: <p>しょるい</p>,
  },
];

const items4: CollapseProps["items"] = [
  {
    key: "1",
    label: "・料金について教えてください",
    children: (
      <p>
        弊社の代行手数料と、役所への申請料金がございます。詳細は「料金表」をご参照ください
      </p>
    ),
  },
  {
    key: "2",
    label: "お支払い方法について教えて下さい",
    children: <p>タイバーツでのお支払い。クレカ対応？</p>,
  },
  {
    key: "3",
    label:
      "書類の提出はメッセンジャーもしくはデリバリーサービスを使用してもよいですか",
    children: <p>初回は来社必須？</p>,
  },
  {
    key: "4",
    label: "パスポート、労働許可証の受取は直接手渡しになりますか",
    children: <p>弊社メッセンジャーにて対応？</p>,
  },
  {
    key: "5",
    label: "どの手続も必ず本人の出頭が必要ですか",
    children: <p>Coming soon</p>,
  },
];
export default function Work() {
  const t = useTranslations("header");

  return (
    <>
      <div className="">
        <CoverVisa
          pageName="FAQ"
          prevPage={{ pageName: t("home"), url: "/" }}
        />
        <div className="container mx-auto  ">
          <div className="grid grid-cols-1 gap-6 text-[#333333] font-medium">
            <div className="">
              <MainHeading text="よくある質問" heading="1" />
              <div className="py-4 md:py-10 border-b-2 border-slate-200 ">
                <h2 className="py-4 font-bold text-lg lg:text-xl text-blue-900">
                  ビザについて
                </h2>
                <div className="py-4">
                  {/* @ts-ignore */}
                  <Collapse items={items} />
                </div>
              </div>
              <div className="py-4 md:py-10 border-b-2 border-slate-200 ">
                <h2 className="py-4 font-bold text-lg lg:text-xl text-blue-900">
                  労働許可証について
                </h2>
                <div className="py-4">
                  {/* @ts-ignore */}
                  <Collapse items={items2} />
                </div>
              </div>
              <div className="py-4 md:py-10 border-b-2 border-slate-200 ">
                <h2 className="py-4 font-bold text-lg lg:text-xl text-blue-900">
                  弊社のサービス内容について
                </h2>
                <div className="py-4">
                  {/* @ts-ignore */}
                  <Collapse items={items3} />
                </div>
              </div>
              <div className="py-4 md:py-10 border-b-2 border-slate-200 ">
                <h2 className="py-4 font-bold text-lg lg:text-xl text-blue-900">
                  その他
                </h2>
                <div className="py-4">
                  {/* @ts-ignore */}
                  <Collapse items={items4} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
