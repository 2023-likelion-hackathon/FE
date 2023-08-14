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
  font-weight: 700;
  font-family: Tenda;
`;

const CoinedWord = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  font-size: 13px;
  font-family: Tenda;
`;

const Subword = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  font-size: 16px;
  font-weight: 700;
  font-family: Tenda;
`;

const Main = styled.div`
  font-weight: 700;
  font-size: 16px;
`;


function Meaining({resultWord}) {
  return (
  <Container>
    <CoinedWord>
      <Main>{resultWord.coinedWord}</Main>
      <div>{resultWord.coinedWordMeaning}</div>
      <div>{resultWord.coinedWordExample}</div>
      <div>{resultWord.coinedWordUrl}</div>
    </CoinedWord>
    <Subword>
      <Main>{resultWord.subWord}</Main>
      <div>{resultWord.subWordMeaning}</div>
      <div>{resultWord.subWordExample}</div>
    </Subword>
  </Container>
  );
}
export default Meaining;
