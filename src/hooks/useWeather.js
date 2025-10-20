import axios from "axios";
import { useEffect, useState } from "react";

export default function useWeather(latitude, longitude) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (!latitude || !longitude) return;

    const fetchWeather = async () => {
      try {
        const apiKey = "af13879ad6b38a34dc000a5f2bc5df90";
        const lang = "en";

        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=${lang}&units=metric`
        );

        setWeatherData(response.data);
      } catch (err) {
        console.error("날씨 데이터 로드 실패:", err);
      }
    };

    fetchWeather();
  }, [latitude, longitude]);

  return weatherData;
}
