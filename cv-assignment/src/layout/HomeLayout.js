import React from "react";
import { Layout } from "antd";
import HeaderContent from "../components/headerContent/HeaderContent";
import './layout.css';

const { Header, Content } = Layout;

const HomeLayout = () => (
  <Layout className='layout'>
    <Header>
      <HeaderContent />
    </Header>
    <Content>Content</Content>
  </Layout>
);

export default HomeLayout;
