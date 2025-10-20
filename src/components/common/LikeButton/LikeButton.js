import React from "react";

const LikeButton = ({ like, onToggle, isDarkMode }) => {
  return (
    <button
      //recipe.like->like
      className={`like-button ${like ? "like" : ""} ${
        isDarkMode ? "dark" : ""
      }`}
      onClick={(e) => {
        // 버튼의 기본 동작 막기
        e.preventDefault();
        // 부모 div의 이동을 막기
        e.stopPropagation();
        // 좋아요 상태 토글
        onToggle();
      }}
    >
      {/* 좋아요 상태 확인용 : like 값 표시 */}
      {like ? "❤️ 좋아요" : "🤍 좋아요"}
    </button>
  );
};

export default LikeButton;
