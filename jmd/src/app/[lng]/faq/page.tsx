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
    <div className="flex justify-between items-center text-xs md:text-sm bg-[#3462AF] p-4 font-semibold text-white rounded-lg">
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

const topic1 = {
  en: "About Consultations",
  jp: "受診について",
  th: "About Consultations",
};
const topic2 = {
  en: "Interpreter Services",
  jp: "通訳サービスについて",
  th: "Interpreter Services",
};
const topic3 = {
  en: "About Hospitals",
  jp: "病院について",
  th: "About Hospitals",
};
const topic4 = {
  en: "Billing and Insurance Use",
  jp: "会計・保険ご利用について",
  th: "Billing and Insurance Use",
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
      label: <Q text="・はじめて病院を受診する場合は？" />,
      children: (
        <Ans
          text="・ジャパニーズメディカルデスク（JMD)の常駐している病院を受診する際は、
各JMDの連絡先（LINE、電話、メール）へご連絡ください。ご症状やご希望のお日にちをお伺いして、ご案内をさせていただきます。"
        />
      ),
    },
    {
      key: "2",
      label: <Q text="・予約は必ず必要ですか？" />,
      children: (
        <Ans
          text="・診療科によっては専門医が不在の場合もございます。お時間に余裕がある場合は、
一度JMDへお問いお合わせの上ご予約ください。"
        />
      ),
    },
    {
      key: "3",
      label: <Q text="・緊急で受診したい場合も対応してもらえますか？" />,
      children: (
        <Ans text="・緊急外来 （ER）をご受診の場合も対応しております。場合によってはオンコール（電話通訳）での対応となります。" />
      ),
    },
    {
      key: "4",
      label: <Q text="・受診の際には何をもっていけばいいですか？" />,
      children: (
        <Ans text="・パスポート、保険証券、常用薬（あればお薬手帳など）をお持ちください。" />
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
      label: <Q text="・病院の施設は整っていますか？" />,
      children: (
        <Ans text="・各国の医療水準により設備がない場合は、必要に応じて他の医療機関への紹介や搬送手続きも行っております。日本人の患者様が安心して治療を受けていただける設備が整っております。" />
      ),
    },
    {
      key: "2",
      label: <Q text="・検査が必要となった場合は、すぐに受けられますか？" />,
      children: (
        <Ans text="・日本と異なり設備の数が少ない場合がございます。その場合は別日にご案内をさせて頂く場合もございます。" />
      ),
    },
    {
      key: "3",
      label: <Q text="・病院からの送迎サービスはありますか？" />,
      children: (
        <Ans text="・各JMDデスクへお問い合わせください。また、通院のための交通費についてはご加入の保険会社様へお問い合わせください。" />
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
        <Ans text="・We provide interpretation services from Thai, Laotian, and Myanmar languages to Japanese." />
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
      label: <Q text="・対応言語は？" />,
      children: (
        <Ans text="・タイ語、ラオス語、ミャンマー語といった各国の言語から日本語への通訳をいたします。" />
      ),
    },
    {
      key: "2",
      label: <Q text="・JMD受付時間外の対応はしていただけますか？" />,
      children: (
        <Ans text="・対応可能です。時間外はオンコール（お電話）での対応となる場合もございます。お急ぎの場合は各JMDの連絡先までお電話ください。" />
      ),
    },
    {
      key: "3",
      label: <Q text="・通訳は診察室で医師と話す場合のみですか？" />,
      children: (
        <Ans text="・ご予約から受付、診察、各検査、会計、処方の受取までサポートさせていただきます。" />
      ),
    },
    {
      key: "4",
      label: <Q text="・加入している保険会社とやり取りをしてもらえますか？" />,
      children: (
        <Ans text="・日本の海外旅行傷害保険をご利用の場合、JMDスタッフが対応いたします。" />
      ),
    },
    {
      key: "5",
      label: (
        <Q text="・友人（外国人）が受診する際、対応言語であれば通訳してもらえますか？" />
      ),
      children: (
        <Ans
          text="・JMDは主に日本の海外旅行傷害保険をご利用の患者様を対象としたサポートデスクですが、保険にご加入であれば国籍にかかわらず対応可能です。
対応言語であれば、通訳も可能ですので事前にご相談ください。"
        />
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
      label: <Q text="・どんな保険が使えますか？" />,
      children: (
        <Ans text="・海外旅行保険のご利用について、を参照ください。詳しくは各JMDへお問い合わせください。" />
      ),
    },
    {
      key: "2",
      label: (
        <Q text="・クレジットカードを持っていますが、海外旅行保険が付帯しているかどうかわかりません。" />
      ),
      children: (
        <Ans
          text="・JMDにお越しになった後でカード会社へ確認可能です。お時間がある場合は事前に
クレジットカードのコールセンターへご連絡いただけますとスムーズです。"
        />
      ),
    },
    {
      key: "3",
      label: (
        <Q text="・有効な保険証を持っていればキャッシュレス受診が可能でしょうか?" />
      ),

      children: (
        <div className=" text-xs md:text-sm bg-[#3462AF] p-4 font-semibold text-white rounded-lg">
          ・ご受診の内容によってはキャッシュレスサービスが受けられない場合がございます。
          <Link className="underline" href="/about-us#t-3">
            海外旅行保険のご利用について、
          </Link>
          をご参照ください。また、事前に保険会社様へお問い合わせください。
        </div>
      ),
    },
    {
      key: "4",
      label: <Q text="・治療費の立て替えが必要な場合とはどんな時ですか？" />,
      children: (
        <Ans text="・お持ちの保険の有効性の確認が取れない場合や、ご受診の内容が保険対象外の可能性がある場合はご利用いただけません。詳しくは各JMDもしくはご加入の保険会社様へお問い合わせください。" />
      ),
    },
    {
      key: "5",
      label: <Q text="・支払いの際にクレジットカードは使えますか?" />,
      children: (
        <Ans text="・ほとんどの医療機関でご利用可能です。ご利用できるカードの種類については、各JMDへお問い合わせください。" />
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
                  {/* @ts-ignore */}
                  {topic1[lang]}
                </h2>
                <div className="py-4">
                  {/* @ts-ignore */}
                  <Collapse items={consultItems[lang]} />
                </div>
              </div>
              <div className="py-4 md:py-10 border-b-2 border-slate-200 ">
                <h2 className="py-4 font-bold text-lg lg:text-xl text-blue-900">
                  {/* @ts-ignore */}
                  {topic2[lang]}
                </h2>
                <div className="py-4">
                  {/* @ts-ignore */}
                  <Collapse items={interpretItem[lang]} />
                </div>
              </div>
              <div className="py-4 md:py-10 border-b-2 border-slate-200 ">
                <h2 className="py-4 font-bold text-lg lg:text-xl text-blue-900">
                  {/* @ts-ignore */}
                  {topic3[lang]}
                </h2>
                <div className="py-4">
                  {/* @ts-ignore */}
                  <Collapse items={hospitalItems[lang]} />
                </div>
              </div>
              <div className="py-4 md:py-10 border-b-2 border-slate-200 ">
                <h2 className="py-4 font-bold text-lg lg:text-xl text-blue-900">
                  {/* @ts-ignore */}
                  {topic4[lang]}
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
