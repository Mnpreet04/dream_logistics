import React, { useRef, useState } from "react";

import { PhoneOutlined, MailOutlined, HomeOutlined } from "@ant-design/icons";
import { Button } from "antd";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactUs.css";

const ContactUs = (props) => {
  const form = useRef();

  /* Using State*/
  const [firstNameValue, setFirstName] = useState("");
  const [lastNameValue, setLastName] = useState("");
  const [emailValue, setEmailName] = useState("");
  const [messageValue, setMessageName] = useState("");
  /* Using State*/

  const notify = () => {
    toast("Email has been sent successfully");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_an7bgcs",
        "template_twlqr9n",
        form.current,
        "dRZ32g-tSTXiTN6eP"
      )
      .then(
        (result) => {
          setFirstName("");
          setLastName("");
          setEmailName("");
          setMessageName("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section ref={props.refProp} className="contact-us" id="section3">
      <div className="contact-us-heading">
        <h1>Contact Us</h1>
        <h2>We are there for you always.</h2>
      </div>

      <div className="contact-us-container">
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
          <form ref={form} onSubmit={sendEmail} className="contact-us-form">
            <div className="contact-us-row contact-us-row-first">
              <label htmlFor="firstName">Firstname:</label>
              <input
                type="text"
                name="user_name"
                id="firstName"
                value={firstNameValue}
                onChange={(event) => setFirstName(event.target.value)}
              ></input>

              <label htmlFor="lastName">Lastname:</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={lastNameValue}
                onChange={(event) => setLastName(event.target.value)}
              ></input>
            </div>
            <div className="contact-us-row contact-us-row-second">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="user_email"
                id="email"
                value={emailValue}
                onChange={(event) => setEmailName(event.target.value)}
              ></input>
            </div>

            <div className="contact-us-row contact-us-row-third">
              <label htmlFor="message">Message:</label>
              <textarea
                type="textarea"
                name="message"
                id="message"
                value={messageValue}
                onChange={(event) => setMessageName(event.target.value)}
              ></textarea>
            </div>

            <div className="contact-us-row contact-us-row-fourth">
              <input
                onClick={notify}
                value="Send"
                className="header-button-contact-us"
                type="submit"
              />
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
