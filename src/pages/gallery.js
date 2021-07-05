import React, { useEffect,useState } from "react";
import background from "../images/background.png";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import img7 from "../images/7.jpg";
import img8 from "../images/8.jpg";

const Gallery = () => {
  const[data,setData]=useState([])
  useEffect(() => {
    document.body.style.backgroundImage = `url(${background})`;
    
      fetch("http://127.0.0.1:8000/list", {
      }).then((res) => res.json())
      .then(data => {setData(data)
        console.log(data)
      }
      )
  
  }, []);

  return (
    <>
      <div class="line big"></div>
      <div>
        <div class="gallery_flex">
          <h1>محبوب ترین غذاها</h1>
          <div class="gallery_flex_item">
          {data.map((d, i) => {
              return (
                <div key={i}>
                  <div class="gallery_hover">
                    <p class="gallery_text">{d.title}</p>
                  </div>
                  <img src={d.imgThumb} class="gallery_img" alt="food" />
                </div>
              );
            })}
            
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
