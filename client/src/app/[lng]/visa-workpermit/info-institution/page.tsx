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
        <p>BTS「ワット・プラシーマハタート駅」にて下車</p>
        <p>※駅から4km、車/バイクタクシーで10分</p>
        <p>→MRTピンクラインにも接続しています</p>
        <p>MRTピンクライン「ガバメントコンプレックス」下車</p>
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
      <h4 className="font-bold text-lg text-blue-900">
        公共交通機関ご利用の場合
      </h4>
      <div className="py-4">
        <h5 className="font-semibold">電車</h5>
        <p>MRT ルンピニ駅</p>
        <p>　※B1改札口がParadeゾーンの地下1階に直結</p>
        <p>BTS プルンチット駅　</p>
        <p>　※2番出口、SIAM PHARMACY前から無料シャトルバスが運行中</p>
        <p>One Bangkokホームページより</p>
        <p>
          　
          <a
            href="https://uat.onebangkok.com/en/location/
"
          >
            https://uat.onebangkok.com/en/location/
          </a>
        </p>
      </div>
    </div>
  );
};

const AccessJP = () => {
  return (
    <div className="grid grid-cols-1 gap-6 text-[#333333] font-medium">
      <div className="">
        <MainHeading text="各機関へのアクセス・お問い合わせ先" heading="1" />
        <div className="py-4 md:py-10 border-b-2 border-slate-200 ">
          <FadeHeading text="労働省(ワークパーミット)" heading="2" />
          <h3 className="py-4 font-bold text-lg text-blue-900">
            Ministry of Labour Building, Mitmaitri Rd., Din Daeng, Din Daeng,
            Bangkok 10400
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
            text="ワンストップサービス（バンコク） One Stop Service"
            heading="2"
          />
          <h3 className="py-4 font-bold text-lg text-blue-900">
            One Bangkok (Parade Zone 6th Floor), Witthayu Rd, Lumphini, Pathum
            Wan, Bangkok 10330
          </h3>

          <div className="detail-sty text-sm ">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
              <a href="https://www.google.com/maps/place/Parade+at+One+Bangkok/@13.7262365,100.54701,20z/data=!4m6!3m5!1s0x30e29f002e98e36b:0x4189f38aabf3daea!8m2!3d13.7261218!4d100.547236!16s%2Fg%2F11y8302nff?entry=tts&g_ep=EgoyMDI1MDMxOS4yIPu8ASoASAFQAw%3D%3D&skid=0d10c0ca-b33c-426b-b84b-60a4d9c698db">
                <Image
                  alt="map"
                  height="500"
                  width="500"
                  src="/img/visa-workpermit/one-bkk.png"
                  className="w-full h-full object-contain"
                />
              </a>
              <AntImage src="/img/one-stop.jpg" />
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center md:justify-between  ">
              <AddressModal modalContent={<OneStopDirection />} />
              <p className="py-6">
                ※2025年3月17日より「One Bangkok」に場所が移転いたしました。
                <br />
                One Bangkok Building (6th-7th Floor, Parade zone) <br />
                地図：
                <a
                  className=""
                  href="https://maps.app.goo.gl/3R6SGwzwyBJMJTPe9"
                >
                  https://maps.app.goo.gl/3R6SGwzwyBJMJTPe9
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AccessEN = () => {
  return (
    <div className="grid grid-cols-1 gap-6 text-[#333333] font-medium">
      <div className="">
        <MainHeading text="各機関へのアクセス・お問い合わせ先" heading="1" />
        <div className="py-4 md:py-10 border-b-2 border-slate-200 ">
          <FadeHeading text="労働省(ワークパーミット)" heading="2" />
          <h3 className="py-4 font-bold text-lg text-blue-900">
            Ministry of Labour Building, Mitmaitri Rd., Din Daeng, Din Daeng,
            Bangkok 10400
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
            text="ワンストップサービス（バンコク） One Stop Service"
            heading="2"
          />
          <h3 className="py-4 font-bold text-lg text-blue-900">
            One Bangkok (Parade Zone 6th Floor), Witthayu Rd, Lumphini, Pathum
            Wan, Bangkok 10330
          </h3>

          <div className="detail-sty text-sm ">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
              <a href="https://www.google.com/maps/place/Parade+at+One+Bangkok/@13.7262365,100.54701,20z/data=!4m6!3m5!1s0x30e29f002e98e36b:0x4189f38aabf3daea!8m2!3d13.7261218!4d100.547236!16s%2Fg%2F11y8302nff?entry=tts&g_ep=EgoyMDI1MDMxOS4yIPu8ASoASAFQAw%3D%3D&skid=0d10c0ca-b33c-426b-b84b-60a4d9c698db">
                <Image
                  alt="map"
                  height="500"
                  width="500"
                  src="/img/visa-workpermit/one-bkk.png"
                  className="w-full h-full object-contain"
                />
              </a>
              <AntImage src="/img/one-stop.jpg" />
            </div>
            <div className="flex flex-col  align-center md:justify-between">
              <AddressModal modalContent={<OneStopDirection />} />
              <p className="py-6">
                ※2025年3月17日より「One Bangkok」に場所が移転いたしました。
                <br />
                One Bangkok Building (6th-7th Floor, Parade zone) <br />
                地図：
                <a
                  className=""
                  href="https://maps.app.goo.gl/3R6SGwzwyBJMJTPe9"
                >
                  https://maps.app.goo.gl/3R6SGwzwyBJMJTPe9
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AccessTH = () => {
  return (
    <div className="grid grid-cols-1 gap-6 text-[#333333] font-medium">
      <div className="">
        <MainHeading text="各機関へのアクセス・お問い合わせ先" heading="1" />
        <div className="py-4 md:py-10 border-b-2 border-slate-200 ">
          <FadeHeading text="労働省(ワークパーミット)" heading="2" />
          <h3 className="py-4 font-bold text-lg text-blue-900">
            Ministry of Labour Building, Mitmaitri Rd., Din Daeng, Din Daeng,
            Bangkok 10400
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
            text="ワンストップサービス（バンコク） One Stop Service"
            heading="2"
          />
          <h3 className="py-4 font-bold text-lg text-blue-900">
            One Bangkok (Parade Zone 6th Floor), Witthayu Rd, Lumphini, Pathum
            Wan, Bangkok 10330
          </h3>

          <div className="detail-sty text-sm ">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
              <a href="https://www.google.com/maps/place/Parade+at+One+Bangkok/@13.7262365,100.54701,20z/data=!4m6!3m5!1s0x30e29f002e98e36b:0x4189f38aabf3daea!8m2!3d13.7261218!4d100.547236!16s%2Fg%2F11y8302nff?entry=tts&g_ep=EgoyMDI1MDMxOS4yIPu8ASoASAFQAw%3D%3D&skid=0d10c0ca-b33c-426b-b84b-60a4d9c698db">
                <Image
                  alt="map"
                  height="500"
                  width="500"
                  src="/img/visa-workpermit/one-bkk.png"
                  className="w-full h-full object-contain"
                />
              </a>
              <AntImage src="/img/one-stop.jpg" />
            </div>
            <div className="flex flex-col  align-center md:justify-between">
              <AddressModal modalContent={<OneStopDirection />} />
              <p className="py-6">
                ※2025年3月17日より「One Bangkok」に場所が移転いたしました。
                <br />
                One Bangkok Building (6th-7th Floor, Parade zone) <br />
                地図：
                <a
                  className=""
                  href="https://maps.app.goo.gl/3R6SGwzwyBJMJTPe9"
                >
                  https://maps.app.goo.gl/3R6SGwzwyBJMJTPe9
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default function Work({ params }: { params: { lng: string } }) {
  const lang = params?.lng;
  const t = useTranslations("header");
  const s = useTranslations("service-section");

  const content =
    lang == "jp" ? <AccessJP /> : lang == "en" ? <AccessEN /> : <AccessTH />;
  return (
    <>
      <div className="">
        <CoverVisa
          pageName={s("institution")}
          prevPage={{ pageName: t("visa-work"), url: "/visa-workpermit" }}
        />
        <div className="container mx-auto  ">{content}</div>
      </div>
    </>
  );
}
