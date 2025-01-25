import FadeHeading from "@/components/website/atom/heading/FadeHeading";
import MainHeading from "@/components/website/atom/heading/MainHeading";

import CoverVisa from "@/components/website/layout/CoverVisa";
import Collapse from "@/components/website/organism/Collapse";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import type { CollapseProps } from "antd";
import { FaPlus } from "react-icons/fa";

const Ans = ({ text }: any) => {
  return (
    <div className="flex justify-between items-center text-xs md:text-sm">
      <p>{text}</p>
    </div>
  );
};
const Q = ({ text }: any) => {
  return (
    <div className="flex justify-between items-center text-xs md:text-sm">
      <p>{text}</p>
      <FaPlus color="#3562AE" />
    </div>
  );
};
const consultItems = {
  en: [
    {
      key: "1",
      label: <Q text="・When Visiting the Hospital for the First Time" />,
      children: (
        <Ans text="・When visiting a hospital where the Japanese Medical Desk (JMD) is stationed, please contact each JMD via LINE, phone, or email. We will confirm your symptoms and preferred date, and guide you accordingly." />
      ),
    },
    {
      key: "2",
      label: <Q text="・Is it necessary to make an appointment?" />,
      children: (
        <Ans text="・Some departments may not have specialists available. If your schedule allows, please contact JMD in advance to make an appointment." />
      ),
    },
    {
      key: "3",
      label: <Q text="・Can I receive treatment in case of an emergency?" />,
      children: (
        <Ans text="・We also provide support for Emergency Room (ER) visits. In some cases, assistance may be provided via on-call (phone interpretation)." />
      ),
    },
    {
      key: "4",
      label: <Q text="・What should I bring to the hospital?" />,
      children: (
        <Ans text="・Please bring your passport, insurance policy, and any medications you are currently taking (e.g., medication notebook if available)." />
      ),
    },
  ],
  jp: [
    {
      key: "1",
      label: <Q text="・When Visiting the Hospital for the First Time" />,
      children: (
        <Ans text="・When visiting a hospital where the Japanese Medical Desk (JMD) is stationed, please contact each JMD via LINE, phone, or email. We will confirm your symptoms and preferred date, and guide you accordingly." />
      ),
    },
    {
      key: "2",
      label: <Q text="・Is it necessary to make an appointment?" />,
      children: (
        <Ans text="・Some departments may not have specialists available. If your schedule allows, please contact JMD in advance to make an appointment." />
      ),
    },
    {
      key: "3",
      label: <Q text="・Can I receive treatment in case of an emergency?" />,
      children: (
        <Ans text="・We also provide support for Emergency Room (ER) visits. In some cases, assistance may be provided via on-call (phone interpretation)." />
      ),
    },
    {
      key: "4",
      label: <Q text="・What should I bring to the hospital?" />,
      children: (
        <Ans text="・Please bring your passport, insurance policy, and any medications you are currently taking (e.g., medication notebook if available)." />
      ),
    },
  ],
  th: [
    {
      key: "1",
      label: <Q text="・When Visiting the Hospital for the First Time" />,
      children: (
        <Ans text="・When visiting a hospital where the Japanese Medical Desk (JMD) is stationed, please contact each JMD via LINE, phone, or email. We will confirm your symptoms and preferred date, and guide you accordingly." />
      ),
    },
    {
      key: "2",
      label: <Q text="・Is it necessary to make an appointment?" />,
      children: (
        <Ans text="・Some departments may not have specialists available. If your schedule allows, please contact JMD in advance to make an appointment." />
      ),
    },
    {
      key: "3",
      label: <Q text="・Can I receive treatment in case of an emergency?" />,
      children: (
        <Ans text="・We also provide support for Emergency Room (ER) visits. In some cases, assistance may be provided via on-call (phone interpretation)." />
      ),
    },
    {
      key: "4",
      label: <Q text="・What should I bring to the hospital?" />,
      children: (
        <Ans text="・Please bring your passport, insurance policy, and any medications you are currently taking (e.g., medication notebook if available)." />
      ),
    },
  ],
};

