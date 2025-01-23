"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useTranslations } from "next-intl";

interface ContactProps {
  home: boolean;
}

export default function ContactSection({ home }: ContactProps) {
  const t = useTranslations("contact-form");
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
            <h3 className="text-5xl font-bold">
              <span className="relative text-[#3562AE] py-4">
                お問い合わせフォーム
                <div className="absolute border-b-4 border-orange-300 bottom-0 min-w-32"></div>
              </span>
            </h3>
          </div>
          <div className="mt-20 grid grid-cols-12 gap-6">
            <div className="hidden lg:block col-span-5">
              <Image src="/img/Rectangle 171.png" alt="blue-assistant" className="w-100" height={500} width={500} />
            </div>
            <form className="col-span-12 lg:col-span-7" onSubmit={handleSubmit(onSubmit)}>
              {home &&
                <div className="grid-cols-12 grid mb-4">
                  <div className="col-span-12 md:col-span-3 font-bold text-[#3562AE]">
                    ご希望の事業
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <ul>
                      <li className="mb-3">
                        <label htmlFor="type1">
                          <input
                            {...register("service", { required: true })}
                            type="radio"
                            id="type1"
                            value="1"
                            className="me-2"
                          />
                          医療アシスタンス業務
                        </label>
                      </li>
                      <li className="mb-3">
                        <label htmlFor="type2">
                          <input
                            {...register("service", { required: true })}
                            type="radio"
                            id="type2"
                            value="2"
                            className="me-2"
                          />
                          ジャパニーズメディカルデスク (JMD) 事業 - タイ
                        </label>
                      </li>
                      <li className="mb-3">
                        <label htmlFor="type3">
                          <input
                            {...register("service", { required: true })}
                            type="radio"
                            id="type3"
                            value="3"
                            className="me-2"
                          />
                          ジャパニーズメディカルデスク (JMD) 事業 - ラオス
                        </label>
                      </li>
                      <li className="mb-3">
                        <label htmlFor="type4">
                          <input
                            {...register("service", { required: true })}
                            type="radio"
                            id="type4"
                            value="4"
                            className="me-2"
                          />
                          ジャパニーズメディカルデスク (JMD) 事業 - ミャンマー
                        </label>
                      </li>
                      <li className="mb-3">
                        <label htmlFor="type5">
                          <input
                            {...register("service", { required: true })}
                            type="radio"
                            id="type5"
                            value="5"
                            className="me-2"
                          />
                          ビザ＆ワークパーミットコンサルティング事業
                        </label>
                      </li>
                    </ul>
                    {errors?.service?.type === "required" && (
                      <p className="text-xs text-red text-end">{t("validate.require")}</p>
                    )}
                  </div>
                </div>
              }
              <div className="border-t border-slate-200 mb-6"></div>
              <div className="mb-4">
                <div className="grid grid-cols-12 ">
                  <div className="me-6 col-span-12 md:col-span-3 font-bold min-w-[180px] text-[#3562AE]">
                    お客様情報
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
                      法人企業様
                    </label>
                    <label className="me-6" htmlFor="customer2">
                      <input
                        {...register("customer", { required: true })}
                        type="radio"
                        id="customer2"
                        value="individual"
                        className="me-2"
                      />
                      個人のお客様
                    </label>
                    <label htmlFor="customer3">
                      <input
                        {...register("customer", { required: true })}
                        type="radio"
                        id="customer3"
                        value="other"
                        className="me-2"
                      />
                      その他
                    </label>
                  </div>
                </div>
                {errors?.customer?.type === "required" && (
                  <p className="text-xs text-red text-end">{t("validate.require")}</p>
                )}
              </div>
              <div className="grid grid-cols-12 mb-4">
                <div className="col-span-12 md:col-span-3 font-bold min-w-[180px] text-[#3562AE]">
                  会社名（任意）
                </div>
                <div className="w-full col-span-12 md:col-span-9">
                  <input
                    {...register("company", { required: true, maxLength: 100 })}
                    type="text"
                    placeholder={``}
                    className="w-full border rounded-md text-slate-500 focus:outline-blue-400 py-2 px-4"
                  />
                  {errors?.company?.type === "required" && (
                    <p className="text-xs text-red text-end">{t("validate.require")}</p>
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
                  お名前　(漢字)
                </div>
                <div className="w-full col-span-12 md:col-span-9">
                  <input
                    {...register("name_kanji", { required: true, maxLength: 100 })}
                    type="text"
                    placeholder={``}
                    className="w-full border rounded-md text-slate-500 focus:outline-blue-400 py-2 px-4"
                  />
                  {errors?.name_kanji?.type === "required" && (
                    <p className="text-xs text-red text-end">{t("validate.require")}</p>
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
                  お名前　(英字)
                </div>
                <div className="w-full col-span-12 md:col-span-9">
                  <input
                    {...register("name_eng", { required: true, maxLength: 100 })}
                    type="text"
                    placeholder={``}
                    className="w-full border rounded-md text-slate-500 focus:outline-blue-400 py-2 px-4"
                  />
                  {errors?.name_eng?.type === "required" && (
                    <p className="text-xs text-red text-end">{t("validate.require")}</p>
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
                  メールアドレス
                </div>
                <div className="w-full col-span-12 md:col-span-9">
                  <input
                    {...register("email", { required: true, maxLength: 100 })}
                    type="text"
                    placeholder={``}
                    className="w-full border rounded-md text-slate-500 focus:outline-blue-400 py-2 px-4"
                  />
                  {errors?.email?.type === "required" && (
                    <p className="text-xs text-red text-end">{t("validate.require")}</p>
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
                  電話番号
                </div>
                <div className="w-full col-span-12 md:col-span-9">
                  <input
                    {...register("phone", { required: true, maxLength: 25 })}
                    type="text"
                    placeholder={``}
                    className="w-full border rounded-md text-slate-500 focus:outline-blue-400 py-2 px-4"
                  />
                  {errors?.phone?.type === "required" && (
                    <p className="text-xs text-red text-end">{t("validate.require")}</p>
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
                  お問い合わせ内容
                </div>
                <div className="w-full col-span-12 md:col-span-9">
                  <textarea
                    {...register("detail", { required: true, maxLength: 100 })}
                    rows={5}
                    placeholder={``}
                    className="w-full border rounded-md text-slate-500 focus:outline-blue-400 py-2 px-4"
                  />
                  {errors?.detail?.type === "required" && (
                    <p className="text-xs text-red text-end">{t("validate.require")}</p>
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
                    Send
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
