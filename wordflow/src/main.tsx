import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Settings from "./components/Header/Settings.tsx";
import Info from "./components/Header/Info.tsx";
import Stats from "./components/Header/Stats.tsx";
import Account from "./components/Header/Account.tsx";
import { SealedGame } from "./components/SealedGame.tsx";
import LinkedGame from "./components/LinkedGame.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 not found</div>,
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
    element: <SealedGame />,
  },
  {
    path: "linked",
    element: <LinkedGame />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
