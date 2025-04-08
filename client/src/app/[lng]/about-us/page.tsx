import MainHeading from "@/components/website/atom/heading/MainHeading";
import Cover from "@/components/website/layout/Cover";
import { useTranslations } from "next-intl";
import type { Metadata, ResolvingMetadata } from "next";

const pageName = "about";
export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const lng = params.lng?.toUpperCase();

  const seoRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/seo/page-name/${pageName}`;

  // fetch data
  const response = await fetch(seoRoute, { cache: "no-store" }).then((res) =>
    res.json()
  );

  return {
    metadataBase: new URL("https://blue-assistant.co.th"),
    title: response[`seoTitle${lng}`],
    description: response[`seoDescription${lng}`],
    keywords: response[`seoKeyword${lng}`],
    alternates: {
      canonical: "./",
    },
    // icons: [{ rel: "icon", url: Favicon.src }],
  };
}

const AboutTH = () => {
  return (
    <div className="grid grid-cols-1 gap-6 text-[#333333] font-medium">
      <div className="border-b-2 pb-6 border-slate-400">
        <MainHeading text="คำทักทาย" heading="2" />
        <p>
          บริษัท บลู แอสซิสแท็นซ จำกัด
          เป็นบริษัทตัวแทนสำหรับให้ความช่วยเหลือในระดับภูมิภาค
          โดยก่อตั้งขึ้นในปี พ.ศ.2548
          เพื่อทำหน้าที่เป็นตัวแทนเรียกร้องค่ารักษาพยาบาลสำหรับชาวญี่ปุ่นในประเทศไทย
          เรากำลังขยายธุรกิจไปสู่การให้บริการในรูปแบบที่ครอบคลุมยิ่งขึ้น อาทิ
          เป็นตัวแทนชำระเงินค่าสถานพยาบาลทั่วประเทศไทย
          บริการดูแลผู้ป่วยโดยชาวญี่ปุ่น
          บริการเคลื่อนย้ายผู้ป่วยทั้งในและนอกประเทศ
          ทำหน้าที่เป็นตัวแทนชำระเงินและให้บริการเคลื่อนย้ายผู้ป่วยฉุกเฉินด้วยเที่ยวบินเช่าแบบเหมาลำในพื้นที่ที่ไม่มีสิ่งอำนวยความสะดวกทางการแพทย์
          เช่น ภูมิภาคอินโดจีน ฯลฯ โดยมีเครือข่ายและมีสำนักงานใหญ่คือ &quot;Blue
          Ground Co., Ltd.&quot; (บริษัทท่องเที่ยว)
          นอกจากนี้ภายใต้แนวคิดที่ต้องการให้ความช่วยเหลือบริษัทญี่ปุ่น
          เรายังมีบริการให้ คำปรึกษา เช่น ตัวแทนยื่นขอวีซ่าประเภทต่าง ๆ
          และตัวแทนยื่นขอใบอนุญาตทำงาน ฯลฯ อีกด้วย
          เราก้าวไปข้างหน้าอย่างไม่หยุดยั้งในทุก ๆ วัน
          โดยมุ่งมั่นสู่การเป็นบริษัทตัวแทนที่ให้ความช่วยเหลือแบบครอบคลุมทั้งในประเทศไทยและอินโดจีน
          ภายใต้สโลแกน “มีน้ำใจ สุภาพ และรวดเร็วฉับไว”
        </p>
        <div className="w-full text-end">
          <p>Managing Director</p>
          <p>Ryotaro Azuma</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 border-b-2 pb-6 border-slate-400">
        <MainHeading text="จุดแข็งของเรา" heading="2" />
        {/* <p>
          ブルーアシスタンスは海外に住む日本人のお客様向けに、医療アシスタンスやビザ・ワークパーミットの取得代行のお伝いを行っております。
          お困りのことがございましたら、お気軽にお問い合わせください。
        </p> */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="bg-[#3562AE] px-4 text-lg font-bold text-white w-fit rounded-xl">
              จุดแข็งของเรา 1
            </h3>
            <span className="font-semibold text-[#3562AE] text-xl">
              บริการที่เกิดขึ้นจากความสำเร็จและประสบการณ์การอันยาวนานในประเทศไทย
            </span>
            <ul className="list-disc pl-8">
              <li>
                ให้บริการธุรกิจตัวแทนสำหรับช่วยเหลือในประเทศไทยมานานกว่า 10 ปี
              </li>
              <li>
                รามีเครือข่ายและข้อมูลสำคัญที่จำเป็นต่อการให้ความช่วยเหลือ
                จึงสามารถรองรับได้อย่างครบวงจรตั้งแต่เคลื่อนย้ายผู้ป่วยจนถึงการจัดการกับเอกสารหลังจบงาน
              </li>
              <li>
                รักษาคุณภาพในการให้บริการด้วยมาตรฐานเดียวกันตั้งแต่ในเขตกรุงเทพฯ
                จนถึงส่วนท้องถิ่น
                (บริการชำระเงินแบบไม่ใช้เงินสดไปยังส่วนท้องถิ่น)
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="bg-[#3562AE] px-4 text-lg font-bold text-white w-fit rounded-xl">
              จุดแข็งของเรา 2
            </h3>
            <span className="font-semibold text-[#3562AE] text-xl">
              ให้บริการโดยมีเจ้าหน้าที่ชาวญี่ปุ่นคอยให้ความช่วยเหลือท่านตลอด 24
              ชั่วโมง
            </span>
            <ul className="list-disc pl-8">
              <li>
                ให้บริการโดยมีเจ้าหน้าที่ชาวญี่ปุ่นคอยให้ความช่วยเหลือท่านตลอด
                24 ชั่วโมง
              </li>
              <li>
                มีเจ้าหน้าที่ชาวญี่ปุ่นคอยติดตามเมื่อเคลื่อนย้ายผู้ป่วย
                ให้บริการที่ “ปลอดภัย” และ “ไว้วางใจได้” แก่ลูกค้าเสมอ
              </li>
              <li>
                มีเจ้าหน้าที่ชาวญี่ปุ่นคอยให้การดูแล
                ดังนั้นรับประกันว่าเราให้บริการในระดับเดียวกับประเทศญี่ปุ่นแม้ว่าท่านจะอยู่ในต่างประเทศก็ตาม
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="bg-[#3562AE] px-4 text-lg font-bold text-white w-fit rounded-xl">
              จุดแข็งของเรา 3
            </h3>
            <span className="font-semibold text-[#3562AE] text-xl">
              ให้ความรู้และบริการเกี่ยวกับธุรกิจนำเที่ยว
            </span>
            <ul className="list-disc pl-8">
              <li>
                ด้วยประสบการณ์ “การให้บริการลูกค้า” ที่สั่งสมจากธุรกิจนำเที่ยว
                เราจึงทำหน้าที่เป็นตัวแทนให้ความช่วยเหลือโดยคำนึงถึงบริการที่ละเอียดรอบคอบและการตอบสนองที่รวดเร็วอยู่เสมอ
              </li>
              <li>
                นอกจากนี้ เรายังให้บริการจัดเตรียมการเดินทางท่องเที่ยว เช่น
                การจัดหารถยนต์ ที่พัก และเส้นทางการเดินทางภายในประเทศไทย ฯลฯ
                อีกด้วย
              </li>
              <li>
                เสริมสร้างศักยภาพของฝ่ายตัวแทนช่วยเหลือด้วยข้อมูลและเครือข่ายของบริษัทแม่
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" border-b-2 pb-6 border-slate-400">
        <MainHeading text="ข้อมูลบริษัท" heading="1" />
        <div className="py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="col-span-2 font-bold">ชื่อบริษัท</div>
            <div className="col-span-10">บริษัท บลู แอสซิสแท็นซ จำกัด</div>
            <div className="col-span-2 font-bold">สำนักงานใหญ่</div>
            <div className="col-span-10">
              24 ซอยสุขุมวิท 21 ถนนสุขุมวิท (อโศก) แขวงคลองเตยเหนือ เขตวัฒนา
              กรุงเทพมหานคร 10110
            </div>
            <div className="col-span-2 font-bold">วันที่ก่อตั้ง</div>
            <div className="col-span-10">21 ธันวาคม 2547</div>
            <div className="col-span-2 font-bold">ทุนจดทะเบียน</div>
            <div className="col-span-10">6,000,000 บาท</div>

            <div className="col-span-2 font-bold">
              กรรมการบริหารผู้มีอำนาจลงนาม
            </div>
            <div className="col-span-10">นายเรียวทาโร่ อาซึมะ</div>
            <div className="col-span-2 font-bold">ที่ปรึกษา</div>
            <div className="col-span-10">นายโยอิชิ โอคูโบ</div>
            <div className="col-span-2 font-bold">จำนวนพนักงาน</div>
            <div className="col-span-10">10 คน</div>
            <div className="col-span-2 font-bold">ธนาคารที่ทำธุรกรรม</div>
            <div className="col-span-10">ธนาคารไทยพาณิชย์</div>
            <div className="col-span-2 font-bold">บริษัทในเครือ</div>
            <div className="col-span-10">
              <p className="font-bold">ไทย</p>
              <p>Blue Ground Co., Ltd. (Inbound Tourism Business)</p>
              <p className="font-bold">เมียนมาร์</p>
              <p>Blue Assistance Myanmar Co., Ltd.</p>
              <p className="font-bold">ญี่ปุ่น</p>
              <p>
                Blue Ground Japan Co., Ltd. (Inbound Tourism Business/Sales)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="  pb-10 ">
        <MainHeading text="ประวัติความเป็นมา" heading="2" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="col-span-2 font-bold">2004</div>
          <div className="col-span-10">
            เริ่มก่อตั้งบริษัทในกรุงเทพฯ
            เริ่มธุรกิจการให้ความช่วยเหลือทางการแพทย์ในประเทศไทยและอินโดจีน　　　
          </div>
          <div className="col-span-2 font-bold">2013</div>
          <div className="col-span-10">
            เริ่มต้นธุรกิจธุรกิจให้คำปรึกษาด้านวีซ่าและใบอนุญาตการทำงาน
            เริ่มเป็นตัวแทนในการยื่นขอวีซ่าและใบอนุญาตทำงานให้กับบริษัทญี่ปุ่น
          </div>
          <div className="col-span-2 font-bold">2015</div>
          <div className="col-span-10">
            จัดทำเคาน์เตอร์ให้ความช่วยเหลือด้านการแพทย์ภาษาญี่ปุ่น
            เริ่มธุรกิจศูนย์บริการด้านการแพทย์สำหรับชาวญี่ปุ่น (JMD)
          </div>
          <div className="col-span-2 font-bold">2016</div>
          <div className="col-span-10">
            ก่อตั้งบริษัท Blue Assistance Myanmar
            และเริ่มธุรกิจให้ความช่วยเหลือด้านการแพทย์ในประเทศเมียนมาร์
            จัดตั้งศูนย์บริการด้านการแพทย์สำหรับชาวญี่ปุ่น (JMD)
            ในคลินิกสมิติเวชโรงพยาบาลปารามี เมืองย่างกุ้ง
            จัดทำเคาน์เตอร์ให้ความช่วยเหลือด้านการแพทย์ภาษาญี่ปุ่น
          </div>

          <div className="col-span-2 font-bold">2018</div>
          <div className="col-span-10">
            จัดตั้งศูนย์บริการด้านการแพทย์สำหรับชาวญี่ปุ่น (JMD)
            ในโรงพยาบาลราชธานี จังหวัดพระนครศรีอยุธยา ประเทศไทย
          </div>
          <div className="col-span-2 font-bold">2019</div>
          <div className="col-span-10">
            จัดตั้งศูนย์บริการด้านการแพทย์สำหรับชาวญี่ปุ่น (JMD) ในศูนย์การแพทย์
            Alliance International Medical Centre (AIMC) ประเทศลาว
          </div>
          <div className="col-span-2 font-bold">2021</div>
          <div className="col-span-10">
            จัดตั้งศูนย์บริการด้านการแพทย์สำหรับชาวญี่ปุ่น (JMD)
            ในโรงพยาบาลเกษมราษฎร์ ปราจีนบุรี จังหวัดปราจีนบุรี ประเทศไทย.
          </div>
          <div className="col-span-2 font-bold">2022</div>
          <div className="col-span-10">
            จัดตั้งศูนย์บริการด้านการแพทย์สำหรับชาวญี่ปุ่น (JMD) ในเกษมราษฎร์
            อินเตอร์เนชันแนล เวียงจันทน์ ประเทศลาว
          </div>
        </div>
      </div>
    </div>
  );
};
// translation to do
const AboutEN = () => {
  return (
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
              <li>アシスタンス業務、タイ国内で20年以上の実績</li>
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
              <li>日本人スタッフが緊急時や祝日・週末にも早急に対応を行う</li>
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
              <li>親会社の情報、コネクションをアシスタント部門にも適用</li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" border-b-2 pb-6 border-slate-400">
        <MainHeading text="会社概要" heading="1" />
        <div className="py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="col-span-2 font-bold">Company Name</div>
            <div className="col-span-10">Blue Assistance Co., Ltd.</div>
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
            <div className="col-span-2 font-bold">Number of employees</div>
            <div className="col-span-10">10 people</div>
            <div className="col-span-2 font-bold">Transaction Bank</div>
            <div className="col-span-10">Siam Commercial Bank</div>
            <div className="col-span-2 font-bold">Affiliated Companies</div>
            <div className="col-span-10">
              <p className="font-bold">Thai</p>
              <p>Blue Ground Co., Ltd. (Inbound Tourism Business)</p>
              <p className="font-bold">Myanmar</p>
              <p>Blue Assistance Myanmar Co., Ltd.</p>
              <p className="font-bold">Japan</p>
              <p>
                Blue Ground Japan Co., Ltd. (Inbound Tourism Business/Sales)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="  pb-10 ">
        <MainHeading text="沿革" heading="2" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="col-span-2 font-bold">2004</div>
          <div className="col-span-10">
            Started a company in Bangkok Started a medical assistance business
            in Thailand and Indochina
          </div>
          <div className="col-span-2 font-bold">2013</div>
          <div className="col-span-10">
            Start a business providing visa and work permit consulting services.
            Start a business representing Japanese companies in applying for
            visas and work permits.
          </div>
          <div className="col-span-2 font-bold">2015</div>
          <div className="col-span-10">
            Established a Japanese-language medical assistance counter and
            started a Japanese Medical Services Center (JMD) business.
          </div>
          <div className="col-span-2 font-bold">2016</div>
          <div className="col-span-10">
            Established Blue Assistance Myanmar and started medical assistance
            business in Myanmar. Set up Japanese Medical Services (JMD) Center
            in Samitivej Parami Hospital, Yangon. Set up Japanese Medical
            Assistance Counter.
          </div>

          <div className="col-span-2 font-bold">2018</div>
          <div className="col-span-10">
            Establishment of a Japanese Medical Service Center (JMD) at Rajthani
            Hospital, Phra Nakhon Si Ayutthaya Province, Thailand
          </div>
          <div className="col-span-2 font-bold">2019</div>
          <div className="col-span-10">
            Establishment of Japanese Medical Services (JMD) Center at Alliance
            International Medical Centre (AIMC), Laos.
          </div>
          <div className="col-span-2 font-bold">2021</div>
          <div className="col-span-10">
            Established a Japanese Medical Service Center (JMD) at Kasemrad
            Prachinburi Hospital, Prachinburi Province, Thailand.
          </div>
          <div className="col-span-2 font-bold">2022</div>
          <div className="col-span-10">
            Established a Japanese Medical Service Center (JMD) at Kasemrad
            International, Vientiane, Laos.
          </div>
        </div>
      </div>
    </div>
  );
};
const AboutJP = () => {
  return (
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
              <li>アシスタンス業務、タイ国内で20年以上の実績</li>
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
              <li>日本人スタッフが緊急時や祝日・週末にも早急に対応を行う</li>
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
              <li>親会社の情報、コネクションをアシスタント部門にも適用</li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" border-b-2 pb-6 border-slate-400">
        <MainHeading text="会社概要" heading="1" />
        <div className="py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="col-span-2 font-bold">設立会社名</div>
            <div className="col-span-10">ブルーアシスタンス株式会社</div>
            <div className="col-span-2 font-bold">本社</div>
            <div className="col-span-10">
              24 Sukhumvit Soi 21, Sukhumvit Road (Asok), Khlong Toei Nuea
              Subdistrict, Watthana District, Bangkok 10110
            </div>
            <div className="col-span-2 font-bold">設立年月日</div>
            <div className="col-span-10">2004年12月21日</div>
            <div className="col-span-2 font-bold">資本金</div>
            <div className="col-span-10">600万バーツ</div>

            <div className="col-span-2 font-bold">代表取締役</div>
            <div className="col-span-10">東　亮太朗</div>
            <div className="col-span-2 font-bold">アドバイザー</div>
            <div className="col-span-10">大久保　洋一</div>
            <div className="col-span-2 font-bold">従業員数</div>
            <div className="col-span-10">10名</div>
            <div className="col-span-2 font-bold">取引銀行</div>
            <div className="col-span-10">サイアムコマーシャル銀行</div>
            <div className="col-span-2 font-bold">グループ会社</div>
            <div className="col-span-10">
              <p className="font-bold">〈タイ〉 </p>
              <p>Blue Ground Co., Ltd. (Inbound Tourism Business)</p>
              <p className="font-bold">〈ミャンマー〉</p>
              <p>Blue Assistance Myanmar Co., Ltd.</p>
              <p className="font-bold">〈日本〉</p>
              <p>
                Blue Ground Japan Co., Ltd. (Inbound Tourism Business/Sales)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="  pb-10 ">
        <MainHeading text="沿革" heading="2" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="col-span-2 font-bold">2004年</div>
          <div className="col-span-10">
            バンコクに会社設立
            タイ・インドシナにおける、医療アシスタンス業務開始　　　
          </div>
          <div className="col-span-2 font-bold">2013年</div>
          <div className="col-span-10">
            ビザ＆労働許可証コンサルタント事業開始、日系法人企業のビザ及び労働許可証申請代行を開始
          </div>
          <div className="col-span-2 font-bold">2015年</div>
          <div className="col-span-10">
            日本語医療サポートデスク、ジャパニーズメディカルデスク（JMD）業務開
          </div>
          <div className="col-span-2 font-bold">2016年</div>
          <div className="col-span-10">
            ブルーアシスタンス・ミャンマー設立。ミャンマーにおける医療アシスタンス業務開始
            <br />
            ヤンゴン・サミティベートパラミークリニック内にジャパニーズメディカルデスク(JMD)
            開設、日本語医療サービス開始
          </div>

          <div className="col-span-2 font-bold">2018年</div>
          <div className="col-span-10">
            タイ・アユタヤ県・ラチャタニー病院内にジャパニーズメディカルデスク（JMD）開設
          </div>
          <div className="col-span-2 font-bold">2019年</div>
          <div className="col-span-10">
            ラオス・アライアンスインターナショナルメディカルセンター（AIMC）内にジャパニーズメディカルデスク(JMD)開設
          </div>
          <div className="col-span-2 font-bold">2021年</div>
          <div className="col-span-10">
            タイ・プラチンブリ県・カセムラート病院プラチンブリ内にジャパニーズメディカルデスク(JMD)開設
          </div>
          <div className="col-span-2 font-bold">2022年</div>
          <div className="col-span-10">
            ラオス・カセムラートインターナショナル病院ビエンチャン内にジャパニーズメディカルデスク（JMD）開設
          </div>
        </div>
      </div>
    </div>
  );
};

export default function About({ params }: { params: { lng: string } }) {
  const lang = params.lng;
  const h = useTranslations("header");

  const content =
    lang == "jp" ? <AboutJP /> : lang == "en" ? <AboutEN /> : <AboutTH />;
  return (
    <>
      <div className="about-us">
        <Cover
          noHeading={true}
          pageName={h("about")}
          image="/img/service/branch_banner.jpg"
          prevPage={{ pageName: h("home"), url: "/" }}
        />
        <div className="container mx-auto ">{content}</div>
      </div>
    </>
  );
}
