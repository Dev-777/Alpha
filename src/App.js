import React from "react";
import { Route } from "react-router";
import SignIn from "./pages/auth/SignIn";
import Home from "./pages/Home";
import style from "./assets/scss/app.module.scss";
import SignUp from "./pages/auth/SignUp";

const App = () => {
  return (
    <div className={style.app}>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/signIn"} component={SignIn} />
      <Route exact path={"/signUp"} component={SignUp} />
    </div>
  );
};

export default App;
