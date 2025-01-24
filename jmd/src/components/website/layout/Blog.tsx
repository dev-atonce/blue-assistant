import Link from "next/link";
import BlogSection from "@/components/website/organism/BlogSection";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Blog({ home, limit, blogs }: any) {
  return (
    <div className="border-slate-200 py-12 ">
      <div className="py-6">
        {/* @ts-ignore */}
        <BlogSection home={home} limit={limit} blogs={blogs} />
      </div>
    </div>
  );
}
