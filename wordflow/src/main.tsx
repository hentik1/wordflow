import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Settings from "./components/Settings.tsx";
import Info from "./components/Info.tsx";
import Stats from "./components/Stats.tsx";
import Account from "./components/Account.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 not found</div>,
  },
  {
    path: "/Settings",
    element: <Settings />,
  },
  {
    path: "/Info",
    element: <Info />,
  },
  {
    path: "/Stats",
    element: <Stats />,
  },
  {
    path: "/Account",
    element: <Account />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
