// openWeatherMap에서 받아온 API의 description값을 한글로 번역 및 압축적인 의미로 변경
// 예시) "clear sky" -> "맑음", "light rain" -> "비"
const transWeatherDescription = (description) => {
  // 날씨 키-값 매핑 테이블
  const weatherMap = {
    // Clear
    "clear sky": "맑음",
    "few clouds": "맑음",

    // Clouds
    "scattered clouds": "흐림",
    "broken clouds": "흐림",
    "overcast clouds": "흐림",

    // Thunderstorm
    "thunderstorm with light rain": "번개",
    "thunderstorm with rain": "번개",
    "thunderstorm with heavy rain": "번개",
    "light thunderstorm": "번개",
    thunderstorm: "번개",
    "heavy thunderstorm": "번개",
    "ragged thunderstorm": "번개",
    "thunderstorm with light drizzle": "번개",
    "thunderstorm with drizzle": "번개",
    "thunderstorm with heavy drizzle": "번개",

    // Drizzle
    "light intensity drizzle": "비",
    drizzle: "비",
    "heavy intensity drizzle": "비",
    "light intensity drizzle rain": "비",
    "drizzle rain": "비",
    "heavy intensity drizzle rain": "비",
    "shower rain and drizzle": "비",
    "heavy shower rain and drizzle": "비",
    "shower drizzle": "비",

    // Rain
    "light rain": "비",
    "moderate rain": "비",
    "heavy intensity rain": "비",
    "very heavy rain": "비",
    "extreme rain": "비",
    "freezing rain": "비",
    "light intensity shower rain": "비",
    "shower rain": "비",
    "heavy intensity shower rain": "비",
    "ragged shower rain": "비",

    // Snow
    "light snow": "눈",
    snow: "눈",
    "heavy snow": "눈",
    sleet: "눈",
    "light shower sleet": "눈",
    "shower sleet": "눈",
    "light rain and snow": "눈",
    "rain and snow": "눈",
    "light shower snow": "눈",
    "shower snow": "눈",
    "heavy shower snow": "눈",

    // Atmosphere
    mist: "안개",
    smoke: "안개",
    haze: "안개",
    "sand/dust whirls": "안개",
    fog: "안개",
    sand: "안개",
    dust: "안개",
    "volcanic ash": "안개",
    // Wind
    squalls: "바람",
    tornado: "바람",
    wind: "바람",
  };

  // description이 없으면 기본값 "알 수 없음" 반환
  if (!description) return "알 수 없음";

  // 소문자로 변환하여 대소문자 차이 제거
  const lowerDesc = description.toLowerCase();

  // 정확한 키 매칭이 있으면 바로 반환
  if (weatherMap[lowerDesc]) return weatherMap[lowerDesc];

  // 부분 문자열 매칭
  // Object는 weatherMap 객체를 배열로 반환한다.
  for (const [key, value] of Object.entries(weatherMap)) {
    // lowerDesc이 key를 포함하고 있는지 확인
    if (lowerDesc.includes(key.toLowerCase())) return value;
  }
  // 매칭되는 값이 없으면 원본 반환
  return description;
};

export default transWeatherDescription;
