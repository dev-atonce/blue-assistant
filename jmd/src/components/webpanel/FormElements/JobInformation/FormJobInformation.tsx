import { JobInformationProps } from "../../../../types/jobInformationType";
import FormResume from "./FormResume";

interface FormJobServiceProps {
    itemState: Omit<JobInformationProps, "id" | "createdAt" | "updatedAt">;
    setItemState: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    handleSubmit: () => void;
}

const FormJobService = ({ itemState, setItemState, handleSubmit }: FormJobServiceProps) => {
    return (
        <div className="p-5 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <FormResume
                itemState={itemState}
                setItemState={setItemState}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}

export default FormJobService;
