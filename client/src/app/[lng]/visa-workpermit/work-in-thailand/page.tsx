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
          pageName="Work In Thailand"
          prevPage={{ pageName: t("home"), url: "/" }}
        />
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 text-[#333333] font-medium">
            <div className="">
              <MainHeading text="タイで働くには" heading="1" />
              <div
                id="t-1"
                className="py-4 md:py-10 border-b-2 border-slate-200 "
              >
                <FadeHeading text="手続きの流れ" heading="2" />
                <div className="relative">
                  <Image
                    src={"/img/visa-workpermit/work-thailand-flow-1.png"}
                    alt=""
                    width={1900}
                    height={1200}
                    className="w-full "
                  ></Image>
                  <Link
                    href="/visa-workpermit/work-in-thailand#t-2"
                    className="hover:scale-110 absolute top-[18%] left-[20%] text-blue-500"
                  >
                    <FaEye size={20} />
                  </Link>
                  <Link
                    href="/visa-workpermit/work-permit#t-4"
                    className="hover:scale-110 absolute top-[5%] left-[70%] text-blue-500"
                  >
                    <FaEye size={20} />
                  </Link>
                  <Link
                    href="/visa-workpermit/visa#t-10"
                    className="hover:scale-110 absolute top-[18%] left-[70%] text-blue-500"
                  >
                    <FaEye size={20} />
                  </Link>
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
                    href="/visa-workpermit/visa#t-11"
                    className="hover:scale-110 absolute top-[22%] left-[90%] text-blue-500"
                  >
                    <FaEye size={20} />
                  </Link>
                  <Link
                    href="/visa-workpermit/visa#t-10"
                    className="hover:scale-110 absolute top-[22%] left-[50%] text-blue-500"
                  >
                    <FaEye size={20} />
                  </Link>
                  <Link
                    href="/visa-workpermit/work-permit#t-5"
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
