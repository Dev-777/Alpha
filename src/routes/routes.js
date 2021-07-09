import Home from "../pages/Home";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";

export const routes = [
  {
    path: "/home",
    exact: true,
    page: () => <Home />,
  },
  {
    path: "/signIn",
    exact: true,
    page: () => <SignIn />,
  },
  {
    path: "/",
    exact: true,
    page: () => <SignUp />,
  },
];
