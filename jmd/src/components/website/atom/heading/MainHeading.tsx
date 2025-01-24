export default function MainHeading({ text, heading }: any) {
  return (
    <div className="py-4 flex flex-col gap-3 mt-10 text-2xl md:text-4xl">
      {heading == "1" ? (
        <h1 className="font-bold text-2xl md:text-4xl  text-[#3562AE] ">
          {text}
        </h1>
      ) : heading == "2" ? (
        <h2 className="font-bold text-2xl md:text-4xl text-[#3562AE] ">
          {text}
        </h2>
      ) : heading == "3" ? (
        <h3 className="font-bold text-2xl md:text-4xl text-[#3562AE] ">
          {text}
        </h3>
      ) : (
        <span className="font-bold text-2xl md:text-4xl text-[#3562AE] ">
          {text}
        </span>
      )}

      <div className="h-1 w-16 bg-orange-400"></div>
    </div>
  );
}
