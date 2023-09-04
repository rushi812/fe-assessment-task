import Image from "next/image";

import Button from "@/components/Button";
import IconButton from "@/components/IconButton/IconButton";
import Delete from "@/icons/Delete";
import Edit from "@/icons/Edit";
import { JOB_TYPE } from "@/types/CreateJobTypes";
import { getExperienceText, getSalaryText } from "@/utils/formatText";

const JobTile: React.FC<JobTileProps> = ({ job, handleDelete, handleEdit }) => {
  const {
    jobTitle,
    companyName,
    industry,
    location,
    remoteType,
    experience,
    salary,
    totalEmployee,
    applyType,
  } = job;

  const experienceText = getExperienceText(experience);
  const salaryText = getSalaryText(salary);

  return (
    <div className="flex item-start justify-between w-full rounded-[10px] bg-cardColor text-left shadow-sm transition-all border border-cardBorder1 py-4 px-6">
      <div className="flex flex-col sm:flex-col md:flex-row items-start gap-2">
        <Image
          src="/assets/company-logo.png"
          alt="Company Logo"
          height={48}
          width={48}
          objectFit="contain"
        />
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-2xl font-normal leading-8">{jobTitle}</h1>
            <p className="text-base font-normal leading-6">
              {companyName} - {industry}
            </p>
            <p className="text-base text-fontPlaceholder font-normal leading-6">{`${location} ${
              remoteType ? `(${remoteType})` : ""
            }`}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#212427] font-normal leading-6">
              Part-Time (9.00 am - 5.00 pm IST)
            </p>
            {experienceText && (
              <p className="text-[#212427] font-normal leading-6">
                {experienceText}
              </p>
            )}
            {salaryText && (
              <p className="text-[#212427] font-normal leading-6">
                {salaryText}
              </p>
            )}
            {totalEmployee && (
              <p className="text-[#212427] font-normal leading-6">
                {`${totalEmployee} employees`}
              </p>
            )}
          </div>
          <div className="flex items-center gap-6">
            {applyType === "externalApply" ? (
              <Button
                text="External Apply"
                className="bg-transparent border border-primary text-primary"
              />
            ) : (
              <Button text="Apply Now" />
            )}
          </div>
        </div>
      </div>
      <div className="flex item-start gap-2">
        <IconButton onClick={handleDelete}>
          <Delete />
        </IconButton>
        <IconButton onClick={handleEdit}>
          <Edit />
        </IconButton>
      </div>
    </div>
  );
};

type JobTileProps = {
  job: JOB_TYPE;
  handleDelete: () => void;
  handleEdit: () => void;
};

export default JobTile;
