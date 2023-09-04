import { useState } from "react";
import { deleteJobById, useAllJobs } from "@/api/Job";

import Header from "@/components/Header";
import Modal from "@/components/Modal";
import JobTile from "@/views/JobTile";
import CreateJob from "@/views/Forms/CreateJob";
import Loader from "@/components/Loader/Loader";

const HomePage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [jobId, setJobId] = useState<string>();

  const { jobs, isLoading, mutate } = useAllJobs();

  const handleCloseModal = async () => {
    await mutate();
    setOpen(false);
    setJobId(undefined);
  };

  const handleDelete = (id?: string) => {
    if (!id) return;
    deleteJobById(id)
      .then(() => mutate())
      .catch((e: any) => console.error("Error: ", e.message));
  };

  const handleEdit = (id?: string) => {
    if (!id) return;
    setJobId(id);
    setOpen(true);
  };

  if (isLoading) return <Loader />;

  return (
    <>
      <Header onClick={() => setOpen((prev) => !prev)} />
      <Modal open={open} onClose={handleCloseModal}>
        <CreateJob onClose={handleCloseModal} jobId={jobId} />
      </Modal>
      <div className="h-full p-6 bg-bgGrey">
        {!!jobs?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[30px]">
            {jobs.map((job) => (
              <JobTile
                key={job.id}
                job={job}
                handleDelete={handleDelete.bind(this, job.id)}
                handleEdit={handleEdit.bind(this, job.id)}
              />
            ))}
          </div>
        ) : (
          <div className="p-4 bg-cardColor rounded-md">
            There are no Jobs at the moment, please check later!
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
