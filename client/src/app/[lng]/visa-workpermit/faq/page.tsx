import FadeHeading from "@/components/website/atom/heading/FadeHeading";
import MainHeading from "@/components/website/atom/heading/MainHeading";

import CoverVisa from "@/components/website/layout/CoverVisa";
import Collapse from "@/components/website/organism/Collapse";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import type { CollapseProps } from "antd";

// to do jp & th qa
// to do collapse structure see jmd faq

const items = {
  jp: [
    {
      key: "1",
      label: "申請から許可まで何日くらいかかりますか?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          申請日当日にビザを取得することが可能です。（担当部署の審査に時間がかかる場合、
          当日にビザ更新が出来ない場合があります。）ただし実際に1年間ビザが発行されるのは
          、申請後21日間の審査期間後、入国日の滞在許可期限より換算して1年迄発行となります。
        </p>
      ),
    },
    {
      key: "2",
      label: "ビザの新規申請はタイ国内でできますか?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          原則的にビザの新規申請はタイ国外のタイ大使館で申請をしていただくこととなります。更新はタイ国内で行います。
        </p>
      ),
    },
    {
      key: "3",
      label: "観光ビザや留学、配偶者ビザから就労ビザへの切り替えは可能ですか?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          タイ国内でビザの切り替えは原則不可、一度タイ国内でビザをキャンセルされてから、
          タイ国外で新しくビザを取得する必要がございます。ただし対応可能なケースもございま
          す。詳しくはお問合せ下さい。
        </p>
      ),
    },
    {
      key: "4",
      label: "更新の何日前までに連絡が必要ですか?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          書類準備がございます故、ビザ有効期限90日前にご連絡いただく事を推奨いたします。
        </p>
      ),
    },
  ],
  en: [
    {
      key: "1",
      label: "申請から許可まで何日くらいかかりますか?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          申請日当日にビザを取得することが可能です。（担当部署の審査に時間がかかる場合、
          当日にビザ更新が出来ない場合があります。）ただし実際に1年間ビザが発行されるのは
          、申請後21日間の審査期間後、入国日の滞在許可期限より換算して1年迄発行となります。
        </p>
      ),
    },
    {
      key: "2",
      label: "ビザの新規申請はタイ国内でできますか?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          原則的にビザの新規申請はタイ国外のタイ大使館で申請をしていただくこととなります。更新はタイ国内で行います。
        </p>
      ),
    },
    {
      key: "3",
      label: "観光ビザや留学、配偶者ビザから就労ビザへの切り替えは可能ですか?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          タイ国内でビザの切り替えは原則不可、一度タイ国内でビザをキャンセルされてから、
          タイ国外で新しくビザを取得する必要がございます。ただし対応可能なケースもございま
          す。詳しくはお問合せ下さい。
        </p>
      ),
    },
    {
      key: "4",
      label: "更新の何日前までに連絡が必要ですか?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          書類準備がございます故、ビザ有効期限90日前にご連絡いただく事を推奨いたします。
        </p>
      ),
    },
  ],
  th: [
    {
      key: "1",
      label: "การต่อวีซ่าต้องใช้เวลานานเท่าใดจึงจะได้รับการอนุมัติ?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          วีซ่าทำงานและวีซ่าครอบครัวจะออกให้ภายใน 21 วัน วีซ่าเกษียณอายุและวีซ่าการศึกษาจะออกให้ภายใน 1 วัน ทั้งนี้อาจแตกต่างกันไปขึ้นอยู่กับสถานการณ์ ดังนั้นโปรดติดต่อเราเพื่อขอข้อมูลเพิ่มเติม
        </p>
      ),
    },
    {
      key: "2",
      label: "สามารถสมัครวีซ่าใหม่ในประเทศไทยได้ไหม?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          โดยปกติคุณจะต้องขอจากนอกประเทศไทยก่อนเข้าประเทศ แต่ก็สามารถต่ออายุภายในประเทศได้
        </p>
      ),
    },
    {
      key: "3",
      label: "สามารถเปลี่ยนจากวีซ่าการศึกษาหรือวีซ่าครอบครัวเป็นวีซ่าทำงานได้หรือไม่?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          ตามหลักการแล้วสิ่งนี้ไม่สามารถทำได้ แต่ก็มีบางกรณีที่สามารถทำได้ โปรดติดต่อเราเพื่อขอข้อมูลเพิ่มเติม
        </p>
      ),
    },
    {
      key: "4",
      label: "ควรติดต่อบริษัทBAเพื่อขอการอัปเดตเมื่อไร ?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          เราขอแนะนำให้คุณติดต่อเราล่วงหน้า 90 วันก่อนวันหมดอายุวีซ่าของคุณ เนื่องจากเราจะต้องเตรียมเอกสารที่จำเป็น
        </p>
      ),
    },
  ],
};

