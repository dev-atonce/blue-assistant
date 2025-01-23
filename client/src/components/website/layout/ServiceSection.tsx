import ServiceCard from "../molecule/ServiceCard";

export default async function ServiceSection({ data }: any) {
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
      serviceNameTH: "医療アシスタンス事業",
      serviceNameEN: "医療アシスタンス事業",
      descriptionTH:
        "タイ・インドシナにおける医療アシスタンス事業として、医療機関への支払い代行、国内外の医療搬送サポート業事業を行っております。",
      descriptionEN:
        "タイ・インドシナにおける医療アシスタンス事業として、医療機関への支払い代行、国内外の医療搬送サポート業事業を行っております。",
      id: "customer-support",
      image: "/img/our-business/Group 280.png",
      modal: <ModalContent />,
    },
    {
      serviceNameTH: "ジャパニーズメディカルデスク",
      serviceNameEN: "ジャパニーズメディカルデスク",
      descriptionTH:
        "タイ・インドシナにおける医療アシスタンス事業として、医療機関への支払い代行、国内外の医療搬送サポート業事業を行っております。",
      descriptionEN:
        "タイ・インドシナにおける医療アシスタンス事業として、医療機関への支払い代行、国内外の医療搬送サポート業事業を行っております。",
      id: "jmd",
      image: "/img/our-business/Rectangle 162.png",
      link: "https://jmd.blue-assistance.co.th",
    },
    {
      serviceNameTH: "ビザ・ワークパーミット取得代行",
      serviceNameEN: "ビザ・ワークパーミット取得代行h",
      descriptionTH:
        "タイ・インドシナにおける医療アシスタンス事業として、医療機関への支払い代行、国内外の医療搬送サポート業事業を行っております。",
      descriptionEN:
        "タイ・インドシナにおける医療アシスタンス事業として、医療機関への支払い代行、国内外の医療搬送サポート業事業を行っております。",
      id: "visa-workpermit",
      image: "/img/our-business/Group 279.png",
    },
    {
      serviceNameTH: "メディカルツーリズム",
      serviceNameEN: "メディカルツーリズム",
      descriptionTH:
        "タイ・インドシナにおける医療アシスタンス事業として、医療機関への支払い代行、国内外の医療搬送サポート業事業を行っております。",
      descriptionEN:
        "タイ・インドシナにおける医療アシスタンス事業として、医療機関への支払い代行、国内外の医療搬送サポート業事業を行っております。",
      id: "bluemed",
      image: "/img/our-business/image.png",
      link: "https://blumedth.com/",
    },
  ];

  return (
    <div className=" overflow-hidden">
      <div className="grid grid-cols-12 gap-y-6 md:gap-x-4 lg:px-20 pt-10 pb-20">
        {mocks?.map((i: any, k: any) => (
          <ServiceCard item={i} key={k} />
        ))}
      </div>
    </div>
  );
}
