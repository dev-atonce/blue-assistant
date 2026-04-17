import Cover from "@/components/website/layout/Cover";
import Blog from "@/components/website/layout/Blog";
import { Metadata, ResolvingMetadata } from "next";
import { useTranslations } from "next-intl";
import BlogSection from "@/components/website/organism/BlogSection";
import BlogCategorySelect from "@/components/website/organism/BlogCategorySelect";

const pageName = "blog";

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const lng = params.lng?.toUpperCase();

  const seoRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/seo/page-name/${pageName}`;

  // fetch data
  const response = await fetch(seoRoute, { cache: "no-store" }).then((res) =>
    res.json()
  );

  return {
    metadataBase: new URL("https://blue-assistant.co.th"),
    title: response[`seoTitle${lng}`],
    description: response[`seoDescription${lng}`],
    keywords: response[`seoKeyword${lng}`],
    alternates: {
      canonical: "./",
    },
    // icons: [{ rel: "icon", url: Favicon.src }],
  };
}

const CATEGORY_HEADER_KEY: Record<string, string> = {
  news: "news",
  visa: "visa",
  work_permit: "work-permit",
};

export default function BlogPage({
  params,
  searchParams,
}: {
  params: { lng: string };
  searchParams?: { category?: string };
}) {
  const t = useTranslations("header");
  const category = searchParams?.category ?? "news";
  const headerKey = "blog";
  return (
    <>
      <Cover
        pageName={t("blog")}
        image="/img/service/news_banner.jpg"
        prevPage={{ pageName: t("home"), url: "/" }}
        noHeading={true}
      />
      <div className="container mx-auto ">
        <div className="py-4 flex flex-col gap-3 mt-10">
          <div className="flex flex-wrap items-center gap-4">
            {/* <h1 className="font-bold text-4xl text-[#3562AE] ">{t("blog")}</h1> */}
            <BlogCategorySelect lng={params.lng} currentCategory={category} />
          </div>
          <div className={`h-1 w-16 bg-orange-400 ${category === "visa" ? "ml-21" : category === "work_permit" ? "ml-40" : "" }`}></div>
        </div>
        <BlogSection
          key={category}
          home={false}
          limit={6}
          type={"blog"}
          lng={params.lng}
          module={category}
          forPage="blog"
        />
      </div>
    </>
  );
}
