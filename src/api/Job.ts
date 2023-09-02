import { JOB_TYPE } from "@/types/CreateJobTypes";
import { API_BASE_URL } from "@/config/constants";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const createJob = (data: JOB_TYPE) => {
  try {
    return axios.post(`${API_BASE_URL}/jobs`, data);
  } catch (error: any) {
    return error.message;
  }
};

export const useAllJobs = (fetch = true) => {
  const url = fetch ? `${API_BASE_URL}/jobs` : null;
  const { data, error, mutate } = useSWR<JOB_TYPE[]>(url, fetcher);
  return { jobs: data, isLoading: fetch && !error && !data, mutate };
};
