import React from "react";
import "./Header.css";
import { faCartShopping, faDroplet, faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Header = () => {
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const handleMouseEnter = () => {
        setIsLanguageDropdownOpen(true);
      };

      const handleMouseLeave = () => {
        setIsLanguageDropdownOpen(false);
      };
  return (
    <div className="header_container">
      <div className="header_upper">
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span>ShopNow</span></p>

        <div className="selectLanguage"   
                onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
            <span>English</span>
            <FontAwesomeIcon icon={faDroplet} />
            {isLanguageDropdownOpen && (
            <ul className="language_dropdown">
              <li>English</li>
              <li>Spanish</li>
              <li>French</li>
              <li>German</li>
            </ul>
          )}
        </div>

      </div>

      <div className="header_lower">
        <div className="header_lower_container">
          <div className="header_lower_left">
            <h1>Exclusive</h1>
          </div>

          <div className="header_lower_center">
            <ul>
              <li>Home</li>
              <li>Contact</li>
              <li>Services</li>
              <li>About</li>
              <li>sign Up</li>
            </ul>
          </div>

          <div className="header_lower_right">
            <div className="search_item">
              <input type="search" />
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <FontAwesomeIcon icon={faHeart} style={{color:"gray"}}/>
            <FontAwesomeIcon icon={faCartShopping}/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
