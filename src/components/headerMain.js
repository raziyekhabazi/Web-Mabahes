import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../images/header_icon.png";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header>
      <div className="home_big home_header_flex">
        <div>
          <Link to="/reserve">
            <div className="home_button_style">
              <p className="home_header_text_style home_button_text_position2">
                رزرو میز
              </p>
            </div>
          </Link>
          <Link to="/reserve">
            <div className="home_button_hover">
              <p className="home_header_text_style home_button_text_position1">
                رزرو میز
              </p>
            </div>
          </Link>
        </div>
        <div className="home_header_menu_flex">
          <Link
            to="/"
            className="home_header_menu_flex_item home_header_text_style"
          >
            صفحه نخست
          </Link>
          <Link
            to="/about_us"
            className="home_header_menu_flex_item home_header_text_style"
          >
            درباره ما
          </Link>
          <Link
            to="/our_menu"
            className="home_header_menu_flex_item home_header_text_style"
          >
            منوی رستوران
          </Link>
          <Link
            to="/gallery"
            className="home_header_menu_flex_item home_header_text_style"
          >
            گالری
          </Link>
          <Link
            to="/contact_us"
            className="home_header_menu_flex_item home_header_text_style"
          >
            تماس با ما
          </Link>
        </div>
        <div className="home_header_name_flex">
          <p className="home_header_text_style">کافه رستوران رایکا</p>
          <img src={icon} className="home_header_icon" alt="header_icon" />
        </div>
      </div>
      <div className="home_topnav home_small ">
        {openMenu && (
          <div id="menu">
            <Link to="/" target="_blank" className="a-nav">
              <p className="home_menu_text">صفحه نخست</p>
            </Link>
            <Link to="/about_us" target="_blank" className="a-nav">
              <p className="home_menu_text" style={{ marginTop: "80px" }}>
                درباره ی ما
              </p>
            </Link>
            <Link to="/our_menu" target="_blank" className="a-nav">
              <p className="home_menu_text" style={{ marginTop: "110px" }}>
                منوی رستوران
              </p>
            </Link>
            <Link to="/gallery" target="_blank" className="a-nav">
              <p className="home_menu_text" style={{ marginTop: "140px" }}>
                گالری
              </p>
            </Link>
            <Link to="/contact_us" target="_blank" className="a-nav">
              <p className="home_menu_text" style={{ marginTop: "170px" }}>
                تماس با ما
              </p>
            </Link>
            <div>
              <Link to="/reserve">
                <div
                  className="home_button_style"
                  style={{ marginTop: "200px" }}
                >
                  <p className="home_header_text_style home_button_text_position2">
                    رزرو میز
                  </p>
                </div>
              </Link>
              <Link to="/reserve">
                <div
                  className="home_button_hover"
                  style={{ marginTop: "200px" }}
                >
                  <p className="home_header_text_style home_button_text_position1">
                    رزرو میز
                  </p>
                </div>
              </Link>
            </div>
          </div>
        )}
        <a className="icon a-nav " onClick={() => setOpenMenu((s) => !s)}>
          <i className="fa fa-bars"></i>
        </a>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