const items2 = {
  jp: [
    {
      key: "1",
      label: "申請から許可まで何日くらいかかりますか?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          新規申請の場合、労働許可証取得まで申請後5－10日営業日程度日数がかかります。2年
          目以降更新の場合は申請日当日に取得可能です。
        </p>
      ),
    },
    {
      key: "2",
      label: "勤務先が変わっても有効期限内であれば使用できますか?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          勤務先が変わった場合は、既存の労働許可証及びビザキャンセル手続きを行い、新しい
          勤務先用にて新しい労働許可証の申請及び取得が必要です。
        </p>
      ),
    },
    {
      key: "3",
      label: "必要書類を教えてください。",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          サービス内容の「必要書類」をご参照ください。詳細につきましては正式にご依頼いただける際にお伝えさせていただいております。
        </p>
      ),
    },
  ],
  th: [
    {
      key: "1",
      label: "จากการสมัครจนถึงการอนุมัติใช้เวลานานแค่ไหน?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          สำหรับบริษัททั่วไป การขอWPใช้เวลาประมาณ 5-10 วันทำการหลังจากยื่นคำขอ ส่วนบริษัท BOI สามารถขอได้ภายใน 1 วันทำการหลังจากยื่นคำขอ
        </p>
      ),
    },
    {
      key: "2",
      label: "หากเปลี่ยนที่บริษัททำงานจะสามารถใช้ได้หรือไม่ ตราบใดที่ยังอยู่ในช่วงอายุการใช้งาน?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          ในกรณีนี้ คุณจะต้องยกเลิกWPที่มีอยู่และสมัครและขอรับWPใหม่ให้กับนายจ้างใหม่ของคุณ
        </p>
      ),
    },
    {
      key: "3",
      label: "ต้องใช้เอกสารอะไรบ้าง?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          โปรดดูรายละเอียดบริการในส่วน &quot;เอกสารที่สำคัณประกอบการยืนใบอนุญาตทำงาน&quot; เราจะแจ้งรายละเอียดให้คุณทราบหลังจากได้รับคำขออย่างเป็นทางการจากคุณ
        </p>
      ),
    },
  ],
  en: [
    {
      key: "1",
      label: "申請から許可まで何日くらいかかりますか",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          新規申請の場合、労働許可証取得まで申請後5－10日営業日程度日数がかかります。2年
          目以降更新の場合は申請日当日に取得可能です。
        </p>
      ),
    },
    {
      key: "2",
      label: "勤務先が変わっても有効期限内であれば使用できますか",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          勤務先が変わった場合は、既存の労働許可証及びビザキャンセル手続きを行い、新しい
          勤務先用にて新しい労働許可証の申請及び取得が必要です。
        </p>
      ),
    },
    {
      key: "3",
      label: "必要書類を教えてください",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          サービス内容の「必要書類」をご参照ください。詳細につきましては正式にご依頼いただける際にお伝えさせていただいております。
        </p>
      ),
    },
  ],
};

