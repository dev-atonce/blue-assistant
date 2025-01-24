import Cover from "@/components/website/layout/Cover";
import { Metadata, ResolvingMetadata } from "next";
import { useTranslations } from "next-intl";
import BlogSection from "@/components/website/organism/BlogSection";
import CoverVisa from "@/components/website/layout/CoverVisa";

const pageName = "blog";
// export async function generateMetadata(
//   { params, searchParams }: any,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const lng = params.lng?.toUpperCase();
//   const seoRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/seo/page-name/${pageName}`;
//   // fetch data
//   const response = await fetch(seoRoute, { cache: "no-store" }).then((res) =>
//     res.json()
//   );

//   return {
//     metadataBase: new URL("https://blue-assistance.co.th"),
//     title: response[`seoTitle${lng}`],
//     description: response[`seoDescription${lng}`],
//     keywords: response[`seoKeyword${lng}`],
//     alternates: {
//       canonical: "./",
//     },
//   };
// }

export default function BlogPage({ params }: { params: { lng: string } }) {
  const t = useTranslations("header");
  return (
    <>
      <CoverVisa
        // @ts-ignore
        pageName={t("news")}
        prevPage={{ pageName: t("visa-work"), url: "/visa-workpermit" }}
      />
      <div className="container mx-auto ">
        <div className="py-4 flex flex-col gap-3 mt-10">
          {/* blog */}
          <h1 className="font-bold text-4xl text-[#3562AE] ">{t("news")}</h1>
          <div className="h-1 w-16 bg-orange-400"></div>
        </div>
        <BlogSection
          home={false}
          limit={6}
          type={"news"}
          lng={params.lng}
          module="visa"
          forPage="visa"
        />
      </div>
    </>
  );
}
