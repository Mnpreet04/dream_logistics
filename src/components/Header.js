import React from "react";
import { Menu } from "antd";
import { Link } from "react-scroll";
import "./Header.css";
import circle from "../assests/image.png";
import { Button } from "antd";

function Header(props) {
  return (
    <div className="header-container" id="section0">
      <div className={props.className}>
        <div className="logo">
          <div className="header-font upper">DREAM</div>
          <hr className="horizontal-line"></hr>
          <div className="header-font lower">LOGISTICS</div>
        </div>
        <Menu className="menu-item-list" theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <Link
              to="section0"
              spy={true}
              smooth={true}
              // offset={-100}
              duration={1000}
            >
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link
              to="section1"
              spy={true}
              smooth={true}
              // offset={-100}
              duration={1000}
            >
              What we do?
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link
              to="section2"
              spy={true}
              smooth={true}
              // offset={-100}
              duration={2000}
            >
              About Us
            </Link>
          </Menu.Item>
        </Menu>
        <Button className="header-button" type="primary">
          Work with Us?
        </Button>
      </div>
      <div className="hero-text">
        <h1>
          Fast, <span> Reliable</span>
          <img className="circle-image" src={circle} />
        </h1>
        <h1>Delivering Success</h1>
        <h3>Emerging trucking company serving for building nations</h3>
      </div>
    </div>
  );
}

export default Header;
