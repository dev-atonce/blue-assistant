import MainHeading from "@/components/website/atom/heading/MainHeading";
import Cover from "@/components/website/layout/Cover";

export default function About() {
  return (
    <>
      <div className="about-us">
        <Cover
          noHeading={true}
          pageName={"About Us"}
          image="/img/service/branch_banner.jpg"
          prevPage={{ pageName: "Home", url: "/" }}
        />
        <div className="container mx-auto px-2 md:px-0">
          <div className="grid grid-cols-1 gap-6 text-[#333333] font-medium">
            <div className="border-b-2 pb-6 border-slate-400">
              <MainHeading text="ご挨拶" heading="2" />
              <p>
                ブルーアシスタンス㈱は2005年にタイ国内における日本人向け医療アシスタンスのクレームエージェントとして設立された、現地アシスタンス会社です。
                親会社に当たる『ブルーグラウンド株式会社』（旅行会社）のネットワークを利用した、タイ全土での医療施設への支払い代行、
                日本人によるアテンドサービス、国内外の医療搬送手配、インドシナなどの医療設備の整っていない地域からチャーター便などによる緊急搬送の手配および
                支払い代行などへの業務を拡張しております。また、日系企業のお手伝いをコンセプトに、各種ビザ、労働許可証の申請代行ならびに設立、会計業務の
                コンサルタントを行っております。『親切･丁寧･迅速』をモットーにタイ国内・インドシナにおける総合アシスタンス会社を目指し日々活動しております。
              </p>
              <div className="w-full text-end">
                <p>Managing Director</p>
                <p>東 亮太朗</p>
              </div>
            </div>

            <div className="flex flex-col gap-6 border-b-2 pb-6 border-slate-400">
              <MainHeading text="当社の強み" heading="2" />
              <p>
                ブルーアシスタンスは海外に住む日本人のお客様向けに、医療アシスタンスやビザ・ワークパーミットの取得代行のお伝いを行っております。 
                お困りのことがございましたら、お気軽にお問い合わせください。
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <h3 className="bg-[#3562AE] px-4 text-lg font-bold text-white w-fit rounded-xl">
                    当社の強み 1
                  </h3>
                  <span className="font-semibold text-[#3562AE] text-xl">
                    タイで長年の実績、経験に基づいたサービス
                  </span>
                  <ul className="list-disc pl-8">
                    <li>アシスタンス業務、タイ国内で10年以上の実績</li>
                    <li>
                      アシスタンス業務に必要不可欠な手配上のコネクションと情報網、搬送からケース終了後の書類処理まで 
                      すべて一括で行うことが可能
                    </li>
                    <li>
                      バンコクから地方の手配まで質の変わらないサービスのご提供(地方へのキャッシュレス手配など)
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="bg-[#3562AE] px-4 text-lg font-bold text-white w-fit rounded-xl">
                    当社の強み 2
                  </h3>
                  <span className="font-semibold text-[#3562AE] text-xl">
                    日本人スタッフ・24時間体制のサービスのご提供
                  </span>
                  <ul className="list-disc pl-8">
                    <li>
                      日本人スタッフが緊急時や祝日・週末にも早急に対応を行う
                    </li>
                    <li>
                      搬送時は必ず日本人スタッフがアテンドを行う。お客様に『安心』と『信頼』のサービスをご提供
                    </li>
                    <li>
                      日本人スタッフが対応する為、海外にいながら日本と変わらぬサービス提供を保証
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="bg-[#3562AE] px-4 text-lg font-bold text-white w-fit rounded-xl">
                    当社の強み 3
                  </h3>
                  <span className="font-semibold text-[#3562AE] text-xl">
                    旅行業務のノウハウとサービス
                  </span>
                  <ul className="list-disc pl-8">
                    <li>
                      旅行業で培ってきた『お客様へのサービス』をアシスタンス業務にも適用きめ細かいサービスとクイックレスポンスを常に心がける
                    </li>
                    <li>
                      車、宿泊先の手配、タイ国内の地理関係など、旅行業務に近い手配内容に関しても対応可能
                    </li>
                    <li>
                      親会社の情報、コネクションをアシスタント部門にも適用
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className=" border-b-2 pb-6 border-slate-400">
              <MainHeading text="会社概要" heading="1" />
              <div className="py-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  <div className="col-span-2 font-bold">Conpany Name</div>
                  <div className="col-span-10">
                    Provide knowledge and services about the tourism business.
                  </div>
                  <div className="col-span-2 font-bold">Head office</div>
                  <div className="col-span-10">
                    24 Sukhumvit Soi 21, Sukhumvit Road (Asok), Khlong Toei Nuea
                    Subdistrict, Watthana District, Bangkok 10110
                  </div>
                  <div className="col-span-2 font-bold">Founding date</div>
                  <div className="col-span-10">December 21, 2004</div>
                  <div className="col-span-2 font-bold">Registered capital</div>
                  <div className="col-span-10">6,000,000 baht</div>

                  <div className="col-span-2 font-bold">
                    Authorized Signatory Board Member
                  </div>
                  <div className="col-span-10">Mr. Ryotaro Azuma</div>
                  <div className="col-span-2 font-bold">Consultant</div>
                  <div className="col-span-10">Mr. Yoichi Okubo</div>
                  <div className="col-span-2 font-bold">
                    Number of employees
                  </div>
                  <div className="col-span-10">10 people</div>
                  <div className="col-span-2 font-bold">Transaction Bank</div>
                  <div className="col-span-10">Siam Commercial Bank</div>
                  <div className="col-span-2 font-bold">
                    Affiliated Companies
                  </div>
                  <div className="col-span-10">
                    <p className="font-bold">Thai</p>
                    <p>Blue Ground Co., Ltd. (Inbound Tourism Business)</p>
                    <p className="font-bold">Myanmar</p>
                    <p>Blue Assistance Myanmar Co., Ltd.</p>
                    <p className="font-bold">Japan</p>
                    <p>
                      Blue Ground Japan Co., Ltd. (Inbound Tourism
                      Business/Sales)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="  pb-6 ">
              <MainHeading text="沿革" heading="2" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="col-span-2 font-bold">2004</div>
                <div className="col-span-10">
                  Started a company in Bangkok Started a medical assistance
                  business in Thailand and Indochina
                </div>
                <div className="col-span-2 font-bold">2013</div>
                <div className="col-span-10">
                  Start a business providing visa and work permit consulting
                  services. Start a business representing Japanese companies in
                  applying for visas and work permits.
                </div>
                <div className="col-span-2 font-bold">2015</div>
                <div className="col-span-10">
                  Established a Japanese-language medical assistance counter and
                  started a Japanese Medical Services Center (JMD) business.
                </div>
                <div className="col-span-2 font-bold">2016</div>
                <div className="col-span-10">
                  Established Blue Assistance Myanmar and started medical
                  assistance business in Myanmar. Set up Japanese Medical
                  Services (JMD) Center in Samitivej Parami Hospital, Yangon.
                  Set up Japanese Medical Assistance Counter.
                </div>

                <div className="col-span-2 font-bold">2018</div>
                <div className="col-span-10">
                  Establishment of a Japanese Medical Service Center (JMD) at
                  Rajthani Hospital, Phra Nakhon Si Ayutthaya Province, Thailand
                </div>
                <div className="col-span-2 font-bold">2019</div>
                <div className="col-span-10">
                  Establishment of Japanese Medical Services (JMD) Center at
                  Alliance International Medical Centre (AIMC), Laos.
                </div>
                <div className="col-span-2 font-bold">2021</div>
                <div className="col-span-10">
                  Established a Japanese Medical Service Center (JMD) at
                  Kasemrad Prachinburi Hospital, Prachinburi Province, Thailand.
                </div>
                <div className="col-span-2 font-bold">2022</div>
                <div className="col-span-10">
                  Established a Japanese Medical Service Center (JMD) at
                  Kasemrad International, Vientiane, Laos.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
