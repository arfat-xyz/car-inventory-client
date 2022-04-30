import React from "react";
import "./CarChemistry.css";
import { AiFillCar } from "react-icons/ai";
import { GiStabbedNote, GiAutoRepair, GiShieldBounces } from "react-icons/gi";
import { FaNewspaper, FaMoneyBillWave } from "react-icons/fa";
const CarChemistry = () => {
  return (
    <div className="carchemistry">
      <h1 className="section-header">All the ways to find car chemistry</h1>
      <p style={{ textAlign: "center" }}>
        We're your one-stop shop for buying and selling your car. Get matched to
        your perfect car, or sell one swiftly.
      </p>
      <div className="services">
        <div className="service">
          <div className="service-logo">
            <AiFillCar />
          </div>
          <div className="service-details">
            <h3>Shop</h3>
            <p>
              Find cars for sale, local dealers, and advice. Also, our
              price-badging and price-drop notifications keep you informed of
              potential deals.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="service-logo">
            <GiStabbedNote />
          </div>
          <div className="service-details">
            <h3>Research</h3>
            <p>
              View side-by-side comparisons, payment calculators, video reviews,
              and consumer reviews. These let you hear the good and the bad from
              current car owners.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="service-logo">
            <FaNewspaper />
          </div>
          <div className="service-details">
            <h3>News</h3>
            <p>
              Our very own Cars.com experts offer unbiased coverage of today's
              automotive landscape. Yes, there will be dad jokes.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="service-logo">
            <FaMoneyBillWave />
          </div>
          <div className="service-details">
            <h3>Sell</h3>
            <p>
              Stay up to date on the latest selling advice from our experts.
              Coming soon: Get your car appraised and sell to interested buyers
              in your area.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="service-logo">
            <GiAutoRepair />
          </div>
          <div className="service-details">
            <h3>Service & Repair</h3>
            <p>Watch do-it-yourself tutorials or find local repair options.</p>
          </div>
        </div>
        <div className="service">
          <div className="service-logo">
            <GiShieldBounces />
          </div>
          <div className="service-details">
            <h3>Certified Pre-Owned</h3>
            <p>
              Learn why you should consider a Certified Pre-Owned car, and get
              info on manufacturer programs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarChemistry;
