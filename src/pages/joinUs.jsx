import "./aboutUs.css";

import { forwardRef, useImperativeHandle } from "react";

const JoinUs = forwardRef((props, ref) => {
  // FUNCTIONS TO SHOW AND HIDE THE PAGE
  const hidePage = () => {
    var element = document.getElementsByClassName("joinScreen");
    element[0].style.display = "none";
  };

  const showPage = () => {
    var element = document.getElementsByClassName("joinScreen");
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
    <div class="joinScreen">
      <div class="header">
        <h1>Mechanical Engineering</h1>
      </div>
      <div class="card">
        Mechanical engineers are the backbone for any team to design a winning
        vehicle. With their heritage in motorsports since the first F1 race,
        they bent materials to their will. Start your journey with us to the
        world of motorsport.
      </div>
      <div class="header">
        <h1>Production Engineering</h1>
      </div>
      <div class="card">
        Designing a vehicle is a challenge but planning and executing its
        production is another challenge on its own. Production engineers have
        been notorious for their skills in planning and dealing with
        manufacturing processes. Start your journey with us facing a unique
        challenge.
      </div>
      <div class="header">
        <h1>Electrical Engineering</h1>
      </div>
      <div class="card">
        With a connection to Tesla, Electrical engineers never stopped
        energizing our future being benders of electricity. Start your journey
        with us and utilize your power to electrify the future.
      </div>
      <div class="header">
        <h1>Computer Engineering</h1>
      </div>
      <div class="card">
        From the smallest calculator to the most advanced spaceships, Computer
        engineers with their bright minds gave dump machines intelligence. Start
        your journey with us and unleash your bright mind to brighten the
        future.
      </div>

      <div class="header">
        <h1>Communication Engineering</h1>
      </div>
      <div class="card">
        Humans dream of teleportation, but Communication engineers help them
        teleport their information. Starting from the telegraph to 5G towers,
        teleporting information was never easier. Start your journey with us and
        help us teleport into the future.
      </div>
      <div class="header">
        <h1>Electromechanical Engineering</h1>
      </div>
      <div class="card">
        Future problems require newer ways of thinking. Marrying Mechanical and
        Electrical engineering is a leap into the future in itself.
        Electromechanical engineers are known for their wide set of skills which
        makes them invaluable for any project, bending physical materials and
        electricity to their will. Start your journey with us and choose your
        path to the heritage of mechanical engineering or electrifying the
        future.
      </div>
      <div class="header">
        <h1>Mechatronics Engineering</h1>
      </div>
      <div class="card">
        Coming from the future, Mechatronics engineers swore to pull us forward.
        With their mysterious ways of dealing with materials and electricity,
        they are masters of both mechanical design and control. Start your
        journey with us and our car will take you back to the future.
      </div>
      <div class="header">
        <h1>Communication Engineering </h1>
      </div>
      <div class="card">
        Humans dream of teleportation, but Communication engineers help them
        teleport their information. Starting from the telegraph to 5G towers,
        teleporting information was never easier. Start your journey with us and
        help us teleport into the future.
      </div>
    </div>
  );
});

export default JoinUs;
