import { styled } from "styled-components";
import { useState, useEffect } from "react";
import { getSearchedData } from "../api/api";

const Container = styled.div`
  width: 18vw;
  height: 85vh;
  background-color: white;
  top: 0;
  right: 0;
  border-left: 1px solid black;
  font-family: Tenda;
  overflow: auto;

  @media screen and (max-width: 1023px) {
    width: 50vw;
    height: 92vh;
    z-index: 2;
  }
`;

const Countcontainer = styled.div`
  width: 100%;
  height: 4vh;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-around;
  padding-top: 0.3vh;
`;
const Contentscontainer = styled.div`
  width: 100%;
  height: 7vh;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2%;
`;

const initialData = [{ coinedWord: "더미", subWord: "더미데이터" }];

const History = styled.h1`
  font-size: 1rem;
  margin-top: auto;
  margin-bottom: auto;

  @media screen and (max-width: 1023px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 767px) {
    font-size: 0.7rem;
  }
`;

const Delete = styled.p`
  color: lightgray;
  font-size: 0.8rem;
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;
  @media screen and (max-width: 1023px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 767px) {
    font-size: 0.7rem;
  }
`;

const Mztext = styled.p`
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 0;

  @media screen and (max-width: 1023px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 767px) {
    font-size: 1rem;
  }
`;

const Xtext = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  color: lightgray;

  @media screen and (max-width: 1023px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 767px) {
    font-size: 0.8rem;
  }
`;

const Emptytext = styled.p`
  color: gray;
  text-align: center;
  margin-top: 3vh;
`;

function Sidebar() {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getSearchedData();
        setData(result); // API에서 가져온 데이터로 상태 업데이트
        console.log(result);
      } catch (error) {
        console.error("실패", error);
      }
    };

    fetchData();
  }, [data]);

  const handleDeleteAll = () => {
    setData([]);
  };

  return (
    <Container>
      <Countcontainer>
        <History>번역기록 ( {data.length} / 20)</History>
        <Delete onClick={handleDeleteAll}>전체삭제</Delete>
      </Countcontainer>

      {data.length > 0 ? (
        data.map((item, index) => (
          <Contentscontainer key={index}>
            <Mztext>{item.coinedWord}</Mztext>
            <Xtext>{item.subWord}</Xtext>
          </Contentscontainer>
        ))
      ) : (
        <Emptytext>번역한 기록이 없습니다.</Emptytext>
      )}
    </Container>
  );
}

export default Sidebar;
