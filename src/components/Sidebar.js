import React, { useEffect, useRef, useState } from "react";
import styles from "./css/sidebar.module.css";

const Sidebar = ({ width = 280, children }) => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(-width);
  const side = useRef();

  // button 클릭 시
  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(-width);
      setOpen(false);
    }
  };

  // 사이드바 외부 클릭시 닫는 함수
  const handleClose = async (e) => {
    let sideArea = side.current;
    let sideCildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideCildren)) {
      await setX(-width);
      await setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  });

  return (
    <div className={styles.container}>
      <div
        ref={side}
        className={styles.sidebar}
        style={{
          width: `${width}px`,
          height: "100%",
          transform: `translatex(${-xPosition}px)`,
        }}
      >
        <button onClick={() => toggleMenu()} className={styles.button}>
          {isOpen ? (
            <span>X</span>
          ) : (
            <img
              src="img/arrow_right.png"
              alr="contact open button"
              className={styles.openBtn}
            />
          )}
        </button>
        <div className={styles.content}>
          {children}
          <div>
            번역기록
            {/* (count / 20) */}
          </div>
          <div>
            전체삭제
            {/* (display: none) */}
          </div>
          const 기록 = [] const recordingList = 기록.map((record) => (
          <li>{record}</li>)); return(
          <ul>{recordingList}</ul>)
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
