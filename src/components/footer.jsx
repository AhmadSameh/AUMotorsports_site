import "./css/footer.css";
import fb from "../assets/icons/fb.png";
import ig from "../assets/icons/ig.png";
import tw from "../assets/icons/twitter.png";

const Footer = () => {
  return (
    <div class="footer">
      <div class="socials">
        <img
          src={fb}
          onClick={() =>
            window.open("https://www.facebook.com/Aumsportegy", "_self")
          }
        />
        <img
          src={ig}
          onClick={() =>
            window.open("https://instagram.com/aumsportegy/", "_self")
          }
        />
        <img
          src={tw}
          onClick={() => window.open("https://twitter.com/MotorsportsAu")}
        />
      </div>
    </div>
  );
};

export default Footer;
