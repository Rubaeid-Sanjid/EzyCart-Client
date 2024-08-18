import { createBrowserRouter } from "react-router-dom";
import Registration from "../Pages/Registration";
import Main from "../Pages/Main";

export const router = createBrowserRouter([
  {
    path: "/main",
    element: <Main></Main>,
  },
//   {
//     path: "/",
//     element: <Login></Login>,
//   },
  {
    path: "/",
    element: <Registration></Registration>,
  },
]);
