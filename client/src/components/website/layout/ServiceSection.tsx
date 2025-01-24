import ServiceCard from "../molecule/ServiceCard";

export default async function ServiceSection({ data, lng }: any) {
  const ModalContent = () => {
    return (
      <div className="text-base flex flex-col gap-4">
        <h3 className=" text-lg font-semibold text-[#3562AE]">
          医療アシスタンス業務
        </h3>
        <ul className="list-disc">
          <li>医療機関へのキャッシュレス手配代行</li>
          <li>日本人スタッフによるアテンド (患者様ご本人、ご家族など)</li>
          <li>緊急搬送の代理手配 (医療機関、搬送会社との連携)</li>
          <li>帰国搬送の代理手配 (医療機関や企業様経由)</li>
          <li>ご遺体搬送の手配 (大使館/葬儀会社/クーリエ会社など一括手配)</li>
          <li>クレームドキュメントのコレクションと処理手続き</li>
          <li>各必要書類（官公庁発行書類など）の取り付け及び翻訳</li>
        </ul>
      </div>
    );
  };
  const mocks = [
    {
      serviceNameTH: "ธุรกิจให้ความช่วยเหลือทางการแพทย์",
      serviceNameEN: "Medical Assistance",
      serviceNameJP: "医療アシスタンス事業",
      descriptionTH:
        "บริษัท บลู แอสซิสแท็นซ จำกัด เป็นบริษัทที่ให้ความช่วยเหลือทางการแพทย์สำหรับชาวญี่ปุ่น โดยให้บริการมาอย่างยาวนานทั้งการเป็นตัวแทนชำระเงินให้แก่สถานพยาบาล ให้บริการดูแลผู้ป่วยโดยชาวญี่ปุ่น รวมถึงบริการเคลื่อนย้ายผู้ป่วยทั้งในและนอกประเทศ เราก้าวไปข้างหน้าอย่างไม่หยุดยั้งในทุก ๆ วัน โดยมุ่งมั่นสู่การเป็นบริษัทตัวแทนที่ให้ความช่วยเหลือแบบครอบคลุมทั้งในประเทศไทยและอินโดจีน",
      descriptionJP:
        "タイ・インドシナ・医療アシスタンスのエキスパートブルーアシスタンス㈱は日本人向け医療アシスタンス会社として、長年、医療機関への支払い代行、日本人アテンドサービス、国内外の医療搬送業務を行っております。タイ国内・インドシナにおける　総合アシスタンス会社を目指し、日々活動しております。",
      descriptionEN:
        "Medical assistance services in Thailand and Indochina, we provide payment agency services to medical institutions and support for domestic and international medical transportation.",

      id: "customer-support",
      image: "/img/our-business/Group 280.png",
      modal: <ModalContent />,
    },
    {
      serviceNameTH: "ศูนย์บริการด้านการแพทย์สำหรับชาวญี่ปุ่น (JMD)",
      serviceNameEN: "Japanese Medical Desk (JMD)",
      serviceNameJP: "ジャパニーズメディカルデスク",
      descriptionJP:
        "日本語医療通訳及びキャッシュレスサービスジャパニーズメディカルデスク（JMD）は、タイ及び東南アジアにおける医療設備が整っていない地域にお住まいの在住者様の生活に『日本語の医療サポート』をご提供する事を目的とし設立した「日本語医療サポートデスク」です。タイはプラチンブリ県のカセムラート病院プラチンブリ内、また、ミャンマーはヤンゴンのサミティベートインターナショナルクリニック内にジャパニーズメディカルデスク(JMD)を開設、日本語医療通訳が常駐し、日本語医療サービスのご提供を行っております。",
      descriptionTH:
        'ศูนย์บริการด้านการแพทย์สำหรับชาวญี่ปุ่น (JMD) เป็น "เคาน์เตอร์ให้ความช่วยเหลือด้านการแพทย์ภาษาญี่ปุ่น" ที่ก่อตั้งขึ้นเพื่อ"ให้ความช่วยเหลือทางการแพทย์ภาษาญี่ปุ่น" สำหรับผู้ที่อาศัยอยู่ในพื้นที่ซึ่งขาดสิ่งอำนวยความสะดวกทางการแพทย์ในประเทศไทยและเอเชียตะวันออกเฉียงใต้ เราได้จัดตั้งศูนย์บริการด้านการแพทย์สำหรับชาวญี่ปุ่น (JMD) ขึ้นในโรงพยาบาลเกษมราษฎร์ ปราจีนบุรี จังหวัดปราจีนบุรี ประเทศไทย และในคลินิกสมิติเวชโรงพยาบาลปารามี เมืองย่างกุ้ง ประเทศเมียนมาร์ โดยมีล่ามทางการแพทย์ภาษาญี่ปุ่นอยู่ประจำ และให้บริการทางการแพทย์ด้วยภาษาญี่ปุ่น',
      descriptionEN:
        " medical assistance in Thailand, Myanmar, and Laos. Our Japanese interpreters assist with cashless medical consultations locally.",
      id: "jmd",
      image: "/img/our-business/Rectangle 162.png",
      link: "https://jmd.blue-assistance.co.th",
    },
    {
      serviceNameTH: "ธุรกิจให้คำปรึกษาด้านวีซ่าและใบอนุญาตทำงาน",
      serviceNameEN: "Visa & Workpermit Consultancy",
      serviceNameJP: "ビザ・ワークパーミット取得代行",
      descriptionJP:
        "ビザ＆労働許可証申請代行サービスタイ国内における、日系企業様のビザ及び労働許可証申請のお手伝いをさせて頂いております。",
      descriptionTH:
        "เราเป็นตัวแทนในการยื่นขอวีซ่าและใบอนุญาตทำงานให้กับบริษัทญี่ปุ่นในประเทศไทย",
      descriptionEN:
        "Visa and work permit acquisition support in Thailand. Feel free to contact us for assistance.",
      id: "visa-workpermit",
      image: "/img/our-business/Group 279.png",
    },
    {
      serviceNameTH: "BLUMED",
      serviceNameEN: "Medical Tourism with BLUMED",
      serviceNameJP: "メディカルツーリズム",
      descriptionJP:
        "というコンセプトのもとに設立されましたヘルスツーリズムという目的を持って、観光マネジメントを行う集中するための旅行健康管理予防病気を遅らせるレシピエントの病気の治療を含むタイ人にも外国人にも対応",
      descriptionTH:
        "บลู เมดิแคร์ เจแปน (Blue Medicare Japan) หรือ BluMed ดำเนินการโดยบริษัทบริษัท บลู แอสซิสแท็นซ์ จำกัด ก่อตั้งขึ้นภายใต้แนวคิดการท่องเที่ยงเชิงสุขภาพ โดยมีวัตถุประสงค์เพื่อดำเนินการจัดการท่องเที่ยวเพื่อมุ่งเน้นในการป้องกันการดูแลสุขภาพ ชะลอการเจ็บป่วย รวมไปถึงการรักษาโรคแก่ผู้รับบริการทั้งชาวไทยและชาวต่างชาติ",
      descriptionEN:
        "Blue Medicare Japan works in collaboration with medical institutions in Japan to offer medical tourism services for non-japanese patients.",
      id: "bluemed",
      image: "/img/our-business/image.png",
      link: "https://blumedth.com/",
    },
  ];

  return (
    <div className=" overflow-hidden">
      <div className="grid grid-cols-12 gap-y-6 md:gap-x-4 lg:px-20 pt-10 pb-20">
        {mocks?.map((i: any, k: any) => (
          <ServiceCard item={i} key={k} lng={lng} />
        ))}
      </div>
    </div>
  );
}
