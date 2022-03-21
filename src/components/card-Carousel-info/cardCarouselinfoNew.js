import CardCarouselInfo from "./cardCarouselInfo.css"
import React, {Component, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";
import like from "./img/like_icon.png"
import message from "./img/message_icon.png"
import social from "./img/social_icon.png"
import {Navigation, Pagination, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import cards from "./cardCarouselInfoContent"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function CardCarouselInfoNew() {
    const [settings] = useState()
        return (
            <Swiper{...settings} className={"containerSwiper"}
                   modules={[Navigation, Pagination, A11y]}
                   slidesPerView={3}
                   navigation
                   pagination={{clickable: true}}
                   scrollbar={{draggable: true}}
                   onSwiper={(swiper) => (swiper)}


            >
                {cards.map((card, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Card  className={"item container-card-item  container-card-item-First"}>
                                <Card.Body>
                                    <div className={"container-card-Title"}>
                                        <h6 className={"card-Title"}>{card.teme}</h6>
                                        <h6 className={"data-card-info"}>{card.data}</h6>
                                    </div>
                                    <h3 className={"card-SubTitle"}>{card.title}</h3>
                                    <Card.Text className={"card-Text-Content"}>{card.content}</Card.Text>
                                    <div className={"card-icon-Container"}>
                                        <div className={"icon-item"}>
                                          <a href={"https://silicon.createx.studio/blog-single.html"}><img alt={"like"} className={"icon"} src={like}/></a>
                                            <span className={"info-how-many"}>{card.like}</span>
                                        </div>
                                        <div className={"icon-item"}>
                                            <a href={"https://silicon.createx.studio/blog-single.html"}><img alt={"message"} className={"icon"} src={message}/></a>
                                            <span className={"info-how-many"}>{card.comment}</span>
                                        </div>
                                        <div className={"icon-item"}>
                                            <a href={"https://silicon.createx.studio/blog-single.html"}><img alt={"social"} className={"icon"} src={social}/></a>
                                            <span className={"info-how-many"}>{card.social}</span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                    )
                })}
                <div className={"footer-card-carousel"}> </div>
            </Swiper>
        );
}

export default CardCarouselInfoNew
