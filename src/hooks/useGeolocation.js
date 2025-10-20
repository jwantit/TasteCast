import { useEffect, useState } from "react";

// 커스텀 훅: 사용자의 현재 위치 정보를 가져옴
export default function useGeolocation() {
  // 상태: 위도와 경도를 저장(초기값null)
  const [coords, setCoords] = useState({ latitude: null, longitude: null });
  // 상태: 에러 메시지 저장
  const [error, setError] = useState(null);

  useEffect(() => {
    // 브라우저가 Geolocation API를 지원하지 않는 경우
    if (!navigator.geolocation) {
      setError("이 브라우저는 위치 정보를 지원하지 않습니다.");
      return;
    }
    // 브라우저 Geolocation API를 사용해 현재 위치 가져오기
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // 위치 정보 성공적으로 가져왔을 때 coords 상태 업데이트
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      // 에러 발생 시 error 상태 업데이트
      (err) => setError(err.message)
    );
    //빈 배열: 컴포넌트 마운트 시 한 번만 실행
  }, []);
  // 훅 반환: 현재 위치와 에러 메시지
  return { coords, error };
}
