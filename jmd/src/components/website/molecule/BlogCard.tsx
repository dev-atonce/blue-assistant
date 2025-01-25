import { Divider, Card, Col } from "antd";
import Image from "next/image";
import { Link } from "@/i18n/routing";

interface BlogCardProps {
  data: any[];
  lng?: string;
  forPage: string;
}

const BlogCard = ({ data, lng, forPage }: BlogCardProps) => {
  let urlBlog = "";
  forPage === "blog"
    ? (urlBlog = "/blog/")
    : forPage === "visa"
    ? (urlBlog = "/visa-workpermit/news-activity/")
    : (urlBlog = "/news-activity/");

  return data?.map((item: any, key: number) => {
    return (
      <Col xs={24} sm={24} md={8} lg={8} key={key}>
        <Link href={`${urlBlog}${item?.slug}`}>
          <Card
            className="z-1"
            hoverable
            cover={
              <Image
                className="w-full aspect-[3/2] object-cover"
                alt="blog_image"
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.blog_image}`}
                width={500}
                height={300}
                quality={80}
                loading="lazy"
              />
            }
          >
            <div>
              <span className="line-clamp-2 text-base  text-slate-800 my-4">
                {item[`blog_title_${lng}`] ||
                  item?.blog_title_jp ||
                  item?.blog_title_th}
              </span>
              <Divider className="mt-3 mb-2" />
              <p className="line-clamp-3 h-11 text-slate-600">
                {item[`blog_description_${lng}`] ||
                  item?.blog_description_jp ||
                  item?.blog_description_th}
              </p>
            </div>
          </Card>
        </Link>
      </Col>
    );
  });
};

export default BlogCard;
