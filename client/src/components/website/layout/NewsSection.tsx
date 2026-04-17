import { Link } from "@/i18n/routing";
import BlogSection from "../organism/BlogSection";
import { useTranslations } from "next-intl";

interface NewsSectionProps {
  lng: string;
  category?: string;
}

const CATEGORY_HEADER_KEY: Record<string, string> = {
  news: "news",
  visa: "visa",
  work_permit: "work-permit",
};

export default function NewsSection({ lng, category = "visa" }: NewsSectionProps) {
  const b = useTranslations("blog-section");
  const h = useTranslations("header");
  const headerKey = CATEGORY_HEADER_KEY[category] ?? "news";
  return (
    <>
      <section id="news-activity" className="news-section bg-white">
        <div className="container  mx-auto  py-20">
          <h5 className="text-5xl font-bold text-[#3562AE] text-center mb-10">
            <span className="border-b-4 border-orange-400 w-fit pb-4 inline-block">
              {h(headerKey)}
            </span>
          </h5>

          <BlogSection
            limit={3}
            type={"blog"}
            lng={lng}
            home={true}
            module={category}
            forPage="blog"
          />

          <div className="flex justify-center mt-20">
            <Link
              href={`/blog?category=${category}`}
              className="bg-[#3562AE] text-white py-2 px-16 rounded-lg hover:bg-[#FDBD59]"
            >
              {b("see-more")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
