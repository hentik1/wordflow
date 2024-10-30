import { optionsData } from "../data";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="absolute left-0 top-0 flex justify-center items-center bg-zinc-950 h-16 w-full">
      {optionsData.map((option) => (
        <Link className={option.style} key={option.key} to={`/${option.key}`}>
          {option.icon}
        </Link>
      ))}
    </div>
  );
}

export default Header;
