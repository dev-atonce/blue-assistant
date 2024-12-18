import Image from "next/image";

interface ImagePreviewProps {
    selectedImage: any;
}

const ImagePreview = ({ selectedImage }: ImagePreviewProps) => {
    return (selectedImage ?
        (
            <Image
                className="h-full object-cover"
                src={URL.createObjectURL(selectedImage)}
                alt="preview"
                width={1000}
                height={1000}
                quality={80}
            />
        ) :
        (
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Profile Image</span></p>
        )
    )
}

export default ImagePreview;