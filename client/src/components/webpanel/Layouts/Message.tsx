"use client";

import { FormContactProps } from "@/types/formContactType";

export default function Message({ data }: { data: FormContactProps }) {
    return (
        <div className="bg-white p-10 text-xl flex flex-col gap-4">
            {data.service &&
                <div>
                    <strong className="text-lg">Service: </strong><span className="text-lg">{data.service}</span>
                </div>
            }
            <div>
                <strong className="text-lg">Company: </strong><span className="text-lg">{data.company}</span>
            </div>
            <div>
                <strong className="text-lg">Customer: </strong><span className="text-lg">{data.customer}</span>
            </div>
            <div>
                <strong className="text-lg">Name Kanji: </strong><span className="text-lg">{data.name_kanji}</span>
            </div>
            <div>
                <strong className="text-lg">Name Eng: </strong><span className="text-lg">{data.name_eng}</span>
            </div>
            <div>
                <strong className="text-lg">Email: </strong><span className="text-lg">{data.email}</span>
            </div>
            <div>
                <strong className="text-lg">Telephone: </strong><span className="text-lg"> {data.phone}</span>
            </div>
            <div>
                <strong className="text-lg">Detail: </strong><span className="text-lg"> {data.detail}</span>
            </div>
        </div>
    );
}
