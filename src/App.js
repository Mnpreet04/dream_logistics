import { Layout } from "antd";
import { useState, useEffect, useRef } from "react";
import React from "react";
import AppHeader from "./components/Header";

import Whatwedo from "./components/Whatwedo";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import "antd/dist/antd.min.css";
import "./App.css";
const { Header, Footer } = Layout;

const App = () => {
  const myRef = useRef(null);

  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth", block: "center" });

  const [headerClass, setHeaderClass] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 500) {
      setHeaderClass(true);
    } else {
      setHeaderClass(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <Layout className="mainLayout">
      {/* <Header>{}</Header> */}
      <AppHeader
        className={headerClass ? "header active" : "header"}
        scrollHandler={executeScroll}
      />
      {/* <Hero /> */}
      <Whatwedo />
      <AboutUs />
      <ContactUs refProp={myRef} />
      <Footer style={{ textAlign: "center" }}>Dream Logistics ©2022 </Footer>
    </Layout>
  );
};

export default App;