const items3 = {
  jp: [
    {
      key: "1",
      label: "相談は無料ですか?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          一般的な内容でございましたら無料です。費用が発生する場合はご案合いをさせていた
          だきます。書類の内容の確認や、個別の案件に関する内容についてはお見積り後の対応と
          なります。
        </p>
      ),
    },
    {
      key: "2",
      label: "バンコク以外でも対応可能ですか?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          現在はサムットプラカーンが対応可能です。ほかの地域については一度ご相談ください。
        </p>
      ),
    },
    {
      key: "3",
      label: "日本人以外でも相談可能ですか?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          日本人以外でもご相談可能です。
        </p>
      ),
    },
    {
      key: "4",
      label: "万が一、申請が認められなかった場合はどうなりますか?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          申請が認められるように最大のお手伝いをさせていただきます。申請予定の1週間前までに必要書類をご準備ください。弊社にて詳細内容の確認をさせていただきます。
        </p>
      ),
    },
  ],
  en: [
    {
      key: "1",
      label: "相談は無料ですか",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          一般的な内容でございましたら無料です。費用が発生する場合はご案合いをさせていた
          だきます。書類の内容の確認や、個別の案件に関する内容についてはお見積り後の対応と
          なります。
        </p>
      ),
    },
    {
      key: "2",
      label: "バンコク以外でも対応可能ですか",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          現在はサムットプラカーンが対応可能です。ほかの地域については一度ご相談ください。
        </p>
      ),
    },
    {
      key: "3",
      label: "日本人以外でも相談可能ですか",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          日本人以外でもご相談可能です。
        </p>
      ),
    },
    {
      key: "4",
      label: "万が一、申請が認められなかった場合はどうなりますか",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          申請が認められるように最大のお手伝いをさせていただきます。申請予定の1週間前までに必要書類をご準備ください。弊社にて詳細内容の確認をさせていただきます。
        </p>
      ),
    },
  ],
  th: [
    {
      key: "1",
      label: "การปรึกษาหารือครั้งนี้ฟรีหรือเปล่า?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          หากเป็นข้อมูลทั่วไปไม่มีค่าใช้จ่าย หากมีค่าใช้จ่าย เราจะแจ้งให้คุณทราบ การยืนยันเนื้อหาของเอกสารและรายละเอียดในแต่ละกรณีจะดำเนินการหลังจากเสนอราคาแล้ว
        </p>
      ),
    },
    {
      key: "2",
      label: "สามารถให้บริการนอกเขตกรุงเทพมหานครได้หรือไม่?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          ปัจจุบันเราสามารถให้บริการได้ในเขตจังหวัดสมุทรปราการ หากต้องการพื้นที่อื่น ๆ กรุณาติดต่อเรา
        </p>
      ),
    },
    {
      key: "3",
      label: "ชาวต่างชาติก็สามารถติดต่อได้ไหมคะ?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          เรายังรับปรึกษาจากคนต่างชาติด้วย
        </p>
      ),
    },
    {
      key: "4",
      label: "จะเกิดอะไรขึ้นหากใบสมัครของฉันไม่ได้รับการอนุมัติ?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          เราจะพยายามอย่างเต็มที่เพื่อช่วยให้ใบสมัครของคุณได้รับการอนุมัติ โปรดเตรียมเอกสารที่จำเป็นอย่างน้อยหนึ่งสัปดาห์ก่อนวันสมัคร เราจะยืนยันรายละเอียดกับคุณ
        </p>
      ),
    },
  ],
};

