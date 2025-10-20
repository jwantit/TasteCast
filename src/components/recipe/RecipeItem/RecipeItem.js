import LikeButton from "../../common/LikeButton/LikeButton";
import "./RecipeItem.scss";

const RecipeItem = ({
  recipe,
  onDelete,
  onClick,
  onToggleLike,
  isDarkMode,
}) => {
  return (
    // 25/10/19 01:18 한해찬 수정
    // 다크모드 기능 추가
    <li className={`item ${isDarkMode ? "dark-mode" : ""}`}>
      <div
        className="recipe-item"
        onClick={onClick} // 카드 전체 클릭 시 실행
        style={{ cursor: "pointer" }}
      >
        <img src={recipe.imageUrl} alt={recipe.title} className="image" />
        <div className="content">
          <h3 className="item-recipe-title">{recipe.title}</h3>
          <p className="description">{recipe.description}</p>
        </div>
        <div className="recipe-item-likes">
          {/* 25/10/19 01:16 한해찬 수정 */}
          {/* liked -> like로 수정 */}
          <LikeButton
            like={recipe.like}
            onToggle={() => {
              onToggleLike(recipe.id);
            }}
          />
        </div>
        <button
          className="deleteButton"
          onClick={(e) => {
            //25/10/16 10:03 김지원 수정
            //삭제 버튼 클릭 시 상위 div의 onClick() 이 실행되지 않도록 이벤트 차단
            e.stopPropagation();
            onDelete(recipe.id);
          }}
        >
          삭제
        </button>
      </div>
    </li>
  );
};

export default RecipeItem;
