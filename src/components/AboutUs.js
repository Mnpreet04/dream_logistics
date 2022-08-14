import React from "react";
import shippingImage from "../assests/20945985.jpg";
import "./AboutUs.css";
import Customer from "../assests/MyCustomer.jpg";
import MyApril from "../assests/MyApril10.jpg";

function AboutUs() {
  return (
    <section className="about-us" id="section2">
      <div className="upper-cont">
        <h1>About Us</h1>
        <p>
          We are an emerging logistics company working through US and Canada.
        </p>
      </div>
      <div className="lower-cont">
        <div className="card first-card">
          <div className="content">
            <h1>CUSTOM TRANSPORTATION SOLUTIONS</h1>
            <p>
              We have a proven track record in delivering inbound and outbound
              freight reliably while offering exceptional services that comply
              with the highest industry standards.
            </p>
          </div>
          <div className="image-class">
            <img src={shippingImage} alt="ship-image" />
          </div>
        </div>
        <div className="card first-card">
          <div className="content">
            <h1>END-TO-END SUPPLY CHAIN SOLUTIONS</h1>
            <p>
              We focus on customer service and finding solutions for customers’
              problems in their logistics and supply-chain and offering a
              tailor-made solution.
            </p>
          </div>
          <div className="image-class">
            <img src={Customer} alt="ship-image" />
          </div>
        </div>
        <div className="card first-card">
          <div className="content">
            <h1>24/7 CUSTOMER SERVICE</h1>
            <p>
              Our clients can rely on us to pick up on time, deliver on time and
              comply with the standards of safety.
            </p>
          </div>
          <div className="image-class">
            <img src={MyApril} alt="ship-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
