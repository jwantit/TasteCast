// dummyRecipes_2500.js
// 2500개의 더미 레시피 데이터를 자동 생성하는 단일 스크립트
// React에서 import 시 즉시 2500개 생성됨

const categories = ["한식", "중식", "양식", "일식", "기타"];
const weathers = ["맑음", "안개", "흐림", "비", "눈", "바람", "번개"];
const ingredientsPool = [
  "밥",
  "면",
  "양파",
  "계란",
  "김치",
  "돼지고기",
  "파",
  "마늘",
  "오이",
  "버터",
  "크림",
  "두부",
  "생선",
  "고추",
  "간장",
  "와사비",
  "햄",
  "당근",
  "감자",
  "양배추",
  "소고기",
  "닭고기",
  "고추장",
  "치즈",
  "토마토",
  "버섯",
];

// 랜덤 헬퍼
const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const dummyRecipes = Array.from({ length: 2500 }, (_, i) => {
  const id = (i + 1).toString();
  const category = rand(categories);
  const weather = rand(weathers);
  const title = `${category} 요리 ${i + 1}`;
  const description = `${weather} 날에 어울리는 ${category} 메뉴 ${i + 1}`;
  const ingredients = Array.from({ length: randomInt(2, 4) }, () => ({
    name: rand(ingredientsPool),
    count: 1,
  }));
  const recipe = `${ingredients
    .map((i) => i.name)
    .join(", ")}를(을) 사용한 ${category} 조리법입니다.`;
  const imageUrl = `https://picsum.photos/seed/recipe${i + 1}/600/400`;

  return {
    id,
    title,
    description,
    imageUrl,
    ingredients,
    recipe,
    category,
    weather,
    like: Math.random() < 0.25, // 25% 확률로 좋아요 true
  };
});

export default dummyRecipes;
