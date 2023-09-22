import React from "react";
import { styled } from "styled-components";
import arrowRight from "../img/arrow_right.png";
import arrowLeft from "../img/arrow_left.png";

const Btn = styled.div`
  background: #43abae;
  cursor: pointer;
  height: 7vh;
  width: 3.5vw;
  color: white;
  float: right;
  font-family: Tenda;
  border-radius: 15px 0 0 15px;
  border-top: 1.8px solid #000;
  border-left: 1.8px solid #000;
  border-bottom: 1.8px solid #000;
  box-shadow: -2px 2px 8px #b2b2b2;
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
  display: flex;
  justify-content: center;
  align-items: center;

  /* 데스크탑 버튼 마진 */
  margin-top: 4vh;

  @media screen and (max-width: 1023px) {
    height: 8vh;
    width: 8vh;
    border-top: 0;
    border-bottom: 0;
    border-radius: 0;
    box-shadow: none;

    // 태블릿
    margin-top: 0vh;
  }
`;

const Arrow = styled.img`
  width: 50%;
  height: 60%;
`;

function Button({ handleClick, content }) {
  return (
    <div>
      <Btn onClick={handleClick}>
        {content === "arrowLeft" ? (
          <Arrow src={arrowLeft} alt="arrowLeft" />
        ) : (
          <Arrow src={arrowRight} alt="arrowRight" />
        )}
      </Btn>
    </div>
  );
}

export default Button;
