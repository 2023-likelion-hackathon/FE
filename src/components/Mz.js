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
  border: 1.8px solid #000;
  box-shadow: 2px 2px 8px #b2b2b2;
  font-size: 16px;
  font-weight: 700;
  font-family: Tenda;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 40vw;
    height: 30vw;
  }

  .headertitle {
    height: 14%;
    padding: 2% 0 0 3%;
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
  padding: 2% 2% 0 2%;
`;

const Btn = styled.div`
  background: #43abae;
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

function Mz({ translatedWord }) {
  return (
    <Container>
      <div className="headertitle">결과</div>
      <Main>{translatedWord}</Main>
      <Btn>복사하기</Btn>
    </Container>
  );
}

export default Mz;
