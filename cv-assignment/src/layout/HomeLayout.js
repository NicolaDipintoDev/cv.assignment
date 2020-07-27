import React, { useState } from "react";
import { Layout } from "antd";
import HeaderContent from "../components/headerContent/HeaderContent";
import "./layout.css";
import Container from "../components/Content/container/Container";

const { Header, Content } = Layout;

const HomeLayout = () => {
  const [logged, setLogged] = useState(false);
  return (
    <Layout className="layout">
      <Header style={{ height: "auto" }}>
        <HeaderContent setLogged={setLogged} logged={logged}/>
      </Header>
      <Content style={{ backgroundColor: "white" }}>
        <Container logged={logged} />
      </Content>
    </Layout>
  );
};

export default HomeLayout;
