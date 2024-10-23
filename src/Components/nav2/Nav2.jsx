import React from "react";
import "./Nav2.css";
import {
  corner,
  nextbtn,
  prevbtn,
} from "../../assets/images/nav1images/navimages";
import Countdown from "react-countdown";
import {
  chair,
  keyboard,
  monitor,
  playstation,
  stars,
} from "../../assets/images/nav1images/products/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";

const Nav2 = () => {
  const Completion = () => <span>Sale Ended!</span>;
  return (
    <div className="nav2_container">
      <div className="nav2_upper">
        <div className="corner_contents">
          <img src={corner} alt="" height={40} width={20} />
          <span>Today’s</span>
        </div>

        <div className="flashsales">
          <h2>Flash Sales</h2>
          <Countdown
            date={Date.now() + 24 * 60 * 60 * 1000} // 24 hours countdown
            renderer={({ days, hours, minutes, seconds, completed }) => {
              if (completed) {
                return <Completion />;
              } else {
                return (
                  <div className="countdown_wrapper">
                    <div className="countdown_item">
                      <span className="label">Days</span>
                      <span className="number">{days}</span>
                    </div>
                    <span className="separator">:</span>
                    <div className="countdown_item">
                      <span className="label">Hours</span>
                      <span className="number">{hours}</span>
                    </div>
                    <span className="separator">:</span>
                    <div className="countdown_item">
                      <span className="label">Minutes</span>
                      <span className="number">{minutes}</span>
                    </div>
                    <span className="separator">:</span>
                    <div className="countdown_item">
                      <span className="label">Seconds</span>
                      <span className="number">{seconds}</span>
                    </div>
                  </div>
                );
              }
            }}
          />

          <div className="directions_btns">
            <img src={prevbtn} alt="" width={46} height={46} />
            <img src={nextbtn} alt="" width={46} height={46} />
          </div>
        </div>
      </div>

      <div className="nav2_lower">
        <div className="product_containers">
          <div className="prices">
            <span>-40%</span>
          </div>
          <div className="ps_img">
            <img src={playstation} alt="" width={180} height={180} />
          </div>
          <div className="feedback_icons">
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faEye} />
          </div>
          <div className="product1_details">
            <h3>HAVIT HV-G92 Gamepad</h3>
            <p>
              $120 <span>$160</span>
            </p>
            <img src={stars} alt="" width={100} height={20} />
            (88)
          </div>
        </div>
        <div className="product_containers">
          <div className="prices">
            <span>-40%</span>
          </div>
          <div className="ps_img">
            <img src={keyboard} alt="" width={190} height={180} />
          </div>
          <div className="feedback_icons">
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faEye} />
          </div>
          <div className="product1_details">
            <h3>AK-900 Wired Keyboard</h3>
            <p>
              $960 <span>$1160</span>
            </p>
            <img src={stars} alt="" width={100} height={20} />
            (75)
          </div>
        </div>

        <div className="product_containers">
          <div className="prices">
            <span>-40%</span>
          </div>
          <div className="ps_img">
            <img src={keyboard} alt="" width={190} height={180} />
          </div>
          <div className="feedback_icons">
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faEye} />
          </div>
          <div className="product1_details">
            <h3>IPS LCD Gaming Monitor</h3>
            <p>
              $370 <span>$460</span>
            </p>
            <img src={stars} alt="" width={100} height={20} />
            (99)
          </div>
        </div>

        <div className="product_containers">
          <div className="prices">
            <span>-40%</span>
          </div>
          <div className="ps_img">
            <img src={monitor} alt="" width={190} height={180} />
          </div>
          <div className="feedback_icons">
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faEye} />
          </div>
          <div className="product1_details">
            <h3>IPS LCD Gaming Monitor</h3>
            <p>
              $370 <span>$460</span>
            </p>
            <img src={stars} alt="" width={100} height={20} />
            (88)
          </div>
        </div>

        <div className="product_containers">
          <div className="prices">
            <span>-40%</span>
          </div>
          <div className="ps_img">
            <img src={chair} alt="" height={180} width={107} />
          </div>
          <div className="feedback_icons">
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faEye} />
          </div>
          <div className="product1_details">
            <h3>S-Series Comfort Chair </h3>
            <p>
              $375 <span>$400</span>
            </p>
            <img src={stars} alt="" width={100} height={20} />
            (99)
          </div>

        </div>
        <div className="product_containers">
          <div className="prices">
            <span>-40%</span>
          </div>
          <div className="ps_img">
            <img src={chair} alt="" height={180} width={107} />
          </div>
          <div className="feedback_icons">
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faEye} />
          </div>
          <div className="product1_details">
            <h3>S-Series Comfort Chair </h3>
            <p>
              $375 <span>$400</span>
            </p>
            <img src={stars} alt="" width={100} height={20} />
            (88)
          </div>
        </div>
        <div className="product_containers">
          <div className="prices">
            <span>-40%</span>
          </div>
          <div className="ps_img">
            <img src={chair} alt="" height={180} width={107} />
          </div>
          <div className="feedback_icons">
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faEye} />
          </div>
          <div className="product1_details">
            <h3>S-Series Comfort Chair </h3>
            <p>
              $375 <span>$400</span>
            </p>
            <img src={stars} alt="" width={100} height={20} />
            (99)
          </div>
        </div>
      </div>


        

      <div className="bottom_button">
        <a href="#">View All Products</a>
      </div>
    </div>
  );
};

export default Nav2;
