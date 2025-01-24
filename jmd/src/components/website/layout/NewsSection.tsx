import { Link } from "@/i18n/routing";
import BlogSection from "../organism/BlogSection";
import { useTranslations } from "next-intl";

export default function NewsSection(lng: { lng: string }) {
  const b = useTranslations("blog-section");
  return (
    <>
      <section id="news-activity" className="news-section bg-white">
        <div className="container  mx-auto  py-20">
          <h5 className="text-5xl font-bold text-[#3562AE] text-center mb-10">
            <span className="border-b-4 border-orange-300 w-auto">
              {b("blog")}
            </span>
          </h5>

          <BlogSection
            limit={3}
            type={"blog"}
            lng={lng.lng}
            home={true}
            module={"visa"}
            forPage="blog"
          />

          <div className="flex justify-center mt-20">
            <Link
              href="/blog"
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
