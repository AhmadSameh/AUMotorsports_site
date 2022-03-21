import "./contact.css";
import { forwardRef, useImperativeHandle } from "react";

const Contact = forwardRef((props, ref) => {
  const hidePage = () => {
    var element = document.getElementsByClassName("contactScreen");
    element[0].style.display = "none";
  };

  const showPage = () => {
    console.log("hi");
    var element = document.getElementsByClassName("contactScreen");
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
    <div class="contactScreen">
      <div class="announce">
        <h1>WE ARE CURRENTLY NOT HIRING! :(</h1>
        <p>You can still send us an email via:</p>
        <p>aumotorsports11@gmail.com</p>
      </div>
    </div>
  );
});

export default Contact;
