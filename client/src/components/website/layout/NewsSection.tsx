import { Link } from "@/i18n/routing";
import BlogSection from "../organism/BlogSection";

export default function NewsSection() {
  const blogs = {
    rows: [
      {
        blog_title: "Title1",
        blog_description:
          "medical assistance services in Thailand and Indochina, we provide payment agency services to",
        blog_img: "/img/news/image 57.png",
      },
      {
        blog_title: "Title2",
        blog_description:
          "medical assistance services in Thailand and Indochina, we provide payment agency services to",
        blog_img: "/img/news/image 57.png",
      },
      {
        blog_title: "Title3",
        blog_description:
          "medical assistance services in Thailand and Indochina, we provide payment agency services to",
        blog_img: "/img/news/image 57.png",
      },
    ],
  };
  return (
    <>
      <section id="news-activity" className="news-section bg-white">
        <div className="container  mx-auto  py-20">
          <h5 className="text-5xl font-bold text-[#3562AE] text-center mb-10">
            <span className="border-b-4 border-orange-300 w-auto">ブログ</span>
          </h5>

          <BlogSection limit={3} blogs={blogs} home={true} />
          {/* <div className="mt-24 grid grid-cols-12 gap-4 news">
            <div className="col-span-4">
              <div className="item cursor-pointer rounded-lg border border-slate-100 hover:shadow-md overflow-hidden">
                <Link href="/news/title">
                  <div className="item-image">
                    <img
                      src="/img/news/image 57.png"
                      className="w-full"
                      alt="News Title・News Title"
                    />
                  </div>
                  <div className="item-description p-4">
                    <div className="title text-[#3562AE] font-bold">
                      News Title・News Title
                    </div>
                    <p className="text-[#333333]">
                      medical assistance services in Thailand and Indochina, we
                      provide payment agency services to
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-span-4">
              <div className="item cursor-pointer rounded-lg border border-slate-100 hover:shadow-md overflow-hidden">
                <Link href="/news/title">
                  <div className="item-image">
                    <img
                      src="/img/news/image 57 (1).png"
                      className="w-full"
                      alt="News Title・News Title"
                    />
                  </div>
                  <div className="item-description p-4">
                    <div className="title text-[#3562AE] font-bold">
                      News Title・News Title
                    </div>
                    <p>
                      medical assistance services in Thailand and Indochina, we
                      provide payment agency services to
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-span-4">
              <div className="item cursor-pointer rounded-lg border border-slate-100 hover:shadow-md overflow-hidden">
                <Link href="/news/title">
                  <div className="item-image">
                    <img
                      src="/img/news/image 57 (2).png"
                      className="w-full"
                      alt="News Title・News Title"
                    />
                  </div>
                  <div className="item-description p-4">
                    <div className="title text-[#3562AE] font-bold">
                      News Title・News Title
                    </div>
                    <p>
                      medical assistance services in Thailand and Indochina, we
                      provide payment agency services to
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div> */}
          <div className="flex justify-center mt-20">
            <Link
              href="/blog"
              className="bg-[#3562AE] text-white py-2 px-16 rounded-lg hover:bg-[#FDBD59]"
            >
              もっと見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
