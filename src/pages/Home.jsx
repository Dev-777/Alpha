import React from "react";
import AlphaButton from "../components/anth/AlphaButton";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import HeaderHome from "../view/HeaderHome";

const Home = () => {
  return (
    <>
      <Layout>
        <HeaderHome />
        <Layout>
          <Sider>left sidebar</Sider>
          <Content>main content</Content>
          <Sider>right sidebar</Sider>
        </Layout>
        <Footer>footer</Footer>
      </Layout>
    </>
  );
};

export default Home;
