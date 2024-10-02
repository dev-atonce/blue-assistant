export default function Footer() {
  return (
    <footer className="bg-[#3662AE] py-20 sm:py-24">
      <div className="mx-auto container flex justify-between">
        <div className="flex flex-col gap-4">
          <div className="border-b border-white pb-4 w-[50%] font-bold">
            <p className=" leading-5 text-white ">Blue Assistance Co., Ltd.</p>
            <p className=" leading-5 text-white ">
              ブルーアシスタンス　株式会社
            </p>
          </div>
          <div className="">
            <p className=" leading-5 text-white w-[50%] ">
              No.D 9th Floor, PRIME BUILDING, 24 Sukhumvit Soi 21(Asoke),
              Sukhumvit Road, Klongtoey-Nua, Wattana, Bangkok 10110, Thailand.
            </p>
          </div>
        </div>
        <div className="flex gap-4 text-white">
          <div>
            <div className="flex flex-col gap-2">
              <p className=" leading-5 ">TEL : +66 (0)2-661-7687～88</p>
              <p className=" leading-5 ">FAX : +66 (0)2-661-7689</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className=" leading-5 ">医療アシスタンス業務</p>
            <p className=" leading-5 ">medical@blue-assistance.co.th</p>
            <p className=" leading-5 ">ビザ&労働許可証コンサルタント業務</p>
            <p className=" leading-5 ">visa@blue-assistance.co.th</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
