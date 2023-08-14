import React from "react";
import styled from "styled-components";
import "../font/font.css";


const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  font-size: 16px;
  margin: 3vh 17vw 3vh 17vw;
  padding: 0 0 0 2vw;
  font-family: Tenda;

`;

const CoinedWord = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  font-size: 13px;
  color: #B2B2B2;
  font-family: Tenda;
`;

const Subword = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: flex-start;
font-size: 13px;
color: #B2B2B2;
font-family: Tenda;
`;

const MainFirst = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #FE8C12;
`;
const MainSecond = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #43ABAE;
`;

const Mean = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: black;
`;


function Meaning({resultWord}) {
  return (
  <Container>
    <CoinedWord>
      <MainFirst>{resultWord.coinedWord}</MainFirst>
      <Mean>{resultWord.coinedWordMeaning}</Mean>
      <div>{resultWord.coinedWordExample}</div>
      <div>{resultWord.coinedWordUrl}</div>
    </CoinedWord>
    <Subword>
      <MainSecond>{resultWord.subWord}</MainSecond>
      <Mean>{resultWord.subWordMeaning}</Mean>
      <div>{resultWord.subWordExample}</div>
    </Subword>
  </Container>
  );
}
export default Meaning;
