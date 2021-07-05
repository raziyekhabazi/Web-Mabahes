import React, { useState, useEffect } from "react";
import background from "../images/background2.png";
import img1 from "../images/9.jpg";

const Reserve = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [info, setInfo] = useState("");

  useEffect(() => {
    document.body.style.backgroundImage = `url(${background})`;
    document.body.style.backgroundColor = "black";
  }, []);

  const submit = () => {
    const data = {
      name: name,
      email: email,
      phone: phoneNumber,
      description: info,
    }
    fetch("http://127.0.0.1:8000/reservation/", {
      headers: {"Content-Type" : "application/json"},
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => console.log(res));
  };

  return (
    <>
      <div class="line big"></div>
      <div class="reserve_flex">
        <img src={img1} class="img_reserve" alt="resturant" />
        <div class="reserve_flex_item">
          <h1 class="reserve_text">رزرو میز</h1>
          <form >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              class="reserve_input"
              placeholder="نام شما*"
              required
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              class="reserve_input"
              placeholder="ایمیل*"
              required
            />
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="tel"
              class="reserve_input"
              placeholder="شماره تماس*"
              required
            />
            <input
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              type="text"
              class="reserve_input"
              style={{ height: "180px" }}
              placeholder="روز و ساعت مورد نظر و توضیحات تکمیلی"
            />
            <div style={{ marginLeft: "75%", marginBottom: "50px" }}>
              <a href="#" onClick={submit}>
                <div class="button_style">
                  <p class="header_text_style button_text_position2">رزرو کن</p>
                </div>
              </a>
              <a href="#">
                <div class="button_hover reverse_button">
                  <p class="header_text_style_all button_text_position1 ">
                    رزرو کن
                  </p>
                </div>
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Reserve;
