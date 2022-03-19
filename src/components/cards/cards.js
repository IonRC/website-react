import './cards.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import {CardGroup, Card, Button} from 'react-bootstrap';

class Cards extends Component {
    render() {
        return (
            <div>

                <div className={`col-lg-5 m-5`}>
                    <h1>Lorem ipsum dolor sit.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, eaque?</p>
                    <Button variant="outline-primary" className={`position-absolute end-0 mx-5`}>See All Services</Button>{' '}
                </div>

                <br/>

                <div className={`row m-5 mt-5`}>
                <Card className={"col-lg-5 mx-5"}>
                    <Card.Body>
                        <Card.Title>Custom Software Development</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, laborum.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className={"col-lg-5 mx-5 "}>
                    <Card.Body>
                        <Card.Title>Software Integration</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, ut?
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
                <div className={`row m-5`}>
                    <Card className={"col-lg-5 mx-5"}>
                    <Card.Body>
                        <Card.Title>Mobile App Development</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quaerat.
                        </Card.Text>
                    </Card.Body>
                </Card>

                    <Card className={"col-lg-5 mx-5"}>
                        <Card.Body>
                            <Card.Title>Business Analytics</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, iusto.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        )
            ;
    }
}



export default Cards;

