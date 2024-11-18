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
    path: "/wordflow/",
    element: <App />,
    errorElement: (
      <div className="flex flex-col text-3xl">
        404 not found
        <Link className="underline" to="/wordflow">
          Main page
        </Link>
      </div>
    ),
  },
  {
    path: "/wordflow/config",
    element: <App />,
    errorElement: (
      <div className="flex flex-col text-3xl">
        404 not found
        <Link className="underline" to="/wordflow/">
          Main page
        </Link>
      </div>
    ),
  },
  {
    path: "/wordflow/settings",
    element: <Settings />,
  },
  {
    path: "/wordflow/info",
    element: <Info />,
  },
  {
    path: "/wordflow/stats",
    element: <Stats />,
  },
  {
    path: "/wordflow/account",
    element: <Account />,
  },
  {
    path: "/wordflow/sealed",
    element: <SealedGamemode />,
  },
  {
    path: "/wordflow/linked",
    element: <LinkedGamemode />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
