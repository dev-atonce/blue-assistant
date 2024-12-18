import ServiceCard from "../molecule/ServiceCard";

export default async function ServiceSection({ data }: any) {
  const mocks = [
    {
      serviceNameTH: "Medical Assistance ",
      serviceNameEN: "Medical Assistance ",
      descriptionTH: "Medical assistance services in Thailand and Indochina, we provide payment agency services to medical institutions and support for domestic and international medical transportation.",
      descriptionEN: "Medical assistance services in Thailand and Indochina, we provide payment agency services to medical institutions and support for domestic and international medical transportation.",
      id: "6723623a3bfe8293c45a61e7",
      image: "/img/our-business/Rectangle 150.png",
    },
    {
      serviceNameTH: "Japanese Medical Desk(JMD)",
      serviceNameEN: "Japanese Medical Desk(JMD)",
      descriptionTH: "medical assistance in Thailand, Myanmar, and Laos. Our Japanese interpreters assist with cashless medical consultations locally.",
      descriptionEN: "medical assistance in Thailand, Myanmar, and Laos. Our Japanese interpreters assist with cashless medical consultations locally.",
      id: "672362703bfe8293c45a6204",
      image: "/img/our-business/Rectangle 162.png",
    },
    {
      serviceNameTH: "VISA WORKPERMIT",
      serviceNameEN: "VISA WORKPERMIT",
      descriptionTH: "visa and work permit acquisition support in Thailand. Feel free to contact us for assistance.",
      descriptionEN: "visa and work permit acquisition support in Thailand. Feel free to contact us for assistance.",
      id: "6725f68bba81c2130216fe4e",
      image: "/img/our-business/Rectangle 164.png",
    },
    {
      serviceNameTH: "Medical Trism Blu Med",
      serviceNameEN: "Medical Trism Blu Med",
      descriptionTH: "Blue Medicare Japan works in collaboration with medical institutions in Japan to offer medical tourism services for non-japanese patients.",
      descriptionEN: "Blue Medicare Japan works in collaboration with medical institutions in Japan to offer medical tourism services for non-japanese patients.",
      id: "6725f68bba81c2130216fe4e",
      image: "/img/our-business/image.png",
    }
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
