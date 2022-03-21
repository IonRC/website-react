import React, {Component} from 'react';
import './smart-tech.css'
import {Col, Row} from "react-bootstrap";

class SmartTech extends Component {
    render() {
        return (
            <div className={'bg-img'}>
                <div className={'container'}>
                    <Row>
                        <Col md={5}>
                            <div className={'block'}>
                            <img className={'img'} src={'https://silicon.createx.studio/assets/img/landing/software-company/case-study-logo01.png'}/>
                            <h1 className={'h1-class'}>Cashless payment case study</h1>
                            <p className={'p1-class'}>Payment Service Provider Company</p>
                            <hr/>
                            <p className={'p2-class'}>Aenean dolor elit tempus tellus imperdiet. Elementum, ac convallis morbi sit est feugiat ultrices. Cras tortor maecenas pulvinar nec ac justo. Massa sem eget semper...</p>
                            <button className={'button'}>View case study</button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default SmartTech;