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
                    <a className={'reviews'} href={'https://themes.getbootstrap.com/preview/?theme_id=104975'}>
                        <div className={'clutch'}>Reviewed on</div>
                        <img src={'https://silicon.createx.studio/assets/img/about/clutch.svg'}/>
                    </a>
                </div>
                <div className={'card-right'}>
                    <div className={'justify-between-item'}>
                        <div className={'header-buttons'}>
                        <div className={'double-btn'}>
                            <div className={'slayer-box'}>
                                <img className={'img-slayers'} src={'https://cdn-icons-png.flaticon.com/512/206/206058.png'}/>
                            </div>
                        </div>
                        <div className={'next-slide'}>
                            <div className={'sign-right'}>
                                <img className={'chevron-right'} src={'https://cdn.iconscout.com/icon/free/png-256/left-chevron-458460.png'}/>
                            </div>
                            <div className={'sign-left'}>
                                <img className={'chevron-left'} src={'https://cdn.iconscout.com/icon/free/png-256/chevron-thin-right-1859438-1577834.png'}/>
                            </div>
                        </div>
                        </div>
                        <div className={'text-comment'}>
                            Dolor, a eget elementum, integer nulla volutpat, nunc, sit.
                            Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget.
                            Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea.
                            Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim.
                        </div>
                        <div className={'bottom-card'}>
                            <div className={'img-bottom-card'}>
                                <img src={'https://silicon.createx.studio/assets/img/avatar/01.jpg'}/>
                            </div>
                            <div className={'text-bottom-card'}>
                                <h4 className={'name-bottom-card'}>Darell Steward</h4>
                                <span className={'job-title'}>Project Manager at Company LTD</span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default ContainerWhyUs;