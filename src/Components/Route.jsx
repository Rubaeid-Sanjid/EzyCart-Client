import { createBrowserRouter } from "react-router-dom";
import Registration from "../Pages/Registration";
import Main from "../Pages/Main";
import Login from "../Pages/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,
    },
    {
      path: "/registration",
      element: <Registration></Registration>,
    },
  {
    path: "/main",
    element: <Main></Main>,
  },
]);
