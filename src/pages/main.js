import React, { useEffect } from "react";
import bg1 from "../images/bg1.jpg";
import bg2 from "../images/bg2.jpg";
import bg3 from "../images/bg3.jpg";

const Main = () => {
  useEffect(() => {
    let i = 0;

    const body = document.body;

    body.style.transition = " 0.5s ";
    body.style.transitionTimingFunction = "linear";
    body.style.backgroundImage = `url(${bg1})`;
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "100% 100%";

    const background = () => {
      i++;
      if (i % 3 === 0) {
        body.style.backgroundImage = `url(${bg1})`;
      }

      if (i % 3 === 1) {
        body.style.backgroundImage = `url(${bg2})`;
      }

      if (i % 3 === 2) {
        body.style.backgroundImage = `url(${bg3})`;
      }
    };

    let interval = setInterval(background, 5000);

    return () => {
      body.style.backgroundRepeat = "repeat";
      body.style.backgroundSize = "unset";
      body.style.transition = "unset";
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="home_line big"></div>
      <div className="home_main_big_flex">
        <div
          className="home_main_text_style"
          align="center"
          style={{ fontSize: "24px" }}
        >
          خوش آمدید...
        </div>
        <div
          className="home_main_text_style"
          align="center"
          style={{ fontSize: "43px" }}
        >
          کافه رستوران رایکا
        </div>
        <div
          className="home_main_text_style "
          align="center"
          style={{ fontSize: "20px" }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
        </div>
        <div className="home_main_button_position">
          <a href="#">
            <div className="home_main_button_style">
              <p className="home_header_text_style home_button_text_position2">
                بیشتر بخوانید
              </p>
            </div>
          </a>
          <a href="#">
            <div className="home_main_button_hover">
              <p className="home_header_text_style home_button_text_position1">
                بیشتر بخوانید
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="home_main_small_flex">
        <div className="text_style" align="center" style={{ fontSize: "24px" }}>
          خوش آمدید...
        </div>
        <div className="text_style" align="center" style={{ fontSize: "43px" }}>
          کافه رستوران رایکا
        </div>
        <div className="home_button_position">
          <a href="#">
            <div className="home_button_style">
              <p className="home_header_text_style home_button_text_position2">
                بیشتر بخوانید
              </p>
            </div>
          </a>
          <a href="#">
            <div className="home_button_hover">
              <p className="home_header_text_style home_button_text_position1">
                بیشتر بخوانید
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Main;
