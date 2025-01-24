export default function FadeHeading({ text, heading }: any) {
  return (
    <div className="py-4 flex flex-col gap-3 ">
      {heading == "1" ? (
        <h1 className="bg-gradient-to-r from-[#0147A3] to-white text-base md:text-xl font-bold bg-blue-400 text-white pl-4 pr-30  py-4 w-fit">
          {text}
        </h1>
      ) : heading == "2" ? (
        <h2 className="bg-gradient-to-r from-[#0147A3] to-white text-base md:text-xl font-bold bg-blue-400 text-white pl-4 pr-30  py-4 w-fit">
          {text}
        </h2>
      ) : heading == "3" ? (
        <h3 className="bg-gradient-to-r from-[#0147A3] to-white text-base md:text-xl font-bold bg-blue-400 text-white pl-4 pr-30  py-4 w-fit">
          {text}
        </h3>
      ) : (
        <span className="bg-gradient-to-r from-[#0147A3] to-white text-base md:text-xl font-bold bg-blue-400 text-white pl-4 pr-30  py-4 w-fit">
          {text}
        </span>
      )}
    </div>
  );
}
