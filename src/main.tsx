import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./container/Home";
import TrendingList from "./container/TrendingList";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trending",
        element: <TrendingList />,
      },
    ],
    // errorElement: <Error />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
