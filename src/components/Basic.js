import React, { useState } from "react";
import styled from "styled-components";
import "../font/font.css";
import Chevron from "../img/Chevron.png";
import { result } from "../api/api";

const Container = styled.div`
  width: 27vw;
  height: 17vw;
  margin: 3vh 3vw 0px 3vw;
  background: white;
  border-radius: 19px;
  display: flex;
  flex-direction: column;
  border: 1.8px solid #000;
  box-shadow: 2px 2px 8px #b2b2b2;
  font-size: 16px;
  font-weight: 700;
  font-family: Tenda;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 40vw;
    height: 30vw;
  }
`;

const Main = styled.div`
  border: none;
  border-bottom: 1.8px solid #000;
  border-top: 1.8px solid #000;
  width: 100%;
  height: 72%;
  outline: none;
  resize: none;
  box-sizing: border-box;
  position: relative;

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
  height: 100%;
  outline: none;
  width: 100%;
  resize: none;
  box-sizing: border-box;

  &::placeholder {
    color: #dedede;
    font-weight: 700;
    font-size: 16px;
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

const Btn = styled.div`
  background: #fe8c12;
  cursor: pointer;
  height: 14%;
  padding: 2% 0 0 0;
  color: white;
  border-radius: 0 0 17px 0;
  margin: 0 0 0 70%;
  border-left: 1.8px solid #000;
  text-align: center;
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
`;

const Dropdowntoggle = styled.div`
  cursor: pointer;
  width: 40%;
  height: 14%;
  border-right: 1.8px solid #000;
  padding: 2% 0 0 3%;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 3% 0 0 3%;
  }
`;

const ListItemUl = styled.div`
  cursor: pointer;
  background: #fff;
  display: flex;
  flex-direction: column;
  height: 32%;
  width: 40%;
  position: absolute;
  margin: 1px;
  padding: 1% 0 0 3%;
  z-index: 1;
  border: 1.5px solid #000;
  border-radius: 8px;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 3% 0 0 3%;
  }
`;

const ListItem = styled.div`
  &:nth-child(2) {
    padding: 3% 0 0 0;
  }
`;

const XBtn = styled.div`
  color: #dedede;
  &:hover {
    color: black;
    cursor: pointer;
  }
`;

const Arrow = styled.img`
  width: 5%;
  height: 15%;
  margin: 0 0 2% 15%;
`;

function Basic({ setIsTranslated }) {
  let [inputCount, setInputCount] = useState(0);
  let [mainText, setMainText] = useState("");

  const onInputHandler = (e) => {
    setInputCount(e.target.value.length);
    setMainText(e.target.value);
  };

  const onBtnClick = () => {
    setMainText(""); // Btn을 누르면 MainText 값을 초기화
    setInputCount(0); // 글자 수도 초기화
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("뉴-세대 용어");

  const options = ["뉴-세대 용어", "표준어"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleBtnClick = () => {
    if (selectedOption == options[0]) {
    } else if (selectedOption == options[1]) {
    }
    setIsTranslated(true);
  };

  return (
    <Container>
      <Dropdowntoggle onClick={toggleDropdown}>
        {selectedOption}
        <Arrow src={Chevron} alt="chevron" />
      </Dropdowntoggle>
      <Main>
        {isOpen && (
          <ListItemUl>
            {options.map((option, index) => (
              <ListItem key={index} onClick={() => handleOptionClick(option)}>
                {option}
              </ListItem>
            ))}
          </ListItemUl>
        )}
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
      </Main>
      <Btn onClick={handleBtnClick}>번역하기</Btn>
    </Container>
  );
}

export default Basic;
