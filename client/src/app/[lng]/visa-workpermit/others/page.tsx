import FadeHeading from "@/components/website/atom/heading/FadeHeading";
import MainHeading from "@/components/website/atom/heading/MainHeading";
import Cover from "@/components/website/layout/Cover";
import CoverVisa from "@/components/website/layout/CoverVisa";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaArrowCircleDown, FaEye } from "react-icons/fa";

const title = {
  jp: "その他",
  en: "Others",
  th: "อื่นๆ",
};

const ContentJP = () => {
  return (
    <div className="grid grid-cols-1 gap-6 text-[#333333] font-medium">
      <div className="">
        <MainHeading text="90日レポート・その他" heading="1" />
        <div id="t-12" className="py-4 md:py-10 border-b-2 border-slate-200 ">
          <FadeHeading text="90日レポート" heading="2" />
          <p className="py-6 text-sm">
            ブルーアシスタンス株式会社ではタイ（バンコク）にて90日レポートの代行を行っております。再入国やリエントリーパーミットについても初めての方でも安心して手続きができるように、申請のサポートや代行をしております。
          </p>
          <h3 className="py-4 font-bold text-lg text-blue-900">90日レポート</h3>
          <div className="detail-sty text-sm">
            <p>
              主にノンイミグラントビザ（B、O、EDなど）を取得している外国人が、タイ国に90日以上出国しない場合、入国管理局へその移住地を報告する義務がございます。90日レポートを怠ると罰金の対象となります。申告は、滞在初年度、初回は、滞在延長申請をした日から起算して90日後が初回の90日レポートの時期になります。2回目以降は、タイへ入国日または前回の90日レポートから換算し申告が必要です。
            </p>

            <br />

            <p>
              90日レポート申告方法
              <br />
              ① 入国管理局における申告
              <br />
              ② 郵送
              <br />③ オンライン申請
            </p>

            <br />

            <p>
              申告は各90日目前の15日間、後7日間の間に、ご本人または代理人が直接入国管理局（滞在延長を行った入国管理局での申告が必要）またはワンストップサービスで行います。
              <br />
              ②の郵送はお勧めいたしません。
              <br />
              ③のオンライン申請は手続きに時間がかかるようです。
            </p>

            <br />

            <p>
              弊社にて90日レポート申請代行を行っております。お気軽にお問合せ下さいませ。
            </p>
          </div>
        </div>
        <div id="t-13" className="py-4 md:py-10 border-b-2 border-slate-200">
          <FadeHeading
            text="90日レポートの期間が過ぎてしまった場合"
            heading="2"
          />
          <div className="py-5 text-sm">
            <p className="">
              90日の期限を過ぎて7日間は報告の猶予がございます。その日にちを過ぎると、罰金が課せられます。
            </p>
            <p className="">その日にちを過ぎると、罰金が課せられます。</p>
            <p className="">
              期限が過ぎて申請をする場合は、基本的にご本人様の出頭が必要です。
            </p>
            <p className="py-2">
              ※申請場所やタイミングによって条件が異なる場合がございます。詳しくはお問い合わせください。
            </p>
          </div>
        </div>
        <div id="t-14" className="py-4 md:py-10 border-b-2 border-slate-200">
          <FadeHeading text="オーバーステイについて" heading="2" />
          <h3 className="py-4 font-bold text-lg text-blue-900">
            オーバーステイ(不法滞在)
          </h3>
          <div className="text-sm">
            <div className="detail-sty">
              <p>
                ご自身が取得されているビザには滞在期限があります。滞在期限を過ぎてもタイに滞在している場合、不法滞在となります。リエントリーパーミットにも有効期限（ビザの有効期限と連動）があります。この日を過ぎると使えません、不法滞在になります。タイ入国時は必ずパスポートに押された滞在期限のスタンプ日付をご確認下さい。
              </p>

              <br />

              <p>
                オーバーステイ（不法滞在）をした外国人には、タイ政府が罰金及び国外退去、再入国不可等の罰則が与えられます。
                <br />
                以下2016年3月20日、政令となります。（在京タイ大使館Web情報より）
                <br />
                <a
                  className="text-blue-700"
                  target="_blank"
                  href="https://site.thaiembassy.jp/jp/news/consular/4575/?sphrase_id=4517320"
                >
                  https://site.thaiembassy.jp/jp/news/consular/4575/?sphrase_id=4517320
                </a>
              </p>

              <br />

              <strong className="text-base">1. 出頭した外国人の場合</strong>
              <ul className="">
                <li>
                  1.1
                  滞在許可最終日より数えて90日を超えて滞在した外国人は、王国出国後１年間は入国不可
                </li>
                <li>
                  1.2
                  滞在許可最終日より数えて1年を超えて滞在した外国人は、王国出国後3年間は入国不可
                </li>
                <li>
                  1.3
                  滞在許可最終日より数えて3年を超えて滞在した外国人は、王国出国後5年間は入国不可
                </li>
                <li>
                  1.4
                  滞在許可最終日より数えて5年を超えて滞在した外国人は、王国出国後10年間は入国不可
                </li>
              </ul>

              <br />

              <strong className="text-base">2. 逮捕された外国人の場合</strong>
              <ul className="list-number-point2">
                <li>
                  2.1
                  滞在許可最終日より数えて1年を超えない滞在をした外国人は、王国出国後5年間は入国不可
                </li>
                <li>
                  2.2
                  滞在許可最終日より数えて1年を超えて滞在した外国人は、王国出国後10年間は入国不可
                </li>
              </ul>

              <br />

              <strong className="text-base">
                3. この法令は以下の場合には適用されない
              </strong>
              <ul className="">
                <li>(1) 年齢が18歳になる前に王国を出国する外国人</li>
                <li>(2) この政令が適用される前に王国を出国する外国人。</li>
              </ul>

              <br />

              <p>
                オーバーステイをせずに、ご自身のビザ、滞在期間を確認いただき、ビザを取得され国外へ出国する方は必ずリエンタリーパーミットを取得してから、ご出発する。入国時は滞在期間のスタンプを確認し、オーバーステイにならないよう心掛ける事が大切です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ContentEN = () => {
  return <ContentJP />;
};

const ContentTH = () => {
  return <ContentJP />;
};
export default function Work({ params }: { params: { lng: string } }) {
  const t = useTranslations("header");
  const s = useTranslations("service-section");
  const lang = params.lng;
  const content =
    lang == "jp" ? <ContentJP /> : lang == "en" ? <ContentEN /> : <ContentTH />;

  return (
    <>
      <div className="">
        <CoverVisa
          // @ts-ignore
          pageName={title[lang]}
          prevPage={{ pageName: t("visa-work"), url: "/visa-workpermit" }}
        />
        <div className="container mx-auto  ">{content}</div>
      </div>
    </>
  );
}
