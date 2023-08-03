import React from "react";
import logo from "./img/logo.png";
import facebook from "./img/Facebook.png";
import instagram from "./img/Instagram.png";
import copyright from "./img/Copyright.png";
import { useMediaQuery } from "react-responsive";
import { styled } from "styled-components";
import Basic from "./components/Basic";
import Mz from "./components/Mz";

const Wrapper = styled.div`
  height: 65%;
  margin-bottom: 20%;
`;

const Header = styled.div`
  display: flex;
  height: 25vh;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
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
  justify-content : center;
  align-items: center;
  width: 100%;
`;

const Footer = styled.div`
  width: 100%;
  height: 15%;
  background-color: #fe8c12;
  color: #fff;
  font-family: Tenda;
  position: relative;
  transform: translateY(-100%);
  border-top: 1.5px solid black;
`;

const Nav = styled.div`
  width: 70vw;
  height: 18vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const NavMenu = styled.div`
  list-style: none;
  display: flex;
  width: 23vw;
  flex-wrap: wrap;
  margin-top: 10px;
  align-content: flex-start;
`;

const NavList = styled.li`
  margin-right: 20px;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
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

function Home() {
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
        <Main>
          <Basic/>
          <Mz/>
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