const hospitalItems = {
  en: [
    {
      key: "1",
      label: <Q text="・Are the hospital facilities well-equipped?" />,
      children: (
        <Ans text="・Depending on the medical standards of each country, if certain equipment is not available, we can arrange referrals or transfer procedures to other medical institutions as needed. We ensure that facilities are adequately equipped for Japanese patients to receive treatment with peace of mind." />
      ),
    },
    {
      key: "2",
      label: (
        <Q text="・If tests are required, can they be done immediately?" />
      ),
      children: (
        <Ans text="・Unlike in Japan, there may be fewer available facilities. In such cases, we might need to schedule the tests for a different day." />
      ),
    },
    {
      key: "3",
      label: <Q text="・Is there a hospital shuttle service available?" />,
      children: (
        <Ans text="・Please inquire with each JMD desk. For transportation costs related to hospital visits, please check with your insurance company." />
      ),
    },
  ],
  jp: [
    {
      key: "1",
      label: <Q text="・Are the hospital facilities well-equipped?" />,
      children: (
        <Ans text="・Depending on the medical standards of each country, if certain equipment is not available, we can arrange referrals or transfer procedures to other medical institutions as needed. We ensure that facilities are adequately equipped for Japanese patients to receive treatment with peace of mind." />
      ),
    },
    {
      key: "2",
      label: (
        <Q text="・If tests are required, can they be done immediately?" />
      ),
      children: (
        <Ans text="・Unlike in Japan, there may be fewer available facilities. In such cases, we might need to schedule the tests for a different day." />
      ),
    },
    {
      key: "3",
      label: <Q text="・Is there a hospital shuttle service available?" />,
      children: (
        <Ans text="・Please inquire with each JMD desk. For transportation costs related to hospital visits, please check with your insurance company." />
      ),
    },
  ],
  th: [
    {
      key: "1",
      label: <Q text="・Are the hospital facilities well-equipped?" />,
      children: (
        <Ans text="・Depending on the medical standards of each country, if certain equipment is not available, we can arrange referrals or transfer procedures to other medical institutions as needed. We ensure that facilities are adequately equipped for Japanese patients to receive treatment with peace of mind." />
      ),
    },
    {
      key: "2",
      label: (
        <Q text="・If tests are required, can they be done immediately?" />
      ),
      children: (
        <Ans text="・Unlike in Japan, there may be fewer available facilities. In such cases, we might need to schedule the tests for a different day." />
      ),
    },
    {
      key: "3",
      label: <Q text="・Is there a hospital shuttle service available?" />,
      children: (
        <Ans text="・Please inquire with each JMD desk. For transportation costs related to hospital visits, please check with your insurance company." />
      ),
    },
  ],
};
const interpretItem = {
  en: [
    {
      key: "1",
      label: <Q text="・What languages are available?" />,
      children: (
        <Ans text="・・We provide interpretation services from Thai, Laotian, and Myanmar languages to Japanese." />
      ),
    },
    {
      key: "2",
      label: <Q text="・Can I get support outside of JMD’s office hours?" />,
      children: (
        <Ans text="・We are available to assist you. Outside of regular hours, we may respond via on-call phone service. For urgent matters, please call the contact number of each JMD (Japan Medical Desk)." />
      ),
    },
    {
      key: "3",
      label: (
        <Q text="・Is interpretation available only during consultations with the doctor?" />
      ),
      children: (
        <Ans text="・Yes, if you are using Japanese overseas travel insurance, JMD staff can handle communications with your insurance provider." />
      ),
    },
    {
      key: "4",
      label: (
        <Q text="・Can you communicate with my insurance company on my behalf?" />
      ),
      children: (
        <Ans text="・Yes, if you are using Japanese overseas travel insurance, JMD staff can handle communications with your insurance provider." />
      ),
    },
    {
      key: "5",
      label: (
        <Q text="・If my friend (non-Japanese) wants to receive medical treatment, can you provide interpretation if it’s in a supported language?" />
      ),
      children: (
        <Ans text="・Unfortunately, JMD is a support desk specifically for Japanese patients. However, if your friend holds Japanese overseas travel insurance, we can offer support regardless of nationality." />
      ),
    },
  ],
  jp: [
    {
      key: "1",
      label: <Q text="・What languages are available?" />,
      children: (
        <Ans text="・・We provide interpretation services from Thai, Laotian, and Myanmar languages to Japanese." />
      ),
    },
    {
      key: "2",
      label: <Q text="・Can I get support outside of JMD’s office hours?" />,
      children: (
        <Ans text="・We are available to assist you. Outside of regular hours, we may respond via on-call phone service. For urgent matters, please call the contact number of each JMD (Japan Medical Desk)." />
      ),
    },
    {
      key: "3",
      label: (
        <Q text="・Is interpretation available only during consultations with the doctor?" />
      ),
      children: (
        <Ans text="・Yes, if you are using Japanese overseas travel insurance, JMD staff can handle communications with your insurance provider." />
      ),
    },
    {
      key: "4",
      label: (
        <Q text="・Can you communicate with my insurance company on my behalf?" />
      ),
      children: (
        <Ans text="・Yes, if you are using Japanese overseas travel insurance, JMD staff can handle communications with your insurance provider." />
      ),
    },
    {
      key: "5",
      label: (
        <Q text="・If my friend (non-Japanese) wants to receive medical treatment, can you provide interpretation if it’s in a supported language?" />
      ),
      children: (
        <Ans text="・Unfortunately, JMD is a support desk specifically for Japanese patients. However, if your friend holds Japanese overseas travel insurance, we can offer support regardless of nationality." />
      ),
    },
  ],
  th: [
    {
      key: "1",
      label: <Q text="・What languages are available?" />,
      children: (
        <Ans text="・・We provide interpretation services from Thai, Laotian, and Myanmar languages to Japanese." />
      ),
    },
    {
      key: "2",
      label: <Q text="・Can I get support outside of JMD’s office hours?" />,
      children: (
        <Ans text="・We are available to assist you. Outside of regular hours, we may respond via on-call phone service. For urgent matters, please call the contact number of each JMD (Japan Medical Desk)." />
      ),
    },
    {
      key: "3",
      label: (
        <Q text="・Is interpretation available only during consultations with the doctor?" />
      ),
      children: (
        <Ans text="・Yes, if you are using Japanese overseas travel insurance, JMD staff can handle communications with your insurance provider." />
      ),
    },
    {
      key: "4",
      label: (
        <Q text="・Can you communicate with my insurance company on my behalf?" />
      ),
      children: (
        <Ans text="・Yes, if you are using Japanese overseas travel insurance, JMD staff can handle communications with your insurance provider." />
      ),
    },
    {
      key: "5",
      label: (
        <Q text="・If my friend (non-Japanese) wants to receive medical treatment, can you provide interpretation if it’s in a supported language?" />
      ),
      children: (
        <Ans text="・Unfortunately, JMD is a support desk specifically for Japanese patients. However, if your friend holds Japanese overseas travel insurance, we can offer support regardless of nationality." />
      ),
    },
  ],
};

