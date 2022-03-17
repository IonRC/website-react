import React, { Component } from "react";
import LaunchProject from "../launch-project";
import "bootstrap/dist/css/bootstrap.min.css";
import DigitalConference from "../digital-conference";

export default class App extends Component {
  render() {
    return (
      <div>
        !!! Insert here another block !!!
        <DigitalConference />
        <LaunchProject />
      </div>
    );
  }
}
