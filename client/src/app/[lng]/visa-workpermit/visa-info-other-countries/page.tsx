import FadeHeading from "@/components/website/atom/heading/FadeHeading";
import MainHeading from "@/components/website/atom/heading/MainHeading";
import Cover from "@/components/website/layout/Cover";
import CoverVisa from "@/components/website/layout/CoverVisa";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaArrowCircleDown, FaEye } from "react-icons/fa";

export default function Work() {
  const t = useTranslations("header");
  return (
    <>
      <div className="">
        <CoverVisa
          pageName="Visa for Other Countries"
          prevPage={{ pageName: t("home"), url: "/" }}
        />
        <div className="container mx-auto  ">
          <div className="grid grid-cols-1 gap-6 text-[#333333] font-medium">
            <div className="">
              <MainHeading text="ビザ要否一覧（日本国籍）" heading="1" />
              <div className="py-4 md:py-10 border-b-2 border-slate-200 ">
                <FadeHeading
                  text="◎査証（ビザ）が必要・不要な国一覧"
                  heading="2"
                />
                <div className="text-sm">
                  <ul className="pl-6 list-disc">
                    <li>
                      日本国籍で一般旅券を所持されている方の条件になります。
                    </li>
                    <li>
                      ビザ要否に関する情報提供は、その時点で客観的な情報を提供しますが、将来に渡りその内容を保証するものではありません。
                    </li>
                    <li>
                      ビザ要否の規定は変更される場合がありますので、渡航前にご自身で大使館へ御確認ください。
                    </li>
                    <li>
                      ビザが不要とされる場合でも、お客様の事由[パスポートの種類（機械読み取り式・機械読み取り式でない、発行地）、渡航目的、国籍や滞在資格、
                    </li>
                    <li>
                      前提条件として第三国へ渡航する航空券の所持など]
                      または渡航先国の出入国管理局の審査により入国を拒否された場合も、当社は一切その責任を負いません。
                    </li>
                    <li>
                      無査証滞在の場合は原則入国時に往復または第三国への出国用予約済航空券の所持が必要です。
                    </li>
                  </ul>

                  <br />

                  <p>
                    <strong>▼アジア主要国　（2016年12月8日調べ）</strong>
                  </p>

                  <br />

                  <div className="table-two border border-slate-300">
                    <table className="text-xs table-auto">
                      <tbody>
                        <tr className="font-semibold text-sm bg-blue-800 text-white">
                          <th>
                            国名
                            <br />
                            (五十音順)
                          </th>
                          <th className="border-x border-white">
                            査<br />
                            証<br />
                            要<br />否
                          </th>
                          <th>備考</th>
                          <th className="border-x border-white">
                            旅券の残存期間
                            <br />
                            旅券の未使用査証欄
                          </th>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 py-3 ">
                            インド
                          </td>
                          <td className="border border-slate-300 py-3 ">○</td>
                          <td className="border border-slate-300 py-3 ">
                            事前に取得が必要。観光のみ条件付きで現地取得可能。
                            <br />
                            観光査証の滞在可能日数は入国審査官の判断。
                            <br />
                            往復航空券（Eチケット）が必要。
                          </td>
                          <td className="border border-slate-300 py-3 ">
                            申請時6ヵ月以上
                            <br />
                            未使用査証欄2頁以上
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 py-3 ">
                            インドネシア共和国
                          </td>
                          <td className="border border-slate-300 py-3 ">○</td>
                          <td className="border border-slate-300 py-3 ">
                            30日以内の業務目的での滞在は現地主要海空港にて有償（US$35）で査証取得可。工場訪問が目的の場合は事前に就労ビザの取得が必要。
                            <br />
                            30日以内の観光は一部空港（ジャカルタ、デンパサール、スラバヤ、メダン、バタム島）からの入国で無査証滞在可能。その他空港からの入国は査証要。
                          </td>
                          <td className="border border-slate-300 py-3 ">
                            入国時6ヶ月以上
                            <br />
                            未使用査証欄連続3頁以上
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 py-3 ">
                            カンボジア
                            <br />
                            王国
                          </td>
                          <td className="border border-slate-300 py-3 ">○</td>
                          <td className="border border-slate-300 py-3 ">
                            事前に査証取得が必要（30日以内の滞在が可能）。
                          </td>
                          <td className="border border-slate-300 py-3 ">
                            入国時6ヶ月以上
                            <br />
                            未使用査証欄1頁以上
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 py-3 ">
                            シンガポール
                            <br />
                            共和国
                          </td>
                          <td className="border border-slate-300 py-3 ">×</td>
                          <td className="border border-slate-300 py-3 ">
                            最大30日以内の観光、商用、外交・公用目的滞在は査証不要。
                            <br />
                            出国用予約済航空券、十分な滞在費、次の訪問国の査証（
                            必要な場合）が必要。
                          </td>
                          <td className="border border-slate-300 py-3 ">
                            入国時6ヶ月以上
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 py-3 ">
                            スリランカ
                            <br />
                            民主社会主義共和国
                          </td>
                          <td className="border border-slate-300 py-3 ">○</td>
                          <td className="border border-slate-300 py-3 ">
                            観光ETAの登録（30日以内滞在可能）が必要。
                            <br />
                            コロンボでのトランジットもしくは宿泊無しの日帰り観光の場合は不要。
                            <br />
                            入国時に往復予約済み航空券が必要。
                          </td>
                          <td className="border border-slate-300 py-3 ">
                            入国時6ヶ月以上
                            <br />
                            （ETAの場合）
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 py-3 ">
                            タイ王国
                          </td>
                          <td className="border border-slate-300 py-3 ">▲</td>
                          <td className="border border-slate-300 py-3 ">
                            商用目的は査証が必要。観光目的の滞在のみ査証不要（空路入国⇒30日以内滞在、陸路入国⇒15日以内滞在）出国用予約済航空券、現金1人10,000バーツ相当額の所持が必要。
                          </td>
                          <td className="border border-slate-300 py-3 ">
                            入国時6ヶ月以上
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 py-3 ">
                            大韓民国
                          </td>
                          <td className="border border-slate-300 py-3 ">×</td>
                          <td className="border border-slate-300 py-3 ">
                            90日以内の滞在は査証不要。往復予約済航空券が必要。
                            <br />
                            就業または営利活動目的の場合は査証が必要。
                          </td>
                          <td className="border border-slate-300 py-3 ">
                            入国時3ヶ月以上
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 py-3 ">
                            台湾
                          </td>
                          <td className="border border-slate-300 py-3 ">×</td>
                          <td className="border border-slate-300 py-3 ">
                            90泊91日以内の滞在は査証不要。
                            <br />
                            往復予約済航空券または第三国へ出国するための予約済航空券が必要。
                          </td>
                          <td className="border border-slate-300 py-3 ">
                            入国時3ヶ月以上
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 py-3 ">
                            中国
                          </td>
                          <td className="border border-slate-300 py-3 ">×</td>
                          <td className="border border-slate-300 py-3 ">
                            15日以内の滞在は査証不要。
                          </td>
                          <td className="border border-slate-300 py-3 ">
                            入国時6ヵ月以上が望ましい
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 py-3 ">
                            ネパール
                          </td>
                          <td className="border border-slate-300 py-3 ">○</td>
                          <td className="border border-slate-300 py-3 ">
                            事前に査証取得が必要。商用目的の場合、観光査証15日マルチプルを取得し、カトマンズ市内のネパール政府移民局で切替えをする。
                          </td>
                          <td className="border border-slate-300 py-3 ">
                            申請時6ヶ月以上
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 py-3 ">
                            パキスタン・
                            <br />
                            イスラム共和国
                          </td>
                          <td className="border border-slate-300 py-3 ">○</td>
                          <td className="border border-slate-300 py-3 ">
                            事前に査証取得が必要。
                          </td>
                          <td className="border border-slate-300 py-3 ">
                            入国時6ヶ月以上
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 py-3 ">
                            バングラディシュ人民共和国
                          </td>
                          <td className="border border-slate-300 py-3 ">○</td>
                          <td className="border border-slate-300 py-3 ">
                            事前に査証取得が必要。
                          </td>
                          <td className="border border-slate-300 py-3 ">
                            入国時6ヵ月以上。未使用査証欄3頁以上
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 py-3 ">
                            フィリピン
                            <br />
                            共和国
                          </td>
                          <td className="border border-slate-300 py-3 ">×</td>
                          <td className="border border-slate-300 py-3 ">
                            30日以内の滞在は査証不要。
                            <br />
                            出国の航空[乗船]券（オープンチケットは不可）が必要。
                            <br />
                            15歳未満が単独入国または親以外と入国する場合、別条件有り。
                          </td>
                          <td className="border border-slate-300 py-3 ">
                            入国時6ヶ月＋滞在日数以上。未使用査証欄見開き2頁以上
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 py-3 ">
                            ブータン王国
                          </td>
                          <td className="border border-slate-300 py-3 ">○</td>
                          <td className="border border-slate-300 py-3 ">
                            事前にブータン旅行を扱う旅行会社で入国許可書を取得。
                            <br />
                            査証は入国時に発給。
                          </td>
                          <td className="border border-slate-300 py-3 ">
                            申請時6ヶ月以上
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 py-3 ">
                            ベトナム社会主義共和国
                          </td>
                          <td className="border border-slate-300 py-3 ">×</td>
                          <td className="border border-slate-300 py-3 ">
                            15日以内の観光、業務目的滞在は査証不要。
                            <br />
                            往復予約済航空券または第三国行きの航空券が必要。
                            <br />
                            前回のベトナム出国日から30日以上の期間が経過している必要あり。
                          </td>
                          <td className="border border-slate-300 py-3 ">
                            出国時6ヶ月以上
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 py-3 ">
                            香港
                            <br />
                            特別行政区
                          </td>
                          <td className="border border-slate-300 py-3 ">×</td>
                          <td className="border border-slate-300 py-3 ">
                            90日以内の観光、一般商務、外交・公用目的の滞在は査証不要。
                            <br />
                            出国のための航空券・乗船券が必要。
                          </td>
                          <td className="border border-slate-300 py-3 ">
                            1ヶ月以内の滞在は入国時1ヶ月+滞在日数以上。1ヶ月以上の滞在は入国時3ヶ月以上
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 py-3 ">
                            マカオ
                            <br />
                            特別行政区
                          </td>
                          <td className="border border-slate-300 py-3 ">×</td>
                          <td className="border border-slate-300 py-3 ">
                            90日以内の観光、一般商務、外交・公用目的の滞在は査証不要。
                          </td>
                          <td className="border border-slate-300 py-3 ">
                            30日以内の滞在は入国時30日+滞在日数以上。30日以上の滞在は入国時3ヶ月以上
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 py-3 ">
                            マレーシア
                          </td>
                          <td className="border border-slate-300 py-3 ">×</td>
                          <td className="border border-slate-300 py-3 ">
                            90日以内の観光、業務(商談・会議・視察)、外交・公用目的滞在は査証不要。出国用航空券が必要。
                          </td>
                          <td className="border border-slate-300 py-3 ">
                            入国時6ヶ月以上。未使用査証欄2頁以上
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 py-3 ">
                            ミャンマー
                            <br />
                            連邦共和国
                          </td>
                          <td className="border border-slate-300 py-3 ">○</td>
                          <td className="border border-slate-300 py-3 ">
                            事前に査証取得が必要。一部現地取得が可能。
                          </td>
                          <td className="border border-slate-300 py-3 ">
                            入国時6ヶ月以上
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 py-3 ">
                            モルディブ
                            <br />
                            共和国
                          </td>
                          <td className="border border-slate-300 py-3 ">×</td>
                          <td className="border border-slate-300 py-3 ">
                            30日以内の滞在は査証不要。入国時に空港で30日間滞在可能な許可が発給される（無料)。復路航空券、ホテル予約確認書または1日につきUS$15以上の滞在費支払能力証明（現金およびクレジットカード等）が必要。黄熱病感染地域から入国する場合、黄熱病予防接種証明書が必要。
                          </td>
                          <td className="border border-slate-300 py-3 ">
                            帰国時まで有効なもの
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 py-3 ">
                            ラオス人民
                            <br />
                            民主共和国
                          </td>
                          <td className="border border-slate-300 py-3 ">×</td>
                          <td className="border border-slate-300 py-3 ">
                            14泊15日以内の観光、業務目的の滞在は査証不要。
                          </td>
                          <td className="border border-slate-300 py-3 ">
                            入国時6ヶ月以上。未使用査証欄見開き2頁以上
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <br />

                  <ul className="list-disc pl-6">
                    <li>
                      条件は予告無く変更される場合があります。目的地への出入国の諸条件・必要書類はお客様ご自身でもご確認頂きますようお願いいたします。
                    </li>
                    <li>
                      出入国の諸条件・必要書類の情報に関し弊社では責任を負いかねますのでご了承くださいませ。
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
