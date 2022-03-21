import "./css/header.css";
import logo from "../assets/pp.png";

const Header = (props) => {
  const tabHandler = (e, num) => {
    var i, tablinks;
    tablinks = document.getElementsByClassName("tabs");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    props.onSelect(num);
    e.currentTarget.className += " active";
    if (document.getElementById("overNav").style.width === "100%") {
      var bars = document.getElementsByClassName("barContainer");
      bars[0].classList.toggle("change");
      document.getElementById("overNav").style.width = "0%";
      var buttons = document.getElementsByClassName("overlay-buttons");
      buttons[0].style.display = "none";
    }
  };

  const barChange = () => {
    var bars = document.getElementsByClassName("barContainer");
    var temp = document.getElementsByClassName("change");
    var buttons = document.getElementsByClassName("overlay-buttons");
    if (temp.length === 0) {
      document.getElementById("overNav").style.width = "100%";
      buttons[0].style.display = "block";
    } else {
      document.getElementById("overNav").style.width = "0%";
      buttons[0].style.display = "none";
    }
    bars[0].classList.toggle("change");
  };

  return (
    <div>
      <div class="nav" id="topNav">
        {/* FOR MOBILE VIEW */}
        <div class="barContainer" onClick={barChange}>
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>

        <img src={logo} id="logo" />

        <div class="overlayNav" id="overNav">
          <div class="overlay-buttons">
            <a href="#home" onClick={(e) => tabHandler(e, 0)}>
              Home
            </a>
            <a href="#about_us" onClick={(e) => tabHandler(e, 1)}>
              About Us
            </a>
            <a href="#news" onClick={(e) => tabHandler(e, 2)}>
              News
            </a>
            <a href="#join" onClick={(e) => tabHandler(e, 3)}>
              Join Us
            </a>
            <a href="#contact" onClick={(e) => tabHandler(e, 4)}>
              Contact Us
            </a>
          </div>
        </div>

        <div id="buttons">
          <a href="#home" onClick={(e) => tabHandler(e, 0)} class="tabs active">
            Home
          </a>
          <a href="#about_us" onClick={(e) => tabHandler(e, 1)} class="tabs">
            About Us
          </a>
          <a href="#news" onClick={(e) => tabHandler(e, 2)} class="tabs">
            News
          </a>
          <a href="#join" onClick={(e) => tabHandler(e, 3)} class="tabs">
            Join Us
          </a>
          <a href="#contact" onClick={(e) => tabHandler(e, 4)} class="tabs">
            Contact Us
          </a>
          {/* <div id="history">
            <a class="tabs">History</a>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
