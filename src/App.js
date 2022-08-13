import { Layout } from "antd";
import React from "react";
import AppHeader from "./components/Header";
import "antd/dist/antd.min.css";
import "./App.css";
const { Header, Footer } = Layout;

const App = () => (
  <Layout className="mainLayout">
    <Header>
      <AppHeader />
    </Header>

    <Footer style={{ textAlign: "center" }}>Dream Logistics ©2022 </Footer>
  </Layout>
);

export default App;
