import "./aboutUs.css";
import cover from "../assets/team_gallery/cover.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Carousel from "react-elastic-carousel";

import { forwardRef, useImperativeHandle } from "react";

const AboutUs = forwardRef((props, ref) => {
  // FUNCTIONS TO SHOW AND HIDE THE PAGE
  const hidePage = () => {
    var element = document.getElementsByClassName("aboutScreen");
    element[0].style.display = "none";
  };

  const showPage = () => {
    var element = document.getElementsByClassName("aboutScreen");
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

  return (
    <div class="aboutScreen">
      <div class="cover">
        <div class="black"></div>
      </div>
      <div id="topImage">
        {/* <img src={cover} class="sliderImage" /> */}
        <div class="sliderImage"></div>
      </div>
      <div class="header">
        <h1>History</h1>
      </div>
      <div class="card">
        {/* <div class="dataContainer">
          <div class="image"></div>
          <div class="image"></div>
          <div class="image"></div>
          <div class="data">
            <p>DATA OF MEMBER</p>
          </div>
          <div class="data">
            <p>DATA OF MEMBER</p>
          </div>
          <div class="data">
            <p>DATA OF MEMBER</p>
          </div>
        </div> */}
        
          AUMotorsports is an FSAE team rich in heritage and has a long history
          of engineering excellence. Founded in 2009 by Akram Mousa, AUM is the
          oldest FSAE team in Egypt.
        <br />
        <br />
          AUM utilizes cutting-edge technology to design and manufacture
          high-performance cars with the support of professors and supervision
          of highly accredited academic advisors in the faculty of engineering,
          Alexandria university.
       <br />
       <br />
          AUM’s members are a highly skilled group of students capable of
          designing a vehicle from scratch, preparing the technical drawings
          required for manufacturing, and manufacturing said vehicle.
        
      </div>
    </div>
  );
});

export default AboutUs;
