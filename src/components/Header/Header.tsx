import Button from "../Button";

const Header: React.FC<HeaderProps> = ({ onClick }) => {
  return (
    <header className="p-4 shadow shadow-black/10 dark:shadow-black/40">
      <Button onClick={onClick} text="Create Job" />
    </header>
  );
};

type HeaderProps = {
  onClick: () => void;
};

export default Header;
