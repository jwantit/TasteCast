import { Link, Outlet } from "react-router-dom";
import "./Layout.css"; // CSS 파일 import
import { useDarkMode } from "../DarkModeContext";
import React from "react";

// 25/10/27 1:59 한해찬 수정
// Dark Mode 적용
const Layout = () => {
  // 25/10/17 14:55 한해찬 수정
  // 다크 모드 추가
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    // 최상위 dvi에 dark 클래스 적용
    <div className={`layout ${isDarkMode ? "dark" : ""}`}>
      <header className="header">
        <div className="header-top">
          <Link to="/" className="title">
            오늘 뭐 먹지?{" "}
            <span role="img" aria-label="meal" className="meal-icon">
              🍽️
            </span>
          </Link>
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>

        <nav className="nav">
          <Link to="/" className="nav-link">
            오늘의 추천
          </Link>
          <Link to="/recipes" className="nav-link">
            전체 레시피
          </Link>
          <Link to="/recipecreate" className="nav-link">
            레시피 추가
          </Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
