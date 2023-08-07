import React, { useState } from "react";
import styled from "styled-components";
import "../font/font.css";
import Vector from "../img/Vector.png";
import AppInput from "./AppInput";
import AppOutput from "./AppOutput";

const Container = styled.div`
  width: 90vw;
  height: 40vh;
  background: white;
  border-radius: 19px;
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  box-shadow: 2px 2px 8px #b2b2b2;
  font-size: 16px;
  font-weight: 700;
  font-family: Tenda;
`;

const Header = styled.div`
  width: 100%;
  height: 14%;
  display: flex;
  border-radius: 19px 19px 0 0;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  flex-direction: row;
  font-size: 25px;
  font-weight: 700;
  font-family: Tenda;
`;

const Btn = styled.div`
  background: ${(props) => (props.isTranslated ? "#43ABAE" : "#fe8c12")};
  cursor: pointer;
  height: 14%;
  padding: 4% 0 0 0;
  color: white;
  border-radius: 0 0 19px 0;
  margin: 0 0 0 70%;
  border-left: 1px solid #000;
  font-size: 25px;
  text-align: center;
  font-weight: 700;
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
  @media screen and (max-width: 768px) {
    padding: 3% 0 0 0;
  }
`;

const Arrow = styled.img`
  width: 2%;
  height: 23%;
`;

const Headertitle = styled.div`
  flex: 1;
  text-align: center;
`;

function Apptranslation({ isTranslated, setIsTranslated }) {
  const [isArrowClicked, setIsArrowClicked] = useState(false);

  const toggleArrow = () => {
    setIsArrowClicked(!isArrowClicked);
  };

  const onBtnClick = () => {
    setIsTranslated(true); // 번역 상태를 true로 설정
  };

  return (
    <Container>
      <Header>
        {isArrowClicked ? (
          <>
            <Headertitle>표준어</Headertitle>
            <Arrow src={Vector} alt="vector" onClick={toggleArrow} />
            <Headertitle>뉴-세대 용어</Headertitle>
          </>
        ) : (
          <>
            <Headertitle>뉴-세대 용어</Headertitle>
            <Arrow src={Vector} alt="vector" onClick={toggleArrow} />
            <Headertitle className="headertitle">표준어</Headertitle>
          </>
        )}
      </Header>
      {isTranslated ? (
        <>
          <AppOutput onTranslate={() => setIsTranslated(false)} />
          <Btn isTranslated={isTranslated}>복사하기</Btn>
        </>
      ) : (
        <>
          <AppInput />
          <Btn isTranslated={isTranslated} onClick={onBtnClick}>
            번역하기
          </Btn>{" "}
        </>
      )}
    </Container>
  );
}

export default Apptranslation;
