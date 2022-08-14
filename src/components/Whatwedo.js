import React from "react";
import "./Whatwedo.css";
import truck1 from "../assests/truck1.jpg";

function Whatwedo() {
  return (
    <section id="section1">
      <div className="main-container">
        <h1>What we do</h1>
        <div className="upper-container">
          <h1>Logistics Services</h1>
          <p>
            We are leaders in providing logistics services with a set of cutting
            edge technologies and a team of experienced and professional
            dispatchers and drivers.
          </p>
        </div>
        <div className="lower-container">
          <div className="service-card left-card">
            {/* <img src={truck1} alt="truck-image1" /> */}
            <h1>FTL</h1>
            <h2>Full Truck Load</h2>
            <ul>
              <li>
                FTL is the more efficient road transportation option for large
                and/or heavy cargo shipments
              </li>
              <li>
                FTL shipping is optimal when transporting fragile products or
                those that are hazardous and deemed as high risk.
              </li>
              <li>
                FTL ensures further security by keeping the cargo in the same
                vehicle over the entire transport
              </li>
            </ul>
          </div>
          <div className="service-card middle-card">
            {/* <img src={truck1} alt="truck-image1" /> */}
            <h1>PTL</h1>
            <h2>Partial Truck Load</h2>
            <ul>
              <li>
                FTL is the more efficient road transportation option for large
                and/or heavy cargo shipments
              </li>
              <li>
                FTL shipping is optimal when transporting fragile products or
                those that are hazardous and deemed as high risk.
              </li>
              <li>
                FTL ensures further security by keeping the cargo in the same
                vehicle over the entire transport
              </li>
            </ul>
          </div>
          <div className="service-card right-card">
            {/* <img src={truck1} alt="truck-image1" /> */}
            <h1>LTL</h1>
            <h2>Less-than Truck Load</h2>
            <ul>
              <li>
                FTL is the more efficient road transportation option for large
                and/or heavy cargo shipments
              </li>
              <li>
                FTL shipping is optimal when transporting fragile products or
                those that are hazardous and deemed as high risk.
              </li>
              <li>
                FTL ensures further security by keeping the cargo in the same
                vehicle over the entire transport
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whatwedo;
