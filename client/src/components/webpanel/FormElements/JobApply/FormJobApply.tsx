import { JobApplyProps } from "../../../../types/jobApplyType";
import FormApply from "./FormApply";

interface FormJobServiceProps {
    itemState: Omit<JobApplyProps, "id" | "createdAt" | "updatedAt">;
    setItemState: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    handleSubmit: () => void;
}

const FormJobService = ({ itemState, setItemState, handleSubmit }: FormJobServiceProps) => {
    return (
        <div className="p-5 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <FormApply
                itemState={itemState}
                setItemState={setItemState}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}

export default FormJobService;
