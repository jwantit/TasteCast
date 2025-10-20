import React from "react";
import "./WeatherInfo.css";

// WeatherInfo 컴포넌트 : 현재 위치의 날씨 정보 표시
// district : 카카오 API로 가져온 지역명
// weatherData : openWeather API로 가져온 날씨 데이터
// simlifiedDescription : 날씨 설명을 한글 혹은 간단한 형태로 변환한 문자열

const WeatherInfo = ({
  district,
  weatherData,
  simplifiedDescription,
  isDarkMode,
}) => {
  // weatherData가 없으면 렌더링하지 않음
  if (!weatherData) return;

  // 날씨 설명 기반 추천 문구 매핑
  const getRecommendation = (desc) => {
    switch (desc) {
      case "맑음":
        return "☀️ 햇살 좋은 날엔 산뜻한 음식 어때요?";
      case "안개":
        return "🌫️ 안개 낀 날엔 편안한 음식이 좋아요.";
      case "흐림":
        return "☁️ 흐린 날엔 기분전환할 든든한 음식이 어울려요.";
      case "비":
        return "🌧️ 비 오는 날엔 따뜻한 국물요리가 최고죠!";
      case "눈":
        return "❄️ 눈 내리는 날엔 포근한 음식으로 몸을 녹여봐요.";
      case "바람":
        return "💨 바람 부는 날엔 따뜻한 찌개나 전골이 딱이에요.";
      case "번개":
        return "⚡ 번개 치는 날엔 집콕하며 든든한 한 끼 즐겨봐요.";
      default:
        return "🍽️ 오늘은 이런 메뉴 어때요?";
    }
  };

  return (
    <div className={`weather-panel ${isDarkMode ? "dark" : ""}`}>
      {/* 날씨 정보 패널*/}
      {/* 현재 날씨 표시 */}
      <h3 className="weather-title">🌤 {district} 현재 날씨</h3>

      <div className="weather-info">
        {/* 날씨 아이콘 표시(openWeatherMap API)  */}
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt={weatherData?.weather?.[0]?.description || "날씨 아이콘"}
          className="weather-icon"
        />
        {/* 간단한 날씨 설명 표시 */}
        <p className="weather-desc">{simplifiedDescription}</p>
      </div>

      {/* 날씨 설명 기반 추천 문구 */}
      <p className="weather-recommend">
        {getRecommendation(simplifiedDescription)}
      </p>
    </div>
  );
};

export default WeatherInfo;
