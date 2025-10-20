import React, { useCallback, useEffect, useState } from "react";
import "./RecipeList.scss";
import RecipeItem from "../../components/recipe/RecipeItem/RecipeItem";
import Filters from "../../components/common/Filters/Filters";
import { AutoSizer, List } from "react-virtualized";
import { useNavigate } from "react-router-dom";
import toggleLike from "../../modules/toggleLike";

export const CATEGORIES = ["한식", "중식", "양식", "일식", "기타"];
export const INGREDIENTS = [
  "고수",
  "오이",
  "양파",
  "계란",
  "김치",
  "돼지고기",
  "고추",
  "마늘",
  "버터",
  "크림",
  "밥",
  "생선",
  "간장",
  "와사비",
];
//25/10/16 10:20 김지원: 날씨 번개 추가
export const WEATHERS = ["맑음", "안개", "흐림", "비", "눈", "바람", "번개"];

const ITEMS_PER_ROW = 4;
const ROW_HEIGHT = 420;

const RecipeList = ({ recipes, setRecipes, isDarkMode }) => {
  const navigate = useNavigate();
  const [filteredRecipes, setFilteredRecipes] = useState(recipes); // 필터링된 결과
  const [filters, setFilters] = useState({
    likes: CATEGORIES,
    dislikes: [],
    selWeather: "",
  });
  const [isLikesFilterOn, setIsLikesFilterOn] = useState(false);

  // recipes 값이 변경될 때마다 filteredRecipes 재설정
  useEffect(() => {
    setFilteredRecipes(recipes);
  }, [recipes]);

  //25/10/16 10:03 김지원: 삭제 시 레시피 title 출력되도록 변경
  //레시피 삭제 기능
  const onDelete = (id) => {
    const delRecipe = recipes.find((recipe) => recipe.id === id);
    if (!delRecipe) return;

    const updated = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updated); //실제 레시피 리스트에서 제거
    setFilteredRecipes(updated);
    alert(`"${delRecipe.title}"(이)가 삭제 되었습니다.`);
  };

  // 클릭 시 상세 페이지로 이동
  const onClick = (id) => {
    navigate(`/recipes/${id}`);
  };

  //각 레시피 좋아요 토글 클릭 시 실행되는 이벤트 함수
  const onToggle = (id) => {
    setRecipes(toggleLike(recipes, id));
  };

  const onClickLikesFilter = () => {
    if (isLikesFilterOn) {
      const result = filteredRecipes.filter((r) => r.like === true);
      setFilteredRecipes(result);
    } else {
      setFilteredRecipes(filteredRecipes);
    }
    setIsLikesFilterOn((isToggle) => !isToggle);
  };

  //필터 적용 함수
  const applyFilters = () => {
    const result = recipes.filter((recipe) => {
      //좋아하는 카테고리를 선택하지 않았다면 false로 반환. likes에 레시피 catagory가 들어있다면 true
      const isMatchCatagory =
        filters.likes.length === 0 || filters.likes.includes(recipe.category);

      //레시피 재료(배열)에 싫어하는 음식이 하나로 있으면 true
      const ishasDisliked = recipe.ingredients.some((i) =>
        filters.dislikes.includes(i.name)
      );

      //필터에 선택한 날씨와 레시피의 weather 속성값이 일치하면 true
      const isMatchWeather =
        !filters.selWeather || recipe.weather === filters.selWeather;

      //좋아요만 보기 활성화되어 있으면, 좋아요된 것만 통과. 전체보기일 경우 전체 통과
      const isLikedMatch = isLikesFilterOn ? recipe.like === true : true;
      //네 조건 모두 true 인 레시피들만 result에 저장
      return (
        isMatchCatagory && !ishasDisliked && isMatchWeather && isLikedMatch
      );
    });

    setFilteredRecipes(result);
  };

  // recipes 상태가 바뀔 때 자동 필터 재적용
  useEffect(() => {
    applyFilters();
  }, [recipes, isLikesFilterOn]);

  //필터 초기화 함수
  const resetFilters = () => {
    setFilters({ likes: CATEGORIES, dislikes: [], selWeather: "" }); //필터 초기화

    const result = [];
    if (isLikesFilterOn) {
      const result = recipes.filter((r) => r.like === true);
      setFilteredRecipes(result);
    } else {
      setFilteredRecipes(recipes); //전체 레시피로 업데이트
    }
  };

  //행 갯수 계산
  const rowCount = Math.ceil(filteredRecipes.length / ITEMS_PER_ROW);

  //무한 스크롤(rowRenderer)을 위한 4게의 RecipeItem 을 하나의 div로 묶기
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const items = [];
      for (let i = 0; i < ITEMS_PER_ROW; i++) {
        const itemIndex = index * ITEMS_PER_ROW + i;
        const recipe = filteredRecipes[itemIndex];
        //recipe(item)이 있으면
        if (recipe) {
          items.push(
            <div
              key={recipe.id}
              className={`recipeBox ${isDarkMode ? "dark-mode" : ""}`}
            >
              <RecipeItem
                recipe={recipe}
                onDelete={onDelete}
                onClick={() => onClick(recipe.id)}
                onToggleLike={() => onToggle(recipe.id)}
                isDarkMode={isDarkMode}
              />
            </div>
          );
        } else {
          //마지막 행의 item이 4개가 아니여도 4개로 보이게 빈 영역 추가 (스타일에서 hidden 처리)
          items.push(
            <div
              key={`placeholder-${index}-${i}`}
              className="recipeBox placeholder"
            />
          );
        }
      }

      return (
        <div key={key} style={style} className="row">
          {items}
        </div>
      );
    },
    [filteredRecipes, recipes, onDelete, onClick]
  );

  return (
    // 25/10/19 01:11 한해찬 적용
    // 다크모드 적용
    <div className={`recipeList ${isDarkMode ? "dark-mode" : ""}`}>
      <Filters
        filters={filters}
        setFilters={setFilters}
        onApply={applyFilters}
        onReset={resetFilters}
        isDarkMode={isDarkMode}
      />
      <hr />
      <div className="recipeList">
        {/* 25/10/16 11:10 김지원: 클래스명 recipeCount로 변경 */}
        <div className="recipeList-info">
          <h2 className="recipeCount">
            총 <span>{filteredRecipes.length}</span>개의 맛있는 레시피가
            있습니다.
          </h2>
          <button className="list-likeToggle" onClick={onClickLikesFilter}>
            {!isLikesFilterOn ? "❤️ 좋아하는 레시피만" : "전체 보기"}
          </button>
        </div>
        <div className="recipeGrid">
          <AutoSizer>
            {/* AutoSizer가 부모 컨테이너의 크기를 계산하여 height, width 값을 List에 넘겨줌 */}
            {({ height, width }) => (
              <List
                width={width}
                height={height}
                rowHeight={ROW_HEIGHT}
                rowCount={rowCount}
                rowRenderer={rowRenderer}
                style={{ outline: "none" }}
              />
            )}
          </AutoSizer>
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
