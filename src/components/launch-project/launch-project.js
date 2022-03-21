import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import Row from 'react-bootstrap/Row'

const LPSectionColor = styled.div`
  width: 100%;
  height: 430px;
  background: #1f1c2d;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledH3 = styled.h3`
  color: #bbbac0;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const StyledH2 = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

const ButtonStyled = styled.a`
  background-color: #6366f1;
  border-color: #6366f1;
  color: #fff;
  font-weight: 600;
  line-height: 1.6;
  padding: 0.785rem 2rem;
  font-size: 1rem;
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

export default class LaunchProject extends Component {
  render() {
    return (
      <Row>
        <LPSectionColor>
          <StyledH3>Ready to get started?</StyledH3>
          <StyledH2>Launch Your Project with Us</StyledH2>
          <ButtonStyled>Work with us</ButtonStyled>
        </LPSectionColor>
      </Row>
    );
  }
}
