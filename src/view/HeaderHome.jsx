import React from "react";
import { Header } from "antd/es/layout/layout";
import style from "../assets/scss/header.module.scss";
import AlphaButton from "../components/anth/AlphaButton";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import AlphaNav from "../components/header/AlphaNav";

const HeaderHome = () => {
  return (
    <>
      <Header className={style.header}>
        <Logo size={50} />
        <AlphaNav />
        <div>
          <Link to={"signIn"} style={{ marginRight: 20 }}>
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
