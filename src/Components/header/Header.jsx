import React from "react";
import "./Header.css";
import {
  faCartShopping,
  faDroplet,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Header = () => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [searchQuery, setSearchQuery] = useState("");

  const handleMouseEnter = () => {
    setIsLanguageDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsLanguageDropdownOpen(false);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false); // Close dropdown after selection
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    } else {
      alert("Please enter a search query");
    }
  };

  return (
    <div className="header_container">
      <div className="header_upper">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span>ShopNow</span>
        </p>

        <div
          className="selectLanguage"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span>{selectedLanguage}</span>
          <FontAwesomeIcon icon={faDroplet} />
          {isLanguageDropdownOpen && (
            <ul className="language_dropdown">
              <li onClick={() => handleLanguageChange("English")}>English</li>
              <li onClick={() => handleLanguageChange("Spanish")}>Spanish</li>
              <li onClick={() => handleLanguageChange("French")}>French</li>
              <li onClick={() => handleLanguageChange("German")}>German</li>
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
              <li>Sign Up</li>
            </ul>
          </div>

          <div className="header_lower_right">
            <div className="search_item">
            <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
              />
              <button onClick={handleSearch} style={{ background: "none", border: "none", cursor: "pointer" }}>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
            <FontAwesomeIcon icon={faHeart} style={{ color: "gray" }} />
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
