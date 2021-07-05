import React, { useEffect } from "react";
import video from "../images/about_us.mp4";
import img from "../images/about_us2.png";
import background from "../images/background.png";
import { Link } from "react-router-dom";

const AboutUs = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${background})`;
  }, []);
  return (
    <>
      <div className="line big"></div>
      <div className="about_us_flex">
        <div align="right" style={{ marginTop: "20px" }}>
          <h1>درباره ی ما</h1>
          <p style={{ opacity: "75%", width: "550px", lineHeight: "32px" }}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
            <br />
            کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه
            و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد.
          </p>
          <div style={{ marginLeft: "400px", marginBottom: "50px" }}>
            <Link to="/reserve">
              <div className="button_style">
                <p className="header_text_style button_text_position2">
                  رزرو میز
                </p>
              </div>
            </Link>
            <Link to="/reserve">
              <div className="button_hover about_us_button ">
                <p className="header_text_style button_text_position1">
                  رزرو میز
                </p>
              </div>
            </Link>
          </div>
          <img src={img} align="left" alt="about_us" />
        </div>
        <div>
          <video
            width="320"
            height="240"
            controls="controls"
            className="about_us_video_style"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video element.
          </video>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
