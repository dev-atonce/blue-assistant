import FadeHeading from "@/components/website/atom/heading/FadeHeading";
import MainHeading from "@/components/website/atom/heading/MainHeading";
import Cover from "@/components/website/layout/Cover";
import CoverVisa from "@/components/website/layout/CoverVisa";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaEye } from "react-icons/fa";

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
                id="t-1"
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
                id="t-2"
                className="py-4 md:py-10 border-b-2 border-slate-200"
              >
                <FadeHeading
                  text="就労ビザ・ノンイミグラント（B）ビザの取得"
                  heading="2"
                />
                <div className="flex flex-col gap-2  text-sm sm:text-base">
                  <span>日本で取得する場合</span>
                  <span>●必要書類</span>
                  <ul>
                    <li>・パスポート （有効残存期間６ヶ月以上）</li>
                    <li>
                      ・申請書原本（所定書式有・タイ大使館HPよりダウンロード可能）
                    </li>
                    <li>・写真（３cm×4.5cm / 1葉）</li>
                    <li>・タイ側・雇用主からの英文招聘状原本（タイ側準備）</li>
                    <li>
                      ・英文履歴書
                      （所定書式有・タイ大使館HPよりダウンロード可能）
                    </li>
                    <li>・航空券又は予約証明書 （往復又は片道）</li>
                    <li>
                      ・以前タイでの就労したことがある申請者は、以前の労働許可書コピー1部
                    </li>
                    <li>・聘招会社の会社登記証明書（ナンスー ラプローン）</li>
                    <li>
                      ・労働許可事前認可（書式：トートー３）
                      <br />{" "}
                      （※就業目的や15日以上の長期商用の場合に求められる場合があります）
                    </li>
                  </ul>
                  <span>
                    ＊トートー３は事前にタイ国労働省へ申請し、取得には１～３週間を要します。
                  </span>
                  <span>
                    審査に際し上記以外の他の書類を求められる事があります。
                  </span>
                  <span>
                    必要書類は各大使館、領事館によって異なる場合がございますので、詳細は申請予定のタイ国大使館ホームページ
                    (お役立ちリンク) をご参照下さい。
                  </span>
                  <span>
                    ★ビザ無しでタイへ入国後、タイ国内でノンイミグラント(B)ビザへ変ができる場合がございます。詳しい詳細はお問合せ下さいませ。
                  </span>
                </div>
              </div>
              <div
                id="t-3"
                className="py-4 md:py-10 border-b-2 border-slate-200"
              >
                <FadeHeading text="２年目以降の更新" heading="2" />
                <div className="relative">
                  <Image
                    src={"/img/visa-workpermit/work-thailand-flow-2.png"}
                    alt=""
                    width={1900}
                    height={1200}
                    className="w-full "
                  ></Image>
                  <Link
                    href="/visa-workpermit/work-in-thailand#t-2"
                    className="hover:scale-110 absolute top-[22%] left-[90%] text-blue-500"
                  >
                    <FaEye size={20} />
                  </Link>
                  <Link
                    href="/visa-workpermit/work-in-thailand#t-2"
                    className="hover:scale-110 absolute top-[22%] left-[50%] text-blue-500"
                  >
                    <FaEye size={20} />
                  </Link>
                  <Link
                    href="/visa-workpermit/work-in-thailand#t-2"
                    className="hover:scale-110 absolute top-[22%] left-[23%] text-blue-500"
                  >
                    <FaEye size={20} />
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
