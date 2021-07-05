import React, { useEffect, useState } from "react";
import background from "../images/background.png";

const Menu = () => {
  const[data,setData]=useState([])
  useEffect(() => {
    document.body.style.backgroundImage = `url(${background})`;
    
      fetch("http://127.0.0.1:8000/list/", {
       
      }).then((res) => res.json())
      .then(data => {setData(data)})
  
  }, []);
  return (
    <>
      <div className="line big"></div>
      <h1 align="center" style={{ marginTop: "80px" }}>
        منوی ما
      </h1>
      <div className="our_menu_flex">
        <div>
          
        {data.map((d, i) => {
              return (
                <div className="our_menu_box" key={i}>
                  <p>{d.title}</p>
            <div className="our_menu_price">
              <p>{d.price}</p></div>
          </div>
              );
            })}


        </div>
      </div>
    </>
  );
};

export default Menu;
