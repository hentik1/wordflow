import { NavLink } from "react-router-dom";
import { optionsData } from "../../data";

export function Header() {
  return (
    <header className="header">
      {optionsData.map((option) => (
        <NavLink
          className={({ isActive }) => {
            return isActive
              ? "scale-150 relative flex items-center justify-centner"
              : "border-primary-foreground";
          }}
          key={option.key}
          to={`/wordflow/${option.key}`}
        >
          {option.icon}
        </NavLink>
      ))}
    </header>
  );
}
