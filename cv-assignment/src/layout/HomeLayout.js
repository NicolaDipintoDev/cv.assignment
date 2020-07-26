import React from "react";
import { Layout } from "antd";
import HeaderContent from "../components/HeaderContent";

const { Header, Content } = Layout;

const HomeLayout = () => (
  <Layout>
    <Header>
      <HeaderContent />
    </Header>
    <Content>Content</Content>
  </Layout>
);

export default HomeLayout;
