export const getExperienceText = (experience?: {
  min: string;
  max: string;
}) => {
  if (!experience) return undefined;
  let str = "Experience ";
  if (experience.min && experience.max)
    str += `(${experience.min} - ${experience.max} years)`;
  if (experience.min && !experience.max) str += `(${experience.min} years)`;
  if (!experience.min && experience.max) str += `(${experience.max} years)`;
  return str;
};

export const getSalaryText = (salary?: { min: string; max: string }) => {
  if (!salary) return undefined;
  let str = "INR (₹) ";
  if (salary.min && salary.max) str += `${salary.min} - ${salary.max} / Month`;
  if (salary.min && !salary.max) str += `${salary.min} / Month`;
  if (!salary.min && salary.max) str += `${salary.max} / Month`;
  return str;
};
