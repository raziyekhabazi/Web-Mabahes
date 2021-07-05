import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import icon from "../images/header_icon.png";
import HeaderMain from "./headerMain";

const Header = () => {
  const { pathname } = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      {pathname !== "/" ? (
        <header>
          <div class="big header_flex">
            <div>
              <Link to="/reserve">
                <div class="button_style">
                  <p class="header_text_style button_text_position2">
                    رزرو میز
                  </p>
                </div>
              </Link>
              <Link to="/reserve">
                <div class="button_hover" style={{ marginTop: "20px" }}>
                  <p class="header_text_style button_text_position1">
                    رزرو میز
                  </p>
                </div>
              </Link>
            </div>
            <div class="header_menu_flex">
              <Link to="/" class="header_menu_flex_item header_text_style">
                صفحه نخست
              </Link>
              <Link
                to="/about_us"
                class="header_menu_flex_item header_text_style"
              >
                درباره ما
              </Link>
              <Link
                to="/our_menu"
                class="header_menu_flex_item header_text_style"
              >
                منوی رستوران
              </Link>
              <Link
                to="/gallery"
                class="header_menu_flex_item header_text_style"
              >
                گالری
              </Link>
              <Link
                to="/contact_us"
                class="header_menu_flex_item header_text_style"
              >
                تماس با ما
              </Link>
            </div>
            <div class="header_name_flex">
              <p class="header_text_style">کافه رستوران رایکا</p>
              <img src={icon} class="header_icon" alt="icon" />
            </div>
          </div>

          <div class="topnav_small ">
            <div class="topnav small ">
              {openMenu ? (
                <div id="menu">
                  <Link to="/" target="_blank" class="a-nav">
                    <p class="menu_text">صفحه نخست</p>
                  </Link>
                  <Link to="/about_us" target="_blank" class="a-nav">
                    <p class="menu_text" style={{ marginTop: "80px" }}>
                      درباره ی ما
                    </p>
                  </Link>
                  <Link to="/our_menu" target="_blank" class="a-nav">
                    <p class="menu_text" style={{ marginTop: "110px" }}>
                      منوی رستوران
                    </p>
                  </Link>
                  <Link to="/gallery" target="_blank" class="a-nav">
                    <p class="menu_text" style={{ marginTop: "140px" }}>
                      گالری
                    </p>
                  </Link>
                  <Link to="/contact_us" target="_blank" class="a-nav">
                    <p class="menu_text" style={{ marginTop: "170px" }}>
                      تماس با ما
                    </p>
                  </Link>
                  <div>
                    <Link to="/reserve">
                      <div class="button_style" style={{ marginTop: "200px" }}>
                        <p class="header_text_style button_text_position2">
                          رزرو میز
                        </p>
                      </div>
                    </Link>
                    <Link to="/reserve">
                      <div class="button_hover" style={{ marginTop: "200px" }}>
                        <p class="header_text_style_all button_text_position1">
                          رزرو میز
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              ) : (
                <></>
              )}
              <a class="icon a-nav " onClick={() => setOpenMenu((s) => !s)}>
                <i class="fa fa-bars"></i>
              </a>
            </div>
            <div class="topnav_name_flex ">
              <p class="header_text_style_all">کافه رستوران رایکا</p>
              <img src={icon} class="header_icon" alt="icon" />
            </div>
          </div>
        </header>
      ) : (
        <HeaderMain />
      )}
    </>
  );
};

export default Header;
