import React from "react";
import "./Nav1.css";
import {
  forward,
  forwardimg,
  iphoneimg,
  iphonelogo,
} from "../../assets/images/nav1images/navimages";

const nav1 = () => {
  return (
    <div className="nav_container">
      <div className="Nav_contents">
        <ul>
          <li>
            <a href="#">
              Women Fashion <img src={forward} alt="" height={24} width={24} />
            </a>
          </li>
          <li>
            <a href="#">
              Men Fashion <img src={forward} alt="" height={24} width={24} />
            </a>
          </li>
          <li>
            <a href="#">Electronic</a>
          </li>
          <li>
            <a href="#">Home & LifeStyle</a>
          </li>
          <li>
            <a href="#">Medicine</a>
          </li>
          <li>
            <a href="#">Sports & Outdoor</a>
          </li>
          <li>
            <a href="#">Babys & Toys</a>
          </li>
          <li>
            <a href="#">Groceries & Pets</a>
          </li>
          <li>
            <a href="#">Health & Beauty</a>
          </li>
        </ul>
      </div>

      <div className="resources">
        <div className="resources_right">
          <div className="iphone">
            <img src={iphonelogo} alt="" />
            <span style={{ color: "#fff" }}>iphone 14 Series</span>
          </div>
          <div className="right_header">
            <h2 style={{ color: "white" }}> Up to 10% off Voucher</h2>
          </div>

          <div className="shopNow_path">
            <span style={{ color: "#fff" }}>Shop Now </span>
            <img src={forwardimg} alt="" width={24} height={24} />
          </div>
          
        <div class="loading-container">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot active"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        </div>
        <div className="resources_left">
          <div className="iphone_fullimg">
            <img src={iphoneimg} alt="" height={344} width={492} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default nav1;
