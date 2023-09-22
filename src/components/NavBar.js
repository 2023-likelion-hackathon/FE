import React from "react";
import logo from "../img/logo.png";
import { styled } from "styled-components";
import Button from "./Button";

const Header = styled.header`
  display: flex;
  height: 25vh;
  justify-content: center;
  align-items: center;
  font-family: Tenda;
  @media screen and (max-width: 1023px) {
    border-bottom: 1px solid black;
    height: 8vh;
    justify-content: space-between;
    box-shadow: -2px 2px 8px #b2b2b2;
  }
`;

const Inside = styled.div`
  @media screen and (max-width: 1023px) {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: left;
  }
`;

const Title = styled.div`
  font-size: 40px;
  text-align: center;
  @media screen and (max-width: 1023px) {
    font-size: 30px;
    margin-top: 0.7rem;
  }
`;

const LogoImg = styled.img`
  max-height: 100%;
  margin-right: 20px;
  @media screen and (max-width: 1023px) {
    max-height: 70%;
    margin-left: 2rem;
  }
`;

function NavBar({ isPC, isMobile, isTablet, handleClick, content }) {
  return (
    <div>
      {isPC && (
        <Header>
          <LogoImg src={logo} alt="pc_logo" />
          <Title>
            엠제로와 함께면
            <br />
            모르는 MZ 용어가 Zero
            <br />
            MZ와의 거리가 Zero
          </Title>
        </Header>
      )}
      {(isTablet || isMobile) && (
        <Header>
          <Inside>
            <LogoImg src={logo} alt="pc_logo" />
            <Title>MZero</Title>
          </Inside>
          <div>
            <Button handleClick={handleClick} content={content} />
          </div>
        </Header>
      )}
    </div>
  );
}

export default NavBar;
