import React from "react";
import {Carousel} from "react-bootstrap";

 function BootstrapCarousel(){
    return(
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.advamed.org/wp-content/uploads/2021/05/committee-meeting-board-room.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>24/7 Tech & Business Support</h3>
                        <p>We ensure lifetime support of all applications we've built.
                            Our support department is a team of professionals who will assist you 24/7</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.advamed.org/wp-content/uploads/2021/05/committee-meeting-board-room.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Award-Winning Software Development</h3>
                        <p>We build complex web , desktop and mobile applications.
                            With us you get quality software and perfect service every time.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.advamed.org/wp-content/uploads/2021/05/committee-meeting-board-room.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>The best IT solutions for your business</h3>
                        <p>We provide the wide range of high quality IT services and
                            best practices solutions to our costumers making their business better.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default BootstrapCarousel