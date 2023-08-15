import React, { useState } from "react";
import styled from "styled-components";
import "../font/font.css";

const Main = styled.div`
  border: none;
  border-bottom: 1.8px solid #000;
  border-top: 1.8px solid #000;
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
    font-size: 20px;
    padding: 0 2% 0 0;
  }
`;

const MainText = styled.textarea`
  border: none;
  width: 99%;
  height: 100%;
  outline: none;
  resize: none;
  font-size: 20px;
  box-sizing: border-box;

  &::placeholder {
    color: #dedede;
    font-weight: 700;
    font-size: 20px;
    font-family: Tenda;
  }
`;

const MainDiv = styled.div`
  border: none;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  outline: none;
  resize: none;
  box-sizing: border-box;
  padding: 2% 2% 0 2%;
`;

const InputDiv = styled.div`
  border: none;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  resize: none;
  box-sizing: border-box;
  border-bottom: 1.8px solid #000;
`;

const OutputDiv = styled.div`
  border: none;
  width: 100%;
  height: 50%;
  resize: none;
  box-sizing: border-box;
  padding: 2% 2% 0 2%;
  font-size: 20px;
`;


const XBtn = styled.div`
  color: #dedede;
  font-size: 20px;
  &:hover{
    color: black;
    cursor: pointer;
  }
`;


function AppOutput({setIsTranslated, mainText, setMainText, resultWord, setResultWord}) {
  let [inputCount, setInputCount] = useState(mainText.length);

  const onInputHandler = (e) => {
    setInputCount(e.target.value.length);
    setMainText(e.target.value);
  };

  const onBtnClick = () => {
    setMainText(""); // Btn을 누르면 MainText 값을 초기화
    setInputCount(0); // 글자 수도 초기화
    setResultWord({});
    setIsTranslated(false);
  };

  return (
      <Main>
        <InputDiv>
          <MainDiv>
            <MainText
              placeholder="번역할 내용을 입력하세요."
              value={mainText} // 값 설정
              onChange={onInputHandler}
              maxLength="500"
              style={{ fontFamily: "Tenda" }}
            />
            <XBtn onClick={onBtnClick}>X</XBtn>
          </MainDiv>
          <div className="byte">
            <span>{inputCount}</span>
            <span>/500 자</span>
          </div>
        </InputDiv>
        <OutputDiv>{resultWord.translatedWord}</OutputDiv>
      </Main>
  );
}

export default AppOutput;
