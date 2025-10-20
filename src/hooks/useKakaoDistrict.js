import axios from "axios";
import { useEffect, useState } from "react";

// 커스텀 훅 : 위도와 경도를 받아 해당 위치의 행정구역을 반환
export default function useKakaoDistrict(latitude, longitude) {
  // 상태: 행정구역 이름 저장
  const [district, setDistrict] = useState("");

  useEffect(() => {
    if (!latitude || !longitude) return;

    const fetchDistrict = async () => {
      try {
        const myKakaoKey = "5181242ef139662b62dcb7b691d43139";
        const response = await axios.get(
          `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${longitude}&y=${latitude}`,
          {
            headers: { Authorization: `KakaoAK ${myKakaoKey}` },
          }
        );

        const region = response.data.documents[0]?.address?.region_2depth_name;
        setDistrict(region || "");
      } catch (err) {
        console.error("행정구역 조회 실패:", err);
      }
    };

    fetchDistrict();
  }, [latitude, longitude]);

  return district;
}
