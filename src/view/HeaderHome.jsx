import React from "react";
import { Header } from "antd/es/layout/layout";
import style from "../assets/scss/header.module.scss";
import AlphaButton from "../components/anth/AlphaButton";
import { Link } from "react-router-dom";

const HeaderHome = () => {
  return (
    <>
      <Header className={style.header}>
        <div>logo</div>
        <div>
          <Link to={"signIn"}>
            <AlphaButton color={"primary"} label={"Sign In"} />
          </Link>
          <Link to={"signUp"}>
            <AlphaButton color={"primary"} label={"Sign Up"} />
          </Link>
        </div>
      </Header>
    </>
  );
};

export default HeaderHome;
