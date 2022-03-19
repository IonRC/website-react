import card from "./card.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import {Col} from "react-bootstrap";
import {contentOfTheTitle, btnContent, footerContent, srcImg} from "./card-content"

class CardComponentStructure extends Component {
    render() {
        return (
            <Col>
                <section className={"sectionContainer"}>
                    <div className={"container"}>
                        <div className={"card-contant col col-md-5 text-center text-md-start"}>
                            <h1 className={"nameTheContent"}>{contentOfTheTitle.title}</h1>
                            <p className={"theContent"}> {contentOfTheTitle.content}</p>
                            <a href="https://silicon.createx.studio/about-v2.html" className="btn btn-primary shadow-primary  btn-lg ">{btnContent.title}</a>
                            <div>
                                {/*<Button className={"btn btnCard btn-primary"} variant="primary" >{btnContent.title}</Button>{' '}*/}
                                <h2 className={"some"}>{footerContent.title}</h2>
                                <img alt={"icon"} className={"imgAssets"} src={srcImg.icon}/>
                            </div>
                        </div>
                        <div>
                            <img alt={"imgCompany"} className={"imgCard img-fluid"} src={srcImg.img}/>
                        </div>
                    </div>
                </section>
            </Col>
        );
    }
}

export default CardComponentStructure;