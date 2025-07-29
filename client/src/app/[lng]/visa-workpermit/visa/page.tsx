import FadeHeading from "@/components/website/atom/heading/FadeHeading";
import MainHeading from "@/components/website/atom/heading/MainHeading";
import Cover from "@/components/website/layout/Cover";
import CoverVisa from "@/components/website/layout/CoverVisa";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaArrowCircleDown, FaEye } from "react-icons/fa";

const title = {
  jp: "ビザ",
  en: "Visa",
  th: "วีซ่า",
};

const ContentJP = () => {
  return (
    <div className="grid grid-cols-1 gap-6 text-[#333333] font-medium">
      <div className="">
        <MainHeading text="ビザ" heading="1" />
        <div id="t-8" className="py-4 md:py-10 border-b-2 border-slate-200 ">
          <FadeHeading text="ビザとは" heading="2" />
          <div className="box-sub-detail text-sm">
            <div className="detail-sty">
              タイに入国する場合、60日以内の観光目的での入国以外、タイに滞在する為の入国ビザが必ず必要となります。
              <br />
              タイで就労する目的で入国する場合、タイでロングステイを目的に入国する場合、タイに留学目的で入国する場合、
              <br />
              すべて相当するビザの取得が必要です。
              <br />
              入国ビザはタイ入国する前に、タイ国外にあるタイ国大使館や領事館で申請し、取得が必要です。
              <br />
              入国ビザには、ビザ種類、番号、発行日、有効期限、入国許可回数などが記載されています。
              <br />
              入国ビザを取得後、タイへ渡航となります。
              <br />
              日本で入国ビザの申請、取得をされる方は、各在タイ国大使館ホームページ(
              <Link href="/visa-workpermit/links" className="text-blue-800">
                お役立ちリンク
              </Link>
              )を参照下さい。
              <br />
              詳細につきましては、在日タイ国大使館ホームページ(
              <Link href="/visa-workpermit/links" className="text-blue-800">
                お役立ちリンク
              </Link>
              )をご参照下さい。日本以外のタイ国外でも取得が可能です。申請方法に関しましては、各国の在タイ大使館ホームページ(
              <Link href="/visa-workpermit/links" className="text-blue-800">
                お役立ちリンク
              </Link>
              )をご確認下さい。
            </div>
          </div>
        </div>
        <div id="t-9" className="py-4 md:py-10 border-b-2 border-slate-200">
          <FadeHeading text="ビザの種類" heading="2" />
          <p className="py-5">以下、主なタイ入国ビザの一覧となります。</p>
          <div className="text-sm">
            <table className="table table-bordered border border-slate-300">
              <tbody>
                <tr className="bg-blue-900 text-white font-semibold">
                  <th className="border-x border-white w-[10%] py-6">
                    入国ビザ
                  </th>
                  <th className="border-x border-white w-[10%]">ビザの種類</th>
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
                  <td className="text-center">最長60日間</td>
                  <td className="text-left">
                    ツアーなどの観光目的で入国される方が対象のNO VISA
                    (ビザ免除)です｡
                    <br />
                    入国時残存６ヶ月以上有効なパスポートを所持し､帰国もしくはタイ国から次の国に向かう航空券を持っていることが条件です｡滞在ビザは入国時最長60日の滞在許可が発行されます。（陸路の場合は異なります）タイ入国後、最大30日間滞在延長申請が可能。観光目的ではなく”ノービザでの出国を繰り返す”
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
                    タイに就労目的で入国する場合（駐在員など就業を目的に入国する場合、あるいは商用で来タイする場合）の入国ビザです。タイ入国時に最長90日間まで滞在許可が発行され、滞在期間内に、タイ国内で滞在延長（最長1年可能）可能。その後1年毎に更新、延長が可能となります。
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
                  <td className="text-center  py-6">タイ人の 配偶者ビザ</td>
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
        <div id="t-10" className="py-4 md:py-10 border-b-2 border-slate-200">
          <FadeHeading text="必要書類" heading="2" />
          <h3 className="py-4 font-bold text-lg text-blue-900">ビザ必要書類</h3>
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
                <li>外国人雇用証明書(S.T.M1) (弊社にて代行作成いたします)</li>
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
                    ⑤ 会社役員と申請者が共に移った写真（会社看板背景に撮影）
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
                <li>※ 必要書類は、初年度及び２年目以降更新時共に同じです。</li>
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
                <li>※ 2,3,4,9書類はすべて申請者本人にご用意いただきます。</li>
                <li>
                  ※
                  書類が揃っていれば即日決済され、配偶者（夫）の滞在許可期限まで滞在が許可されます。
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="t-11" className="py-4 md:py-10 border-b-2 border-slate-200">
        <FadeHeading text="再入国許可・リエントリーパーミット" heading="2" />

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
            ② スワンナプーム国際空港 (4階出発フロア)、ドンムアン国際空港
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
          <p>
            ※2025年現在、申請者の写真撮影が必要となり、写真撮影の為申請時にご本人様の同行をお願いしております。
          </p>
        </div>

        <div className="text-center py-10">
          <Link
            href="/visa-workpermit#contact"
            className="hover:bg-blue-700 hover:scale-90 transition-all py-4 px-4 bg-blue-900 text-white font-semibold rounded-lg"
          >
            お問い合わせはこちら
          </Link>
        </div>
      </div>
    </div>
  );
};
const ContentEN = () => {
  return <ContentJP />;
};

