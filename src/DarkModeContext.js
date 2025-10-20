import React, { createContext, useState, useEffect, useContext } from "react";

// 1. Context 생성
const DarkModeContext = createContext();

// 2. Provider 컴포넌트
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 브라우저 테마 저장/불러오기 가능
  useEffect(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(saved);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      // 브라우저 저장
      localStorage.setItem("darkmode", !prev);
      return !prev;
    });
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// 3. 커스텀 Hook
export const useDarkMode = () => useContext(DarkModeContext);
