import Link from "next/link";
import Image from "next/image";

export function Logo({ color, img }: any) {
  return (
    <div className="">
      <a href="https://blue-assistance.co.th/" className="_links">
        {/* {img && ( */}
        <img
          src={
            img
              ? `${process.env.NEXT_PUBLIC_BASE_URL}${img}`
              : "/img/blue_full_logo.png"
          }
          alt="rent"
          width={300}
          height={100}
          // quality={100}
        />
      </a>
    </div>
  );
}
