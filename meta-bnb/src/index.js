import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import "./styles/style.css";
import PlaceToStay from "./components/placeToStay";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/placetostay",
    element: <PlaceToStay />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
