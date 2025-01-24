import MainHeading from "@/components/website/atom/heading/MainHeading";
import Cover from "@/components/website/layout/Cover";
import CoverVisa from "@/components/website/layout/CoverVisa";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";

const PriceJP = () => {
  return (
    <div className="grid grid-cols-1 gap-6 text-[#333333] font-medium">
      <div className="border-b-2 pb-6 border-slate-400">
        <MainHeading text="代行サービス料金一覧" heading="1" />
        <p className="text-xl font-semibold">
          ※下記料金には役所への発行手数料は含まれておりません。
        </p>
        <div className="grid grid-cols-12 gap-5 py-20  text-slate-600 font-semibold">
          <Link
            href="/visa-workpermit/price#work-permit"
            className="bg-slate-50 py-10 border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5 col-span-6 md:col-span-4"
          >
            <Image
              src={"/img/visa-workpermit/work-permit-icon.png"}
              alt=""
              width={100}
              height={100}
            ></Image>
            <p className="lg:text-base text-sm font-semibold text-center">
              労働許可証 Work permit
            </p>
          </Link>
          <Link
            href="/visa-workpermit/price#visa"
            className="bg-slate-50 py-10 border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5  col-span-6 md:col-span-4"
          >
            <Image
              src={"/img/visa-workpermit/visa-icon.png"}
              alt=""
              width={100}
              height={100}
            ></Image>
            <p className="lg:text-base text-sm font-semibold text-center">
              滞在許可 Visa
            </p>
          </Link>
          <Link
            href="/visa-workpermit/price#ninety-day"
            className="bg-slate-50 py-10 border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5  col-span-6 md:col-span-4"
          >
            <Image
              src={"/img/visa-workpermit/90-day-icon.png"}
              alt=""
              width={100}
              height={100}
            ></Image>
            <p className="lg:text-base text-sm font-semibold text-center">
              90日レポート 90days report
            </p>
          </Link>
          <Link
            href="/visa-workpermit/price#re-entry"
            className="bg-slate-50 py-10 border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5  col-span-6 md:col-span-4"
          >
            <Image
              src={"/img/visa-workpermit/re-entry-icon.png"}
              alt=""
              width={100}
              height={100}
            ></Image>
            <p className="lg:text-base text-sm font-semibold text-center">
              再入国許可証 Re-entry permit
            </p>
          </Link>
          <Link
            href="/visa-workpermit/price#boi"
            className="bg-slate-50 py-10 border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5  col-span-6 md:col-span-4"
          >
            <Image
              src={"/img/visa-workpermit/boi-icon.png"}
              alt=""
              width={100}
              height={100}
            ></Image>
            <p className="lg:text-base text-sm font-semibold text-center">
              B.O.I
            </p>
          </Link>
          <Link
            href="/visa-workpermit/price#insurance"
            className="bg-slate-50 py-10 border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5  col-span-6 md:col-span-4"
          >
            <Image
              src={"/img/visa-workpermit/insurance-icon.png"}
              alt=""
              width={100}
              height={100}
            ></Image>
            <p className="lg:text-base text-sm font-semibold text-center">
              Insurance
            </p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-6 border-b-2 py-6 border-slate-400">
        <span className="text-xl font-semibold text-[#3562AE]">
          一般現地法人(１名/１件あたり）
        </span>
        <div
          id="work-permit"
          className="font-bold w-full flex flex-col gap-1 text-xs sm:text-base py-10"
        >
          <div className="flex bg-[#3562AE] rounded-lg py-2 px-4 text-white text-sm md:text-lg">
            <div className="w-[80%] ">労働許可証 Work permit</div>
            <div className="w-[10%] ">金額</div>
            <div className="w-[10%] ">(VAT7％）</div>
          </div>
          <div className="text-slate-600">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">新規申請手続き・1年間</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">10,000</div>
            </div>
          </div>
          <div className="text-slate-600 bg-slate-50">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">更新手続き</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">7,500</div>
            </div>
          </div>
          <div className="text-slate-600">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">記載内容変更</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">3,500</div>
            </div>
          </div>
          <div className="text-slate-600 bg-slate-50">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">返却</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">2,000</div>
            </div>
          </div>
        </div>
        <div
          id="visa"
          className="font-bold w-full flex flex-col gap-1 text-xs sm:text-base py-10"
        >
          <div className="flex bg-[#3562AE] rounded-lg py-2 px-4 text-white text-sm md:text-lg">
            <div className="w-[80%] ">滞在許可 Visa</div>
            <div className="w-[10%] ">金額</div>
            <div className="w-[10%] ">(VAT7％）</div>
          </div>
          <div className="text-slate-600">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">
                ノンイミグラントBビザ・新規&更新手続き・1年間
              </div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">12,000</div>
            </div>
          </div>
          <div className="text-slate-600 bg-slate-50">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">タイ国内でのBビザへの切り替え</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">13,000</div>
            </div>
          </div>
          <div className="text-slate-600">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">留学・学生ビザ</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">10,000</div>
            </div>
          </div>
          <div className="text-slate-600 bg-slate-50">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">
                配偶者・家族　ノンイミグラントOビザ・妻
              </div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">7,000</div>
            </div>
          </div>
          <div className="text-slate-600">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">
                配偶者・家族　ノンイミグラントOビザ・子供
              </div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">4,000</div>
            </div>
          </div>
          <div className="text-slate-600 bg-slate-50">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">DTV ビザ</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">12,000</div>
            </div>
          </div>
        </div>
        <div
          id="ninety-day"
          className="font-bold w-full flex flex-col gap-1 text-xs sm:text-base py-10"
        >
          <div className="flex bg-[#3562AE] rounded-lg py-2 px-4 text-white text-sm md:text-lg">
            <div className="w-[80%] ">90日レポート 90days report</div>
            <div className="w-[10%] ">金額</div>
            <div className="w-[10%] ">(VAT7％）</div>
          </div>
          <div className="text-slate-600">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">90日ごとのイミグレーション出頭代行</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">1,500</div>
            </div>
          </div>
        </div>
        <div
          id="re-entry"
          className="font-bold w-full flex flex-col gap-1 text-xs sm:text-base py-10"
        >
          <div className="flex bg-[#3562AE] rounded-lg py-2 px-4 text-white text-sm md:text-lg">
            <div className="w-[80%] ">再入国許可証 Re-entry permit</div>
            <div className="w-[10%] ">金額</div>
            <div className="w-[10%] ">(VAT7％)</div>
          </div>
          <div className="text-slate-600">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">
                新規申ノンイミグラントBビザ・新規&更新手続き・1年間請手続き・1年間
              </div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">10,000</div>
            </div>
          </div>
          <div className="text-slate-600 bg-slate-50">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">新規申請手続き・1年間</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">10,000</div>
            </div>
          </div>
        </div>
        <span className="text-xl font-semibold text-[#3562AE]">
          B.O.I事業（1名/１件あたり
          ワークパーミット（労働許可証）＋滞在許可（ビザ））
        </span>
        <div
          id="boi"
          className="font-bold w-full flex flex-col gap-1 text-xs sm:text-base py-6"
        >
          <div className="flex bg-[#3562AE] rounded-lg py-2 px-4 text-white text-sm md:text-lg">
            <div className="w-[80%] ">新規申請及び更新手続き</div>
            <div className="w-[10%] ">金額</div>
            <div className="w-[10%] ">(VAT7％）</div>
          </div>
          <div className="text-slate-600">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">1年間 (New & Renew 1year)</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">20,000</div>
            </div>
          </div>
          <div className="text-slate-600 bg-slate-50">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">2年間 (New & Renew 2years)</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">40,000</div>
            </div>
          </div>
        </div>
        <span className="text-xl font-semibold text-slate-800">
          ※B.O.I企業の申請代行はB.O.Iからの認可書がある企業様の申請代行となります。
        </span>
        <div className="py-6">
          <span className="text-lg font-bold">⚠ ご注意 ⚠</span>
          <p className="text-lg ">
            各手続きは申請者本人の役所への出頭が原則となります。バンコク郊外の場合、別途サービス料が発生いたします。申請代行料はタイ国情勢や企業設立内容により、変更になる場合がございます。
          </p>
        </div>
        <span className="text-xl font-semibold text-[#3562AE]">
          役所への発行手数料
        </span>
        <div
          id="insurance"
          className="font-bold w-full flex flex-col gap-1 text-xs sm:text-base py-6"
        >
          <div className="flex bg-[#3562AE] rounded-lg py-2 px-4 text-white text-sm md:text-lg">
            <div className="w-[80%] ">一般法人／個人の場合</div>
            <div className="w-[10%] ">金額</div>
            <div className="w-[10%] ">(VAT7％）</div>
          </div>
          <div className="text-slate-600">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">滞在許可（ビザ）</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">1,900</div>
            </div>
          </div>
          <div className="text-slate-600 bg-slate-50">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">
                労働許可証（ワークパーミット）　※原則1年
              </div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">3,100</div>
            </div>
          </div>
          <div className="font-bold w-full flex flex-col gap-1 text-xs sm:text-base py-6">
            <div className="flex bg-[#3562AE] rounded-lg py-2 px-4 text-white text-sm md:text-lg">
              <div className="w-[80%] ">BOI企業の場合</div>
              <div className="w-[10%] ">金額</div>
              <div className="w-[10%] ">(VAT7％）</div>
            </div>
            <div className="text-slate-600">
              <div className="flex rounded-lg py-4 px-4 border-b border-white ">
                <div className="w-[80%]">滞在許可（ビザ）</div>
                <div className="w-[10%] ">THB</div>
                <div className="w-[10%]">1,900</div>
              </div>
            </div>
            <div className="text-slate-600 bg-slate-50">
              <div className="flex rounded-lg py-4 px-4 border-b border-white ">
                <div className="w-[80%]">
                  労働許可証（ワークパーミット）1年分
                </div>
                <div className="w-[10%] ">THB</div>
                <div className="w-[10%]">3,000</div>
              </div>
            </div>
            <div className="text-slate-600">
              <div className="flex rounded-lg py-4 px-4 border-b border-white ">
                <div className="w-[80%]">
                  労働許可証（ワークパーミット）2年以上
                </div>
                <div className="w-[10%] ">THB</div>
                <div className="w-[10%]">6,000</div>
              </div>
            </div>
          </div>
          <div className="font-bold w-full flex flex-col gap-1 text-xs sm:text-base py-6">
            <div className="flex bg-[#3562AE] rounded-lg py-2 px-4 text-white text-sm md:text-lg">
              <div className="w-[80%] ">リエントリービザ</div>
              <div className="w-[10%] ">金額</div>
              <div className="w-[10%] ">(VAT7％）</div>
            </div>
            <div className="text-slate-600">
              <div className="flex rounded-lg py-4 px-4 border-b border-white ">
                <div className="w-[80%]">シングル</div>
                <div className="w-[10%] ">THB</div>
                <div className="w-[10%]">1,000</div>
              </div>
            </div>
            <div className="text-slate-600 bg-slate-50">
              <div className="flex rounded-lg py-4 px-4 border-b border-white ">
                <div className="w-[80%]">マルチプル</div>
                <div className="w-[10%] ">THB</div>
                <div className="w-[10%]">3,800</div>
              </div>
            </div>
          </div>
          <div className="py-6">
            <span className="text-lg font-bold">⚠ ご注意 ⚠</span>
            <p className="text-base ">
              上記発生手数料は予告なしに変更する場合がございます。申請時にご確認をお願いいたします。
            </p>
            <p className="text-base text-end">更新日：2024年11月</p>
            <div className="text-center py-10">
              <Link
                href="/visa-workpermit#contact"
                className="hover:bg-blue-700 hover:scale-90 transition-all py-4 px-4 bg-blue-900 text-white font-semibold rounded-lg"
              >
                お見積りはお問い合わせフォームより
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PriceEN = () => {
  return (
    <div className="grid grid-cols-1 gap-6 text-[#333333] font-medium">
      <div className="border-b-2 pb-6 border-slate-400">
        <MainHeading text="Service Fee" heading="1" />
        <p className="text-xl font-semibold">
          ※下記料金には役所への発行手数料は含まれておりません。
        </p>
        <div className="grid grid-cols-12 gap-5 py-20  text-slate-600 font-semibold">
          <Link
            href="/visa-workpermit/price#work-permit"
            className="bg-slate-50 py-10 border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5 col-span-6 md:col-span-4"
          >
            <Image
              src={"/img/visa-workpermit/work-permit-icon.png"}
              alt=""
              width={100}
              height={100}
            ></Image>
            <p className="lg:text-base text-sm font-semibold text-center">
              労働許可証 Work permit
            </p>
          </Link>
          <Link
            href="/visa-workpermit/price#visa"
            className="bg-slate-50 py-10 border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5  col-span-6 md:col-span-4"
          >
            <Image
              src={"/img/visa-workpermit/visa-icon.png"}
              alt=""
              width={100}
              height={100}
            ></Image>
            <p className="lg:text-base text-sm font-semibold text-center">
              滞在許可 Visa
            </p>
          </Link>
          <Link
            href="/visa-workpermit/price#ninety-day"
            className="bg-slate-50 py-10 border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5  col-span-6 md:col-span-4"
          >
            <Image
              src={"/img/visa-workpermit/90-day-icon.png"}
              alt=""
              width={100}
              height={100}
            ></Image>
            <p className="lg:text-base text-sm font-semibold text-center">
              90日レポート 90days report
            </p>
          </Link>
          <Link
            href="/visa-workpermit/price#re-entry"
            className="bg-slate-50 py-10 border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5  col-span-6 md:col-span-4"
          >
            <Image
              src={"/img/visa-workpermit/re-entry-icon.png"}
              alt=""
              width={100}
              height={100}
            ></Image>
            <p className="lg:text-base text-sm font-semibold text-center">
              再入国許可証 Re-entry permit
            </p>
          </Link>
          <Link
            href="/visa-workpermit/price#boi"
            className="bg-slate-50 py-10 border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5  col-span-6 md:col-span-4"
          >
            <Image
              src={"/img/visa-workpermit/boi-icon.png"}
              alt=""
              width={100}
              height={100}
            ></Image>
            <p className="lg:text-base text-sm font-semibold text-center">
              B.O.I
            </p>
          </Link>
          <Link
            href="/visa-workpermit/price#insurance"
            className="bg-slate-50 py-10 border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5  col-span-6 md:col-span-4"
          >
            <Image
              src={"/img/visa-workpermit/insurance-icon.png"}
              alt=""
              width={100}
              height={100}
            ></Image>
            <p className="lg:text-base text-sm font-semibold text-center">
              Insurance
            </p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-6 border-b-2 py-6 border-slate-400">
        <span className="text-xl font-semibold text-[#3562AE]">
          一般現地法人(１名/１件あたり）
        </span>
        <div
          id="work-permit"
          className="font-bold w-full flex flex-col gap-1 text-xs sm:text-base py-10"
        >
          <div className="flex bg-[#3562AE] rounded-lg py-2 px-4 text-white text-sm md:text-lg">
            <div className="w-[80%] ">労働許可証 Work permit</div>
            <div className="w-[10%] ">金額</div>
            <div className="w-[10%] ">(VAT7％）</div>
          </div>
          <div className="text-slate-600">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">新規申請手続き・1年間</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">10,000</div>
            </div>
          </div>
          <div className="text-slate-600 bg-slate-50">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">更新手続き</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">7,500</div>
            </div>
          </div>
          <div className="text-slate-600">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">記載内容変更</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">3,500</div>
            </div>
          </div>
          <div className="text-slate-600 bg-slate-50">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">返却</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">2,000</div>
            </div>
          </div>
        </div>
        <div
          id="visa"
          className="font-bold w-full flex flex-col gap-1 text-xs sm:text-base py-10"
        >
          <div className="flex bg-[#3562AE] rounded-lg py-2 px-4 text-white text-sm md:text-lg">
            <div className="w-[80%] ">滞在許可 Visa</div>
            <div className="w-[10%] ">金額</div>
            <div className="w-[10%] ">(VAT7％）</div>
          </div>
          <div className="text-slate-600">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">
                ノンイミグラントBビザ・新規&更新手続き・1年間
              </div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">12,000</div>
            </div>
          </div>
          <div className="text-slate-600 bg-slate-50">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">タイ国内でのBビザへの切り替え</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">13,000</div>
            </div>
          </div>
          <div className="text-slate-600">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">留学・学生ビザ</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">10,000</div>
            </div>
          </div>
          <div className="text-slate-600 bg-slate-50">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">
                配偶者・家族　ノンイミグラントOビザ・妻
              </div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">7,000</div>
            </div>
          </div>
          <div className="text-slate-600">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">
                配偶者・家族　ノンイミグラントOビザ・子供
              </div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">4,000</div>
            </div>
          </div>
          <div className="text-slate-600 bg-slate-50">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">DTV ビザ</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">12,000</div>
            </div>
          </div>
        </div>
        <div
          id="ninety-day"
          className="font-bold w-full flex flex-col gap-1 text-xs sm:text-base py-10"
        >
          <div className="flex bg-[#3562AE] rounded-lg py-2 px-4 text-white text-sm md:text-lg">
            <div className="w-[80%] ">90日レポート 90days report</div>
            <div className="w-[10%] ">金額</div>
            <div className="w-[10%] ">(VAT7％）</div>
          </div>
          <div className="text-slate-600">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">90日ごとのイミグレーション出頭代行</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">1,500</div>
            </div>
          </div>
        </div>
        <div
          id="re-entry"
          className="font-bold w-full flex flex-col gap-1 text-xs sm:text-base py-10"
        >
          <div className="flex bg-[#3562AE] rounded-lg py-2 px-4 text-white text-sm md:text-lg">
            <div className="w-[80%] ">再入国許可証 Re-entry permit</div>
            <div className="w-[10%] ">金額</div>
            <div className="w-[10%] ">(VAT7％)</div>
          </div>
          <div className="text-slate-600">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">
                新規申ノンイミグラントBビザ・新規&更新手続き・1年間請手続き・1年間
              </div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">10,000</div>
            </div>
          </div>
          <div className="text-slate-600 bg-slate-50">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">新規申請手続き・1年間</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">10,000</div>
            </div>
          </div>
        </div>
        <span className="text-xl font-semibold text-[#3562AE]">
          B.O.I事業（1名/１件あたり
          ワークパーミット（労働許可証）＋滞在許可（ビザ））
        </span>
        <div
          id="boi"
          className="font-bold w-full flex flex-col gap-1 text-xs sm:text-base py-6"
        >
          <div className="flex bg-[#3562AE] rounded-lg py-2 px-4 text-white text-sm md:text-lg">
            <div className="w-[80%] ">新規申請及び更新手続き</div>
            <div className="w-[10%] ">金額</div>
            <div className="w-[10%] ">(VAT7％）</div>
          </div>
          <div className="text-slate-600">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">1年間 (New & Renew 1year)</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">20,000</div>
            </div>
          </div>
          <div className="text-slate-600 bg-slate-50">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">2年間 (New & Renew 2years)</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">40,000</div>
            </div>
          </div>
        </div>
        <span className="text-xl font-semibold text-slate-800">
          ※B.O.I企業の申請代行はB.O.Iからの認可書がある企業様の申請代行となります。
        </span>
        <div className="py-6">
          <span className="text-lg font-bold">⚠ ご注意 ⚠</span>
          <p className="text-lg ">
            各手続きは申請者本人の役所への出頭が原則となります。バンコク郊外の場合、別途サービス料が発生いたします。申請代行料はタイ国情勢や企業設立内容により、変更になる場合がございます。
          </p>
        </div>
        <span className="text-xl font-semibold text-[#3562AE]">
          役所への発行手数料
        </span>
        <div
          id="insurance"
          className="font-bold w-full flex flex-col gap-1 text-xs sm:text-base py-6"
        >
          <div className="flex bg-[#3562AE] rounded-lg py-2 px-4 text-white text-sm md:text-lg">
            <div className="w-[80%] ">一般法人／個人の場合</div>
            <div className="w-[10%] ">金額</div>
            <div className="w-[10%] ">(VAT7％）</div>
          </div>
          <div className="text-slate-600">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">滞在許可（ビザ）</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">1,900</div>
            </div>
          </div>
          <div className="text-slate-600 bg-slate-50">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">
                労働許可証（ワークパーミット）　※原則1年
              </div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">3,100</div>
            </div>
          </div>
          <div className="font-bold w-full flex flex-col gap-1 text-xs sm:text-base py-6">
            <div className="flex bg-[#3562AE] rounded-lg py-2 px-4 text-white text-sm md:text-lg">
              <div className="w-[80%] ">BOI企業の場合</div>
              <div className="w-[10%] ">金額</div>
              <div className="w-[10%] ">(VAT7％）</div>
            </div>
            <div className="text-slate-600">
              <div className="flex rounded-lg py-4 px-4 border-b border-white ">
                <div className="w-[80%]">滞在許可（ビザ）</div>
                <div className="w-[10%] ">THB</div>
                <div className="w-[10%]">1,900</div>
              </div>
            </div>
            <div className="text-slate-600 bg-slate-50">
              <div className="flex rounded-lg py-4 px-4 border-b border-white ">
                <div className="w-[80%]">
                  労働許可証（ワークパーミット）1年分
                </div>
                <div className="w-[10%] ">THB</div>
                <div className="w-[10%]">3,000</div>
              </div>
            </div>
            <div className="text-slate-600">
              <div className="flex rounded-lg py-4 px-4 border-b border-white ">
                <div className="w-[80%]">
                  労働許可証（ワークパーミット）2年以上
                </div>
                <div className="w-[10%] ">THB</div>
                <div className="w-[10%]">6,000</div>
              </div>
            </div>
          </div>
          <div className="font-bold w-full flex flex-col gap-1 text-xs sm:text-base py-6">
            <div className="flex bg-[#3562AE] rounded-lg py-2 px-4 text-white text-sm md:text-lg">
              <div className="w-[80%] ">リエントリービザ</div>
              <div className="w-[10%] ">金額</div>
              <div className="w-[10%] ">(VAT7％）</div>
            </div>
            <div className="text-slate-600">
              <div className="flex rounded-lg py-4 px-4 border-b border-white ">
                <div className="w-[80%]">シングル</div>
                <div className="w-[10%] ">THB</div>
                <div className="w-[10%]">1,000</div>
              </div>
            </div>
            <div className="text-slate-600 bg-slate-50">
              <div className="flex rounded-lg py-4 px-4 border-b border-white ">
                <div className="w-[80%]">マルチプル</div>
                <div className="w-[10%] ">THB</div>
                <div className="w-[10%]">3,800</div>
              </div>
            </div>
          </div>
          <div className="py-6">
            <span className="text-lg font-bold">⚠ ご注意 ⚠</span>
            <p className="text-base ">
              上記発生手数料は予告なしに変更する場合がございます。申請時にご確認をお願いいたします。
            </p>
            <p className="text-base text-end">更新日：2024年11月</p>
            <div className="text-center py-10">
              <Link
                href="/visa-workpermit#contact"
                className="hover:bg-blue-700 hover:scale-90 transition-all py-4 px-4 bg-blue-900 text-white font-semibold rounded-lg"
              >
                お見積りはお問い合わせフォームより
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PriceTH = () => {
  return (
    <div className="grid grid-cols-1 gap-6 text-[#333333] font-medium">
      <div className="border-b-2 pb-6 border-slate-400">
        <MainHeading text="代行サービス料金一覧" heading="1" />
        <p className="text-xl font-semibold">
          ※下記料金には役所への発行手数料は含まれておりません。
        </p>
        <div className="grid grid-cols-12 gap-5 py-20  text-slate-600 font-semibold">
          <Link
            href="/visa-workpermit/price#work-permit"
            className="bg-slate-50 py-10 border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5 col-span-6 md:col-span-4"
          >
            <Image
              src={"/img/visa-workpermit/work-permit-icon.png"}
              alt=""
              width={100}
              height={100}
            ></Image>
            <p className="lg:text-base text-sm font-semibold text-center">
              労働許可証 Work permit
            </p>
          </Link>
          <Link
            href="/visa-workpermit/price#visa"
            className="bg-slate-50 py-10 border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5  col-span-6 md:col-span-4"
          >
            <Image
              src={"/img/visa-workpermit/visa-icon.png"}
              alt=""
              width={100}
              height={100}
            ></Image>
            <p className="lg:text-base text-sm font-semibold text-center">
              滞在許可 Visa
            </p>
          </Link>
          <Link
            href="/visa-workpermit/price#ninety-day"
            className="bg-slate-50 py-10 border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5  col-span-6 md:col-span-4"
          >
            <Image
              src={"/img/visa-workpermit/90-day-icon.png"}
              alt=""
              width={100}
              height={100}
            ></Image>
            <p className="lg:text-base text-sm font-semibold text-center">
              90日レポート 90days report
            </p>
          </Link>
          <Link
            href="/visa-workpermit/price#re-entry"
            className="bg-slate-50 py-10 border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5  col-span-6 md:col-span-4"
          >
            <Image
              src={"/img/visa-workpermit/re-entry-icon.png"}
              alt=""
              width={100}
              height={100}
            ></Image>
            <p className="lg:text-base text-sm font-semibold text-center">
              再入国許可証 Re-entry permit
            </p>
          </Link>
          <Link
            href="/visa-workpermit/price#boi"
            className="bg-slate-50 py-10 border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5  col-span-6 md:col-span-4"
          >
            <Image
              src={"/img/visa-workpermit/boi-icon.png"}
              alt=""
              width={100}
              height={100}
            ></Image>
            <p className="lg:text-base text-sm font-semibold text-center">
              B.O.I
            </p>
          </Link>
          <Link
            href="/visa-workpermit/price#insurance"
            className="bg-slate-50 py-10 border rounded-lg shadow-lg flex flex-col justify-center items-center gap-5  col-span-6 md:col-span-4"
          >
            <Image
              src={"/img/visa-workpermit/insurance-icon.png"}
              alt=""
              width={100}
              height={100}
            ></Image>
            <p className="lg:text-base text-sm font-semibold text-center">
              Insurance
            </p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-6 border-b-2 py-6 border-slate-400">
        <span className="text-xl font-semibold text-[#3562AE]">
          一般現地法人(１名/１件あたり）
        </span>
        <div
          id="work-permit"
          className="font-bold w-full flex flex-col gap-1 text-xs sm:text-base py-10"
        >
          <div className="flex bg-[#3562AE] rounded-lg py-2 px-4 text-white text-sm md:text-lg">
            <div className="w-[80%] ">労働許可証 Work permit</div>
            <div className="w-[10%] ">金額</div>
            <div className="w-[10%] ">(VAT7％）</div>
          </div>
          <div className="text-slate-600">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">新規申請手続き・1年間</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">10,000</div>
            </div>
          </div>
          <div className="text-slate-600 bg-slate-50">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">更新手続き</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">7,500</div>
            </div>
          </div>
          <div className="text-slate-600">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">記載内容変更</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">3,500</div>
            </div>
          </div>
          <div className="text-slate-600 bg-slate-50">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">返却</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">2,000</div>
            </div>
          </div>
        </div>
        <div
          id="visa"
          className="font-bold w-full flex flex-col gap-1 text-xs sm:text-base py-10"
        >
          <div className="flex bg-[#3562AE] rounded-lg py-2 px-4 text-white text-sm md:text-lg">
            <div className="w-[80%] ">滞在許可 Visa</div>
            <div className="w-[10%] ">金額</div>
            <div className="w-[10%] ">(VAT7％）</div>
          </div>
          <div className="text-slate-600">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">
                ノンイミグラントBビザ・新規&更新手続き・1年間
              </div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">12,000</div>
            </div>
          </div>
          <div className="text-slate-600 bg-slate-50">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">タイ国内でのBビザへの切り替え</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">13,000</div>
            </div>
          </div>
          <div className="text-slate-600">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">留学・学生ビザ</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">10,000</div>
            </div>
          </div>
          <div className="text-slate-600 bg-slate-50">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">
                配偶者・家族　ノンイミグラントOビザ・妻
              </div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">7,000</div>
            </div>
          </div>
          <div className="text-slate-600">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">
                配偶者・家族　ノンイミグラントOビザ・子供
              </div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">4,000</div>
            </div>
          </div>
          <div className="text-slate-600 bg-slate-50">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">DTV ビザ</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">12,000</div>
            </div>
          </div>
        </div>
        <div
          id="ninety-day"
          className="font-bold w-full flex flex-col gap-1 text-xs sm:text-base py-10"
        >
          <div className="flex bg-[#3562AE] rounded-lg py-2 px-4 text-white text-sm md:text-lg">
            <div className="w-[80%] ">90日レポート 90days report</div>
            <div className="w-[10%] ">金額</div>
            <div className="w-[10%] ">(VAT7％）</div>
          </div>
          <div className="text-slate-600">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">90日ごとのイミグレーション出頭代行</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">1,500</div>
            </div>
          </div>
        </div>
        <div
          id="re-entry"
          className="font-bold w-full flex flex-col gap-1 text-xs sm:text-base py-10"
        >
          <div className="flex bg-[#3562AE] rounded-lg py-2 px-4 text-white text-sm md:text-lg">
            <div className="w-[80%] ">再入国許可証 Re-entry permit</div>
            <div className="w-[10%] ">金額</div>
            <div className="w-[10%] ">(VAT7％)</div>
          </div>
          <div className="text-slate-600">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">
                新規申ノンイミグラントBビザ・新規&更新手続き・1年間請手続き・1年間
              </div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">10,000</div>
            </div>
          </div>
          <div className="text-slate-600 bg-slate-50">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">新規申請手続き・1年間</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">10,000</div>
            </div>
          </div>
        </div>
        <span className="text-xl font-semibold text-[#3562AE]">
          B.O.I事業（1名/１件あたり
          ワークパーミット（労働許可証）＋滞在許可（ビザ））
        </span>
        <div
          id="boi"
          className="font-bold w-full flex flex-col gap-1 text-xs sm:text-base py-6"
        >
          <div className="flex bg-[#3562AE] rounded-lg py-2 px-4 text-white text-sm md:text-lg">
            <div className="w-[80%] ">新規申請及び更新手続き</div>
            <div className="w-[10%] ">金額</div>
            <div className="w-[10%] ">(VAT7％）</div>
          </div>
          <div className="text-slate-600">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">1年間 (New & Renew 1year)</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">20,000</div>
            </div>
          </div>
          <div className="text-slate-600 bg-slate-50">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">2年間 (New & Renew 2years)</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">40,000</div>
            </div>
          </div>
        </div>
        <span className="text-xl font-semibold text-slate-800">
          ※B.O.I企業の申請代行はB.O.Iからの認可書がある企業様の申請代行となります。
        </span>
        <div className="py-6">
          <span className="text-lg font-bold">⚠ ご注意 ⚠</span>
          <p className="text-lg ">
            各手続きは申請者本人の役所への出頭が原則となります。バンコク郊外の場合、別途サービス料が発生いたします。申請代行料はタイ国情勢や企業設立内容により、変更になる場合がございます。
          </p>
        </div>
        <span className="text-xl font-semibold text-[#3562AE]">
          役所への発行手数料
        </span>
        <div
          id="insurance"
          className="font-bold w-full flex flex-col gap-1 text-xs sm:text-base py-6"
        >
          <div className="flex bg-[#3562AE] rounded-lg py-2 px-4 text-white text-sm md:text-lg">
            <div className="w-[80%] ">一般法人／個人の場合</div>
            <div className="w-[10%] ">金額</div>
            <div className="w-[10%] ">(VAT7％）</div>
          </div>
          <div className="text-slate-600">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">滞在許可（ビザ）</div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">1,900</div>
            </div>
          </div>
          <div className="text-slate-600 bg-slate-50">
            <div className="flex rounded-lg py-4 px-4 border-b border-white ">
              <div className="w-[80%]">
                労働許可証（ワークパーミット）　※原則1年
              </div>
              <div className="w-[10%] ">THB</div>
              <div className="w-[10%]">3,100</div>
            </div>
          </div>
          <div className="font-bold w-full flex flex-col gap-1 text-xs sm:text-base py-6">
            <div className="flex bg-[#3562AE] rounded-lg py-2 px-4 text-white text-sm md:text-lg">
              <div className="w-[80%] ">BOI企業の場合</div>
              <div className="w-[10%] ">金額</div>
              <div className="w-[10%] ">(VAT7％）</div>
            </div>
            <div className="text-slate-600">
              <div className="flex rounded-lg py-4 px-4 border-b border-white ">
                <div className="w-[80%]">滞在許可（ビザ）</div>
                <div className="w-[10%] ">THB</div>
                <div className="w-[10%]">1,900</div>
              </div>
            </div>
            <div className="text-slate-600 bg-slate-50">
              <div className="flex rounded-lg py-4 px-4 border-b border-white ">
                <div className="w-[80%]">
                  労働許可証（ワークパーミット）1年分
                </div>
                <div className="w-[10%] ">THB</div>
                <div className="w-[10%]">3,000</div>
              </div>
            </div>
            <div className="text-slate-600">
              <div className="flex rounded-lg py-4 px-4 border-b border-white ">
                <div className="w-[80%]">
                  労働許可証（ワークパーミット）2年以上
                </div>
                <div className="w-[10%] ">THB</div>
                <div className="w-[10%]">6,000</div>
              </div>
            </div>
          </div>
          <div className="font-bold w-full flex flex-col gap-1 text-xs sm:text-base py-6">
            <div className="flex bg-[#3562AE] rounded-lg py-2 px-4 text-white text-sm md:text-lg">
              <div className="w-[80%] ">リエントリービザ</div>
              <div className="w-[10%] ">金額</div>
              <div className="w-[10%] ">(VAT7％）</div>
            </div>
            <div className="text-slate-600">
              <div className="flex rounded-lg py-4 px-4 border-b border-white ">
                <div className="w-[80%]">シングル</div>
                <div className="w-[10%] ">THB</div>
                <div className="w-[10%]">1,000</div>
              </div>
            </div>
            <div className="text-slate-600 bg-slate-50">
              <div className="flex rounded-lg py-4 px-4 border-b border-white ">
                <div className="w-[80%]">マルチプル</div>
                <div className="w-[10%] ">THB</div>
                <div className="w-[10%]">3,800</div>
              </div>
            </div>
          </div>
          <div className="py-6">
            <span className="text-lg font-bold">⚠ ご注意 ⚠</span>
            <p className="text-base ">
              上記発生手数料は予告なしに変更する場合がございます。申請時にご確認をお願いいたします。
            </p>
            <p className="text-base text-end">更新日：2024年11月</p>
            <div className="text-center py-10">
              <Link
                href="/visa-workpermit#contact"
                className="hover:bg-blue-700 hover:scale-90 transition-all py-4 px-4 bg-blue-900 text-white font-semibold rounded-lg"
              >
                お見積りはお問い合わせフォームより
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Price({ params }: { params: { lng: string } }) {
  const t = useTranslations("header");
  const lang = params.lng;
  const title = {
    th: "อัตราค่าบริการ",
    jp: "代行サービス料金一覧",
    en: "Service Fee",
  };

  const content =
    lang == "jp" ? <PriceJP /> : lang == "en" ? <PriceEN /> : <PriceTH />;
  return (
    <>
      <div className="about-us">
        <CoverVisa
          // @ts-ignore
          pageName={title[lang]}
          prevPage={{ pageName: t("visa-work"), url: "/visa-workpermit" }}
        />
        <div className="container mx-auto ">{content}</div>
      </div>
    </>
  );
}
