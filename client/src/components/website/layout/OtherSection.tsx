export default function OtherSection() {
  return (
    <>
      <section className="other-section mt-20">
        <div className="container mx-auto  py-20">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6">
              <h6 className="text-3xl font-bold my-2 text-[#3562AE] text-end">
                Blue Ground{" "}
              </h6>
              <a
                href="https://www.blue-ground.com/"
                className="zoom-effect-image"
              >
                <img
                  src="/img/link1.jpg"
                  alt="Blue Assistance"
                  className="w-full h-[70%] md:h-[50%] object-cover"
                />
              </a>
            </div>
            <div className="col-span-12 md:col-span-6">
              <a
                href="https://bluelife-insurance.com/companies/11"
                className="zoom-effect-image"
              >
                <img
                  src="/img/link2.jpg"
                  alt="Blue Assistance"
                  className="w-full h-[50%] object-cover"
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