const ContentTH = () => {
  return (
    <div className="grid grid-cols-1 gap-6 text-[#333333] font-medium">
      <div className="">
        <MainHeading text="วีซ่า" heading="1" />
        <div id="t-8" className="py-4 md:py-10 border-b-2 border-slate-200 ">
          <FadeHeading text="วีซ่าคืออะไร" heading="2" />
          <div className="box-sub-detail text-sm">
            <div className="detail-sty">
              ในการเดินทางเข้ามาในราชอาณาจักรไทย ท่านต้องมีวีซ่าเข้าประเทศเพื่อการพํานักอยู่ในราชอาณาจักร 
              ยกเว้นในกรณีที่เดินทางเข้าประเทศเพื่อการท่องเที่ยวไม่เกิน 30 วัน 
              หากท่านเดินทางเข้ามาในราชอาณาจักรไทยเพื่อการทํางาน เดินทางเข้ามาในราชอาณาจักรไทย
              เพื่อการพํานักระยะยาว หรือเดินทางเข้ามาในราชอาณาจักรไทยเพื่อศึกษาต่อ ในกรณีเหล่านี้ต้องได้รับ
              วีซ่าที่มีคุณสมบัติเทียบเท่าทั้งสิ้น ท่านต้องยื่นและขอรับวีซ่าเข้าประเทศที่สถานทูตไทยหรือสถานกงสุลนอกราชอาณาจักรไทย
              กงสุลนอกราชอาณาจักรไทยก่อนเดินทางเข้ามาในประเทศ
              วีซ่าเข้าประเทศจะออกให้ในรูปแบบของตราประทับหรือสติกเกอร์บนหนังสือเดินทางของท่านพร้อมทั้ง
              ระบุประเภทวีซ่า หมายเลข วันที่ออกให้ วันหมดอายุ และจํานวนครั้งที่อนุญาตให้เข้าประเทศ
              หลังจากได้รับวีซ่าแล้วจึงสามารถเดินทางเข้ามายังประเทศไทยได้
              ท่านที่จะยืนขอหรือขอรับวีซ่าเข้าประเทศที่ประเทศญี่ปุ่น โปรดดูข้อมูลบนเว็บไซต์ของสถานทูตไทยแต่ละแห่ง(

              <Link href="/visa-workpermit/links" className="text-blue-800">
                เว็บไซต์ที่เป็นประโยชน์
              </Link>
              )
              <br />
              สําหรับรายละเอียด โปรดดูที่เว็บไซต์สถานเอกอัครราชทูตไทยประจําประเทศญี่ปุ่น(
              <Link href="/visa-workpermit/links" className="text-blue-800">
                เว็บไซต์ที่เป็นประโยชน์
              </Link>
              )ท่านสามารถขอรับวีซ่านอกราชอาณาจักรไทยในประเทศอื่นนอกเหนือจากประเทศญี่ปุ่นได้ 
              โปรดตรวจสอบเว็บไซต์ของสถานทูตแต่ประเทศประจํา
              ประเทศไทย(
              <Link href="/visa-workpermit/links" className="text-blue-800">
                เว็บไซต์ที่เป็นประโยชน์
              </Link>
              )เพื่อดูวิธีการยื่นขอวีซ่าดังกล่าว
            </div>
          </div>
        </div>
        <div id="t-9" className="py-4 md:py-10 border-b-2 border-slate-200">
          <FadeHeading text="ประเภทของวีซ่า" heading="2" />
          <p className="py-5">รายการต่อไปนี่คือวีซ่าสําหรับเดินทางเข้าราชอาณาจักรไทย</p>
          <div className="text-sm">
            <table className="table table-bordered border border-slate-300">
              <tbody>
                <tr className="bg-blue-900 text-white font-semibold">
                  <th className="border-x border-white w-[10%] py-6">
                    วีซ่าเข้า
                    ประเทศ
                  </th>
                  <th className="border-x border-white w-[10%]">
                    ประเภท
                    ของวีซ่า
                  </th>
                  <th className="border-x border-white w-[10%]">
                    หมวดหมู่
                    วีซ่า
                  </th>
                  <th className="border-x border-white w-[10%]">
                    ระยะ
                    อนุญาต
                  </th>
                  <th className="border-x border-white w-[60%]">รายละเอียด</th>
                </tr>
                <tr className="border border-slate-300">
                  <td className="text-center  py-6">
                    NO VISA
                    (ยกเว้นวีซ่า)
                  </td>
                  <td className="text-center">No Visa</td>
                  <td className="text-center">-</td>
                  <td className="text-center">ระยะเวลาพำนักอยู่ได้ครั้งละไม่เกิน 60 วัน</td>
                  <td className="text-left">
                    NO VISA (ยกเว้นวีซ่า) สำหรับผู้ที่เดินทางเข้ามาในประเทศเพื่อการท่องเที่ยว
                    เช่น ทัวร์ ฯลฯ เงื่อนไขคือท่านต้องถือหนังสือเดินทาง
                    ที่มีอายุเหลืออย่างน้อย 6 เดือน ณ ตอนเดินทางเข้าประเทศ 
                    และมีตั๋วเครื่องบินสำหรับเดินทางกลับประเทศหรือเดินทางจากราชอาณาจักรไทยไปยังประเทศถัดไป 
                    สำหรับวีซ่าพำนักจะมีการออกใบอนุญาตพำนักสูงสุดไม่เกิน 60 วันเมื่อเดินทางเข้ามาในประเทศ 
                    (แตกต่างกับกรณีที่เดินทางเข้ามาในประเทศทางบก) 
                    ท่านสามารถยื่นขอขยายระยะอนุญาตได้ไม่เกิน 60 วันหลังจากเดินทางเข้ามาในราชอาณาจักรไทย 
                    มีหลายกรณีที่ “เดินทางออกนอกประเทศซ้ำๆ โดย
                    ใช้ NO VISA” ซึ่งไม่ได้มีวัตถุประสงค์เพื่อการท่องเที่ยว ในกรณีนี้ท่านอาจถูก “ปฏิเสธไม่ให้เข้ามาในราชอาณาจักรไทย” 
                    ได้เมื่อเดินทางเข้าประเทศ โปรดยื่นขอวีซ่าที่ได้รับอนุญาตเทียบเท่าก่อนเดินทางเข้าประเทศเสมอ ยกเว้นเพื่อการท่องเที่ยว
                  </td>
                </tr>
                <tr className="border border-slate-300">
                  <td className="text-center  py-6">วีซ่าท่องเที่ยว</td>
                  <td className="text-center">Tourist Visa</td>
                  <td className="text-center">-</td>
                  <td className="text-center">ระยะเวลาพำนักอยู่ได้ครั้งละไม่เกิน 60 วัน</td>
                  <td className="text-left">
                    วีซ่าการท่องเที่ยวสำหรับผู้ที่วางแผนจะพนักมากกว่า 30 วันขึ้นไปโดยมี
                    วัตถุประสงค์เพื่อการท่องเที่ยว เช่น ทัวร์
                    ฯลฯ ท่านสามารถยื่นขอขยายระยะอนุญาตได้ไม่เกิน 30 วันหลังจากเดินทางเข้ามาในราชอาณาจักรไทย
                  </td>
                </tr>
                <tr className="border border-slate-300">
                  <td className="text-center  py-6">วีซ่าสำหรับธุรกิจและทำงาน</td>
                  <td className="text-center">Non-Immigrant Visa</td>
                  <td className="text-center">B</td>
                  <td className="text-center">ระยะเวลาพำนักอยู่ได้ครั้งละไม่เกิน 90 วัน</td>
                  <td className="text-left">
                    วีซ่าเข้าประเทศในกรณีที่ประสงค์จะเดินทางเข้ามาในราชอาณาจักรไทยเพื่อวัตถุประสงค์ในการทำงาน 
                    (กรณีที่เดินทางเข้าประเทศเพื่อทำงานเป็นพนักงานประจำฯลฯ หรือ
                    กรณีที่เดินทางมาราชอาณาจักรไทยเพื่อธุรกิจ) มีการออกใบอนุญาตพำนักสูงสุดไม่เกิน 90 
                    วันเมื่อเดินทางเข้ามาในราชอาณาจักรไทย และในระหว่างที่พำนักอยู่ท่านสามารถยื่นขอการขยายระยะเวลาพำนักอยู่ในราชอาณาจักรไทยได้ 
                    (สูงสุดไม่เกิน 1 ปี) หลังจากนั้นสามารถต่ออายุหรือขยายระยะอนุญาตได้ทุก ๆ ปี หากประสงค์จะทำงานที่ประเทศไทย 
                    ท่านต้องมีวีซ่าทำงานและใบอนุญาตทำงาน โปรดยื่นและขอใบอนุญาตทำงานก่อนเสมอ
                  </td>
                </tr>
                <tr className="border border-slate-300">
                  <td className="text-center  py-6">วีซ่านักเรียน/นักศึกษาต่างชาติ</td>
                  <td className="text-center">Non-Immigrant Visa</td>
                  <td className="text-center">ED</td>
                  <td className="text-center">ระยะเวลาพำนักอยู่ได้ครั้งละไม่เกิน 90 วัน</td>
                  <td className="text-left">
                    ED วีซ่าเป็นวีซ่าเข้าประเทศที่จำเป็นสหรับ
                    การศึกษาต่อหรือเข้าเรียนในโรงเรียนสอนภาษาไทย สำหรับการขยายระยะเวลาพำนัก
                    หลังเดินทางเข้ามาในราชอาณาจักรไทยตามกฎทั่วไป ท่านสามารถขยายได้ตามระยะเวลาที่ระบุไว้สำหรับการเข้าเรียน 
                    แต่สูงสุดไม่เกิน 1 ปี หลังจากนั้นสามารถต่ออายุหรือขยายระยะอนุญาตได้ทุก ๆ ปี 
                    ในกรณีของโรงเรียนสอนภาษาต้องขยายเวลาทุก 3 เดือน
                  </td>
                </tr>
                <tr className="border border-slate-300">
                  <td className="text-center  py-6">วีซ่าสำหรับคู่สมรสและผู้ติดตาม</td>
                  <td className="text-center">Non-Immigrant Visa</td>
                  <td className="text-center">O</td>
                  <td className="text-center">ระยะเวลาพำนักอยู่ได้ครั้งละไม่เกิน 90 วัน</td>
                  <td className="text-left">
                    วีซ่าผู้ติดตาม (วีซ่ารหัส O) ใช้ในกรณีที่
                    ครอบครัวของคนต่างด้าวอาศัยอยู่ร่วมกับคนต่างด้าวที่เดินทางมาทำงานในราชอาณาจักรไทย 
                    (หัวหน้าครอบครัว) สำหรับการขยายระยะเวลาพำนักหลังเดินทางเข้ามาในราชอาณาจักรไทย 
                    ระยะเวลาอนุญาตให้พำนักจะเทียบเท่ากับหัวหน้าครอบครัว
                  </td>
                </tr>
                <tr className="border border-slate-300">
                  <td className="text-center  py-6">วีซ่าสำหรับคู่สมรสชาวไทย</td>
                  <td className="text-center">Non-Immigrant Visa</td>
                  <td className="text-center">O</td>
                  <td className="text-center">-</td>
                  <td className="text-left">
                    วีซ่าเข้าราชอาณาจักรไทยสำหรับคู่สมรสและผู้ติดตามชาวไทย
                  </td>
                </tr>
                <tr className="border border-slate-300">
                  <td className="text-center  py-6">วีซ่าสำหรับการพำนักระยะยาว</td>
                  <td className="text-center">Non-Immigrant Visa</td>
                  <td className="text-center">O-A</td>
                  <td className="text-center">-</td>
                  <td className="text-left">
                    วีซ่าพิเศษสำหรับคนต่างด้าวที่มีอายุมากกว่า 50 ปีขึ้นไปซึ่งไม่ได้มีวัตถุประสงค์เพื่อการทำงาน 
                    เมื่อยื่นขอวีซ่าประเภทนี้ท่านจะได้รับอนุญาตให้พำนักอยู่ในประเทศเป็นเวลา 1 ปี
                    หลังจากนั้นสามารถต่ออายุและขยายระยะเวลาได้ปีละหนึ่งครั้ง สามารถขอวีซ่าได้ที่ประเทศไทยหรือประเทศญี่ปุ่น
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="t-10" className="py-4 md:py-10 border-b-2 border-slate-200">
          <FadeHeading text="เอกสารสำคัญประกอบการยื่น" heading="2" />
          <h3 className="py-4 font-bold text-lg text-blue-900">เอกสารสำคัญประกอบการยื่นขอวีซ่า</h3>
          <div className="text-sm">
            <div className="box-sub-detail">
              <div className="detail-sty">
                <p>
                  ในที่นี้จะอธิบายเกี่ยวกับเอกสารสำคัญประกอบการยื่นขอวีซ่าในกรุงเทพฯ ประเทศไทย
                  หากท่านต้องการเดินทางเข้าประเทศหรือขยายระยะเวลาพำนัก บริษัทของเราจะทำหน้าที่เป็นตัวแทน
                  และช่วยเหลือท่านในการจัดทำแบบยื่นคำร้องและทำการจอง 
                  เพื่อให้ท่านสามารถดำเนินการตามขั้นตอนได้อย่างวางใจแม้แต่ผู้ที่เพิ่งเคยยื่นเรื่องเป็นครั้งแรก 
                  นอกจากนี้ เรายังให้บริการตัวแทน ยื่นขอวีซ่าสำหรับองค์กรและธุรกิจต่าง ๆ อีกด้วย
                </p>
                <br />
                <p>
                  หลังจากเดินทางเข้ามาในราชอาณาจักรไทย ก่อนที่วีซ่า (ระยะอนุญาตให้พำนัก) จะหมดอายุ
                  ท่านต้องดำเนินการต่ออายุในราชอาณาจักรไทย ท่านสามารถยื่นขอต่ออายุวีซ่าได้ที่สำนักงานตรวจคนเข้าเมือง 
                  (เขตอำนาจแตกต่างกันไปขึ้นอยู่กับสถานที่พำนักและที่ตั้งของบริษัท) หรือศูนย์บริการ ONE
                  STOP SERVICE ก่อนวีซ่าหมดอายุ 30 วัน บริษัทของเรายินดีให้ความช่วยเหลือท่านในการต่ออายุวีซ่า 
                  โดยมุ่งเน้นให้บริการบริษัททั่วไปรวมถึงบริษัทที่ได้รับการส่งเสริมการลงทุนจาก BOI และ IEAT
                  เป็นหลัก ด้านล่างคือรายละเอียดการต่อวีซ่าและรายการเอกสารสำคัญประกอบการยื่นขอวีซ่า
                </p>
                <br />
                <div className="text-red-700">
                  ※รายการด้านล่างคือเอกสารสำคัญทั่วไป ท่านอาจต้องใช้เอกสารเพิ่มเติมนอกเหนือจากรายการด้านล่าง 
                  ทั้งนี้ขึ้นอยู่กับรายละเอียดธุรกิจและประวัติการทำงานของผู้ยื่นคำร้อง 
                  นอกจากนี้เอกสารสำคัญอาจมีการเปลี่ยนแปลงหรือเพิ่มเติมโดยไม่ต้องแจ้งให้ทราบล่วงหน้า
                  โปรดตรวจสอบกับเจ้าหน้าที่ของเราหากต้องการจัดเตรียมเอกสารประกอบการยื่นคำร้อง
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="t-11" className="py-4 md:py-10 border-b-2 border-slate-200">
        <FadeHeading text="การขออนุญาตเดินทางกลับเข้ามาในประเทศไทย" heading="2" />

        <h3 className="py-4 font-bold text-lg text-blue-900">
          Re-entry Permit/ใบอนุญาตกลับเข้าประเทศ
        </h3>
        <div className="detail-sty text-sm">
          <p>
            วีซ่า (ใบอนุญาตพำนัก) ที่ท่านถืออยู่จะหมดอายุเมื่อท่านเดินทางกลับประเทศชั่วคราวหรือเดินทางเพื่อธุรกิจ 
            แม้ว่าจะยังอยู่ในระยะอนุญาตก็ตาม หากท่านต้องการเดินทางกลับเข้าประเทศไทยอีกครั้ง
            โดยไม่เพิกถอนวีซ่าที่ถืออยู่ในปัจจุบัน ท่านต้องขอ Re-entry Permit (ใบอนุญาตกลับเข้าประเทศ)
            มีหลายกรณีที่ลืมขอ Re-entry Permit เมื่อเดินทางเข้าประเทศ 
            ท่านจะได้รับการปฏิบัติเสมือนการเดินทางเข้าประเทศโดยไม่มีวีซ่าและต้องเริ่มดำเนินการขอวีซ่าพำนัก 
            (1 ปี) ใหม่อีกครั้งดังนั้นโปรดระมัดระวัง
          </p>

          <br />

          <p>
            วิธีขอ Re-entry Permit
            <br />
            ① สำนักงานตรวจคนเข้าเมืองหรือศูนย์บริการวีซ่าและใบอนุญาตทำงานแบบ One Stop Service
            <br />
            ② ท่าอากาศยานสุวรรณภูมิ (อาคารผู้โดยสารขาออก ชั้น 4)
            <br />
            　(สนามบินเชียงใหม่และภูเก็ตให้บริการช่วงกลางวันเท่านั้น)
          </p>

          <br />

          <p>
            ประเภทของ Re-entry Permit
            <br />
            Single : ใช้ในการเดินทางออกและเข้าประเทศครั้งเดียว
            <br />
            ・ค่าธรรมเนียม 1,000 บาท
          </p>

          <p>
            Multiple : ใช้ในการเดินทางออกและเข้าประเทศได้หลายครั้ง ในช่วงระยะเวลาอนุญาตให้อยู่ในราชอาณาจักรตามวีซ่า
            <br />
            ・ค่าธรรมเนียม 3,800 บาท
          </p>

          <br />

          <p>
            เอกสารสำคัญประกอบการยื่น
            <br />
            หนังสือเดินทางตัวจริง, รูปถ่าย (4x6 cm) จำนวน 1 ใบ และแบบคำขออนุญาตเพื่อกลับเข้ามาในราชอาณาจักร
          </p>

          <br />

          <p>
            บริษัทเราทำหน้าที่เป็นตัวแทนในการยื่นขอ Re-entry Permit โปรดติดต่อเราเพื่อสอบถามรายละเอียดเพิ่มเติม
          </p>
          <p>
            ※ตั้งแต่ปี 2568 เป็นต้นไป ผู้ที่ต้องการ ทำ Re-entry จะต้องไปถ่ายรูปที่สำนักงานตรวจคนเข้าเมืองด้วย
          </p>
        </div>

        <div className="text-center py-10">
          <Link
            href="/visa-workpermit#contact"
            className="hover:bg-blue-700 hover:scale-90 transition-all py-4 px-4 bg-blue-900 text-white font-semibold rounded-lg"
          >
            ติดต่อสอบถาม
          </Link>
        </div>
      </div>
    </div>
  );
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
