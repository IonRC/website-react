import React, { Component } from "react";
import LaunchProject from "../launch-project";
import DigitalConference from "../digital-conference";
import BootstrapCarousel from "../carousel";
import ContainerWhyUs from "../container-why-us";
import Cards from "../cards/cards";
import CardComponentStructure from "../card-info-company";
import Apptest from "../Navbar";
import Swiper from "../card-Carousel-info";
import CardTitle from "../card-Carousel-info/cardTaital";
import CardCarouselInfoNew from "../card-Carousel-info/cardCarouselinfoNew"


export default class App extends Component {
  render() {
    return (
      <div>
          <Apptest />
        <BootstrapCarousel />
        <CardComponentStructure />
          <Cards />
        <ContainerWhyUs />
          <CardTitle />
         {/*Swiper Card carousel vechi fara optimizare*/}
          {/*<Swiper />*/}
          {/*CardCarouselInfoNew este Swiper carousel nou optimizat*/}
          <CardCarouselInfoNew />
        <DigitalConference />
        <LaunchProject />
      </div>
    );
  }
}
