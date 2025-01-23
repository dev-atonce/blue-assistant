import MainHeading from "@/components/website/atom/heading/MainHeading";
import Cover from "@/components/website/layout/Cover";
import Image from "next/image";
import "react-quill/dist/quill.snow.css";

const fetchBlog = async ({ slug }: { slug: string }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/blog/slug/${slug}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
};

const pagename = {
  home: {
    th: "หน้าแรก",
    en: "Home",
    jp: "ホームページ",
  },
  news: {
    th: "ข่าวสารล่าสุด",
    en: "News",
    jp: "ニュースと活動",
  },
  blog: {
    th: "บทความ",
    en: "Blog",
    jp: "ブログ",
  },
  announcement: {
    th: "ประกาศ",
    en: "Announcement",
    jp: "お知らせ",
  },
};

export default async function Blog({
  params,
}: {
  params: { slug: string; lng: string };
}) {
  const { slug } = params;
  const blog = await fetchBlog({ slug });
  const lng = params.lng;
  const blogTitleKey = `blog_title_${lng}`;
  const blogImageKey = `blog_image`;
  const blogDetailKey = `blog_detail_${lng}`;

  const blogTitle = blog[0][blogTitleKey];
  const blogImage = blog[0][blogImageKey];
  const blogDetail = blog[0][blogDetailKey];
  const blogType = blog[0].type;

  return (
    <>
      <Cover
        noHeading={true}
        // @ts-ignore
        pageName={pagename[blogType][lng]}
        // @ts-ignore
        prevPage={{ pageName: pagename.home[lng], url: "/" }}
      />
      <div className="container  mx-auto pb-10 text-black py-10">
        <MainHeading text={blogTitle} heading="2" />
        <div className="lg:px-20 flex justify-center">
          {blogImage && (
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${blogImage}`}
              alt={blogTitle}
              width={500}
              height={500}
              quality={80}
              loading="lazy"
              className="h-[500px] object-contain"
            />
          )}
        </div>
        <div className="py-10 ql-editor">
          <div dangerouslySetInnerHTML={{ __html: blogDetail }} />
        </div>
      </div>
    </>
  );
}
