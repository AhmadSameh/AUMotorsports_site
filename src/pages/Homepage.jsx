import "./homepage.css";
import flag from "../assets/icons/flag1.png";
import cup from "../assets/icons/cup1.png";
import spon1 from "../assets/sponsor1.png";
import pic1 from "../assets/pics/1.jpg";
import pic2 from "../assets/pics/2.jpg";
import pic3 from "../assets/pics/3.jpg";
import pic4 from "../assets/pics/4.jpg";
import { Carousel } from "react-responsive-carousel";

import { forwardRef, useImperativeHandle } from "react";
import React from "react";
import ReactDOM from "react-dom";
import Swiper from "react-id-swiper";

const Homepage = forwardRef((props, ref) => {
  const hidePage = () => {
    var element = document.getElementsByClassName("homeScreen");
    element[0].style.display = "none";
  };

  const showPage = () => {
    var element = document.getElementsByClassName("homeScreen");
    element[0].style.display = "block";
  };

  useImperativeHandle(ref, () => ({
    hide() {
      hidePage();
    },
    show() {
      showPage();
    },
  }));

  const params = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 100,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  return (
    <div class="homeScreen shown">
      {/* <div id="picContainer"> */}
      {/* <p id="slogan1">Quiet as <span id="nature">Nature</span></p>
        <p id="slogan2"> Fast as <span id ="lightning">Lightning</span> </p> */}
      {/* <p id="textContainer">
          AUMotorSports is the official formula racing team of Alexandria
          university. Launched in 2009, we aim to design and manufacture a
          formula student car and participate in the international FSAE
          competitions.
        </p> */}
      {/* <p id="slogan1">Quiet as Nature,</p>
        <p id="slogan2">Fast as Lightning</p> */}
      {/* </div> */}
      {/* <Swiper {...params}>
        <div id="picContainer">
          <img src={pic1} alt="" />
        </div>
        <div>
          <img src={pic2} alt="" />
        </div>
      </Swiper> */}
      {/* <Carousel
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showPage={false}
        showThumbs={false}
        id="carousel"
      > */}
        {/* <div class="cover">
          <div class="black"></div>
        </div> */}
      {/* </Carousel> */}
      
      <Carousel
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showPage={false}
        showThumbs={false}
        id="carousel"
      >
        <div class="picContainer">
          <img src={pic1} alt="" class="images" />
        </div>
        <div class="picContainer">
          <img src={pic2} alt="" class="images" />
        </div>
        <div class="picContainer">
          <img src={pic3} alt="" class="images" />
        </div>
        <div class="picContainer">
          <img src={pic4} alt="" class="images" />
        </div>
      </Carousel>

      <div class="sponsors">
        <div>
          <img src={spon1} class="sponsor" />
        </div>
      </div>

      <div class="team_history">
        <div class="competitions">
          <div class="title">
            <img src={flag} class="icon" />
            <h2>Competitions</h2>
          </div>
          <ul class="compLists">
            <li class="ger"> FSAE Germany 2018</li>
            <li class="ger"> FSAE Germany 2013</li>
            <li class="ger"> FSAE Germany 2012</li>
            <li class="itl"> FSAE Italy 2017</li>
            <li class="itl"> FSAE Italy 2016</li>
          </ul>
        </div>
        <div class="awards">
          <div class="title">
            <img src={cup} class="icon" />
            <h2>Awards</h2>
          </div>
          <ul class="awardsLists">
            <li class="ger"> FSAE Germany 2013</li>
            <p>Most Challenging Team</p>
            <li class="ger"> FSAE Germany 2010</li>
            <p id="place">3rd Place in Cost Analysis</p>
            <li class="itl"> FSAE Italy 2019</li>
            <p>Most Challenging Team</p>
            <li class="itl"> FSAE Italy 2016</li>
            <p>1st Place for Class 3</p>
          </ul>
        </div>
      </div>
      <div id="temp"></div>
    </div>
  );
});

export default Homepage;
