import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routers from "./Routers/Routers.jsx";
import AuthProviders from "./Context/AuthProviders.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={Routers}></RouterProvider>
    </AuthProviders>
  </React.StrictMode>
);
