interface ResumeUploadProps {
    value: string;
    setItemState: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    removeFile: (fieldName: string) => void;
    name: string;
}

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

const ResumeUpload = ({ value, setItemState, removeFile, name }: ResumeUploadProps) => {
    return (value ? (
        <div className="relative">
            <button
                className="absolute" style={{ top: '-8px', right: '-8px' }}
                onClick={() => removeFile(name)}>
                <CloseIcon />
            </button>
            <label
                htmlFor={name}
                className="flex flex-col items-center justify-center w-full h-auto border-2 border-green-500 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
                <div className="flex flex-col items-center justify-center pt-3 pb-4">
                    <p className="mb-1 text-sm text-green-500">
                        <span className="font-semibold">Uploaded</span>
                    </p>
                    <p className="text-xs text-green-500">
                        PDF, PNG, or JPG
                    </p>
                </div>
                <input
                    id={name}
                    name={name}
                    type="file"
                    className="hidden"
                    accept="application/pdf, image/*"
                    onChange={setItemState}
                />
            </label>
        </div>
    ) : (
        <label
            htmlFor={name}
            className="flex flex-col items-center justify-center w-full h-auto border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
            <div className="flex flex-col items-center justify-center pt-3 pb-4">
                <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Resume/CV</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    PDF, PNG, or JPG
                </p>
            </div>
            <input
                id={name}
                name={name}
                type="file"
                className="hidden"
                accept="application/pdf, image/*"
                onChange={setItemState}
            />
        </label>
    )
    );
}

export default ResumeUpload;