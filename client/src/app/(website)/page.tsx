import CoverSwiper from "@/components/website/layout/CoverSwiper";

import Blog from "@/components/website/layout/Blog";
import Image from "next/image";

const fetchBlog = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/blog/limit/4`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
};

const fetchBanner = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/banner`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
};

export default async function Home() {
  // const blogs = await fetchBlog();
  // const banner = await fetchBanner();

  return (
    <>
      <div style={{height:'80vh', overflow:'hidden',marginTop:'-65px',zIndex:0}}>
        <Image src="/img/cover.png" width={4838} height={2198} quality={100} alt="Blue Assistance" />
      </div>
      <div className="container xl:px-4 2xl:px-4 px-4 mx-auto">
      </div>
    </>
  );
}
