import CardCarouselInfo from "./cardCarouselInfo.css"
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";
import like from "./img/like_icon.png"
import message from "./img/message_icon.png"
import social from "./img/social_icon.png"
import {Navigation, Pagination, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {firstCard, secondCard, threeCard, fourCard} from "./cardCarouselInfoContent"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={3}
            navigation
            pagination={{clickable: true}}
            scrollbar={{draggable: true}}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <Card className={"item container-card-item  container-card-item-First"}>
                    <Card.Body>
                        <div className={"container-card-Title"}>
                            <h6 className={"card-Title"}>{firstCard.teme}</h6>
                            <h6 className={"data-card-info"}>{firstCard.data}</h6>
                        </div>
                        <h3 className={"card-SubTitle"}>{firstCard.title}</h3>
                        <Card.Text className={"card-Text-Content"}>{firstCard.content}</Card.Text>
                        <div className={"card-icon-Container"}>
                            <div className={"icon-item"}>
                                <img alt={"like"} className={"icon"} src={like}/>
                                <span className={"info-how-many"}>{firstCard.like}</span>
                            </div>
                            <div className={"icon-item"}>
                                <img alt={"message"} className={"icon"} src={message}/>
                                <span className={"info-how-many"}>{firstCard.comment}</span>
                            </div>
                            <div className={"icon-item"}>
                                <img alt={"social"} className={"icon"} src={social}/>
                                <span className={"info-how-many"}>{firstCard.social}</span>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card className={"item container-card-item  container-card-item-First"}>
                    <Card.Body>
                        <div className={"container-card-Title"}>
                            <h6 className={"card-Title"}>{secondCard.teme}</h6>
                            <h6 className={"data-card-info"}>{secondCard.data}</h6>
                        </div>

                        <h3 className={"card-SubTitle"}>{secondCard.title}</h3>
                        <Card.Text className={"card-Text-Content"}>
                            {secondCard.content}
                        </Card.Text>
                        <div className={"card-icon-Container"}>
                            <div className={"icon-item"}>
                                <img alt={"like"} className={"icon"} src={like}/>
                                <span className={"info-how-many"}>{secondCard.like}</span>
                            </div>
                            <div className={"icon-item"}>
                                <img alt={"message"} className={"icon"} src={message}/>
                                <span className={"info-how-many"}>{secondCard.comment}</span>
                            </div>
                            <div className={"icon-item"}>
                                <img alt={"social"} className={"icon"} src={social}/>
                                <span className={"info-how-many"}>{secondCard.social}</span>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card className={"item container-card-item  container-card-item-First"}>
                    <Card.Body>
                        <div className={"container-card-Title"}>
                            <h6 className={"card-Title"}>{threeCard.teme}</h6>
                            <h6 className={"data-card-info"}>{threeCard.data}</h6>
                        </div>

                        <h3 className={"card-SubTitle"}>{threeCard.title}</h3>
                        <Card.Text className={"card-Text-Content"}>
                            {threeCard.content}
                        </Card.Text>
                        <div className={"card-icon-Container"}>
                            <div className={"icon-item"}>
                                <img alt={"like"} className={"icon"} src={like}/>
                                <span className={"info-how-many"}>{threeCard.like}</span>
                            </div>
                            <div className={"icon-item"}>
                                <img alt={"message"} className={"icon"} src={message}/>
                                <span className={"info-how-many"}>{threeCard.comment}</span>
                            </div>
                            <div className={"icon-item"}>
                                <img alt={"social"} className={"icon"} src={social}/>
                                <span className={"info-how-many"}>{threeCard.social}</span>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card className={"item container-card-item  container-card-item-First"}>
                    <Card.Body>
                        <div className={"container-card-Title"}>
                            <h6 className={"card-Title"}>{fourCard.teme}</h6>
                            <h6 className={"data-card-info"}>{fourCard.data}</h6>
                        </div>

                        <h3 className={"card-SubTitle"}>{fourCard.title}</h3>
                        <p className={"card-Text-Content"}>
                            {fourCard.content}
                        </p>
                        <div className={"card-icon-Container"}>
                            <div className={"icon-item"}>
                                <img alt={"like"} className={"icon"} src={like}/>
                                <span className={"info-how-many"}>{fourCard.like}</span>
                            </div>
                            <div className={"icon-item"}>
                                <img alt={"message"} className={"icon"} src={message}/>
                                <span className={"info-how-many"}>{fourCard.comment}</span>
                            </div>
                            <div className={"icon-item"}>
                                <img alt={"social"} className={"icon"} src={social}/>
                                <span className={"info-how-many"}>{fourCard.social}</span>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <div className={"footer-card-carousel"}> </div>
        </Swiper>
    );
};




