import React, { useState } from "react";
import logo from "./img/logo.png";
import facebook from "./img/Facebook.png";
import instagram from "./img/Instagram.png";
import copyright from "./img/Copyright.png";
import { useMediaQuery } from "react-responsive";
import { styled } from "styled-components";
import arrowRight from "./img/arrow_right.png";
import arrowLeft from "./img/arrow_left.png";
import Mz from "./components/Mz";
import Basic from "./components/Basic";
import Apptranslation from "./components/Apptranslation";


const Wrapper = styled.div`
  min-height: calc(100vh - 11rem);
  margin-top: 3rem;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin-top: 0;
    min-height: calc(100vh - 8rem);
  }
  @media screen and (max-width: 768px) {
    margin-top: 0;
    min-height: calc(100vh - 20rem);
  }
`;

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

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 3vh;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin-top: 3vh;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5%;
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 8rem;
  background-color: #fe8c12;
  color: #fff;
  font-family: Tenda;
  border-top: 1.5px solid black;
  @media screen and (max-width: 767px) {
    background-color: #dedede;
    border-top: 1.5px solid #b2b2b2;
    height: 20rem;
  }
`;

const Nav = styled.div`
  width: 70vw;
  height: 10vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media screen and(min-width: 768px) and (max-width: 1023px) {
    width: 90%;
    margin: 0 auto;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavMenu = styled.div`
  list-style: none;
  display: flex;
  width: 20vw;
  flex-wrap: wrap;
  margin-top: 2vh;
  align-content: flex-start;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 40vw;
  }
  @media screen and (max-width: 767px) {
    width: 50vw;
  }
`;

const NavList = styled.li`
  margin-right: 1.5rem;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

const CopyRight = styled.div`
  display: flex;
  justify-direction: center;
  align-items: center;
  font-size: 0.9rem;
  margin-top: -0.5rem;
  @media screen and (max-width: 767px) {
  }
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
  @media screen and (max-width: 767px) {
    text-align: center;
  }
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
  @media screen and (max-width: 1023px) {
    height: 8vh;
    width: 8vh;
    border-top: 0;
    border-bottom: 0;
    border-radius: 0;
    box-shadow: none;
  }
`;

const Arrow = styled.img`
  width: 50%;
  height: 60%;
`;

const Line = styled.div`
  margin: 0 auto;
  width: 60%;
  border-bottom: 1.5px solid black;
`;

function Home() {
  const isPC = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const [content, setContent] = useState("arrowLeft");

  const handleClick = () => {
    setContent((prevContent) =>
      prevContent === "arrowLeft" ? "arrowRight" : "arrowLeft"
    );
  };

  return (
    <div>
      <Wrapper>
        {isPC && (
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
        )}
        {(isTablet || isMobile) && (
          <Header>
            <Inside>
              <LogoImg src={logo} alt="pc_logo" />
              <Title>MZero</Title>
            </Inside>
            <div>
              <Btn onClick={handleClick}>
                {content === "arrowLeft" ? (
                  <Arrow src={arrowLeft} alt="arrowLeft" />
                ) : (
                  <Arrow src={arrowRight} alt="arrowRight" />
                )}
              </Btn>
            </div>
          </Header>
        )}
        {isPC && (
          <Btn onClick={handleClick}>
            {content === "arrowLeft" ? (
              <Arrow src={arrowLeft} alt="arrowLeft" />
            ) : (
              <Arrow src={arrowRight} alt="arrowRight" />
            )}
          </Btn>
        )}
        {(isPC || isTablet) && (
          <Main>
            <Basic />
            <Mz />
          </Main>
        )}
        {isMobile && (
          <Main>
            <Apptranslation/>
          </Main>
        )}
        {isPC && <Line></Line>}
      </Wrapper>
      <Footer>
        {(isPC || isTablet) && (
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
                <img
                  style={{ width: "23px" }}
                  src={instagram}
                  alt="isntagram"
                />
              </div>
              <CopyRight>
                <img src={copyright} alt="copyright" />
                <CopyRightText>뭐하지 Corp</CopyRightText>
              </CopyRight>
            </Icons>
          </Nav>
        )}
        {isMobile && (
          <Nav>
            <Icons>
              <div>
                <img style={{ width: "23px" }} src={facebook} alt="facebook" />
                <img
                  style={{ width: "23px" }}
                  src={instagram}
                  alt="isntagram"
                />
              </div>
              <CopyRight>
                <img src={copyright} alt="copyright" />
                <CopyRightText>뭐하지 Corp</CopyRightText>
              </CopyRight>
            </Icons>
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
          </Nav>
        )}
      </Footer>
    </div>
  );
}

export default Home;
