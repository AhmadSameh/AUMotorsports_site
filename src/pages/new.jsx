import { forwardRef, useImperativeHandle } from "react";
import "./new.css";

const News = forwardRef((props, ref) => {
  // FUNCTIONS TO SHOW AND HIDE THE PAGE
  const hidePage = () => {
    var element = document.getElementsByClassName("newsScreen");
    element[0].style.display = "none";
  };

  const showPage = () => {
    var element = document.getElementsByClassName("newsScreen");
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
    <div class="newsScreen">
      <div class="newsData">
        <div class="beetleSection">
          <div id="news1title">
            <h1>Current Project</h1>
          </div>
          <div class="beetle">
            <span id="beetleTitle">Connecting the Past With the Future</span>
            <br />
            <br />
            With the intent of adapting with the direction of the automotive
            industry, it was decided to reduce our emissions while staying true
            to our identity, being fast as lightning. Thus, we started our first
            electric vehicle program.
            <br />
            <br />
            The decision to move forward mandated to look into the past. The VW
            Beetle, with a rich heritage similar to ours, is coming back to the
            future in a new form as an electric vehicle built with the hands of
            AUM’s members.
            <br />
            <br />
            <span id="punchline">
              As our team is adapting, the beetle shall adapt with us.
            </span>
          </div>
        </div>
        <div class="futureSection">
          <div id="news1title">
            <h1>Future Projects</h1>
          </div>
          <div class="beetle">
            <span id="beetleTitle">Preparations to be even faster</span>
            <br />
            <br />
            The preparations have started for our next fastest car until now,
            Our FSAE’s first electric vehicle. The competition will be fierce
            but we have faith in our ability to produce a competing car.
            <br />
            <br />
            The next step for the youngsters is to gain experience in designing
            and manufacturing an electric vehicle thus, the decision was taken
            to compete in EVER Egypt as preparation for young students prior to
            taking on the harder challenge of competing in the FSAE competition.
          </div>
        </div>
      </div>
    </div>
  );
});

export default News;
