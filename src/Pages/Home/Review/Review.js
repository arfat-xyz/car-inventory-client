import React from "react";
import "./Review.css";
const Review = () => {
  return (
    <div>
      <h1 className="section-header">Our expart's reviews</h1>
      <div className="reviews">
        <div className="review">
          <img
            className="car-img"
            src="https://i.ibb.co/HXFjYds/Rolls-Royce-Ghost.jpg"
            alt=""
          />
          <h5>2022 Hyundai Ioniq 5 Review: The EV We’ve Been Waiting For</h5>

          <div className="reviewer">
            <img
              src="https://images.cars.com/cldstatic/wp-content/uploads/joe-wiesenfelder-headshot-square-purple.jpg"
              alt=""
            />
            <div>
              <p>By Joe Wiesenfelder</p>
              <p>Executive Editor</p>
            </div>
          </div>
        </div>
        <div className="review">
          <img
            className="car-img"
            src="https://i.ibb.co/NjWbNKq/tesla-model3.jpg"
            alt=""
          />
          <h5>2022 Kia EV6 Review: Doing It Better Than Most</h5>

          <div className="reviewer">
            <img
              src="https://images.cars.com/cldstatic/wp-content/uploads/aaron-bragman-headshot-square-purple.jpg"
              alt=""
            />
            <div>
              <p>By Aaron Bragman</p>
              <p>Detroit Bureau Chief</p>
            </div>
          </div>
        </div>
        <div className="review">
          <img
            className="car-img"
            src="https://i.ibb.co/g3MyRLM/Rolls-Royce-Phantom.jpg"
            alt=""
          />
          <h5>2023 Toyota bZ4X Review: Normal Toyota, Natural Step Into EVs</h5>

          <div className="reviewer">
            <img
              src="https://images.cars.com/cldstatic/wp-content/uploads/joe-bruzek-headshot-purple-square.jpg"
              alt=""
            />
            <div>
              <p>By Joe Bruzek</p>
              <p>Managing Editor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
