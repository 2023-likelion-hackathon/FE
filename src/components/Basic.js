import React, { useState } from "react";
import styled from "styled-components";
import "../font/font.css";

const Container = styled.div`
    width: 27vw;
    height: 17vw;
    margin: 3vh 3vw 0px 3vw;
    background: white;
    border-radius: 19px;
    display: flex;
    flex-direction: column;
    border: 1px solid #000;
    box-shadow: 2px 2px 8px #B2B2B2;
    font-size: 16px;
    font-weight: 700;
    font-family: Tenda;

    .headertitle{
        height: 14%;
        padding: 2% 0 0 3%;
`;

const Main = styled.div`
  border: none;
  border-bottom: 1px solid #000;
  border-top: 1px solid #000;
  width: 100%;
  height: 72%;
  outline: none;
  resize: none;
  box-sizing: border-box;

  .byte {
    display: flex;
    width: 98%;
    height: 15%;
    justify-content: flex-end;
    align-items: flex-end;
    font-size: 15px;
    padding: 0 2% 0 0;
  }
`;

const MainText = styled.textarea`
  border: none;
  width: 100%;
  height: 80%;
  outline: none;
  resize: none;
  box-sizing: border-box;
  padding: 2% 2% 0 2%;

  &::placeholder {
    color: #dedede;
    font-weight: 700;
    font-size: 16px;
    font-family: Tenda;
  }
`;

const Btn = styled.div`
  background: #fe8c12;
  cursor: pointer;
  height: 14%;
  padding: 2% 0 0 0;
  color: white;
  border-radius: 0 0 19px 0;
  margin: 0 0 0 70%;
  border-left: 1px solid #000;
  text-align: center;
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
`;

function Basic() {
  let [inputCount, setInputCount] = useState(0);

  const onInputHandler = (e) => {
    setInputCount(e.target.value.length);
  };

  return (
    <Container>
      <div className="headertitle">뉴-세대 용어</div>
      <Main>
        <MainText
          placeholder="번역할 내용을 입력하세요."
          onChange={onInputHandler}
          maxLength="500"
          style={{ fontFamily: "Tenda" }}
        />
        <div className="byte">
          <span>{inputCount}</span>
          <span>/500 자</span>
        </div>
      </Main>
      <Btn>번역하기</Btn>
    </Container>
  );
}

export default Basic;
