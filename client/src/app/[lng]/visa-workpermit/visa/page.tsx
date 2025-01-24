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
          pageName="Visa"
          prevPage={{ pageName: t("home"), url: "/" }}
        />
        <div className="container mx-auto  ">
          <div className="grid grid-cols-1 gap-6 text-[#333333] font-medium">
            <div className="">
              <MainHeading text="ビザ" heading="1" />
              <div
                id="t-8"
                className="py-4 md:py-10 border-b-2 border-slate-200 "
              >
                <FadeHeading text="ビザとは" heading="2" />
                <div className="box-sub-detail text-sm">
                  <div className="detail-sty">
                    タイに入国する場合、30日以内の観光目的での入国以外、タイに滞在する為の入国ビザが必ず必要となります。
                    <br />
                    タイで就労する目的で入国する場合、タイでロングステイを目的に入国する場合、タイに留学目的で入国する場合、
                    <br />
                    すべて相当するビザの取得が必要です。入国ビザはタイ入国する前に、タイ国外にあるタイ国大使館や領事館で申請し、取得が必要です。
                    <br />
                    入国ビザはパスポート内にスタンプやシールの形で発行され、ビザ種類、番号、発行日、有効期限、入国許可回数などが記載されています。
                    <br />
                    入国ビザを取得後、タイへ渡航となります。
                    <br />
                    日本で入国ビザの申請、取得をされる方は、各在タイ国大使館ホームページ(
                
                    <Link href="/visa-workpermit/links" className="text-blue-800">お役立ちリンク</Link>
                    )を参照下さい。
                    <br />
                    詳細につきましては、在日タイ国大使館ホームページ(
                    <Link href="/visa-workpermit/links" className="text-blue-800">お役立ちリンク</Link>
                    )をご参照下さい。日本以外のタイ国外でも取得が可能です。申請方法に関しましては、各国の在タイ大使館ホームページ(
                    <Link href="/visa-workpermit/links" className="text-blue-800">お役立ちリンク</Link>
                    )をご確認下さい。
                  </div>
                </div>
              </div>
              <div
                id="t-9"
                className="py-4 md:py-10 border-b-2 border-slate-200"
              >
                <FadeHeading text="ビザの種類" heading="2" />
                <p className="py-5">以下、主なタイ入国ビザの一覧となります。</p>
                <div className="text-sm">
                  <table className="table table-bordered border border-slate-300">
                    <tbody>
                      <tr className="bg-blue-900 text-white font-semibold">
                        <th className="border-x border-white w-[10%] py-6">
                          入国ビザ
                        </th>
                        <th className="border-x border-white w-[10%]">
                          ビザの種類
                        </th>
                        <th className="border-x border-white w-[10%]">
                          ビザ
                          <br />
                          カテゴリー
                        </th>
                        <th className="border-x border-white w-[10%]">
                          滞在
                          <br />
                          期間
                        </th>
                        <th className="border-x border-white w-[60%]">詳細</th>
                      </tr>
                      <tr className="border border-slate-300">
                        <td className="text-center  py-6">NO VISA (ビザ無)</td>
                        <td className="text-center">No Visa</td>
                        <td className="text-center">-</td>
                        <td className="text-center">最長30日間</td>
                        <td className="text-left">
                          ツアーなどの観光目的で入国される方が対象のNO VISA
                          (ビザ免除)です｡
                          <br />
                          入国時残存６ヶ月以上有効なパスポートを所持し､帰国もしくはタイ国から次の国に向かう航空券を持っていることが条件です｡滞在ビザは入国時最長30日の滞在許可が発行されます。（陸路の場合は異なります）タイ入国後、最大30日間滞在延長申請が可能。観光目的ではなく”ノービザでの出国を繰り返す”
                          ケースがございますが、入国時に「タイ入国拒否」される可能性がございます。
                          <br />
                          観光目的以外は必ず相当するビザを取得してから入国下さい。
                        </td>
                      </tr>
                      <tr className="border border-slate-300">
                        <td className="text-center  py-6">ツーリストビザ</td>
                        <td className="text-center">Tourist Visa</td>
                        <td className="text-center">-</td>
                        <td className="text-center">最長60日間</td>
                        <td className="text-left">
                          ツアーなどの観光目的で、30日以上滞在予定の方が対象の観光ビザです。タイ入国後、最大30日間滞在延長申請が可能。
                        </td>
                      </tr>
                      <tr className="border border-slate-300">
                        <td className="text-center  py-6">就労ビザ</td>
                        <td className="text-center">Non-Immigrant Visa</td>
                        <td className="text-center">B</td>
                        <td className="text-center">最長90日間</td>
                        <td className="text-left">
                          タイに就労目的で入国する場合（駐在員など就業を目的に入国する場合、あるいは商用で来タイする場合）の入国ビザです。タイ入国時に最長90日間まで滞在許可が発行され、滞在期間内に、タイ国内で滞在延長（最長1年可能）可能。その後1年枚に更新、延長が可能となります。
                          <br />
                          タイで就労する場合、就労ビザと労働許可証が必要となります。必ず労働許可証の申請取得をお願いいたします。
                        </td>
                      </tr>
                      <tr className="border border-slate-300">
                        <td className="text-center  py-6">留学ビザ</td>
                        <td className="text-center">Non-Immigrant Visa</td>
                        <td className="text-center">ED</td>
                        <td className="text-center">最長90日間</td>
                        <td className="text-left">
                          EDビザは留学やタイ語学校就学の場合に必要な入国ビザです。
                          <br />
                          タイ入国後の滞在延長は、原則として就学許可期間迄で、最長１年間可能。その後１年毎に更新･延長が可能。語学学校は３ヶ月毎の延長となります。
                        </td>
                      </tr>
                      <tr className="border border-slate-300">
                        <td className="text-center  py-6">配偶者・家族ビザ</td>
                        <td className="text-center">Non-Immigrant Visa</td>
                        <td className="text-center">O</td>
                        <td className="text-center">最長90日間</td>
                        <td className="text-left">
                          家族ビザ(Oビザ)は駐在員の家族がタイ国で駐在員（世帯主）と同居する場合に使用します｡タイ入国後滞在延長は世帯主と同じ期間の滞在許可が発行されます。
                        </td>
                      </tr>
                      <tr className="border border-slate-300">
                        <td className="text-center  py-6">
                          タイ人の 配偶者ビザ
                        </td>
                        <td className="text-center">Non-Immigrant Visa</td>
                        <td className="text-center">O</td>
                        <td className="text-center">-</td>
                        <td className="text-left">
                          タイ人の配偶者、扶養家族に対してのタイ入国ビザです。
                        </td>
                      </tr>
                      <tr className="border border-slate-300">
                        <td className="text-center  py-6">ロング ステイビザ</td>
                        <td className="text-center">Non-Immigrant Visa</td>
                        <td className="text-center">O-A</td>
                        <td className="text-center">-</td>
                        <td className="text-left">
                          就業目的ではない満50歳以上の外国人の為の優遇ビザとなります。取得すると一年間の滞在許可を受けることができ、以降各一年毎に更新・延長ができます。タイまたは日本で取得が可能。
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                id="t-10"
                className="py-4 md:py-10 border-b-2 border-slate-200"
              >
                <FadeHeading text="必要書類" heading="2" />
                <h3 className="py-4 font-bold text-lg text-blue-900">
                  ビザ必要書類
                </h3>
                <div className="text-sm">
                  <div className="box-sub-detail">
                    <div className="detail-sty">
                      <p>
                        タイ・バンコクでビザを申請する場合の必要書類について説明いたします。入国や滞在延長をする場合は、初めての方でも安心しての手続きができるよう弊社が申請書の作成や予約等を代行しサポートいたします。また、法人様企業様のビザ代行手配も行っております。
                      </p>
                      <br />
                      <p>
                        タイ入国後、ビザ（滞在期間）が過ぎる前に、タイ国内にて延長手続きを行います。ビザの延長は移民局（住居地、会社所在地によって管轄が異なります）またはONE
                        STOP
                        SERVICEにて、ビザ有効期限30日前より申請が可能となります。弊社では主に一般企業及びBOI,IEAT企業様のビザ延長手続きのお手伝いをさせていただいております。以下、主要なビザ延長、必要書類リストとなります。
                      </p>
                      <br />
                      <div className="text-red-700">
                        ※下記リストは一般的な必要書類リストとなります。業務内容及び申請者の職歴によっては下記リスト以外に追加書類が必要となる場合がございます。また必要書類は予告なく変更、追加になる事がございます。申請書類準備時に、弊社担当スタッフにご確認下さいませ。
                      </div>
                      <br />
                      <h3 className="py-4 font-bold text-lg text-blue-900">
                        1.
                        就労ビザ・ノンイミグラントビザ　カテゴリーB（一般現地法人）申請必要書類
                      </h3>
                    </div>
                    <ol className="list-decimal pl-5">
                      <li>ビザ申請用紙TM.7(弊社にて代行作成いたします)</li>
                      <li>
                        申請者のパスポート原本及び写し（写真ページ、Bビザページ、最新入国（滞在延長）スタンプページ、TMカードページ）
                      </li>
                      <li>
                        外国人雇用証明書(S.T.M1) (弊社にて代行作成いたします)
                      </li>
                      <li>申請者の労働許可証原本及び写し</li>
                      <li>
                        会社登記証明書（ナンスーラプローン）、業務目的（ワトゥパソン）:6カ月以内に発行された認証謄本原物
                      </li>
                      <li>株式名簿:6カ月以内に発行された認証謄本原物</li>
                      <li>
                        決算報告書（貸借対照表、総益計算書）、法人所得税申告書P.N.D50(ポーゴード50）及び領収書、関連書類:S.B.C.3(ソボーチョー3),最新の認証謄本原物
                      </li>
                      <li>
                        個人所得源泉徴収税申告書P.N.D.1(ポーゴードー１)及び領収書・直近3カ月分・認証謄本原物
                      </li>
                      <li>
                        個人所得確定申告書P.N.D.91(ポーゴードー91)及び領収書・最新の認証謄本原物
                      </li>
                      <li>
                        社会保険申告書S.P.S1-10(ソーポーソー1-10)及び領収書・直近3カ月分
                      </li>
                      <li>
                        VAT申告書PP.30(ポーポー30)及び領収書・直近3カ月分・認証謄本原物
                      </li>
                      <li>移民局指定フォーム（弊社にて代行作成いたします）</li>
                      <li>会社所在地の地図・賃貸契約書写し</li>
                      <li>
                        移民局指定フォーム S.T.M2 (ソートーモ2)
                        (弊社にて代行作成いたします)
                      </li>
                      <li>
                        写真
                        <div>
                          ① 会社入り口（会社看板を含んだもの）
                          <br />
                          ② 会社入居ビルの写真（外観および入居案内ボード）
                          <br />
                          ③ 会社内のタイスタッフ写真
                          <br />
                          ④ 外国人スタッフ写真
                          <br />
                          ⑤
                          会社役員と申請者が共に移った写真（会社看板背景に撮影）
                          <br />⑥ 申請者と申請代行者が共に移った写真
                        </div>
                      </li>
                      <li>外国人名簿（弊社にて代行作成いたします）</li>
                      <li>写真（４×６cm／２枚）</li>
                    </ol>
                    <br />
                    <div className="text-base font-semibold">補足</div>
                    <br />
                    <ul className="">
                      <li>
                        ※
                        リスト内「認証謄本原物」と記載されている会社関係書類は、相当する各役所からの認証印が必要。ONE
                        STOP
                        SERVICEの場合は各書類の写しと各領収書原本の提示があれば役所の承認は不要
                      </li>
                      <li>※ 書類2，4，17は申請者ご本人で準備が必要</li>
                      <li>
                        ※
                        ビザ（滞在許可）はパスポート有効期限までしか発行されません。申請時パスポート有効期限を必ずご確認下さい。ビザ申請、更新時にパスポート有効期限が切れる方は、予めパスポートの更新手続きを完了下さい。
                      </li>
                      <li>
                        ※
                        申請所要時間は、移民局では審査期間30日間を経て、認可となれば、１年間の滞在許可（滞在ビザ）発行となります。一方ONE
                        STOP SERVICEは即日決裁されます。
                      </li>
                      <li>
                        ※ 必要書類は、初年度及び２年目以降更新時共に同じです。
                      </li>
                    </ul>
                    <br />
                    <h3 className="py-4 font-bold text-lg text-blue-900">
                      2. 配偶者・家族・ノンイミグラントビザ　カテゴリーO
                    </h3>
                    <ol className="pl-5 list-decimal">
                      <li>申請用紙TM.７</li>
                      <li>写真4×6㎝/２枚</li>
                      <li>申請者及び配偶者（夫）のパスポート及び写し</li>
                      <li>配偶者（夫）労働許可証原及び写し</li>
                      <li>
                        配偶者（夫）の個人所得源泉徴収税申告書P.N.D.1(ポーゴードー１)及び領収書・直近3カ月分・認証謄本原物
                      </li>
                      <li>
                        配偶者（夫）の個人所得確定申告書P.N.D.91(ポーゴードー91)及び領収書・最新の認証謄本原物
                      </li>
                      <li>
                        配偶者（夫）の会社登記証明書（ナンスーラプローン）:6カ月以内に発行された認証謄本原物
                      </li>
                      <li>
                        配偶者（夫）の株式名簿:6カ月以内に発行された認証謄本原物
                      </li>
                      <li>
                        家族証明・原本と写し・６カ月以内に日本で発行を受けた戸籍謄本を基に在タイ日本大使館で申請受領、タイ国外務省認証印が必要）
                      </li>
                    </ol>
                    <br />
                    <ul className="list-square">
                      <li>
                        ※ 2,3,4,9書類はすべて申請者本人にご用意いただきます。
                      </li>
                      <li>
                        ※
                        書類が揃っていれば即日決済され、配偶者（夫）の滞在許可期限まで滞在が許可されます。
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="t-11"
              className="py-4 md:py-10 border-b-2 border-slate-200"
            >
              <FadeHeading
                text="再入国許可・リエントリーパーミット"
                heading="2"
              />

              <h3 className="py-4 font-bold text-lg text-blue-900">
                リエントリーパーミット/再入国許可
              </h3>
              <div className="detail-sty text-sm">
                <p>
                  皆様が取得しているビザ(滞在許可）は、滞在期限内であっても一時帰国や業務渡航でタイを出国した時点で失効してしまいます。現在お持ちのビザを失効させず、タイに再入国した場合、リエントリーパーミット（再入国許可）の取得が必要となります。リエントリーパーミットの取得を忘れて出国し、入国時にノービザでの入国と処理され、滞在ビザ（1年）の手続きを一からやり直さなければならないケースが多くあります。充分にご注意下さい。
                </p>

                <br />

                <p>
                  リエントリーパーミット取得方法
                  <br />
                  ① 入国管理局またはワンストップサービス
                  <br />
                  ② スワンナプーム国際空港（4階出発フロア）
                  <br />
                  　（チェンマイ、プーケットの空港は日中のみ可能）
                </p>

                <br />

                <p>
                  リエントリーパーミット種類
                  <br />
                  シングル・出入国1回毎に再取得が必要
                  <br />
                  ・発行手数料　1,000バーツ
                </p>

                <p>
                  マルチプル・ビザの有効期限内、何度でも出入国が可能
                  <br />
                  ・発行手数料　3,800バーツ
                </p>

                <br />

                <p>
                  必要書類
                  <br />
                  パスポート原本、パスポート、写真（4×6cm）一葉、申請用紙
                </p>

                <br />

                <p>
                  弊社にてリエントリーパーミットの申請代行を行っております。お気軽にお問合せ下さいませ。
                </p>
              </div>

              <div className="text-center py-10">
                <Link
                  href="/#contact"
                  className="hover:bg-blue-700 hover:scale-90 transition-all py-4 px-4 bg-blue-900 text-white font-semibold rounded-lg"
                >
                  お問い合わせはこちら
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