const items4 = {
  jp: [
    {
      key: "1",
      label: "・料金について教えてください。",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          弊社の代行手数料と、役所への申請料金がございます。詳細は
          <Link href="/visa-workpermit/price">「料金表」</Link>
          をご参照ください。
        </p>
      ),
    },
    {
      key: "2",
      label: "お支払い方法について教えて下さい。",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          原則タイバーツにて現金、もしくはお振込みでのお支払いをお願いしております。
        </p>
      ),
    },
    {
      key: "3",
      label:
        "書類の提出はメッセンジャーもしくはデリバリーサービスを使用してもよいですか?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">可能です。</p>
      ),
    },
    {
      key: "4",
      label: "パスポート、労働許可証の受取は直接手渡しになりますか?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          弊社にお越しいただきお渡しいただくか、弊社メッセンジャーが対応可能な地域は、メ
          ッセンジャーを派遣する事が可能です。詳しくはお問合せ下さい。
        </p>
      ),
    },
    {
      key: "5",
      label: "どの手続も必ず本人の出頭が必要ですか?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          お手続き内容によってはご本人様の出頭が必要になる場合がございますので、事前にお知らせいたします。
        </p>
      ),
    },
  ],
  en: [
    {
      key: "1",
      label: "・料金について教えてください",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          弊社の代行手数料と、役所への申請料金がございます。詳細は
          <Link href="/visa-workpermit/price">「料金表」</Link>
          をご参照ください。
        </p>
      ),
    },
    {
      key: "2",
      label: "お支払い方法について教えて下さい",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          原則タイバーツにて現金、もしくはお振込みでのお支払いをお願いしております。
        </p>
      ),
    },
    {
      key: "3",
      label:
        "書類の提出はメッセンジャーもしくはデリバリーサービスを使用してもよいですか",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">可能です。</p>
      ),
    },
    {
      key: "4",
      label: "パスポート、労働許可証の受取は直接手渡しになりますか",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          弊社にお越しいただきお渡しいただくか、弊社メッセンジャーが対応可能な地域は、メ
          ッセンジャーを派遣する事が可能です。詳しくはお問合せ下さい。
        </p>
      ),
    },
    {
      key: "5",
      label: "どの手続も必ず本人の出頭が必要ですか",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          お手続き内容によってはご本人様の出頭が必要になる場合がございますので、事前にお知らせいたします。
        </p>
      ),
    },
  ],
  th: [
    {
      key: "1",
      label: "ช่วยแจ้งราคาให้ผมทราบด้วย",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          ค่าธรรมเนียมสำหรับหน่วยงานของเราและค่าธรรมเนียมในการยื่นใบสมัครไปยังสำนักงานรัฐบาล โปรดดูรายละเอียดในหัวข้อ 
          <Link href="/visa-workpermit/price"> &quot;ค่าธรรมเนียม&quot;</Link>
        </p>
      ),
    },
    {
      key: "2",
      label: "กรุณาแจ้งวิธีการชำระเงินด้วย",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          โดยทั่วไปเราขอให้คุณชำระเป็นเงินบาทไทยด้วยเงินสดหรือโอนผ่านธนาคาร
        </p>
      ),
    },
    {
      key: "3",
      label:
        "ฉันสามารถส่งเอกสารผ่านบริการแมสเซนเจอร์หรือบริการจัดส่งได้หรือไม่?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">ใช่มันเป็นไปได้</p>
      ),
    },
    {
      key: "4",
      label: "ฉันจะได้รับหนังสือเดินทางและใบอนุญาตทำงานด้วยตนเองหรือไม่?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          คุณสามารถมาที่สำนักงานของเราแล้วส่งเอกสารให้เรา หรือเราจะส่งพนักงานส่งเอกสารไปยังพื้นที่ของคุณหากพนักงานส่งเอกสารของเราพร้อมให้บริการ โปรดติดต่อเราเพื่อขอข้อมูลเพิ่มเติม
        </p>
      ),
    },
    {
      key: "5",
      label: "ทุกขั้นตอนจำเป็นต้องปรากฏตัวด้วยตนเองหรือไม่?",
      children: (
        <p className="bg-[#3462AF] p-4 text-white rounded-lg">
          คุณอาจจำเป็นต้องปรากฏตัวด้วยตนเองขึ้นอยู่กับขั้นตอน ดังนั้นเราจะแจ้งให้คุณทราบล่วงหน้า
        </p>
      ),
    },
  ],
};

const header1 = {
  jp: "ビザについて",
  en: "Visa",
  th: "Visa",
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
          prevPage={{ pageName: t("visa-work"), url: "/visa-workpermit" }}
        />
        <div className="container mx-auto  ">
          <div className="grid grid-cols-1 gap-6 text-[#333333] font-medium">
            <div className="">
              <MainHeading text={s("faq")} heading="1" />
              <div className="py-4 md:py-10 border-b-2 border-slate-200 ">
                <h2 className="py-4 font-bold text-lg lg:text-xl text-blue-900">
                  {lang === "jp" ? "ビザについて" : "Visa"}
                </h2>
                <div className="py-4">
                  {/* @ts-ignore */}
                  <Collapse items={items[lang]} />
                </div>
              </div>
              <div className="py-4 md:py-10 border-b-2 border-slate-200 ">
                <h2 className="py-4 font-bold text-lg lg:text-xl text-blue-900">
                  {lang === "jp" ? "労働許可証について" : "WP"}
                </h2>
                <div className="py-4">
                  {/* @ts-ignore */}
                  <Collapse items={items2[lang]} />
                </div>
              </div>
              <div className="py-4 md:py-10 border-b-2 border-slate-200 ">
                <h2 className="py-4 font-bold text-lg lg:text-xl text-blue-900">
                  {lang === "jp" ? "弊社のサービス内容について" : "Service"}
                </h2>
                <div className="py-4">
                  {/* @ts-ignore */}
                  <Collapse items={items3[lang]} />
                </div>
              </div>
              <div className="py-4 md:py-10 border-b-2 border-slate-200 ">
                <h2 className="py-4 font-bold text-lg lg:text-xl text-blue-900">
                  {lang === "jp" ? "その他" : "Remarks"}
                </h2>
                <div className="py-4">
                  {/* @ts-ignore */}
                  <Collapse items={items4[lang]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
