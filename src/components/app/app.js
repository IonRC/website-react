import React, { Component } from "react";
import LaunchProject from "../launch-project";
import "bootstrap/dist/css/bootstrap.min.css";
import DigitalConference from "../digital-conference";
import {Card, Navbar} from "react-bootstrap";
import BootstrapCarousel from "../carousel";
import ContainerWhyUs from "../container-why-us";
import Cards from "../cards/cards";
import CardComponentStructure from "../card-info-company";
import CardCarouselInfoNew from "../card-Carousel-info/cardCarouselinfoNew";
import Apptest from "../Navbar";

export default class App extends Component {
  render() {
    return (
      <div>
          <Apptest />
        {/*<Navbar />*/}
        <BootstrapCarousel />
        <CardComponentStructure />
          <Cards />
        <ContainerWhyUs />
          <CardCarouselInfoNew />
        {/*<Apptest />*/}
        <DigitalConference />
        <LaunchProject />
        {/*<CardComponentStructure />*/}
      </div>
    );
  }
}
