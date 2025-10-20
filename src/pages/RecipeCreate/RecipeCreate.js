import "./RecipeCreate.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ImageUploadBox from "../../components/common/ImageUploadBox/ImageUploadBox";
import IngredientManager from "../../components/recipe/IngredientManager/IngredientManager";
// 25/10/17 15:58 한해찬 수정
// 다크모드 적용
// 부모로부터 변수 isDarkMode 받음
const RecipeCreate = ({ recipes, setRecipes, isDarkMode }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    ingredients: [],
    recipe: "",
    weather: "",
    imageUrl: "https://via.placeholder.com/200",
    category: "", // ✅ 음식 종류 추가
  });

  // ✅ 입력 변경 처리
  const handleChange = (e) => {
    const { name, value } = e.target;

    // 음식 이름일 경우 '-' 제거만 적용 (한글 필터 제거)
    if (name === "title") {
      const clean = value.replace(/-/g, "");
      setFormData({ ...formData, [name]: clean });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  <IngredientManager
    ingredients={formData.ingredients}
    setIngredients={(updated) =>
      setFormData({ ...formData, ingredients: updated })
    }
  />;

  // ✅ 제출 처리
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      alert("음식 이름을 입력해주세요!");
      return;
    }
    if (!formData.category) {
      alert("음식 종류를 선택해주세요!");
      return;
    }
    if (!formData.weather) {
      alert("날씨를 선택해주세요!");
      return;
    }
    // ✅ 재료 필수
    if (formData.ingredients.length === 0) {
      alert("최소 한 가지 이상의 재료를 추가해주세요!");
      return;
    }
    const newRecipe = {
      id: (recipes.length + 1).toString(),
      title: formData.title,
      description: formData.description,
      imageUrl: formData.imageUrl,
      ingredients: formData.ingredients,
      recipe: formData.recipe,
      weather: formData.weather,
      category: formData.category, // ✅ 저장에도 반영
    };

    setRecipes([newRecipe, ...recipes]);
    // alert('레시피가 추가되었습니다!');
    navigate("/recipes");
  };

  return (
    <div className="create-body-frame">
      <form className="create-form" onSubmit={handleSubmit}>
        <h2 className="create-form-title">레시피 등록</h2>
        <label className="create-label">음식 이름</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="예: 김치찌개"
        />
        <label>음식 종류</label>
        <div className="create-category-box">
          {["한식", "중식", "양식", "일식", "기타"].map((c) => (
            <label key={c}>
              <input
                type="radio"
                name="category"
                value={c}
                checked={formData.category === c}
                onChange={handleChange}
              />
              {c}
            </label>
          ))}
        </div>
        {/* 음식 사진 */}
        <div className="create-image-upload-box">
          <ImageUploadBox
            imageUrl={formData.imageUrl}
            editMode={true}
            onImageChange={(file) => {
              const localUrl = URL.createObjectURL(file);
              setFormData({ ...formData, imageUrl: localUrl });
            }}
          />
        </div>

        <label>음식 설명</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="2"
          placeholder="음식에 대한 간단한 설명을 적어주세요."
        />

        <label>음식 재료</label>
        <div className="create-ingredients-container">
          <IngredientManager
            ingredients={formData.ingredients}
            setIngredients={(updated) =>
              setFormData({ ...formData, ingredients: updated })
            }
            editable={true}
          />
        </div>

        <label>조리법</label>
        <textarea
          name="recipe"
          value={formData.recipe}
          onChange={handleChange}
          rows="4"
          placeholder="조리 과정을 자세히 작성해주세요."
        />

        <label className="create-label">어울리는 날씨</label>
        <div className="create-weather-box">
          {["맑음", "안개", "흐림", "비", "눈", "바람", "번개"].map((w) => (
            <label key={w}>
              <input
                type="radio"
                name="weather"
                value={w}
                checked={formData.weather === w}
                onChange={handleChange}
              />
              {w}
            </label>
          ))}
        </div>

        <button type="submit" className="create-add-btn">
          추가
        </button>
      </form>
    </div>
  );
};

export default RecipeCreate;
