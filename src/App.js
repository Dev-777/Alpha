import React from "react";
import { Route } from "react-router";
import style from "./assets/scss/app.module.scss";
import routes from "./routes";
import TestOne from './test/TestOne'

const App = () => {
  return (
    <div className={style.app}>
      <TestOne/>
      {/*{routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          children={<route.page />}
        />
      ))}*/}
    </div>
  );
};

export default App;
