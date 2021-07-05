import React, { useEffect } from "react";
import background from "../images/background.png";
import gmail from "../images/gmail.png";
import tel from "../images/telegram.png";
import insta from "../images/instagram.png";
import phone from "../images/phone.png";
import whatsApp from "../images/whatsapp.png";

const ContactUs = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${background})`;
  }, []);

  return (
    <>
      <div class="line big"></div>
      <div class="contact_us_flex">
        <h1 align="center">ارتباط با ما</h1>
        <div class="gallery_flex_item">
          <a href="#">
            <img src={whatsApp} class="img_position" alt="logo" />
          </a>
          <a href="#">
            <img src={insta} class="img_position" alt="logo" />
          </a>
          <a href="#">
            <img src={tel} class="img_position" alt="logo" />
          </a>
          <a href="#">
            <img src={phone} class="img_position" alt="logo" />
          </a>
          <a href="#">
            <img src={gmail} class="img_position" alt="logo" />
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
