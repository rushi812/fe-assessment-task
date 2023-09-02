import { INITIAL_VALUES } from "@/utils/createJob";
import FirstForm from "./FirstForm";
import { useState } from "react";
import { InitialValues } from "@/types/CreateJobTypes";
import SecondForm from "./SecondForm";

const CreateJob = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [initialValues, setInitialValues] = useState(INITIAL_VALUES);

  const onSubmit = (values: InitialValues) => {
    if (activeStep === 1) {
      setInitialValues(values);
      setActiveStep(2);
    } else console.log("RB:: form submission", values);
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

export default CreateJob;
