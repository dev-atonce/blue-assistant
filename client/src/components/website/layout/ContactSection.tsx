export default function ContactSection() {
  return (
    <>
      <div id="contact" className="bg-[#fafafa] text-[#333333]">
        <div className="container  mx-auto  py-20">
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
              <img src="/img/Rectangle 171.png" alt="" className="w-100" />
            </div>
            <div className="col-span-12 lg:col-span-7">
              <div className="grid-cols-12 grid">
                <div className="col-span-12 md:col-span-3 font-bold text-[#3562AE]">
                  ご希望の事業
                </div>
                <div
                  className="col-span-12 md:col-span-9
                "
                >
                  <ul>
                    <li className="mb-3">
                      <label htmlFor="type1">
                        <input
                          type="radio"
                          id="type1"
                          name="service"
                          value=""
                          className="me-2"
                        />
                        医療アシスタンス業務
                      </label>
                    </li>
                    <li className="mb-3">
                      <label htmlFor="type2">
                        <input
                          type="radio"
                          id="type2"
                          name="service"
                          value=""
                          className="me-2"
                        />
                        ジャパニーズメディカルデスク (JMD) 事業 - タイ
                      </label>
                    </li>
                    <li className="mb-3">
                      <label htmlFor="type3">
                        <input
                          type="radio"
                          id="type3"
                          name="service"
                          value=""
                          className="me-2"
                        />
                        ジャパニーズメディカルデスク (JMD) 事業 - ラオス
                      </label>
                    </li>
                    <li className="mb-3">
                      <label htmlFor="type4">
                        <input
                          type="radio"
                          id="type4"
                          name="service"
                          value=""
                          className="me-2"
                        />
                        ジャパニーズメディカルデスク (JMD) 事業 - ミャンマー
                      </label>
                    </li>
                    <li className="mb-3">
                      <label htmlFor="type5">
                        <input
                          type="radio"
                          id="type5"
                          name="service"
                          value=""
                          className="me-2"
                        />
                        ビザ＆ワークパーミットコンサルティング事業
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-slate-200 my-6"></div>
              <div className="grid grid-cols-12 mb-8">
                <div className="me-6 col-span-12 md:col-span-3 font-bold min-w-[180px] text-[#3562AE]">
                  お客様情報
                </div>
                <div className="flex justify-between items-stretch col-span-12 md:col-span-9">
                  <label className="me-6" htmlFor="customer1">
                    <input
                      type="radio"
                      id="customer1"
                      name="customer"
                      value="company"
                      className="me-2"
                    />
                    法人企業様
                  </label>
                  <label className="me-6" htmlFor="customer2">
                    <input
                      type="radio"
                      id="customer2"
                      name="customer"
                      value="individual"
                      className="me-2"
                    />
                    個人のお客様
                  </label>
                  <label htmlFor="customer3">
                    <input
                      type="radio"
                      id="customer3"
                      name="customer"
                      value="other"
                      className="me-2"
                    />
                    その他
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-12 mb-4">
                <div className="col-span-12 md:col-span-3 font-bold min-w-[180px] text-[#3562AE]">
                  会社名（任意）
                </div>
                <div className="w-full col-span-12 md:col-span-9">
                  <input
                    type="text"
                    name="company"
                    placeholder={``}
                    className="w-full border rounded-md text-slate-500 focus:outline-blue-400 py-2 px-4"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12  mb-4">
                <div className="font-bold min-w-[180px] text-[#3562AE] col-span-12 md:col-span-3">
                  お名前　(漢字)
                </div>
                <div className="w-full col-span-12 md:col-span-9">
                  <input
                    type="text"
                    name="name_kanji"
                    placeholder={``}
                    className="w-full border rounded-md text-slate-500 focus:outline-blue-400 py-2 px-4"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 mb-4">
                <div className="font-bold min-w-[180px] text-[#3562AE] col-span-12 md:col-span-3">
                  お名前　(英字)
                </div>
                <div className="w-full col-span-12 md:col-span-9">
                  <input
                    type="text"
                    name="name_eng"
                    placeholder={``}
                    className="w-full border rounded-md text-slate-500 focus:outline-blue-400 py-2 px-4"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 mb-4">
                <div className="font-bold min-w-[180px] text-[#3562AE] col-span-12 md:col-span-3">
                  メールアドレス
                </div>
                <div className="w-full col-span-12 md:col-span-9">
                  <input
                    type="text"
                    name="email"
                    placeholder={``}
                    className="w-full border rounded-md text-slate-500 focus:outline-blue-400 py-2 px-4"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 mb-4">
                <div className="font-bold min-w-[180px] text-[#3562AE] col-span-12 md:col-span-3">
                  電話番号
                </div>
                <div className="w-full col-span-12 md:col-span-9">
                  <input
                    type="text"
                    name="phone"
                    placeholder={``}
                    className="w-full border rounded-md text-slate-500 focus:outline-blue-400 py-2 px-4"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 mb-4">
                <div className="font-bold min-w-[180px] text-[#3562AE] col-span-12 md:col-span-3">
                  お問い合わせ内容
                </div>
                <div className="w-full col-span-12 md:col-span-9">
                  <textarea
                    name="inqurey"
                    rows={5}
                    placeholder={``}
                    className="w-full border rounded-md text-slate-500 focus:outline-blue-400 py-2 px-4 mb-4"
                  />
                  <button
                    type="submit"
                    className="border py-2 px-4 rounded-md bg-[#3562AE] text-white hover:bg-[#FDBD59] w-full md:w-fit"
                  >
                    Send
                  </button>
                </div>
              </div>
              {/* <div className="flex mb-4">
                <div className="font-bold min-w-[180px] text-[#3562AE]"></div>
                <div>
                  <button
                    type="submit"
                    className="border py-2 px-4 rounded-md bg-[#3562AE] text-white hover:bg-yellow-300"
                  >
                    Send
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
