import React from "react";
import { Layout } from "antd";
import HeaderContent from "../components/headerContent/HeaderContent";
import "./layout.css";
import Container from "../components/Content/container/Container";

const { Header, Content } = Layout;

const HomeLayout = () => (
  <Layout className="layout">
    <Header style={{ height: "auto" }}>
      <HeaderContent />
    </Header>
    <Content>
      <Container />
    </Content>
  </Layout>
);

export default HomeLayout;
