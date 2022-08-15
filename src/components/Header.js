import React from "react";
import { Menu } from "antd";
import { Link } from "react-scroll";
import "./Header.css";
import circle from "../assests/image.png";
import { Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { LINKS } from "./SectionsArray";

function Header(props) {
  return (
    <div className="header-container" id="section0">
      <div className={props.className}>
        <div className="logo">
          <div className="header-font upper">DREAM</div>
          <hr className="horizontal-line"></hr>
          <div className="header-font lower">LOGISTICS</div>
        </div>

        <Menu className="menu-item-list active" theme="dark" mode="horizontal">
          {LINKS.map((link) => {
            return (
              <Menu.Item key={link.id}>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                >
                  {link.text}
                </Link>
              </Menu.Item>
            );
          })}

          {/* <Menu.Item key="1">
            <Link
              to="section0"
              spy={true}
              smooth={true}
              //offset={-100}
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
              //offset={-100}
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
          </Menu.Item> */}
        </Menu>

        <Menu className="mobile-menu-list" mode="horizontal">
          <Menu.SubMenu key="SubMenu" icon={<MenuOutlined />}>
            {LINKS.map((link) => {
              return (
                <Menu.Item key={link.id}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    //offset={-100}
                    duration={1000}
                  >
                    {link.text}
                  </Link>
                </Menu.Item>
              );
            })}
            {/* <Menu.Item key="1">
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
            </Menu.Item> */}
          </Menu.SubMenu>
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

        <Button className="header-contact-button" type="primary">
          CONTACT US
        </Button>
      </div>
    </div>
  );
}

export default Header;
