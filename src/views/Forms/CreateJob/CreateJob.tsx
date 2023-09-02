import { INITIAL_VALUES } from "@/utils/createJob";
import FirstForm from "./FirstForm";
import { useState } from "react";
import { JOB_TYPE } from "@/types/CreateJobTypes";
import SecondForm from "./SecondForm";
import { createJob } from "@/api/Job";

const CreateJob: React.FC<CreateJobProps> = ({ onClose }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [initialValues, setInitialValues] = useState(INITIAL_VALUES);

  const onSubmit = (values: JOB_TYPE) => {
    setInitialValues(values);
    if (activeStep === 1) setActiveStep(2);
    else {
      createJob(values)
        .then(() => onClose())
        .catch((e: any) => console.log("RB:: e", e.message));
    }
  };

  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex justify-between">
        <p className="text-xl font-normal leading-7 text-fontDark1">
          Create a job
        </p>
        <p className="text-xl font-normal leading-7 text-fontDark1">{`Step ${activeStep}`}</p>
      </div>
      {activeStep === 1 && (
        <FirstForm initialValues={initialValues} submit={onSubmit} />
      )}
      {activeStep === 2 && (
        <SecondForm
          initialValues={initialValues}
          submit={onSubmit}
          onBackClick={() => setActiveStep(1)}
        />
      )}
    </div>
  );
};

type CreateJobProps = {
  onClose: () => void;
};

export default CreateJob;
