import { Link } from "@/i18n/routing";

export default function StrongServiceSection() {
  return (
    <>
      <div id="about-us" className="bg-[#EDF4FF]">
        <div className="container mx-auto mt-20 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3562AE] text-center tracking-widest">
            「親切・丁寧・迅速 」なサービス
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-bold text-[#3562AE] text-center mt-6">
            をモットーに、みなさまの海外生活をサポートいたします。
          </p>
          <p className="text-xs  sm:text-base lg:text-lg font-bold text-[#3562AE] text-center mt-6">
            ブルーアシスタンスは海外に住む日本人のお客様向けに、医療アシスタンスやビザ・ワークパーミットの取得代行のお伝いを行っております。
            <br />
            お困りのことがございましたら、お気軽にお問い合わせください。
          </p>
          <div className="grid grid-cols-12 gap-y-8 md:gap-2 lg:gap-x-4 mt-20 text-[#0C2B4B]">
            <div className="col-span-12 md:col-span-4 bg-white p-6 rounded-2xl border">
              <div className="flex justify-center h-32">
                <img
                  src="/img/our-business/Group 229.png"
                  alt="19年の実績と経験"
                />
              </div>
              <h6 className="mt-6 text-center">
                タイでのアシスタンス事業
                <br />
                <span className="font-bold">19年の実績と経験</span>
              </h6>
            </div>
            <div className="col-span-12 md:col-span-4 bg-white p-6 rounded-2xl border">
              <div className="flex justify-center h-32">
                <img
                  src="/img/our-business/Frame.png"
                  alt="24-hour support system"
                />
              </div>
              <h6 className="mt-6 text-center">
                日本語スタッフによる
                <br />
                <span className="font-bold">24時間サポート体制</span>
              </h6>
            </div>
            <div className="col-span-12 md:col-span-4 bg-white p-6 rounded-2xl border">
              <div className="flex justify-center h-32">
                <img
                  src="/img/our-business/Frame (1).png"
                  alt="travel agency"
                />
              </div>
              <h6 className="mt-6 text-center">
                <span className="font-bold">旅行会社のノウハウ</span>を<br />
                活かしたサービス
              </h6>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/about-us"
              className="bg-[#3562AE] py-2 px-4 rounded-md text-white hover:bg-[#FDBD59]"
            >
              会社案内はこちら
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
