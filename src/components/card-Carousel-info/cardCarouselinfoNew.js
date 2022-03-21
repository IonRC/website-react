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


function CardCarouselInfoNew() {
    const [settings] = useState()
        return (
            <Swiper{...settings}
                   modules={[Navigation, Pagination, A11y]}
                   slidesPerView={3}
                   navigation
                   pagination={{clickable: true}}
                   scrollbar={{draggable: true}}
                   onSwiper={(swiper) => console.log(swiper)}
                   onSlideChange={() => console.log('slide change')}
            >
                {cards.map((item, i) => {
                    return (
                        <SwiperSlide>
                            <Card key={i} className={"item container-card-item  container-card-item-First"}>
                                <Card.Body>
                                    <div className={"container-card-Title"}>
                                        <h6 className={"card-Title"}>{item.teme}</h6>
                                        <h6 className={"data-card-info"}>{item.data}</h6>
                                    </div>
                                    <h3 className={"card-SubTitle"}>{item.title}</h3>
                                    <Card.Text className={"card-Text-Content"}>{item.content}</Card.Text>
                                    <div className={"card-icon-Container"}>
                                        <div className={"icon-item"}>
                                            <img alt={"like"} className={"icon"} src={like}/>
                                            <span className={"info-how-many"}>{item.like}</span>
                                        </div>
                                        <div className={"icon-item"}>
                                            <img alt={"message"} className={"icon"} src={message}/>
                                            <span className={"info-how-many"}>{item.comment}</span>
                                        </div>
                                        <div className={"icon-item"}>
                                            <img alt={"social"} className={"icon"} src={social}/>
                                            <span className={"info-how-many"}>{item.social}</span>
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
