import React from "react";
import { Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import HeaderHome from "../view/HeaderHome";

const Home = () => {
  return (
    <>
      <Layout>
        <HeaderHome />
        <Layout style={{ height: 800 }}>
          <Sider style={{ background: "red" }}>left sidebar</Sider>
          <Content>main content</Content>
          <Sider style={{ background: "green" }}>right sidebar</Sider>
        </Layout>
        <Footer>footer</Footer>
      </Layout>
    </>
  );
};

export default Home;
