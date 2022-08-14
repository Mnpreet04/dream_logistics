import { Layout } from "antd";
import { useState, useEffect } from "react";
import React from "react";
import AppHeader from "./components/Header";
import Hero from "./components/Hero";
import Whatwedo from "./components/Whatwedo";
import AboutUs from "./components/AboutUs";
import "antd/dist/antd.min.css";
import "./App.css";
const { Header, Footer } = Layout;

const App = () => {
  const [headerClass, setHeaderClass] = useState(false);

  const changeBackground = () => {
    console.log(headerClass);
    if (window.scrollY > 650) {
      setHeaderClass(true);
    } else {
      setHeaderClass(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <Layout className="mainLayout">
      {/* <Header>{}</Header> */}
      <AppHeader className={headerClass ? "header active" : "header"} />
      <Hero />
      <Whatwedo />
      <AboutUs />
    </Layout>
    // <Footer style={{ textAlign: "center" }}>Dream Logistics ©2022 </Footer>
  );
};

export default App;
