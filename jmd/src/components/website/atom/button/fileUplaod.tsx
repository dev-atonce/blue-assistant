const AttachedIco = () => {
    return (
        <svg
            className="w-4 h-4 text-green-500 dark:text-white mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 21 21"
        >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
            />
        </svg>
    );
};

const UploadIcon = () => {
    return (
        <svg
            className="dark:text-white mr-1"
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            height="18px"
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                d="M13.5 3H12H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H7.5M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V9.75V12V19C19 20.1046 18.1046 21 17 21H16.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 21L12 13M12 13L14.5 15.5M12 13L9.5 15.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

const CloseIcon = () => {
    return (
        <svg
            className="bg-white text-gray-500 rounded-full"
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
        >
            <path
                fill="currentColor"
                d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z"
            ></path>
            <path
                fill="currentColor"
                d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
                clipRule="evenodd"
                fillRule="evenodd"
            ></path>
        </svg>
    );
};

interface ApplicationFormProps {
    value: string;
    setItemState: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    removeFile: (fieldName: string) => void;
    name: string;
}

const FileUpload = ({ value, setItemState, removeFile, name }: ApplicationFormProps) => {
    return (value ? (
        <div className="relative">
            <button
                className="absolute" style={{ top: '-8px', right: '-8px' }}
                onClick={() => removeFile(name)}>
                <CloseIcon />
            </button>
            <label
                htmlFor={name}
                className="cursor-pointer lg:ms-3 mt-2 lg:mt-0 p-2.5 flex justify-center items-center text-sm text-center font-medium text-green-500 border-2 border-green-500 border-dashed rounded-lg bg-gray-50 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:border-blue-500 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
                <AttachedIco />
                แนบไฟล์แล้ว
                <input
                    type="file"
                    className="hidden"
                    name={name}
                    id={name}
                    onChange={setItemState}
                />
            </label>
        </div>
    ) : (
        <label
            htmlFor={name}
            className="cursor-pointer lg:ms-3 mt-2 lg:mt-0 p-2.5 flex justify-center items-center text-sm text-center font-medium text-gray-500 border-2 border-gray-500 border-dashed rounded-lg bg-gray-50 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:border-blue-500 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
            <UploadIcon />
            แนบไฟล์
            <input
                type="file"
                className="hidden"
                name={name}
                id={name}
                onChange={setItemState}
            />
        </label>
    )
    );
};

export default FileUpload;