import { Link } from "@/i18n/routing";

export default function NewsSection()
{
    return (<>
        <section className="news-section bg-white">
            <div className="container xl:px-4 2xl:px-4 px-4 mx-auto mt-20 py-20">
                <h5 className="text-5xl font-bold text-[#3562AE] text-center">
                    <span className="border-b-4 border-orange-300 w-auto">ブログ</span>
                </h5>
                <div className="mt-24 grid grid-cols-12 gap-4 news">
                    <div className="col-span-4">
                        <div className="item cursor-pointer rounded-lg border border-slate-100 hover:shadow-md overflow-hidden">
                            <Link href="/news/title" >
                                <div className="item-image">
                                    <img src="/img/news/image 57.png" className="w-full" alt="News Title・News Title" />
                                </div>
                                <div className="item-description p-4">
                                    <div className="title text-[#3562AE] font-bold">News Title・News Title</div>
                                    <p>medical assistance services in Thailand and Indochina, we provide payment agency services to</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="item cursor-pointer rounded-lg border border-slate-100 hover:shadow-md overflow-hidden">
                            <Link href="/news/title" >
                                <div className="item-image">
                                    <img src="/img/news/image 57 (1).png" className="w-full" alt="News Title・News Title" />
                                </div>
                                <div className="item-description p-4">
                                    <div className="title text-[#3562AE] font-bold">News Title・News Title</div>
                                    <p>medical assistance services in Thailand and Indochina, we provide payment agency services to</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="item cursor-pointer rounded-lg border border-slate-100 hover:shadow-md overflow-hidden">
                            <Link href="/news/title" >
                                <div className="item-image">
                                    <img src="/img/news/image 57 (2).png" className="w-full" alt="News Title・News Title" />
                                </div>
                                <div className="item-description p-4">
                                    <div className="title text-[#3562AE] font-bold">News Title・News Title</div>
                                    <p>medical assistance services in Thailand and Indochina, we provide payment agency services to</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-20">
                    <Link href="/news" className="bg-[#3562AE] text-white py-2 px-16 rounded-lg hover:bg-yellow-400">もっと見る</Link>
                </div>
            </div>
        </section>
    </>);
}