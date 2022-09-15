import React from "react";
import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import ChangingProgressProvider from "./ChangingProgressProvider";

// Radial separators
// import RadialSeparators from "./RadialSeparators";

const percentage = 66;

export const Progress_bar = () => (
    <Example label="Keep it up!">
    <ChangingProgressProvider values={[0, 20, 80]}>
      {(value) => (
        <CircularProgressbar
          value={value}
          text={`${value}%`}
          circleRatio={0.75}
          styles={buildStyles({
            rotation: 1 / 2 + 1 / 8,
            strokeLinecap: "butt",
            trailColor: "#eee"
          })}
        />
      )}
    </ChangingProgressProvider>
  </Example>
)

function Example(props) {
  return (
    <div style={{ marginBottom: 80 }}>
      <hr style={{ border: "2px solid #ddd" }} />
      <div style={{ marginTop: 30, display: "flex" }}>
        <div style={{ width: "30%", paddingRight: 30 }}>{props.children}</div>
        <div style={{ width: "70%" }}>
          <h3 className="h5">{props.label}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

