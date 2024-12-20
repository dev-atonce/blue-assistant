import Link from "next/link";

export default function StrongServiceSection() {
  return (
    <>
      <div className="bg-[#EDF4FF]">
        <div className="container xl:px-4 2xl:px-4 px-4 mx-auto mt-20 py-20">
          <h5 className="text-4xl font-bold text-[#3562AE] text-center">
            We are dedicated to supporting your life abroad
          </h5>
          <h4 className="text-5xl font-bold text-[#3562AE] text-center mt-6">
            with{" "}
            <span className="text-orange-300">
              "friendly, thorough, and prompt"
            </span>{" "}
            service.
          </h4>
          <p className="text-center mt-6 text-[#3562AE]">
            Blue Assistance provides medical assistance and visa/work permit
            acquisition support services for Japanese customers living overseas.
            If you have any concerns, please feel free to contact us.
          </p>
          <div className="grid grid-cols-12 gap-8 mt-20">
            <div className="col-span-4 bg-white p-14 rounded-2xl border">
              <div className="flex justify-center h-32">
                <img
                  src="/img/our-business/Group 229.png"
                  alt="19 years of experience"
                />
              </div>
              <h6 className="mt-6 text-center text-[#0C2B4B]">
                <span className="font-bold">19 years of experience</span> in the
                assistance business in Thailand.
              </h6>
            </div>
            <div className="col-span-4 bg-white p-14 rounded-2xl border">
              <div className="flex justify-center h-32 ">
                <img
                  src="/img/our-business/Frame.png"
                  alt="24-hour support system"
                />
              </div>
              <h6 className="mt-6 text-center text-[#0C2B4B]">
                <span className="font-bold ">24-hour support system</span> by
                Japanese-speaking staff.
              </h6>
            </div>
            <div className="col-span-4 bg-white p-14 rounded-2xl border">
              <div className="flex justify-center h-32">
                <img
                  src="/img/our-business/Frame (1).png"
                  alt="travel agency"
                />
              </div>
              <h6 className="mt-6 text-center text-[#0C2B4B]">
                Services leveraging the expertise of a{" "}
                <span className="font-bold">travel agency.</span>
              </h6>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href=""
              className="bg-[#3562AE] py-2 px-4 rounded-md text-white hover:bg-yellow-400"
            >
              More info About us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
