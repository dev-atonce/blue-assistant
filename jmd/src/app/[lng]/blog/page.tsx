import Cover from "@/components/website/layout/Cover";
import Blog from "@/components/website/layout/Blog";
import { Metadata, ResolvingMetadata } from "next";
import { useTranslations } from "next-intl";
import BlogSection from "@/components/website/organism/BlogSection";
import CoverVisa from "@/components/website/layout/CoverVisa";

const pageName = "JMD Home";

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

export default function BlogPage({ params }: { params: { lng: string } }) {
  const t = useTranslations("header");
  return (
    <>
      <CoverVisa
        pageName={t("blog")}
        prevPage={{ pageName: t("home"), url: "/" }}
      />
      <div className="container mx-auto ">
        <div className="py-4 flex flex-col gap-3 mt-10">
          {/* news */}
          <h1 className="font-bold text-4xl text-[#3562AE] ">{t("blog")}</h1>
          <div className="h-1 w-16 bg-orange-400"></div>
        </div>
        <BlogSection
          home={false}
          limit={6}
          type={"blog"}
          lng={params.lng}
          module="jmd"
          forPage="blog"
        />
      </div>
    </>
  );
}
