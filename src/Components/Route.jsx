import { createBrowserRouter } from "react-router-dom";
import Registration from "../Pages/Registration";
import Main from "../Pages/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
//   {
//     path: "/",
//     element: <Login></Login>,
//   },
  {
    path: "/registration",
    element: <Registration></Registration>,
  },
]);
