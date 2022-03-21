import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutUs from "./pages/AboutUs";
import Garage from "./pages/Garage";
import Homepage from "./pages/Homepage";
import News from "./pages/new";
import JoinUs from "./pages/joinUs";

import Particles from "react-tsparticles";
import { useRef } from "react";
import Contact from "./pages/contact";

function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const newsRef = useRef();
  // const garageRef = useRef();
  const joinRef = useRef();
  const contactRef = useRef();
  const pages = [homeRef, aboutRef, newsRef, joinRef, contactRef];

  const pageChanger = (numofPage) => {
    for (var i = 0; i < pages.length; i++) {
      pages[i].current.hide();
    }
    pages[numofPage].current.show();
  };

  return (
    <div id="background">
      {/* <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#272727",
            },
          },
          fpsLimit: 144,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#d11b1b",
            },
            links: {
              color: "#d63e3e",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 0,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 500,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      /> */}
      <div id="nav">
        <Header onSelect={pageChanger} />
      </div>

      <Homepage class="tabcontent" ref={homeRef} />
      <AboutUs class="tabcontent" ref={aboutRef} />
      <News class="tabcontent" ref={newsRef}/>
      <JoinUs class="tabcontent" ref={joinRef} />
      {/* <Garage class="tabcontent" ref={garageRef} /> */}
      <Contact class="tabcontent" ref={contactRef} />

      <Footer />
    </div>
  );
}

export default App;
