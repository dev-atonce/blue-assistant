import Link from "next/link";
import Image from "next/image";

export function Logo({ color, img }: any) {
  return (
    <div className="">
      <Link href="/" className="_links">
        {/* {img && ( */}
        <img
          src={
            img
              ? `${process.env.NEXT_PUBLIC_BASE_URL}${img}`
              : "/img/blue_full_logo.png"
          }
          alt="blue"
          width={`300`}
          height={100}
        />
        {/* )} */}
      </Link>
    </div>
  );
}
