import React from "react";
import facebook from "../img/Facebook.png";
import instagram from "../img/Instagram.png";
import copyright from "../img/Copyright.png";
import { styled } from "styled-components";

const Footer = styled.div`
  width: 100%;
  height: 15vh;
  background-color: #fe8c12;
  color: #fff;
  font-family: Tenda;
  border-top: 1.5px solid black;
  @media screen and (max-width: 767px) {
    background-color: #dedede;
    border-top: 1.5px solid #b2b2b2;
    height: ${(props) => (props.isTranslated ? "20vh" : "35vh")};
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
    width: 70vw;
    position: absolute;
    bottom: 0;
    margin-left: 4vw;
    margin-bottom: 2vh;
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
    align-items: ${(props) => (props.isTranslated ? "start" : "center")};
    margin-left: ${(props) => (props.isTranslated ? "5vw" : "0")};
  }
`;

function BottomBar({ isPC, isMobile, isTablet, isTranslated }) {
  return (
    <div>
      <Footer isTranslated={isTranslated}>
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
          <div>
            <Icons isTranslated={isTranslated}>
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
          </div>
        )}
      </Footer>
    </div>
  );
}

export default BottomBar;
