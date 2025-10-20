import React, { useEffect, useRef, useState } from "react";
import "./RecipeFilter.css";
import { useNavigate } from "react-router-dom";
import LikeButton from "../../common/LikeButton/LikeButton";
import toggleLike from "../../../modules/toggleLike";
// RecipeFilter 컴포넌트 : 날씨 기반 레시피 카드 표시 및 좋아요 기능
const RecipeFilter = ({
  recipes,
  setRecipes,
  simplifiedDescription,
  isDarkMode,
}) => {
  // react-router-dom의 기능으로 다른 페이지 이동
  const navigate = useNavigate();

  // 랜덤하게 섞은 4개의 레시피를 저장하는 state
  const [displayedRecipes, setDisplayedRecipes] = useState([]);

  // 마운트 여부 확인용 ref
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (!simplifiedDescription) return;

    //페이지 처음 로드(마운트) 또는 새로고침일 때만 실행
    if (isInitialMount.current) {
      // 1. 날씨 조건에 맞는 레시피 필터링
      const matched = recipes.filter(
        (recipe) => recipe.weather === simplifiedDescription
      );
      // 2. 랜덤 정렬 함수
      const shuffled = [...matched].sort(() => Math.random() - 0.5).slice(0, 4);
      setDisplayedRecipes(shuffled);

      // 마운트 처리 완료
      isInitialMount.current = false;
    }
    // simplifiedDescription은 처음 준비될 때만 실행
  }, [recipes, simplifiedDescription]);

  // 25/10/16 15:09 코드 수정 한해찬
  // 초기값 : liked : false
  // 좋아요 클릭 처리
  const likeToggle = (id) => {
    // 전체 recipes 상태 업데이트
    setRecipes(toggleLike(recipes, id));
    // 2️. 화면에 표시되는 카드 상태만 업데이트(shuffled은 실행되지 않음)
    setDisplayedRecipes((prev) =>
      prev.map((recipe) =>
        recipe.id === id ? { ...recipe, like: !recipe.like } : recipe
      )
    );
  };

  return (
    <>
      {/* 레시피 정보 */}
      <div className="recipe-container">
        {displayedRecipes.length > 0 ? (
          displayedRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="recipe-card"
              // 카드 클릭 시 상세 페이지로 이동
              onClick={() => navigate(`/recipes/${recipe.id}`)}
            >
              <img src={recipe.imageUrl} alt={recipe.title} />
              <div className="recipe-text">
                <h2>{recipe.title}</h2>
                <p>{recipe.description}</p>
                <p className="recipe-ingredients">
                  재료:{" "}
                  {recipe.ingredients
                    ?.map((ingredient) => ingredient.name)
                    .join(", ")}
                </p>

                {/* 좋아요 버튼(true/false) */}
                <div className="recipe-likes">
                  <LikeButton
                    like={recipe.like}
                    onToggle={() => {
                      likeToggle(recipe.id);
                    }}
                    isDarkMode={isDarkMode}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>
            {" "}
            {simplifiedDescription
              ? `${simplifiedDescription} 날씨에 맞는 레시피가 없습니다.`
              : "날씨 정보를 불러오는 중입니다..."}
          </p>
        )}
      </div>
    </>
  );
};

export default RecipeFilter;
