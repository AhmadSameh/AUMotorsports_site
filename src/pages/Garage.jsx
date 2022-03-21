import "./garage.css";
import car1 from "../assets/garage/1.jpg";
import car2 from "../assets/garage/2.jpg";
import car3 from "../assets/garage/3.jpg";
import spring from "../assets/garage/spring.svg";
import chasis from "../assets/garage/chasis.svg";
import engine from "../assets/garage/engine.svg";
import gears from "../assets/garage/gears.svg";
import plug from "../assets/garage/plug.svg";
import aero from "../assets/garage/aero.svg"
import brakes from "../assets/garage/brakes.png"

import { forwardRef, useImperativeHandle } from "react";

const Garage = forwardRef((props, ref) => {
  const hidePage = () => {
    var element = document.getElementsByClassName("garageScreen");
    element[0].style.display = "none";
  };

  const showPage = () => {
    var element = document.getElementsByClassName("garageScreen");
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
    <div class="garageScreen">
      <div class="garagetitle">
        <h1>Common Features</h1>
      </div>
      <div class="common">
        <img src={car1} class="garageImage" />
        <div class="garageoverlay1">
          <div class="garageData">
            <img src={spring} class="spring" />
            <p>
              The suspension is the link between the car and the road. While
              most people think that the suspenion's only function is to ensure
              a comfortable ride, that's not the case. The suspension's main
              functions are to improve mobility and to provide control over the
              veh icle.
            </p>
          </div>
          <div class="garageData">
            <img src={brakes} class="brakes" />
            <p>
              It's not the speed the gets you killed, It's the sudden break that
              does. Jeremy Clarkson brakes are what stops you suddenly from
              crashing, but that's not all what they are there for. Brakes
              control the car performance as much as any other part of the car.
            </p>
          </div>
          <div class="garageData">
            <img src={chasis} class="chasis" />
            <p>
              Every body needs a skeleton and the chasis is the skeleton of the
              car, but it is no ordinary skeleton. It's the member that connects
              all parts of the car with each other and with the driver. The
              design of the chasis is a delightful mental and engineering
              challenge as the designer must tackle safety, weight, stifness and
              shape to create something truly unique.
            </p>
          </div>
        </div>
      </div>

      <div class="data">
        <div class="old">
          <div class="dataTitles">
            <h1>Old School</h1>
          </div>

          <div class="oldData">
            <img src={car2} class="garageImage" />
            <div class="garageoverlay2">
              <div class="garageData2">
                <img src={engine} class="engine" />
                <p>
                  The engine is the powerhouse of any car, it's the soul of the
                  car and working on it is as fun as it is hard. Working on the
                  engine will help you gain the techincal experience you need to
                  fill the gap between the textbooks you study and the industry.
                </p>
              </div>
              <div class="garageData2">
                <img src={gears} class="gears" />
                <p>
                  Having power is one thing, being able to put this power to
                  good use is something else. The powertrain team is responsible
                  for transferring the engine's power to the road.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="new">
          <div class="dataTitles">
            <h1>New School</h1>
          </div>
          <div class="newData">
            <img src={car3} class="garageImage" />
            <div class="garageOverlay3">
              <div class="garageData2">
              <img src={plug} class="plug" />
                <p>
                  Our battery pack is designed to boost the performance of our
                  electric motor to its maximum. With thorough calculations and
                  fine selection, the batteries are able to power the race car
                  to endure long racing paths.
                </p>
              </div>
              <div class="garageData2">
              <img src={aero} class="aero" />
                <p>
                  As you know we're intersted in designing Formula Student Cars,
                  the Aerodynamics departement is interested in designing the
                  outer fairings of the body, as well as aerodynamic devices
                  such as sidepods, front wing, rear wing and diffuser along
                  with car floor. We design the car to look stunnigly good, and
                  aerodynamicaly efficient, with the aid of CAD and CFD
                  simulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Garage;
