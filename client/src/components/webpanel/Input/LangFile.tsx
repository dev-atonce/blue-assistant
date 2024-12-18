import Link from "next/link";

interface LangFileProps {
    name: string;
    value: string;
}

const AttachedIco = () => {
    return (<svg className="w-4 h-4 text-green-500 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
    </svg>);
}

const UploadIcon = () => {
    return (<svg className="dark:text-white mr-1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none">
        <path d="M13.5 3H12H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H7.5M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V9.75V12V19C19 20.1046 18.1046 21 17 21H16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 21L12 13M12 13L14.5 15.5M12 13L9.5 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    )
}

export default function LangFile({ name, value }: LangFileProps) {
    return (
        (value !== null) ?
            (<label htmlFor={name} className="relative cursor-pointer xl:ms-3 mt-2 xl:mt-0 p-2.5 flex justify-center items-center text-sm text-center font-medium text-green-500 border-2 border-green-500 border-dashed rounded-lg bg-gray-50 hover:bg-gray-100 hover:text-green-500 focus:z-10 focus:ring-2 focus:border-blue-500 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                <AttachedIco />
                <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}${value}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-semibold text-green-500"
                >
                    VIEW
                </Link>
            </label>)
            :
            (<label className="xl:ms-3 mt-2 xl:mt-0 p-2.5 flex justify-center items-center text-sm text-center font-medium text-gray-500 border-2 border-gray-500 border-dashed rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                <UploadIcon />ไม่มีไฟล์
            </label>)
    )
}