import React from "react";
import clipboardCopy from "clipboard-copy";
import styled from "styled-components";

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

function ClipboardCopyButton({ copiedText }) {
  const handleCopyClick = () => {
    clipboardCopy(copiedText)
      .then(() => {
        alert("텍스트가 클립보드에 복사되었습니다.");
      })
      .catch((error) => {
        console.error("클립보드 복사 실패", error);
      });
  };

  return <Btn onClick={handleCopyClick}>복사하기</Btn>;
}

export default ClipboardCopyButton;
