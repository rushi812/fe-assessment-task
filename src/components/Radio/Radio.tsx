const Radio: React.FC<RadioProps> = ({
  id,
  name,
  onChange,
  value,
  checked,
  label,
}) => {
  return (
    <div className="flex items-center gap-1">
      <input
        id={id}
        name={name}
        type="radio"
        className="h-5 w-5 border-[#D8D8D8] focus:ring-primary"
        onChange={onChange}
        value={value}
        checked={checked}
      />
      <label
        htmlFor={id}
        className="block text-sm font-normal text-fontPlaceholder leading-6"
      >
        {label}
      </label>
    </div>
  );
};

type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default Radio;
