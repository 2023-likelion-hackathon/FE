import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { styled } from "styled-components";
import Mz from "./components/Mz";
import Basic from "./components/Basic";
import Apptranslation from "./components/Apptranslation";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import BottomBar from "./components/BottomBar";

import Sidebar from "./components/Sidebar";

import Meaining from "./components/Meaning";
import { result } from "./api/api";

const Wrapper = styled.div`
  min-height: calc(100vh - 3rem - 15vh);
  margin-top: 3rem;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin-top: 0;
    min-height: calc(100vh - 15vh);
  }
  @media screen and (max-width: 768px) {
    margin-top: 0;
    min-height: calc(100vh - 35vh);
    min-height: ${(props) =>
      props.isTranslated ? "calc(100vh - 20vh)" : "calc(100vh - 35vh)"};
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 3vh;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin-top: 3vh;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5%;
  }
`;

const Line = styled.div`
  margin: 0 auto;
  width: 60%;
  border-bottom: 1.5px solid black;
`;

// 버튼 디자인 (사이드바 연동)
const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  transform: ${(props) => (props.isSidebarOpen ? "" : "translateX(18vw);")};
  transition: all 0.5s ease-in-out;

  @media screen and (max-width: 1023px) {
    top: 8vh;
    transform: ${(props) => (props.isSidebarOpen ? "" : "translateX(50vw);")};
    transition: all 0.7s ease-in-out;
  }
`;

function Home() {
  const isPC = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const [content, setContent] = useState("arrowLeft");
  const [isTranslated, setIsTranslated] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  let [mainText, setMainText] = useState("");
  const [translatedWord, setTranslatedWord] = useState("");
  let [inputCount, setInputCount] = useState(0);

  const handleClick = () => {
    setContent((prevContent) =>
      prevContent === "arrowLeft" ? "arrowRight" : "arrowLeft"
    );
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleBtnClick = async () => {
    const inputString = mainText;
    const inputData = { inputString: inputString };
    const translatedResult = await result(inputData);
    if (translatedResult && translatedResult.status == 200) {
      setIsTranslated(true);
      const translatedWord = translatedResult.data.translatedWord;
      setTranslatedWord(translatedWord);
    } else {
      setIsTranslated(false);
      setMainText("");
      setInputCount(0);
    }
  };

  const onBtnClick = () => {
    setMainText(""); // Btn을 누르면 MainText 값을 초기화
    setInputCount(0); // 글자 수도 초기화
    setTranslatedWord("");
  };

  return (
    <div>
      <Wrapper isTranslated={isTranslated}>
        <NavBar
          isPC={isPC}
          isMobile={isMobile}
          isTablet={isTablet}
          handleClick={handleClick}
          content={content}
        />

        {isPC && (
          // 사이드바 추가
          <ButtonContainer isSidebarOpen={isSidebarOpen}>
            <Button handleClick={handleClick} content={content} />
            <Sidebar />
          </ButtonContainer>
        )}

        {(isPC || isTablet) && (
          <Main>
            <Basic
              handleBtnClick={handleBtnClick}
              mainText={mainText}
              setMainText={setMainText}
              onBtnClick={onBtnClick}
              inputCount={inputCount}
              setInputCount={setInputCount}
            />
            <Mz translatedWord={translatedWord} />
          </Main>
        )}
        {isMobile && (
          <Main>
            <Apptranslation
              isTranslated={isTranslated}
              setIsTranslated={setIsTranslated}
            />
          </Main>
        )}
        {isPC && <Line></Line>}
        {(isTablet || isMobile) && (
          // 사이드바 추가
          <ButtonContainer isSidebarOpen={isSidebarOpen}>
            <Sidebar />
          </ButtonContainer>
        )}
        {isTranslated && <Meaining></Meaining>}
      </Wrapper>
      <BottomBar
        isPC={isPC}
        isMobile={isMobile}
        isTablet={isTablet}
        isTranslated={isTranslated}
      />
    </div>
  );
}

export default Home;
