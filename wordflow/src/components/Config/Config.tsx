import { Mode, ConfigProps } from "../../interface";

export function Config({ toggledConfig, setToggledConfig }: ConfigProps) {
  return (
    <nav className="absolute left-0 top-20 flex justify-evenly items-center text-xl h-12 w-full">
      <div className="flex flex-row justify-evenly items-center w-full max-w-96 bg-zinc-950 rounded-3xl">
        {(Object.keys(Mode) as Array<Mode>).map((value, index) => (
          <div
            key={index}
            onClick={() => setToggledConfig(value)}
            className={`p-3 w-full text-center cursor-pointer rounded-3xl ${
              toggledConfig === value
                ? "bg-stone-950 underline-offset-8 underline shadow-xl shadow-black"
                : "border-zinc-950"
            }`}
          >
            {value}
          </div>
        ))}
      </div>
    </nav>
  );
}
