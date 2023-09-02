const Button: React.FC<ButtonProps> = ({ onClick, text, type }) => {
  return (
    <button
      type={type}
      className="rounded-md bg-primary py-2 px-4 text-base font-medium text-fontWhite"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

type ButtonProps = {
  onClick?: React.MouseEventHandler<any>;
  text: string;
  type?: "button" | "submit" | "reset";
};

export default Button;
