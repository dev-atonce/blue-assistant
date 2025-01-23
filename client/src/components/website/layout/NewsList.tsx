"use client"
import { Link } from "@/i18n/routing";
import { useEffect, useState } from "react";

interface NewListProps {
    lng?: string;
    limit: number;
    module: string;
}

const convertedDate = (date: any) => {
    const parsedDate = new Date(date);
    const formattedDate = `${parsedDate.getFullYear()}.${String(
        parsedDate.getMonth() + 1
    ).padStart(2, "0")}.${String(parsedDate.getDate()).padStart(2, "0")}`;
    return formattedDate;
};

export default function NewsList({ lng, limit, module }: NewListProps) {
    const [blogList, setBlogList] = useState([]);

    const fetchBlog = async () => {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/blog?limit=${limit}&type=news&module=${module}`,
            {
                cache: "no-store",
            }
        );
        const data = await res.json();
        setBlogList(data?.rows);
    };

    useEffect(() => {
        fetchBlog();
    }, []);

    return (
        <>
            {!blogList?.length ? (
                <p className="text-center p-10">Coming Soon ...</p>
            ) : (
                blogList.map((item: any, key: any) => {
                    return (
                        <div key={key} className="bg-white text-[#3D3D3D] p-6 border-b">
                            <Link href={`/visa-workpermit/news-activity/${item.slug}`}>
                                <span>{convertedDate(item.createdAt)}</span>
                                <span> | </span>
                                <span>{item[`blog_title_${lng}`]}</span>
                            </Link>
                        </div>
                    )
                }))
            }
        </>
    )
}