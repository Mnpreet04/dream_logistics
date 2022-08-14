import React from "react";
import { PhoneOutlined, MailOutlined, HomeOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <section className="contact-us" id="section3">
      <div className="contact-us-container">
        <h1>Contact Us</h1>
        <h2>We are there for you always.</h2>
        <div className="contact-us-upper-container">
          <h1 className="contact-us-heading">
            <span>
              <PhoneOutlined />
            </span>
            <span>(587)3785944</span>
          </h1>
          <h1 className="contact-us-heading">
            <span>
              <MailOutlined />
            </span>
            <span>operations@dreamlogistics.ca</span>
          </h1>
          <h1 className="contact-us-heading">
            <span>
              <HomeOutlined />
            </span>
            <span>2851 16ave laureal crossing nw T6T0Z6 Edmonton Alberta</span>
          </h1>
        </div>
        <div className="contact-us-form-container">
          <form className="contact-us-form">
            <div className="contact-us-row contact-us-row-first">
              <label>Firstname:</label>
              <input type="text"></input>

              <label>Lastname:</label>
              <input type="text"></input>
            </div>
            <div className="contact-us-row contact-us-row-second">
              <label>Email:</label>
              <input type="text"></input>
            </div>

            <div className="contact-us-row contact-us-row-third">
              <label>Message:</label>
              <textarea type="textarea"></textarea>
            </div>

            <div className="contact-us-row contact-us-row-fourth">
              <Button className="header-button-contact-us" type="primary">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
