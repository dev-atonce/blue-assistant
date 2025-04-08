export default function OtherSection() {
  return (
    <>
      <section className="other-section ">
        <div className="container mx-auto  pb-20 md:py-20">
          <div className="flex flex-col md:flex-row justify-center gap-10 sm:px-20 md:gap-20 px-10 lg:px-44">
            <div className="flex flex-col">
              <h6 className="text-3xl font-bold my-2 text-[#3562AE] ">
                Blue Ground{" "}
              </h6>
              <a
                href="https://www.blue-ground.com/"
                className="zoom-effect-image flex justify-end "
              >
                <img
                  src="/img/link1.jpg"
                  alt="Blue Assistance"
                  className="w-full  object-cover"
                />
              </a>
            </div>
            <div className="flex flex-col-reverse md:flex-col">
              <a
                href="https://bluelife-insurance.com/companies/11"
                className="zoom-effect-image"
              >
                <img
                  src="/img/link2.jpg"
                  alt="Blue Assistance"
                  className="w-full  object-cover"
                />
              </a>
              <h6 className="text-3xl font-bold my-2 text-[#3562AE]">
                Bluelife
              </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
