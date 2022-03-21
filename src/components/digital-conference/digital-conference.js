import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./digital-conference.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const ButtonStyled = styled.a`
  background-color: #6366f1;
  border-color: #6366f1;
  color: #fff;
  font-weight: 600;
  line-height: 1.6;
  padding: 1.2rem 3.6rem;
  margin: 0 2rem 3rem 0;
  font-size: 1.3rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgb(99 102 241 / 90%);
  &:hover {
    color: #ffffff;
    background-color: #4044ee;
    border-color: #4044ee;
    box-shadow: none;
  }
`;

const OutlineButtonStyled = styled(ButtonStyled)`
  color: #6366f1;
  border: 1px solid #6366f1;
  background-color: transparent;
  box-shadow: none;
  &:hover {
    background-color: #6366f1;
    border-color: #6366f1;
  }
`;

const OverFlow = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const DateText = styled.p`
  color: #6366f1;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const StyledH1 = styled.h1`
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  font-size: 7rem;
  font-weight: 600;
  color: #131022;
`;

const AddressStyled = styled.p`
  font-size: 2rem;
  color: #585c7b;
  margin-bottom: 3rem;
`;

const ImagesBlock = styled.div`
  display: flex;
  align-content: center;
`;

const SpanBlock = styled.span`
  font-size: 1.2rem;
  color: #585c7b;
  font-weight: 600;
`;

const CountBlock = styled.span`
  color: #6366f1;
  font-weight: 600;
  font-size: 1.3rem;
`;

const ButtonBlock = styled.div`
  display: flex;
`;

export default class DigitalConference extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={12} md={12} lg={6}>
            <OverFlow className="overflow-styled">
              <video
                className="videoTag"
                autoPlay
                loop
                muted
                width="100%"
                height="auto"
              >
                <source
                  src={
                    "https://silicon.createx.studio/assets/img/landing/conference/hero-video.mp4"
                  }
                  type="video/mp4"
                />
              </video>
            </OverFlow>
          </Col>
          <Col xs={12} md={12} lg={6} className="d-flex flex-column justify-content-center info-block">
            <DateText>Oct 14-15, 2021</DateText>
            <StyledH1>NY Digital Conference</StyledH1>
            <AddressStyled>
              <i className="bi bi-geo-alt"></i>
              International Convention Centre, <br /> New York, USA
            </AddressStyled>
            <ButtonBlock>
              <ButtonStyled>Buy acces pass</ButtonStyled>
              <OutlineButtonStyled>
                <i className="bi bi-calendar-check"></i>Add to calendar
              </OutlineButtonStyled>
            </ButtonBlock>
            <ImagesBlock>
              <Image
                className="img-styled"
                roundedCircle={true}
                src="https://silicon.createx.studio/assets/img/avatar/08.jpg"
              />
              <Image
                className="img-styled next-img"
                roundedCircle={true}
                src="https://silicon.createx.studio/assets/img/avatar/40.jpg"
              />
              <Image
                className="img-styled another-img"
                roundedCircle={true}
                src="https://silicon.createx.studio/assets/img/avatar/09.jpg"
              />
              <SpanBlock className="d-flex align-items-center">
                <CountBlock>400+</CountBlock> attendees are already with us
              </SpanBlock>
            </ImagesBlock>
          </Col>
        </Row>
      </div>
    );
  }
}
