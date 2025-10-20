import React, { useEffect } from "react";
import "./Home.css";
import WeatherInfo from "../../components/common/WeatherInfo/WeatherInfo";
import RecipeFilter from "../../components/recipe/RecipeFilter/RecipeFilter";
import transWeatherDescription from "../../modules/transWeatherDescription";
import useGeolocation from "../../hooks/useGeolocation";
import useKakaoDistrict from "../../hooks/useKakaoDistrict";
import useWeather from "../../hooks/useWeather";

// 25/10/16 11:08 한해찬 수정
// 코드를 기능별로 컴포넌트 및 커스텀 hook으로 나눔
// ------------------------------------------- //

// Home 컴포넌트 : 날씨 기반 레시피 추천 페이지
const Home = ({ recipes, setRecipes, isDarkMode }) => {
  // 현재 위치 좌표 가져오기
  const { coords } = useGeolocation();

  // 위도/경도를 이용해 현재 구/동 정보를 Kakao Map API를 이용하여 가져오기
  const district = useKakaoDistrict(coords.latitude, coords.longitude);

  // 위도/경도로 현재 날씨 데이터 가져오기
  const weatherData = useWeather(coords.latitude, coords.longitude);

  // 날씨 description을 한글로 변환
  const simpleDescription = transWeatherDescription(
    // ?. null 또는 undefined로 반환해서 오류를 발생시키 않음
    // [0] : 현재 날씨 정보를 담고 있음
    // description값이 "clear sky"면 "clear sky"를 반환
    weatherData?.weather?.[0]?.description || "정보 없음"
  );

  // recipes가 바뀔 때마다 콘솔에 출력
  useEffect(() => {
    console.log("현재 recipes 상태:", recipes);
  }, [recipes]);

  // 위치 좌표 또는 날씨 데이터가 없으면 렌더링하지 않음
  if (!coords.latitude || !weatherData) {
    return;
  }

  return (
    <div className={isDarkMode ? "home dark" : "home"}>
      <WeatherInfo
        district={district}
        weatherData={weatherData}
        simplifiedDescription={simpleDescription}
        isDarkMode={isDarkMode}
      />
      {/* recipes 배열만 전달, 내부 filteredRecipes는 RecipeFilter에서 독립 관리 */}
      <RecipeFilter
        recipes={recipes}
        setRecipes={setRecipes}
        // 번역된 날씨 설명
        simplifiedDescription={simpleDescription}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default Home;
