import React, { Component } from "react";
import Icons from "./Icons";
import PoseNet from "react-posenet";
import Counter from "./Counter";
import "./homepage.css";
class OverBody extends Component {
  constructor() {
    super();
    this.state = {
      count: 10,

      side: "left",
    };
  }

  getPoses = (poses) => {
    if (!poses[0] || !poses[0].keypoints) {
      return;
    }

    const nose = poses[0].keypoints[0].position;
    const audio = document.querySelector("#audio");
    const relaxMusic = document.querySelector("#relaxMusic");
    if (this.state.count < 1) {
      audio.play();
    } else {
      audio.pause();
    }
    if (this.state.count > 1) {
      relaxMusic.play();
    } else {
      relaxMusic.pause();
    }
    if (this.state.count > 0) {
      if (nose) {
        if (this.state.side === "left") {
          if (nose.x > 380) {
            this.setState({ count: this.state.count - 1, side: "right" });
          }
        } else {
          if (nose.x < 135) {
            this.setState({ count: this.state.count - 1, side: "left" });
          }
        }
      }
    }
  };

  render() {
    return (
      <>
        <PoseNet onEstimate={this.getPoses} className="posenet" />
        <Counter
          count={this.state.count > 0 ? `${this.state.count}` : "✔"}
          countColor={this.state.count < 1 ? "green" : ""}
          einDisplay={
            this.state.side == "right"
              ? "none"
              : this.state.count < 1
              ? "none"
              : ""
          }
          ausDisplay={this.state.side == "left" ? "none" : "block"}
        />
        <Icons
          borderCoverBody={this.state.count < 1 ? "green" : "transparent"}
          overbodyDispla="block"
          headDisplay={this.state.count > 0 ? "none" : "block"}
          armsDisplay={this.state.count > 0 ? "none" : "block"}
          headLink="/head"
          overbodyLink="/overBody"
          armLink="/arms"
        />
        <audio src="end.mp3" id="audio"></audio>
        <audio
          src="2020-02-22_-_Relaxing_Green_Nature_-_David_Fesliyan.mp3"
          id="relaxMusic"
        ></audio>
      </>
    );
  }
}

export default OverBody;
