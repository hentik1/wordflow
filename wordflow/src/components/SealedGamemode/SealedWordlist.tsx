import { SealedWordlistProps } from "../../interface";

export function SealedWordlist({ wordlist, input }: SealedWordlistProps) {
  return (
    <div className="flex items-center overflow-y-hidden flex-col flex-wrap max-h-32 absolute left-0 top-10 w-full">
      {wordlist.sort().map((value, i) => (
        <div
          key={value}
          className={`m-1 ${value === input ? "underline" : ""}`}
        >
          {wordlist[i]}
        </div>
      ))}
    </div>
  );
}
