import { JOB_TYPE } from "@/types/CreateJobTypes";

const JobTile: React.FC<JobTileProps> = ({ job }) => {
  return (
    <div className="w-full rounded-[10px] bg-cardColor text-left shadow-sm transition-all border border-cardBorder1 py-4 px-6">
      JobTile
    </div>
  );
};

type JobTileProps = {
  job: JOB_TYPE;
};

export default JobTile;
