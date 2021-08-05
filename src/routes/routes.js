import Home from "../pages/Home";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import TestOne from "../test/TestOne";
import SignUpSecondStep from "../components/anth/SignUpSecondStep";

export const routes = [
  {
    path: "/",
    exact: true,
    page: () => <Home />,
  },
  {
    path: "/signIn",
    exact: true,
    page: () => <SignIn />,
  },
  {
    path: "/signUp",
    exact: true,
    page: () => <SignUp />,
  },
  {
    path: "/signUpSecond",
    exact: true,
    page: () => <SignUpSecondStep />,
  },
  {
    path: "/test",
    exact: true,
    page: () => <TestOne />,
  },
];
