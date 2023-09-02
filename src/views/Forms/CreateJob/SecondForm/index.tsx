import Button from "@/components/Button/Button";
import Input from "@/components/Input";
import Radio from "@/components/Radio/Radio";
import { JOB_TYPE } from "@/types/CreateJobTypes";
import { firstFormValidation } from "@/utils/createJob";
import { Form, Formik } from "formik";
import { ChangeEvent } from "react";

const SecondForm: React.FC<SecondFormProps> = ({
  initialValues,
  submit,
  onBackClick,
}) => {
  const handleInpChange = (
    e: ChangeEvent<HTMLInputElement>,
    setFieldValue: any,
    id: string
  ) => {
    let { value } = e.currentTarget;
    value = value.replaceAll(/\D/g, "");
    if (isNaN(Number(value))) return;
    e.currentTarget.value =
      Math.abs(Math.floor(Number(value))).toString() || "";
    return setFieldValue(id, value);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={firstFormValidation}
      onSubmit={submit}
      enableReinitialize
    >
      {(props: any) => {
        const { values, setFieldValue } = props;
        return (
          <Form>
            <div className="flex flex-col gap-6">
              <div className="flex gap-6">
                <Input
                  id="experience.min"
                  name="experience.min"
                  label="Experience"
                  value={values?.experience.min}
                  onChange={(e) =>
                    handleInpChange(e, setFieldValue, "experience.min")
                  }
                  placeholder="Minimum"
                  inputMode="numeric"
                />
                <Input
                  id="experience.max"
                  name="experience.max"
                  value={values?.experience.max}
                  onChange={(e) =>
                    handleInpChange(e, setFieldValue, "experience.max")
                  }
                  placeholder="Maximum"
                  inputMode="numeric"
                />
              </div>

              <div className="flex gap-6">
                <Input
                  id="salary.min"
                  name="salary.min"
                  label="Salary"
                  value={values?.salary.min}
                  onChange={(e) =>
                    handleInpChange(e, setFieldValue, "salary.min")
                  }
                  placeholder="Minimum"
                  inputMode="numeric"
                />
                <Input
                  id="salary.max"
                  name="salary.max"
                  value={values?.salary.max}
                  onChange={(e) =>
                    handleInpChange(e, setFieldValue, "salary.max")
                  }
                  placeholder="Maximum"
                  inputMode="numeric"
                />
              </div>
              <Input
                id="totalEmployee"
                name="totalEmployee"
                label="Total employee"
                value={values?.totalEmployee}
                onChange={(e) =>
                  handleInpChange(e, setFieldValue, "totalEmployee")
                }
                placeholder="ex. 100"
                inputMode="numeric"
              />
              <div className="w-full flex flex-col gap-1">
                <label className="block text-sm font-medium leading-5 text-fontDark">
                  Apply Type
                </label>
                <div className="flex items-center gap-4">
                  <Radio
                    label="Quick Apply"
                    id="applyType"
                    name="applyType"
                    value={values?.applyType}
                    onChange={() => setFieldValue("applyType", "quickApply")}
                    checked={values?.applyType === "quickApply"}
                  />
                  <Radio
                    label="External Apply"
                    id="applyType"
                    name="applyType"
                    value={values?.applyType}
                    onChange={() => setFieldValue("applyType", "externalApply")}
                    checked={values?.applyType === "externalApply"}
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex mt-24 justify-end gap-2">
              <Button
                text="Back"
                onClick={onBackClick}
                className="bg-transparent border border-primary text-primary"
              />
              <Button type="submit" text="Save" />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

type SecondFormProps = {
  initialValues: JOB_TYPE;
  submit: (values: JOB_TYPE) => void;
  onBackClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default SecondForm;
