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
          pageName="Work Permit"
          prevPage={{ pageName: t("home"), url: "/" }}
        />
        <div className="container mx-auto  ">
          <div className="grid grid-cols-1 gap-6 text-[#333333] font-medium">
            <div className="">
              <MainHeading text="労働許可証（ワークパーミット）" heading="1" />
              <div
                id="t-4"
                className="py-4 md:py-10 border-b-2 border-slate-200 "
              >
                <FadeHeading text="労働許可証とは" heading="2" />
                <div className="">
                  <div className="text-sm">
                    <p>
                      外国人がタイで就労する場合、タイ国で定められた、外国人就業規則法上、外国人はタイ国内での滞在許可およびタイ国内でワークパーミット（労働許可証）の取得が必要となります。滞在許可（ビザ）のみで、就労は出来ず、必ずワークパーミット（労働許可証）を取得しなければなりません。タイへ入国後、まず、ワークパーミット（労働許可証）の申請を行います。
                      <br />
                      ワークパーミット（労働許可証）の申請は、就業先の会社所在地を管轄する労働省またはONE
                      STOP SERVICEにて行います。
                      <br />
                      ワークパーミット（労働許可証）の取得は、タイに会社があれば誰でも出来るという容易なものではありません。就労する外国人の「会社」と「個人」の職歴や技術、技能、経験を総合的に総合的に判断して発行されます。その為、新卒や職務経験が無い方の申請、取得は難しくなります。タイへ駐在員を派遣される企業様、新規外国人を採用される企業様は十分注意が必要です。また、タイ国政府が定める外国人労働が全面的に禁止されている業種もございます。
                    </p>

                    <br />

                    <h3 className="py-4 font-bold text-lg text-blue-900">
                      ワークパーミット（労働許可証）発行許可審査の原則（ジェトロ資料・仏歴2547年外国人労働許可証発給規定より）
                      <br />
                    </h3>

                    <ul className="list-decimal px-4">
                      <li>
                        王国内の政治、宗教、経済及び社会面における安全保障。
                      </li>
                      <li>
                        タイ人が知識・能力を有し就労可能で、かつ王国内の労働市場の需要を満たして
                        いる職業について、外国人がこれを奪うことの防止。
                      </li>
                      <li>
                        その職位への就労を外国人に許可することの利益。例えば多額の外貨を持ち込み投資する、もしくは国内で支出する。あるいは多数のタイ人の雇用を創出する。あるいは国の経済開発に益する最新の学問知識について知識・熟練性が必要な職位であり、タイ人への移転がある。
                      </li>
                      <li>
                        就労許可を得た外国人がその仕事においてタイ人に機械、工具に係る知識、理解、方法、詳細、及び最新の学問知識面の知識・熟練性を移転することによるタイ人の職業能
                        力の開発。
                      </li>
                      <li>人道的原則。</li>
                    </ul>

                    <br />

                    <h3 className="py-4 font-bold text-lg text-blue-900">
                      タイ国内で外国人の就労が禁止されている業種（39）
                    </h3>

                    <ol className="list-decimal px-4">
                      <li>肉体労働、</li>
                      <li>
                        農業・畜産業・林業・漁業への従事。ただし、特殊技能業種、農業管理、海洋漁業船舶における単純肉体労働を除く、
                      </li>
                      <li>レンガ職人、大工その他の関連建設業者、</li>
                      <li>木彫品製造、</li>
                      <li>
                        自動車などの運転や運搬具の操縦。ただし、国際線のパイロットを除く、
                      </li>
                      <li>店員、</li>
                      <li>競売業、</li>
                      <li>
                        会計業としての監査役務の提供。ただし、臨時的な内部監査を除く、
                      </li>
                      <li>貴石類の切削や研磨、</li>
                      <li>理容師、美容師、</li>
                      <li>織物製造、</li>
                      <li>
                        アシ、藤、麻、竹を原料とするマットやその他の製品の製造、
                      </li>
                      <li>手すき紙製造、</li>
                      <li>漆器製造、</li>
                      <li>タイ特産楽器製造、</li>
                      <li>黒象眼細工、</li>
                      <li>金・銀その他の貴金属製品の製造、</li>
                      <li>石工、</li>
                      <li>タイ特産玩具の製造、</li>
                      <li>マットレス、上掛け毛布類の製造、</li>
                      <li>托鉢用鉢の製造、</li>
                      <li>絹手工芸品の製造、</li>
                      <li>仏像製造、</li>
                      <li>ナイフ製造、</li>
                      <li>紙製・布製の傘製造、</li>
                      <li>靴製造、</li>
                      <li>帽子製造、</li>
                      <li>仲介業、代理店業。ただし、国際貿易業務を除く、</li>
                      <li>
                        建設、木工に関し、企画、計算、組織、分析、計画、検査、監督助言をする業務。ただし、特殊技能を必要とする業務を除く、
                      </li>
                      <li>
                        建設業における設計、図面引き、コスト計算、助言をする業務、
                      </li>
                      <li>服仕立業、</li>
                      <li>陶磁器類の製造、</li>
                      <li>手巻きタバコ、</li>
                      <li>観光案内人および観光案内業、</li>
                      <li>行商・露店業、</li>
                      <li>タイ字のタイプ、</li>
                      <li>絹を手で紡ぐ業務、</li>
                      <li>事務員、秘書、</li>
                      <li>法律・訴訟に関する業務。</li>
                    </ol>

                    <br />

                    <p>
                      ワークパーミット（労働許可証）を取得せずに就労したり、禁止されている業種での就労した場合などは、罰則の対象となります。雇用する側、雇用される側も十分理解した上で、就労を行う事が重要です。
                    </p>

                    <br />

                    <div className="text-blue-900 font-semibold text-base">
                      ■ ワークパーミット（労働許可証）の有効期間
                    </div>

                    <p>
                      ワークパーミット（労働許可証）の認可期間は、申請内容より労働局が判定を行います。通常は1年発行されますが、内容によっては3カ月、6カ月、1年、2年（特別に条件を満たす企業の場合）発行となります。発行されたワークパーミット（労働許可証）の期限と滞在許可（ビザ）の期間は関係がありません。認可期間は更新が可能です。
                    </p>

                    <br />
                    <div className="text-blue-900 font-semibold text-base">
                      ■ ワークパーミット（労働許可証）の更新
                    </div>

                    <p>
                      ワークパーミット（労働許可証）取得後、翌年からは必要書類を揃え、タイ国内で更新が可能です。有効期限が過ぎてしまった場合、再度申請となります、ご注意下さい。
                    </p>

                    <br />

                    <div className="text-blue-900 font-semibold text-base">
                      ■ ワークパーミット（労働許可証）・兼任
                    </div>

                    <p>
                      企業担当者様によっては、子会社やグループ会社の職務を兼任されるケースがございます。職務を兼任する場合は最初にメインとなる会社での労働許可証を取得し、その後で兼任となる会社分を申請（様式トートー６）し、認可となれば同一の労働許可証に追加記載されます。B.O.I.奨励枠内の労働許可証については兼任を認められない場合がありますのでご注意下さい。
                    </p>

                    <br />

                    <div className="text-blue-900 font-semibold text-base">
                      ■その他
                    </div>

                    <p>
                      業務内容によっては、タイでの「就労」の枠から免除される活動がございます。
                    </p>

                    <ul>
                      <li>
                        15日以内の就労の場合（労務省宛に緊急業務届出の申請が必要）
                      </li>
                      <li>
                        また、2015年3月労働省の通達で、以下7項目が労働許可証の申請、取得が不要とされました。
                        <br />
                        1. 会議・セミナーへの参加
                        <br />
                        2. 展覧会・展示会の見学
                        <br />
                        3. 事業の創出を目的としない企業視察・商談
                        <br />
                        4. 特別講義・学術講義の聴講
                        <br />
                        5. 技術研修セミナー・講義の聴講
                        <br />
                        6. 展示会での商品購買
                        <br />
                        7. 自社役員会への列席
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                id="t-5"
                className="py-4 md:py-10 border-b-2 border-slate-200"
              >
                <FadeHeading text="必要書類" heading="2" />
                <div className="text-sm">
                  <div className="detail-sty">
                    <p>
                      タイ・バンコクでのワークパーミット（労働許可証）の申請は、会社の業種や形態(現地法人／駐在員事務所など)により､提出書類が異なります。雇用する会社側は、業務内容、規模、雇用証明する書類等が、労働者に対しては、役職、職務内容、学歴職歴、技術移転能力を証明する書類等が求められます。ここでは現地一般法人企業の申請時、必要書類をご説明いたします。
                    </p>

                    <p className="text-red-700 py-6">
                      ※下記リストは一般的な必要書類リストとなります。業務内容及び申請者の職歴によっては下記リスト以外に追加書類が必要となる場合がございます。また申請を受ける管轄役所によって必要書類が異なります。申請書類準備時に、弊社担当スタッフにご確認下さいませ。
                    </p>

                    <h3 className="py-4 font-bold text-lg text-blue-900">
                      1.ワークパーミット（労働許可証）申請必要書類・現地企業法人一般・（様式
                      トートー１）
                    </h3>

                    <ol className="list-decimal pl-4">
                      <li>労働許可証申請書TT.1(書式・トートー１)</li>
                      <li>写真（3㎝×４㎝）×３枚・６カ月以内に撮影したもの</li>
                      <li>
                        パスポート原本及び写し（写真ページ、Bビザページ、最新入国スタンプページ、TMカード）
                      </li>
                      <li>
                        労働省規定「雇用証明書」（書式有・弊社にて代行作成いたします）
                      </li>
                      <li>卒業証明書（英文）及び職歴証明書（英文）写し</li>
                      <li>タイ国医師からの健康診断書（第三期梅毒含む）原本</li>
                      <li>
                        会社登記証明書（ナンスーラプローン）、業務目的（ワットパソン）６カ月以内のもの・写し
                      </li>
                      <li>
                        タイ人役員IDカード写し及び日本人役員の労働許可証写し
                      </li>
                      <li>株式名簿・６カ月以内のもの写し</li>
                      <li>VAT登録書P.P.1(書式・ポーポー20，09,01)写し</li>
                      <li>
                        決算報告書（貸借対照表、損益計算書）最新のもの・写し
                      </li>
                      <li>
                        社会保険申告書（書式・ソーポーソー1-10）及び領収書・最新のもの写し
                      </li>
                      <li>
                        VAT申告書（書式・ポーポー30）及び申告書写し（1カ月～3カ月分）
                      </li>
                      <li>会社所在地地図</li>
                      <li>
                        その他事業ライセンス、事業実績証明等（もし有れば）写し
                      </li>
                    </ol>

                    <br />

                    <ul className="list-square">
                      <li>
                        ※
                        会社関係の書類はすべて会社の認証（社印）及び、会社役員の署名が必要となります。
                      </li>
                      <li>※ 2,3,5,6は申請者様にてご用意いただきます。</li>
                      <li>
                        ※
                        ワークパーミット（労働許可書）は会社登記の業務目的ではなく税務署に申請するVAT登録書内の業務内容を重視します。
                      </li>
                      <li>
                        ※
                        申請から取得にかかる時間は、管轄区域の労働省により異なりますが、申請後10日間～４週間ほど要します。ONE
                        STOP SERVICEは即日決裁されます。
                      </li>
                    </ul>

                    <br />

                    <h3 className="py-4 font-bold text-lg text-blue-900">
                      ワークパーミット（労働許可証）申請更新（2年目以降）必要書類・現地企業法人一般・（様式
                      トートー５）
                    </h3>

                    <ol className="pl-4 list-decimal">
                      <li>労働許可証申請書TT.1(書式・トートー5)</li>
                      <li>写真（3㎝×４㎝）×３枚・６カ月以内に撮影したもの</li>
                      <li>
                        パスポート原本及び写し（写真ページ、Bビザページ、最新入国スタンプページ、TMカード）
                      </li>
                      <li>
                        労働省規定「雇用証明書」（書式有・弊社にて代行作成いたします）
                      </li>
                      <li>タイ国医師からの健康診断書（第三期梅毒含む）原本</li>
                      <li>
                        会社登記証明書（ナンスーラプローン）、業務目的（ワットパソン）６カ月以内のもの・写し
                      </li>
                      <li>
                        タイ人役員IDカード写し及び日本人役員の労働許可証写し
                      </li>
                      <li>株式名簿・６カ月以内のもの写し</li>
                      <li>
                        個人所得確定申告書P.N.D.91(ポーゴードー91)及び領収書・最新のもの写し
                      </li>
                      <li>
                        決算報告書（貸借対照表、損益計算書）最新のもの写し
                      </li>
                      <li>
                        社会保険申告書（書式・ソーポーソー1-10）及び領収書・最新のもの写し
                      </li>
                      <li>
                        VAT申告書（書式・ポーポー30）及び申告書・直近3カ月分のもの写し
                      </li>
                    </ol>

                    <br />

                    <ul className="list-square">
                      <li>
                        ※
                        会社関係の書類はすべて会社の認証（社印）及び、会社役員の署名が必要となります。
                      </li>
                      <li>※ 2,3,5は申請者様にてご用意いただきます。</li>
                    </ul>
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
              <div
                id="t-6"
                className="py-4 md:py-10 border-b-2 border-slate-200"
              >
                <FadeHeading text="タイ国内での転職・退職" heading="2" />
                <h3 className="py-4 font-bold text-lg text-blue-900">
                  タイ国内での転職
                </h3>
                <div className="text-sm">
                  <div className="detail-sty">
                    <p>
                      タイ国内で転職をする場合、既存のワークパーミット（労働許可証）ビザ手続きについて認識しておく必要がございます。
                      <br />
                      退職後一旦タイ国外へ出国し、新たな滞在許可証（ノンイミグランドBビザ）を取得し再入国してから転職する方法と、出国せずにタイ国内で転職手続きが可能な場合がございます。
                      <br />
                      タイ国外に出国せずに、転職、ワークパーミット（労働許可証）ビザ切替手続きを行う場合、申請する時間が限られる為、事前にしっかりと書類を用意する必要がございます。
                    </p>

                    <br />

                    <p className="font-semibold text-base">
                      タイ国内でビザを切り替える際の手順は以下となります。
                    </p>

                    <ul className="pl-4 list-disc">
                      <li>
                        現在の勤務先の退職前から、新しい会社側の書類を準備
                      </li>
                      <li>
                        現在の勤務先の就労ビザ、ワークパーミット（労働許可証）をキャンセルする
                      </li>
                      <li>
                        滞在期限が残っている間に、新しい会社の書類でワークパーミット（労働許可証）及び就労ビザの滞在延長を申請
                      </li>
                    </ul>

                    <br />

                    <p>
                      ケースによってはタイ国内で切替が出来ない場合もございます。転職を検討されている方、また採用を検討されている企業様は、転職、採用の前に切替手続きについてお問合せ下さい。
                      <br />
                      転職時の手続きを円滑に行うには、所属先及び転職先企業様のご協力が不可欠です。退職される場合は、所属先の規則に基づき、正式な手順で手続きを進めて行く事をお勧めいたします。
                    </p>
                  </div>
                </div>
                <h3 className="py-4 font-bold text-lg text-blue-900">
                  退職・帰国
                </h3>
                <div className="box-sub-detail text-sm">
                  <div className="detail-sty">
                    <p>
                      退職した場合、または日本へ帰任となった場合、必ず既存の滞在許可（ビザ）とワークパーミット（労働許可証）をキャンセルする必要がございます。キャンセル手続きを行わずに出国すると、今後タイで就業手続きを進める際に、過去の記録と照合され、問題になる可能性がございます。退職する、本帰国になる場合はしっかりとキャンセルの手続きを行いましょう。
                      <br />
                      キャンセル手続きは、ワークパーミット（労働許可証）は、所属している会社へ返却いただき、会社側が労働省へキャンセルの報告を行います（特に定められてた規定はありませんが、速やかに手続きを行う事をお勧めいたします）滞在許可（ビザ）キャンセルは、必要書類を揃え、移民局またはワンストップサービスへ退職日の申請とキャンセルを行います。申請時に発行された滞在期間までに出国が必要となります。
                      <br />
                      退職される場合、キャンセル手続きとは他に、最終勤務先より、在職証明、個人所確定申告書（書式・ポーゴード-91）、労働許可証写しを入手する事をお勧めいたします。これらの書類は、再度タイで就業手続きをする際に、必要になります。大切に保管しておきましょう。
                    </p>
                  </div>
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
              <div
                id="t-7"
                className="py-4 md:py-10 border-b-2 border-slate-200"
              >
                <FadeHeading
                  text="BOI認可企業・ワンストップサービス"
                  heading="2"
                />
                <h3 className="py-4 font-bold text-lg text-blue-900">
                  ワンストップサービス(One Stop Service)
                </h3>
                <div className="detail-sty text-sm">
                  外国人のワークパーミット（労働許可証）と滞在許可（ビザ）の申請は、一般現地法人企業が労働省や移民局で行う方法と、ワンストップサービスセンターで申請する方法があります。一般現地法人の申請はそれぞれの項目でご説明さしあげましたが、ここではワンストップサービスについて説明いたします。
                  <br />
                  ワンストップサービスは外国人のワークパーミット（労働許可証）及び滞在許可（ビザ）の申請と認可を一本化するために、それらを管轄する、労働省、移民局、B.O.Iの出先機関を1カ所にまとめ、手続きの優遇サービスを行う機関です。通常の一般企業での場合、申請は個々の管轄機関へ申請を行う必要がありますが、ワンストップサービスで申請の場合、ワークパーミット（労働許可証）滞在許可（ビザ）の新規申請、更新、延長手続き処理を行う事が可能です。すなわち、ワンストップサービスですべての手続きが完結いたします。ワンストップサービスの優遇サービスはすべての企業が利用できるのではなく、ある一定の対象企業のみとなります。主な対象企業として、B.O.I,工業団地公社（IEAT）,振込資本又は資産額が3,000万バーツ以上の企業、駐在員事務所、支店等がございます。
                </div>

                <h3 className="py-4 font-bold text-lg text-blue-900">
                  B.O.I 認可企業
                </h3>
                <div className="detail-sty text-sm">
                  <p>
                    ワンストップサービスの概要について説明してまりましたが、ここでは、その対象企業となる「B.O.I認可企業」について説明いたします。
                    <br />
                    B.O.I（Board of
                    Investment）、タイ投資委員会。タイ国投資奨励法に則り、B.O.I.の認可企業になれば、様々な優遇制度を受ける事が可能です。
                    <br />
                    輸入関税、法人税、などの税制面、株所有権、土地所有権等で権利と恩典など優遇措置がありますまた、「ワンストップサービス」でもご説明さしあげたように、
                    <br />
                    ワークパーミット（労働許可証）、滞在許可（ビザ）取得手続きの優遇も受ける事が可能です。
                  </p>

                  <br />

                  <p>
                    以下、B.O.I認可企業、「ワンストップサービス」での就労者、ワークパーミット（労働許可書）滞在許可（ビザ）の申請方法と必要書類一例となります。
                  </p>
                </div>
                <h3 className="py-4 font-bold text-lg text-blue-900">
                  「ワンストップサービス」B.O.I認可企業・ワークパーミット（労働許可証）・滞在許可（ビザ）必要書類
                </h3>

                <div className="text-red-700 text-sm pb-6">
                  ※下記リストは一般的な必要書類リストとなります。業務内容及び申請者の職歴によっては下記リスト以外に追加書類が必要となる場合がございます。申請書類準備時に、弊社担当スタッフにご確認下さいませ。
                </div>
                <div className="text-xs sm:text-sm">
                  <div className="table-one text-base">
                    <table className="w-full ">
                      <tbody>
                        <tr className=" bg-blue-900 text-white">
                          <th className="w-[20%] py-6">行程</th>
                          <th className="w-[10%] border-x border-white">
                            期間
                          </th>
                          <th>参考事項</th>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <br />

                  <div className="table-two">
                    <table className="w-full border border-slate-300">
                      <tbody>
                        <tr>
                          <th className="w-[20%] py-6 bg-blue-900 text-white">
                            タイ入国
                          </th>
                          <td className="text-center w-[10%] border border-slate-300"></td>
                          <td>
                            <p>空港で90日間の滞在許可発行</p>
                            <p>※タイ国外でノンイミグラントBビザ取得</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="flex justify-center  py-6 text-red-700">
                    <FaArrowCircleDown size={40} />
                  </div>

                  <div className="table-two">
                    <table className="table table-bordered w-full border border-slate-300">
                      <tbody>
                        <tr>
                          <th className="w-[20%] py-6 bg-blue-900 text-white">
                            STEP①
                            <br />
                            ポジションリクエスト
                          </th>
                          <td className="text-center w-[10%] border border-slate-300">
                            約５日間
                          </td>
                          <td>
                            <p>
                              B.O.I.認可会社で外国人を雇用する場合、就任する役職名、業務内容をB.O.I.に申請し認可が必要となります。申請はすべてウェッブ上で電子申請を行います。
                            </p>
                            <p>≪STEP① ポジションリクエスト・必要書類≫</p>
                            <ul>
                              <li>
                                会社登記証明書（ナンスーラプローン）、営業目的（ワトゥパソン）：６ヶ月以内のもの写し
                              </li>
                              <li>株主名簿：６ヶ月以内もの写し</li>
                              <li>会社組織図写し</li>
                              <li>技術移転計画書</li>
                              <li>
                                決算報告書（貸借対照表、損益計算書）：最新分
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="flex justify-center  py-6 text-red-700">
                    <FaArrowCircleDown size={40} />
                  </div>

                  <div className="table-two ">
                    <table className="table table-bordered  w-full border border-slate-300">
                      <tbody>
                        <tr>
                          <th className="w-[20%] py-6 bg-blue-900 text-white">
                            STEP②
                            <br />
                            パーソナルリクエスト
                          </th>
                          <td className="text-center w-[10%] border border-slate-300">
                            約３日間
                          </td>
                          <td className="">
                            <p>
                              STEP①で認可を得た役職に対し、実際に就労する外国人の姓名で申請して認可を得ます。
                            </p>
                            <p>≪STEP②・パーソナル申請・必要書類≫</p>
                            <ol className="no-margin">
                              <li>★パスポート（ノンイミグラントBビザ）</li>
                              <li>★英文卒業証明書</li>
                              <li>★英文職歴証明書</li>
                              <li>★写真（３cm×４cm）</li>
                            </ol>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="flex justify-center  py-6 text-red-700">
                    <FaArrowCircleDown size={40} />
                  </div>

                  <div className="table-two">
                    <table className="table table-bordered w-full border border-slate-300">
                      <tbody>
                        <tr>
                          <th className="w-[20%] py-6 bg-blue-900 text-white">
                            B.O.I.推薦状発行
                          </th>
                          <td className="text-center w-[10%] border border-slate-300"></td>
                          <td>
                            認可されるとB.O.I.より労働省、移民部宛の推薦状が発行されます。この推薦状には、個人名、役職名、認可期限が明記されます。
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="flex justify-center  py-6 text-red-700">
                    <FaArrowCircleDown size={40} />
                  </div>

                  <div className="table-two">
                    <table className="table table-bordered w-full border border-slate-300">
                      <tbody>
                        <tr>
                          <th className="w-[20%] py-6 bg-blue-900 text-white">
                            ワークパーミット（労働許可証）・滞在ビザの申請・取得
                          </th>
                          <td className="text-center w-[10%] border border-slate-300">
                            1日
                          </td>
                          <td>
                            <p>
                              B.O.I.からの推薦状を基に「ワンストップサービス」に出向き、就労者のワークパーミット（労働許可証）と滞在許可（ビザ）を申請・取得します。認可期限は双方共にB.O.I.の推薦状に順じますが、役職によって最大2年まで発行されます。申請は、B.O.Iの推薦状発行日から15日以内に行う事が必要です。同日に合わせて、リエントリーパーミットの申請取得も可能です。
                            </p>
                            <p>≪必要書類≫</p>
                            <ul>
                              <li>
                                ビザ申請用紙TM.7(弊社にて代行作成いたします)
                              </li>
                              <li>B.O.I.推薦状</li>
                              <li>
                                会社登記証明書（ナンスーラプローン）、営業目的（ワトゥパソン）：６ヶ月以内のもの写し
                              </li>
                              <li>
                                代表権者（署名者）の身分証明、労働許可証 写し
                              </li>
                              <li>★パスポート原本及び写し</li>
                              <li>
                                ★写真（３cm×４cm / 3枚）、写真（4㎝×6㎝/２枚）
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="fa-sty">
                    <i className="fa fa-arrow-down" aria-hidden="true"></i>
                  </div>

                  <div className="table-two">
                    <table className="table table-bordered w-full border-slate-300 border">
                      <tbody>
                        <tr>
                          <th className="w-[20%] py-6 bg-blue-900 text-white">
                            90日レポート（居住地報告）
                          </th>
                          <td width="100" className="text-center w-[10%]">
                            １日
                          </td>
                          <td className="border border-slate-300">
                            90日を超えて継続して滞在する者は各90日毎に報告
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
      </div>
    </>
  );
}
