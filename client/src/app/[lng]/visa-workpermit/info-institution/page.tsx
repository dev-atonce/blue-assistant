import FadeHeading from "@/components/website/atom/heading/FadeHeading";
import MainHeading from "@/components/website/atom/heading/MainHeading";
import Cover from "@/components/website/layout/Cover";
import CoverVisa from "@/components/website/layout/CoverVisa";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaArrowCircleDown, FaEye } from "react-icons/fa";
import { Image as AntImage } from "antd";
import Modal from "@/components/website/layout/Modal";
import AddressModal from "@/components/website/organism/AddressModal";

const MinistryDirection = () => {
  return (
    <div>
      <h4 className="font-bold text-lg text-blue-900">
        公共交通機関ご利用の場合
      </h4>
      <div className="py-4">
        <h5 className="font-semibold">電車</h5>
        <p>BTS最寄り駅 「Victory Monument 戦勝記念塔駅」</p>
        <p>※駅から3.3km、車/バイクタクシーで10分</p>
        <p>MRT最寄り駅「Phra Rama9　ラマ9世駅」</p>
        <p>※駅から2.8km、車/バイクタクシーで7分</p>
      </div>
      <h5 className="font-semibold">タクシー/バイクタクシーのドライバーへ</h5>
      <p>
        タイ語で「パイ グラスワン レンガーン カー/クラップ 　」とお伝え下さい
      </p>
      <p>🚕ไปกระทรวงแรงงานถนนดินแดงค่ะ</p>
    </div>
  );
};
const GovComplexDirection = () => {
  return (
    <div>
      <h4 className="font-bold text-lg text-blue-900">公共交通機関の場合</h4>
      <div className="py-4">
        <h5 className="font-semibold">電車</h5>
        <p>BTS 「ワットプラシー～駅」にて下車</p>
        <p>※駅からkm、車/バイクタクシーで10分</p>
        <p>→MRTピンクラインにも接続しています</p>
        <p>MRTピンクライン/ ガバメントコンプレックス 下車</p>
        <p>
          ※入口からB棟まで1.5kmほどあり。Chang Watthana
          soi７側の入口から無料シャトルバスが定期運行中
        </p>
      </div>
      <h5 className="font-semibold">タクシー/バイクタクシーのドライバーへ</h5>
      <p>
        タイ語で「パイ スーンラチャガーン ティー チェーンワタナ カー/クラップ
        」とお伝え下さい。
      </p>
      <p>🚕 ไปแจ้งวัฒนะซอย7 ศูนย์ราชการ อาคาร บึ ต.ม.ค่ะ</p>
    </div>
  );
};
const OneStopDirection = () => {
  return (
    <div>
      <h4 className="font-bold text-lg text-blue-900">公共交通機関の場合</h4>
      <div className="py-4">
        <h5 className="font-semibold">電車</h5>
        <p>MRT ブルーライン　サムヤーン駅下車</p>
        <p>
          2番改札を出て、ジャムジュリースクエアへ
          スターバックス付近にエレベーターあり
        </p>
      </div>
      <h5 className="font-semibold">タクシー/バイクタクシーのドライバーへ</h5>
      <p>
        タイ語で「パイ ジャムジュリースクエア カー/クラップ 」とお伝え下さい。
      </p>
      <p>🚕 ไปจามจุรีสแควร์ค่ะ</p>
    </div>
  );
};
export default function Work() {
  const t = useTranslations("header");

  return (
    <>
      <div className="">
        <CoverVisa
          pageName="Info. on Institutions"
          prevPage={{ pageName: t("home"), url: "/" }}
        />
        <div className="container mx-auto  ">
          <div className="grid grid-cols-1 gap-6 text-[#333333] font-medium">
            <div className="">
              <MainHeading
                text="各機関へのアクセス・お問い合わせ先"
                heading="1"
              />
              <div className="py-4 md:py-10 border-b-2 border-slate-200 ">
                <FadeHeading text="労働省(ワークパーミット)" heading="2" />
                <h3 className="py-4 font-bold text-lg text-blue-900">
                  Ministry of Labour Building, Mitmaitri Rd., Din Daeng, Din
                  Daeng, Bangkok 10400
                </h3>

                <div className="detail-sty text-sm ">
                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
                    <a href="https://www.google.com/maps/place/Ministry+of+Labour/@13.7629738,100.5437934,13z/data=!4m6!3m5!1s0x30e29ebd854f9d5d:0xcc1748724ba8dc61!8m2!3d13.7642877!4d100.5517157!16s%2Fg%2F1hc19vznh?entry=ttu&g_ep=EgoyMDI1MDEyMS4wIKXMDSoASAFQAw%3D%3D">
                      <Image
                        alt="map"
                        height="500"
                        width="500"
                        src="/img/visa-workpermit/ministry_map.png"
                        className="w-full"
                      />
                    </a>
                    <AntImage src="/img/visa-workpermit/ministry_map2.png" />
                  </div>
                  <div className="flex flex-col md:flex-row align-center md:justify-between">
                    <p>3番ゲートから入り左手の建物の2階です。</p>
                    <AddressModal modalContent={<MinistryDirection />} />
                  </div>
                </div>
              </div>
              <div className="py-4 md:py-10 border-b-2 border-slate-200 ">
                <FadeHeading
                  text="移民局（チェンワタナ） Immigration Division1　"
                  heading="2"
                />
                <h3 className="py-4 font-bold text-lg text-blue-900">
                  120 Moo 3 Changwattana Rd. LAK SI, BANGKOK 10210 <br />
                  Tel:0-2141-9889
                </h3>

                <div className="detail-sty text-sm ">
                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
                    <a href="https://www.google.com/maps/place/Ratthaprasasanabhakti+Building+(Building+B)+The+Government+Complex/@13.8910475,100.5266002,11z/data=!4m6!3m5!1s0x30e2832567e56109:0x580edb98def14f92!8m2!3d13.881305!4d100.5649373!16s%2Fg%2F1q62hc5lx?entry=ttu&g_ep=EgoyMDI1MDEyMS4wIKXMDSoASAFQAw%3D%3D">
                      <Image
                        alt="map"
                        height="500"
                        width="500"
                        src="/img/visa-workpermit/gov_map2.png"
                        className="w-full"
                      />
                    </a>
                    <AntImage src="/img/visa-workpermit/gov_map.png" />
                  </div>
                  <div className="flex flex-col md:flex-row align-center md:justify-between">
                    <p>Government ComplexのB棟、4番扉から入って右手です。</p>
                    <AddressModal modalContent={<GovComplexDirection />} />
                  </div>
                </div>
              </div>
              <div className="py-4 md:py-10 border-b-2 border-slate-200 ">
                <FadeHeading
                  text="ワンストップサービス（サムヤーン） One Stop Service"
                  heading="2"
                />
                <h3 className="py-4 font-bold text-lg text-blue-900">
                  319 Chamchuri Square Building 18th Floor, Phayathai Road,
                  Pathumwan, Bangkok 10330
                </h3>

                <div className="detail-sty text-sm ">
                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
                    <a href="https://www.google.com/maps/place/One+Stop+Services+Center,+Chamchuri+Square,+Bangkok/@13.732811,100.530569,17z/data=!4m6!3m5!1s0x30e29f2ac68b5641:0x9cd402b24ad3ccb4!8m2!3d13.7328114!4d100.5305685!16s%2Fg%2F1pzpnghzk?ll=13.732811,100.530569&z=17&t=m&gl=TH&mapclient=embed&cid=11300660329762245812&entry=tts&g_ep=EgoyMDI0MDkyMy4wKgBIAVAD">
                      <Image
                        alt="map"
                        height="500"
                        width="500"
                        src="/img/visa-workpermit/cham_map.png"
                        className="w-full"
                      />
                    </a>
                    <AntImage src="/img/visa-workpermit/cham_map2.png" />
                  </div>
                  <div className="flex flex-col md:flex-row align-center md:justify-between">
                    <p>
                      MRTサムヤーン駅直結、Chamuchuri
                      squareのオフィス棟18階です。
                    </p>
                    <AddressModal modalContent={<OneStopDirection />} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
