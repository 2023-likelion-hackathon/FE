import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { styled } from "styled-components";
import Mz from "./components/Mz";
import Basic from "./components/Basic";
import Apptranslation from "./components/Apptranslation";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import BottomBar from "./components/BottomBar";

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

function Home() {
  const isPC = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const [content, setContent] = useState("arrowLeft");
  const [isTranslated, setIsTranslated] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleClick = () => {
    setContent((prevContent) =>
      prevContent === "arrowLeft" ? "arrowRight" : "arrowLeft"
    );
    setIsSidebarOpen(!isSidebarOpen);
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
        {isPC && <Button handleClick={handleClick} content={content} />}
        {(isPC || isTablet) && (
          <Main>
            <Basic />
            <Mz />
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
