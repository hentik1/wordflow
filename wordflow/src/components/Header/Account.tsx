import { Header } from "./Header";

function Account() {
  return (
    <>
      <Header />
      <div className="absolute left-0 top-16 w-full h-[calc(100%-64px)] z-50 bg-neutral-900 overflow-hidden">
        Account
      </div>
    </>
  );
}

export default Account;
