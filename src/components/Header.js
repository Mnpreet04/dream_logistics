import React from "react";
import { Menu } from "antd";
import "./Header.css";
import { Button } from "antd";

function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <div className="logo">
          <div className="header-font upper">DREAM</div>
          <hr className="horizontal-line"></hr>
          <div className="header-font lower">LOGISTICS</div>
        </div>
        <Menu className="menu-item-list" theme="dark" mode="horizontal">
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Who we are?</Menu.Item>
          <Menu.Item key="3">What do we do?</Menu.Item>
        </Menu>
        <Button className="header-button" type="primary">
          Work with Us?
        </Button>
      </div>
    </div>
  );
}

export default Header;
