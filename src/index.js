import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SinglePage from "./component/SinglePage";
import { createBrowserRouter } from "react-router-dom";
import SinglePagePost from "./pages/SinglePagePost";
import Addpost from "./pages/form/Addpost";

const root = ReactDOM.createRoot(document.getElementById("root"));
const routes = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <SinglePage />,
        path: "SinglePage",
      },
      {
        element: <Home />,
        path: "",
      },
      {
        element: <SinglePagePost />,
        path: "post/:id",
      },
      {
        element: <Addpost />,
        path: "addpost",
      },
    ],
  },
]);
root.render(
  <RouterProvider router={routes}>
    <App />
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