const billingItems = {
  en: [
    {
      key: "1",
      label: <Q text="・What types of insurance can be used?" />,
      children: (
        <Ans text="・Please refer to the section on 'using overseas travel insurance'. For more details, contact each JMD." />
      ),
    },
    {
      key: "2",
      label: (
        <Q text="・I have a credit card, but I'm not sure if it includes overseas travel insurance." />
      ),
      children: (
        <Ans text="・You can confirm this with your card company after arriving at the JMD. If you have time, it's smoother to contact your credit card's call center in advance." />
      ),
    },
    {
      key: "3",
      label: (
        <Q text="・Is cashless medical treatment possible if I have a valid insurance card?" />
      ),
      children: (
        <Ans text="・Depending on the nature of your treatment, cashless service may not be available. Please refer to the section on using overseas travel insurance and inquire with your insurance company in advance." />
      ),
    },
    {
      key: "4",
      label: (
        <Q text="・When is it necessary to pay medical expenses out of pocket?" />
      ),
      children: (
        <Ans text="・You may not be able to use cashless services if the validity of your insurance cannot be confirmed, or if the treatment might not be covered by insurance. For details, please contact each JMD or your insurance company." />
      ),
    },
    {
      key: "5",
      label: <Q text="・Can I use a credit card for payment?" />,
      children: (
        <Ans text="・Credit cards are accepted at most medical institutions. For information on which types of cards are accepted, please inquire with each JMD." />
      ),
    },
  ],
  jp: [
    {
      key: "1",
      label: <Q text="・What types of insurance can be used?" />,
      children: (
        <Ans text="・Please refer to the section on 'using overseas travel insurance'. For more details, contact each JMD." />
      ),
    },
    {
      key: "2",
      label: (
        <Q text="・I have a credit card, but I'm not sure if it includes overseas travel insurance." />
      ),
      children: (
        <Ans text="・You can confirm this with your card company after arriving at the JMD. If you have time, it's smoother to contact your credit card's call center in advance." />
      ),
    },
    {
      key: "3",
      label: (
        <Q text="・Is cashless medical treatment possible if I have a valid insurance card?" />
      ),
      children: (
        <Ans text="・Depending on the nature of your treatment, cashless service may not be available. Please refer to the section on using overseas travel insurance and inquire with your insurance company in advance." />
      ),
    },
    {
      key: "4",
      label: (
        <Q text="・When is it necessary to pay medical expenses out of pocket?" />
      ),
      children: (
        <Ans text="・You may not be able to use cashless services if the validity of your insurance cannot be confirmed, or if the treatment might not be covered by insurance. For details, please contact each JMD or your insurance company." />
      ),
    },
    {
      key: "5",
      label: <Q text="・Can I use a credit card for payment?" />,
      children: (
        <Ans text="・Credit cards are accepted at most medical institutions. For information on which types of cards are accepted, please inquire with each JMD." />
      ),
    },
  ],
  th: [
    {
      key: "1",
      label: <Q text="・What types of insurance can be used?" />,
      children: (
        <Ans text="・Please refer to the section on 'using overseas travel insurance'. For more details, contact each JMD." />
      ),
    },
    {
      key: "2",
      label: (
        <Q text="・I have a credit card, but I'm not sure if it includes overseas travel insurance." />
      ),
      children: (
        <Ans text="・You can confirm this with your card company after arriving at the JMD. If you have time, it's smoother to contact your credit card's call center in advance." />
      ),
    },
    {
      key: "3",
      label: (
        <Q text="・Is cashless medical treatment possible if I have a valid insurance card?" />
      ),
      children: (
        <Ans text="・Depending on the nature of your treatment, cashless service may not be available. Please refer to the section on using overseas travel insurance and inquire with your insurance company in advance." />
      ),
    },
    {
      key: "4",
      label: (
        <Q text="・When is it necessary to pay medical expenses out of pocket?" />
      ),
      children: (
        <Ans text="・You may not be able to use cashless services if the validity of your insurance cannot be confirmed, or if the treatment might not be covered by insurance. For details, please contact each JMD or your insurance company." />
      ),
    },
    {
      key: "5",
      label: <Q text="・Can I use a credit card for payment?" />,
      children: (
        <Ans text="・Credit cards are accepted at most medical institutions. For information on which types of cards are accepted, please inquire with each JMD." />
      ),
    },
  ],
};
// to do jp & th qa
const heading = {
  en: "Frequenly Asked Questions (FAQ)",
  jp: "よくある質問",
  th: "คำถามที่พบบ่อย",
};
export default function Work({ params }: { params: { lng: string } }) {
  const t = useTranslations("header");
  const s = useTranslations("service-section");
  const lang = params.lng;

  return (
    <>
      <div className="">
        <CoverVisa
          pageName={s("faq")}
          prevPage={{ pageName: t("home"), url: "/" }}
        />
        <div className="container mx-auto  ">
          <div className="grid grid-cols-1 gap-6 text-[#333333] font-medium">
            <div className="">
              {/* @ts-ignore */}
              <MainHeading text={heading[lang]} heading="1" />
              <div className="py-4 md:py-10 border-b-2 border-slate-200 ">
                <h2 className="py-4 font-bold text-lg lg:text-xl text-blue-900">
                  About Consultations
                </h2>
                <div className="py-4">
                  {/* @ts-ignore */}
                  <Collapse items={consultItems[lang]} />
                </div>
              </div>
              <div className="py-4 md:py-10 border-b-2 border-slate-200 ">
                <h2 className="py-4 font-bold text-lg lg:text-xl text-blue-900">
                  Interpreter Services
                </h2>
                <div className="py-4">
                  {/* @ts-ignore */}
                  <Collapse items={interpretItem[lang]} />
                </div>
              </div>
              <div className="py-4 md:py-10 border-b-2 border-slate-200 ">
                <h2 className="py-4 font-bold text-lg lg:text-xl text-blue-900">
                  About Hospitals
                </h2>
                <div className="py-4">
                  {/* @ts-ignore */}
                  <Collapse items={hospitalItems[lang]} />
                </div>
              </div>
              <div className="py-4 md:py-10 border-b-2 border-slate-200 ">
                <h2 className="py-4 font-bold text-lg lg:text-xl text-blue-900">
                  Billing and Insurance Use
                </h2>
                <div className="py-4">
                  {/* @ts-ignore */}
                  <Collapse items={billingItems[lang]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
