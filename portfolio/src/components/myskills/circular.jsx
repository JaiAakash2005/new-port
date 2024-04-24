import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./circular.css";

const MyComponent = () => {
  const skill1Progress = 75;
  const skill2Progress = 50;
  const skill3Progress = 65;
  const skill4Progress = 85;

  return (
    <section className="progress-circle">
      <div className="">
        <div className="row container-1">
          <div className="col-md-6 col-12 circle-container ">
            <CircularProgressbar
              value={skill1Progress}
              text={`${skill1Progress}%`}
              className="circle"
            />
            <h6>Communication</h6>
          </div>
          <div className="col-md-6 col-12 mb-4 ">
            <CircularProgressbar
              value={skill2Progress}
              text={`${skill2Progress}%`}
              className="circle"
            />
            <h6>Creativity</h6>
          </div>
        </div>
        <div className="row container-2">
          <div className="col-md-6 col-12 ">
            <CircularProgressbar
              value={skill3Progress}
              text={`${skill3Progress}%`}
              className="circle last"
            />
            <h6>Problem solving</h6>
          </div>

          <div className="col-md-6 col-12 ">
            <CircularProgressbar
              value={skill4Progress}
              text={`${skill4Progress}%`}
              className="circle last"
            />
            <h6>Team work</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyComponent;
