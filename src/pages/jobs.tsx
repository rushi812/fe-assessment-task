import { useAllJobs } from "@/api/Job";
import Layout from "@/components/Layout";
import JobTile from "@/views/JobTile/JobTile";

const JobsPage = () => {
  const { jobs, isLoading, mutate } = useAllJobs();
  console.log("RB:: jobs", jobs);

  if (!jobs?.length) return null;

  return (
    <Layout>
      <div className="h-full p-6 bg-bgGrey">
        <div className="grid grid-cols-2 gap-[30px]">
          {[...jobs, ...jobs].map((job) => (
            <JobTile key={job.id} job={job} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default JobsPage;
