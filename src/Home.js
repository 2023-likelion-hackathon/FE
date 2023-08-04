import React, { useState } from "react";
import logo from "./img/logo.png";
import facebook from "./img/Facebook.png";
import instagram from "./img/Instagram.png";
import copyright from "./img/Copyright.png";
import { useMediaQuery } from "react-responsive";
import { styled } from "styled-components";
import Basic from "./components/Basic";
import Mz from "./components/Mz";
import arrowRight from "./img/arrow_right.png";
import arrowLeft from "./img/arrow_left.png";

const Wrapper = styled.div`
  min-height: calc(100vh - 15rem);
  margin-top: 3rem;
`;

const Header = styled.div`
  display: flex;
  height: 25vh;
  justify-content: center;
  align-items: center;
  font-family: Tenda;
`;

const Title = styled.div`
  font-size: 40px;
  text-align: center;
`;

const LogoImg = styled.img`
  max-height: 100%;
  margin-right: 20px;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

const Footer = styled.div`
  width: 100%;
  height: 12rem;
  background-color: #fe8c12;
  color: #fff;
  font-family: Tenda;
  border-top: 1.5px solid black;
`;

const Nav = styled.div`
  width: 70vw;
  height: 10vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const NavMenu = styled.div`
  list-style: none;
  display: flex;
  width: 23vw;
  flex-wrap: wrap;
  margin-top: 2vh;
  align-content: flex-start;
`;

const NavList = styled.li`
  margin-right: 20px;
  font-size: 0.9rem;
  margin-bottom: 2vh;
`;

const CopyRight = styled.div`
  display: flex;
  justify-direction: center;
  align-items: center;
  font-size: 0.9rem;
`;

const CopyRightText = styled.p`
  margin-top: 20px;
  color: white;
`;

const Icons = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const Btn = styled.div`
  background: #43abae;
  cursor: pointer;
  height: 7vh;
  width: 3.5vw;
  color: white;
  float: right;
  font-family: Tenda;
  border-radius: 15px 0 0 15px;
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  border-bottom: 1px solid #000;
  box-shadow: -2px 2px 8px #b2b2b2;
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Arrow = styled.img`
  width: 50%;
  height: 60%;
`;

function Home() {
  const [content, setContent] = useState("arrowLeft");

  const handleClick = () => {
    setContent((prevContent) =>
      prevContent === "arrowLeft" ? "arrowRight" : "arrowLeft"
    );
  };

  const isPC = useMediaQuery({ query: "(max-width:)" });
  return (
    <div>
      <Wrapper>
        <Header>
          <LogoImg src={logo} alt="pc_logo" />
          <Title>
            뉴-렌지와 함께면
            <br />
            누구나 뉴-세대 답게
            <br />
            토-크 할 수 있어
          </Title>
        </Header>
        <Btn onClick={handleClick}>
          {content === "arrowLeft" ? (
            <Arrow src={arrowLeft} alt="arrowLeft" />
          ) : (
            <Arrow src={arrowRight} alt="arrowRight" />
          )}
        </Btn>
        <Main>
          <Basic />
          <Mz />
        </Main>
      </Wrapper>
      <Footer>
        <Nav>
          <NavMenu>
            <NavList>이용약관</NavList>
            <NavList>개인정보처리방침</NavList>
            <NavList>책임의 한계와 법적고지</NavList>
            <NavList>고객센터</NavList>
            <NavList>의견제안</NavList>
            <NavList>준수사항</NavList>
            <NavList>품질개선</NavList>
            <NavList>제휴 및 API 이용문의</NavList>
          </NavMenu>
          <Icons>
            <div>
              <img style={{ width: "23px" }} src={facebook} alt="facebook" />
              <img style={{ width: "23px" }} src={instagram} alt="isntagram" />
            </div>
            <CopyRight>
              <img src={copyright} alt="copyright" />
              <CopyRightText>뭐하지 Corp</CopyRightText>
            </CopyRight>
          </Icons>
        </Nav>
      </Footer>
    </div>
  );
}

export default Home;
