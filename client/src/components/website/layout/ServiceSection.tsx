import ServiceCard from "../molecule/ServiceCard";

export default async function ServiceSection({ data }: any) {
  const mocks = [
    {
      serviceNameTH: "医療アシスタンス事業",
      serviceNameEN: "医療アシスタンス事業",
      descriptionTH:
        "タイ・インドシナにおける医療アシスタンス事業として、医療機関への支払い代行、国内外の医療搬送サポート業事業を行っております。",
      descriptionEN:
        "タイ・インドシナにおける医療アシスタンス事業として、医療機関への支払い代行、国内外の医療搬送サポート業事業を行っております。",
      id: "6723623a3bfe8293c45a61e7",
      image: "/img/our-business/Group 280.png",
    },
    {
      serviceNameTH: "ジャパニーズメディカルデスク",
      serviceNameEN: "ジャパニーズメディカルデスク",
      descriptionTH:
        "タイ・インドシナにおける医療アシスタンス事業として、医療機関への支払い代行、国内外の医療搬送サポート業事業を行っております。",
      descriptionEN:
        "タイ・インドシナにおける医療アシスタンス事業として、医療機関への支払い代行、国内外の医療搬送サポート業事業を行っております。",
      id: "672362703bfe8293c45a6204",
      image: "/img/our-business/Rectangle 162.png",
    },
    {
      serviceNameTH: "ビザ・ワークパーミット取得代行",
      serviceNameEN: "ビザ・ワークパーミット取得代行h",
      descriptionTH:
        "タイ・インドシナにおける医療アシスタンス事業として、医療機関への支払い代行、国内外の医療搬送サポート業事業を行っております。",
      descriptionEN:
        "タイ・インドシナにおける医療アシスタンス事業として、医療機関への支払い代行、国内外の医療搬送サポート業事業を行っております。",
      id: "6725f68bba81c2130216fe4e",
      image: "/img/our-business/Group 279.png",
    },
    {
      serviceNameTH: "メディカルツーリズム",
      serviceNameEN: "メディカルツーリズム",
      descriptionTH:
        "タイ・インドシナにおける医療アシスタンス事業として、医療機関への支払い代行、国内外の医療搬送サポート業事業を行っております。",
      descriptionEN:
        "タイ・インドシナにおける医療アシスタンス事業として、医療機関への支払い代行、国内外の医療搬送サポート業事業を行っております。",
      id: "6725f68bba81c2130216fe4e",
      image: "/img/our-business/image.png",
    },
  ];
  return (
    <div className="z-10 overflow-hidden">
      <div className="grid grid-cols-12 gap-6 lg:px-20 pt-10 pb-20">
        {mocks?.map((i: any, k: any) => (
          <ServiceCard item={i} key={k} />
        ))}
      </div>
    </div>
  );
}
