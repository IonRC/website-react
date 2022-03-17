import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './container-why-us.css'
import {Card, Button} from "react-bootstrap";

class ContainerWhyUs extends Component {
    render() {
        return (
            <div className={'container-why-us'}>
                <h1 className={'title-why-us'}>Why choose us?</h1>
                <h3 className={'sub-title'}>We personalize how we work to fit your project needs. Our approach helps augment innovation.</h3>
                    <div className={'cards'}>
                        <Card className={'first-card'} style={{ width: '18rem' }}>
                            <div className={'border-img'}>
                            <Card.Img className={'image-card'} src={'https://silicon.createx.studio/assets/img/landing/software-company/features/01.svg'} />
                            </div>
                            <Card.Body>
                                <p className={'comments-card'}>
                                    Build a functional prototype in 24 hrs
                                </p>
                            </Card.Body>
                        </Card>
                            <Card className={'second-card'} style={{ width: '18rem' }}>
                                <div className={'border-img'}>
                                <Card.Img className={'image-card'} src={'https://silicon.createx.studio/assets/img/landing/software-company/features/02.svg'} />
                                </div>
                                <Card.Body>
                                    <p className={'comments-card'}>
                                        Create an MVP within two weeks
                                    </p>
                                </Card.Body>
                            </Card>
                            <Card className={'third-card'} style={{ width: '18rem' }}>
                                <div className={'border-img'}>
                                <Card.Img className={'image-card'} src={'https://silicon.createx.studio/assets/img/landing/software-company/features/03.svg'} />
                                </div>
                                <Card.Body>
                                    <p className={'comments-card'}>
                                        Kickstart software development
                                    </p>
                                </Card.Body>
                            </Card>
                            <Card className={'forth-card'} style={{ width: '18rem' }}>
                                <div className={'border-img'}>
                                <Card.Img className={'image-card'} src={'https://silicon.createx.studio/assets/img/landing/software-company/features/04.svg'} />
                                </div>
                                <Card.Body>
                                    <p className={'comments-card'}>
                                        Get 24/7 tech & business support
                                    </p>
                                </Card.Body>
                            </Card>
                    </div>
                <div className={'bottom-cards'}>
                <div className={'card-left'}>
                    <h3 className={'clients'}>200+</h3>
                    <h2 className={'clients-served'}>Clients Already Served</h2>
                    <a href={'https://themes.getbootstrap.com/preview/?theme_id=104975'}>
                        <div className={'clutch'}>Reviewed on</div>
                        <img src={'https://silicon.createx.studio/assets/img/about/clutch.svg'}/>
                    </a>
                </div>
                <div className={'card-right'}>
                    <div className={'justify-between-item'}>
                        <div className={'double-btn'}>
                            <Button variant="primary">Primary</Button>
                        </div>
                        <div className={'next-slide'}>
                            <Button variant="outline-primary">Primary</Button>{' '}
                            <Button variant="outline-secondary">Secondary</Button>{' '}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default ContainerWhyUs;