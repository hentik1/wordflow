import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import "./index.css";
import { Settings } from "./components/Header/Settings.tsx";
import { Info } from "./components/Header/Info.tsx";
import { Stats } from "./components/Header/Stats.tsx";
import { Account } from "./components/Header/Account.tsx";
import { LinkedGamemode } from "./components/LinkedGamemode/LinkedGamemode.tsx";
import { SealedGamemode } from "./components/SealedGamemode/SealedGamemode.tsx";
import { App } from "./components/App.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <div className="flex flex-col text-3xl">
        404 not found
        <Link className="underline" to="/">
          Main page
        </Link>
      </div>
    ),
  },
  {
    path: "settings",
    element: <Settings />,
  },
  {
    path: "info",
    element: <Info />,
  },
  {
    path: "stats",
    element: <Stats />,
  },
  {
    path: "account",
    element: <Account />,
  },
  {
    path: "sealed",
    element: <SealedGamemode />,
  },
  {
    path: "linked",
    element: <LinkedGamemode />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
