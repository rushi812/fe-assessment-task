import { InitialValues } from "@/types/CreateJobTypes";
import * as Yup from "yup";

export const INITIAL_VALUES: InitialValues = {
  jobTitle: "",
  companyName: "",
  industry: "",
  location: "",
  remoteType: "",
  experience: {
    min: "",
    max: "",
  },
  salary: {
    min: "",
    max: "",
  },
  totalEmployee: "",
  applyType: "",
};

export const firstFormValidation = () => {
  return Yup.object().shape({
    jobTitle: Yup.string().required("Job Title is required").nullable(),
    companyName: Yup.string().required("Company Name is required").nullable(),
    industry: Yup.string().required("Industry is required").nullable(),
  });
};
