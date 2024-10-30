import { optionsData } from "../data";
import CrossIcon from "../assets/CrossIcon";
import { HeaderProps } from "../interface";

function Header({ toggledOption, setToggledOption }: HeaderProps) {
  const handleOption = (index: number) => {
    setToggledOption((prev) => (prev === index ? null : index));
  };

  return (
    <div className="absolute left-0 top-0 flex justify-center items-center bg-zinc-950 h-16 w-full">
      {optionsData.map((option, index) => (
        <div
          tabIndex={0}
          onClick={() => handleOption(index)}
          key={option.key}
          className={option.style}
        >
          {toggledOption === index ? <CrossIcon /> : option.icon}
        </div>
      ))}
    </div>
  );
}

export default Header;
