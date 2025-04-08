"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useTranslations } from "next-intl";

interface ContactProps {
  home: boolean;
  medical: boolean;
}

export default function ContactSection({ home, medical }: ContactProps) {
  const t = useTranslations("contact-form");
  const h = useTranslations("header");
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data: any) => {
    const contactData = { ...data };
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/formcontact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      }
    );

    if (!response.ok) {
      Swal.fire({
        position: "top",
        toast: true,
        icon: "error",
        title: "มีบางอย่างผิดพลาด กรุณาลองใหม่อีกครั้ง",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      Swal.fire({
        position: "top",
        toast: true,
        icon: "success",
        title: "ส่งข้อมูลเรียบร้อย",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <div id="contact" className="bg-[#fafafa] text-[#333333]">
        <div className="container  mx-auto  py-20 text-slate-800">
          <div className="grid grid-cols-1">
            <h3
              className={`${
                home ? "text-5xl" : "text-4xl"
              } font-bold border-b-4 border-orange-400 w-fit pb-4`}
            >
              <span className="relative text-[#3562AE] py-4">
                {h("contact")}
              </span>
            </h3>
          </div>
          <div className="mt-20 grid grid-cols-12 gap-6">
            <div className="lg:col-span-5 col-span-12">
              <Image
                src={"/img/contact.jpg"}
                alt="blue-assistant"
                className={`${
                  home && !medical
                    ? "h-[70%]"
                    : home && medical
                    ? "h-full"
                    : "h-[50%] "
                } object-cover hidden lg:block`}
                height={500}
                width={500}
              />
              {!home && (
                <div className="py-4 grid grid-cols-3 gap-y-2">
                  <p className="col-span-3">
                    弊社へのお問い合わせ・ご質問・お見積の依頼などは下記のメールアドレスよりお問い合わせください。お問い合わせ内容確認後、ご連絡させて頂きます。
                    <br />
                    どうぞご気軽にご連絡ください。
                    <br />
                    営業日の関係上、ご返信が遅れる場合がございます。ご了承ください。
                  </p>
                  <div className="font-semibold">Email : </div>
                  <a
                    href="mailto:visa@blue-assistance.co.th"
                    className="col-span-2"
                  >
                    visa@blue-assistance.co.th
                  </a>
                  <div className="font-semibold">Tel : </div>
                  <div className="col-span-2">02-661-7687~88</div>
                  <div className="font-semibold">日本人担当 :</div>
                  <div className="col-span-2">大森(おおもり)</div>
                  <div className="font-semibold">タイ人担当 : </div>
                  <div className="col-span-2">Yim</div>
                </div>
              )}
            </div>

            <form
              className="col-span-12 lg:col-span-7 text-sm md:text-base"
              onSubmit={handleSubmit(onSubmit)}
            >
              {home && medical && (
                <div className="grid-cols-12 grid mb-4">
                  <div className="col-span-12 md:col-span-3 font-bold text-[#3562AE]">
                    {t("topic")}
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <ul>
                      <li className="mb-3">
                        <label htmlFor="type1">
                          <input
                            {...register("service", { required: true })}
                            type="radio"
                            id="type1"
                            value="医療アシスタンス業務"
                            className="me-2"
                          />
                          {t("option.1")}
                        </label>
                      </li>
                    </ul>
                    {errors?.service?.type === "required" && (
                      <p className="text-xs text-red text-end">
                        {t("validate.require")}
                      </p>
                    )}
                  </div>
                </div>
              )}
              {home && !medical && (
                <div className="grid-cols-12 grid mb-4">
                  <div className="col-span-12 md:col-span-3 font-bold text-[#3562AE]">
                    {t("topic")}
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <ul>
                      <li className="mb-3">
                        <label htmlFor="type1">
                          <input
                            {...register("service", { required: true })}
                            type="radio"
                            id="type1"
                            value="医療アシスタンス業務"
                            className="me-2"
                          />
                          {t("option.1")}
                        </label>
                      </li>
                      <li className="mb-3">
                        <label htmlFor="type2">
                          <input
                            {...register("service", { required: true })}
                            type="radio"
                            id="type2"
                            value="ジャパニーズメディカルデスク (JMD) - タイ"
                            className="me-2"
                          />
                          {t("option.2")}
                        </label>
                      </li>
                      <li className="mb-3">
                        <label htmlFor="type3">
                          <input
                            {...register("service", { required: true })}
                            type="radio"
                            id="type3"
                            value="ジャパニーズメディカルデスク (JMD) - ラオス"
                            className="me-2"
                          />
                          {t("option.3")}
                        </label>
                      </li>
                      <li className="mb-3">
                        <label htmlFor="type4">
                          <input
                            {...register("service", { required: true })}
                            type="radio"
                            id="type4"
                            value="ジャパニーズメディカルデスク (JMD) - ミャンマー"
                            className="me-2"
                          />
                          {t("option.4")}
                        </label>
                      </li>
                      <li className="mb-3">
                        <label htmlFor="type5">
                          <input
                            {...register("service", { required: true })}
                            type="radio"
                            id="type5"
                            value="ビザ＆ワークパーミット"
                            className="me-2"
                          />
                          {t("option.5")}
                        </label>
                      </li>
                    </ul>
                    {errors?.service?.type === "required" && (
                      <p className="text-xs text-red text-end">
                        {t("validate.require")}
                      </p>
                    )}
                  </div>
                </div>
              )}
              <div className="border-t border-slate-200 mb-6"></div>
              <div className="mb-4">
                <div className="grid grid-cols-12 ">
                  <div className="me-6 col-span-12 md:col-span-3 font-bold min-w-[180px] text-[#3562AE]">
                    {t("type")}
                  </div>
                  <div className="flex justify-between items-stretch col-span-12 md:col-span-9">
                    <label className="me-6" htmlFor="customer1">
                      <input
                        {...register("customer", { required: true })}
                        type="radio"
                        id="customer1"
                        value="company"
                        className="me-2"
                      />
                      {t("option-2.1")}
                    </label>
                    <label className="me-6" htmlFor="customer2">
                      <input
                        {...register("customer", { required: true })}
                        type="radio"
                        id="customer2"
                        value="individual"
                        className="me-2"
                      />
                      {t("option-2.2")}
                    </label>
                    <label htmlFor="customer3">
                      <input
                        {...register("customer", { required: true })}
                        type="radio"
                        id="customer3"
                        value="other"
                        className="me-2"
                      />
                      {t("option-2.3")}
                    </label>
                  </div>
                </div>
                {errors?.customer?.type === "required" && (
                  <p className="text-xs text-red text-end">
                    {t("validate.require")}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-12 mb-4">
                <div className="col-span-12 md:col-span-3 font-bold min-w-[180px] text-[#3562AE]">
                  {t("companyName")}
                </div>
                <div className="w-full col-span-12 md:col-span-9">
                  <input
                    {...register("company", { required: true, maxLength: 100 })}
                    type="text"
                    placeholder={``}
                    className="w-full border rounded-md text-slate-500 focus:outline-blue-400 py-2 px-4"
                  />
                  {errors?.company?.type === "required" && (
                    <p className="text-xs text-red text-end">
                      {t("validate.require")}
                    </p>
                  )}
                  {errors?.company?.type === "maxLength" && (
                    <p className="text-xs text-red text-end">
                      {t("validate.maxLenght", { maxLenght: 100 })}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-12  mb-4">
                <div className="font-bold min-w-[180px] text-[#3562AE] col-span-12 md:col-span-3">
                  {t("contactNameJp")}
                </div>
                <div className="w-full col-span-12 md:col-span-9">
                  <input
                    {...register("name_kanji", {
                      required: true,
                      maxLength: 100,
                    })}
                    type="text"
                    placeholder={``}
                    className="w-full border rounded-md text-slate-500 focus:outline-blue-400 py-2 px-4"
                  />
                  {errors?.name_kanji?.type === "required" && (
                    <p className="text-xs text-red text-end">
                      {t("validate.require")}
                    </p>
                  )}
                  {errors?.name_kanji?.type === "maxLength" && (
                    <p className="text-xs text-red text-end">
                      {t("validate.maxLenght", { maxLenght: 100 })}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-12 mb-4">
                <div className="font-bold min-w-[180px] text-[#3562AE] col-span-12 md:col-span-3">
                  {t("contactNameEn")}
                </div>
                <div className="w-full col-span-12 md:col-span-9">
                  <input
                    {...register("name_eng", {
                      required: true,
                      maxLength: 100,
                    })}
                    type="text"
                    placeholder={``}
                    className="w-full border rounded-md text-slate-500 focus:outline-blue-400 py-2 px-4"
                  />
                  {errors?.name_eng?.type === "required" && (
                    <p className="text-xs text-red text-end">
                      {t("validate.require")}
                    </p>
                  )}
                  {errors?.name_eng?.type === "maxLength" && (
                    <p className="text-xs text-red text-end">
                      {t("validate.maxLenght", { maxLenght: 100 })}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-12 mb-4">
                <div className="font-bold min-w-[180px] text-[#3562AE] col-span-12 md:col-span-3">
                  {t("email")}
                </div>
                <div className="w-full col-span-12 md:col-span-9">
                  <input
                    {...register("email", { required: true, maxLength: 100 })}
                    type="text"
                    placeholder={``}
                    className="w-full border rounded-md text-slate-500 focus:outline-blue-400 py-2 px-4"
                  />
                  {errors?.email?.type === "required" && (
                    <p className="text-xs text-red text-end">
                      {t("validate.require")}
                    </p>
                  )}
                  {errors?.email?.type === "maxLength" && (
                    <p className="text-xs text-red text-end">
                      {t("validate.maxLenght", { maxLenght: 100 })}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-12 mb-4">
                <div className="font-bold min-w-[180px] text-[#3562AE] col-span-12 md:col-span-3">
                  {t("telephone")}
                </div>
                <div className="w-full col-span-12 md:col-span-9">
                  <input
                    {...register("phone", { required: true, maxLength: 25 })}
                    type="text"
                    placeholder={``}
                    className="w-full border rounded-md text-slate-500 focus:outline-blue-400 py-2 px-4"
                  />
                  {errors?.phone?.type === "required" && (
                    <p className="text-xs text-red text-end">
                      {t("validate.require")}
                    </p>
                  )}
                  {errors?.phone?.type === "maxLength" && (
                    <p className="text-xs text-red text-end">
                      {t("validate.maxLenght", { maxLenght: 25 })}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-12 mb-4">
                <div className="font-bold min-w-[180px] text-[#3562AE] col-span-12 md:col-span-3">
                  {t("detail")}
                </div>
                <div className="w-full col-span-12 md:col-span-9">
                  <textarea
                    {...register("detail", { required: true, maxLength: 100 })}
                    rows={5}
                    placeholder={``}
                    className="w-full border rounded-md text-slate-500 focus:outline-blue-400 py-2 px-4"
                  />
                  {errors?.detail?.type === "required" && (
                    <p className="text-xs text-red text-end">
                      {t("validate.require")}
                    </p>
                  )}
                  {errors?.detail?.type === "maxLength" && (
                    <p className="text-xs text-red text-end">
                      {t("validate.maxLenght", { maxLenght: 100 })}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="border py-2 px-4 rounded-md bg-[#3562AE] text-white hover:bg-[#FDBD59] w-full md:w-fit"
                  >
                    {t("send")}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
