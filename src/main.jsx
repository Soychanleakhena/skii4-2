import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Crop from "./pages/Crop";
import CropType from "./pages/CropType";
import "./index.css";



const router = createBrowserRouter([
  {
    path: "/",
   
    errorElement: <h1>Oop! Error!</h1>,
    children: [
  
      {
        path: "/crops",
        element: <Crop />,
      },

      { path: "/croptypes",
       element: <CropType/> }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
