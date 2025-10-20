import React, { lazy, Suspense, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./RecipeDetail.css";
import IngredientManager from "../../components/recipe/IngredientManager/IngredientManager";
const ImageUploadBox = lazy(() =>
  import("../../components/common/ImageUploadBox/ImageUploadBox")
);

// 25/10/17 16:02 한해찬 수정
// 다크모드 적용
// 부모로부터 변수 isDarkMode 받음

const RecipeDetail = ({ recipes, setRecipes, isDarkMode }) => {
  const [editMode, setEditMode] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  // ✅ recipe가 없을 수도 있으므로 null 안전 처리
  const recipe = recipes.find((item) => item.id === id) || {
    title: "",
    description: "",
    ingredients: [],
    recipe: "",
    category: "",
    weather: "",
  };

  const [formData, setFormData] = useState(recipe);
  if (!recipe) return <p>레시피를 찾을 수 없습니다.</p>;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  <IngredientManager
    ingredients={formData.ingredients}
    setIngredients={(updated) =>
      setFormData({ ...formData, ingredients: updated })
    }
  />;
  const handleDelete = () => {
    const updated = recipes.filter((r) => r.id !== id);
    setRecipes(updated);
    // alert(`${formData.title} 레시피가 삭제되었습니다.`);
    navigate("/recipes");
  };

  const handleUpdate = () => {
    const updated = recipes.map((r) => (r.id === id ? formData : r));
    setRecipes(updated);
    // alert(`${formData.title} 레시피가 수정되었습니다.`);
    // navigate('/recipes');
    setEditMode(false);
  };
  // ✅ "뒤로가기" 클릭 시 원래 데이터로 복원
  const handleCancelEdit = () => {
    setFormData(recipe); // 원본 복원
    setEditMode(false); // 수정 모드 종료
  };
  return (
    <div className="body-frame">
      <form className="recipe-Detail-form">
        {/* ✅ 제목이 수정모드 여부에 따라 변경됨 */}
        <h2 className="form-title">
          {editMode ? "레시피 수정" : "레시피 상세"}
        </h2>
        <label>음식 이름</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          disabled={!editMode}
        />
        <label>음식 종류</label>
        {!editMode ? (
          <div className="category-display-box">
            <p>{formData.category || "종류 없음"}</p>
          </div>
        ) : (
          <div className="recipe-category-box">
            {["한식", "중식", "양식", "일식", "기타"].map((c) => (
              <label key={c} className="category-option">
                <input
                  type="radio"
                  name="category"
                  value={c}
                  checked={formData.category === c}
                  onChange={handleChange}
                />
                <span>{c}</span>
              </label>
            ))}
          </div>
        )}
        <label>음식 그림</label>
        {editMode ? (
          <Suspense fallback={<p>이미지 업로드 로딩 중...</p>}>
            {/* ✏ 수정 모드일 때: 업로드 박스 표시 */}
            <ImageUploadBox
              imageUrl={formData.imageUrl}
              editMode={editMode}
              onImageChange={(file) => {
                // 업로드 후 미리보기 반영
                const localUrl = URL.createObjectURL(file);
                setFormData((prev) => ({ ...prev, imageUrl: localUrl }));

                // 블러 제거: 업로드가 끝났으니 editMode 유지하더라도 밝게 표시
                setEditMode(true); // 수정 상태는 유지하되 블러는 내부에서 해제됨
              }}
            />
          </Suspense>
        ) : (
          //   {/* 25/10/17 16:24 한해찬 수정 */}
          //   {/* 페이지를 이동했을 때 showpics 크기가 변했음 */}
          //   {/* 수정 코드 작성해봅니다 */}
          <div className={`image-upload-box-1 ${isDarkMode ? "dark" : ""}`}>
            {/* showpics를 컴포넌트 전용으로 변경 */}
            <div className="recipe-detail showpics">
              {formData.imageUrl ? (
                <img
                  src={formData.imageUrl}
                  alt={formData.title}
                  className="detail-preview-image"
                />
              ) : (
                <p className="no-image-text">이미지가 없습니다.</p>
              )}
            </div>
          </div>

          // **** 기존 코드는 주석으로 처리했습니다 **** //
          // //👀 보기 모드일 때: 미리보기 이미지 표시
          // <div className="image-upload-box-1">
          //   <div className="showpics">
          //     {formData.imageUrl ? (
          //       <img
          //         src={formData.imageUrl}
          //         alt={formData.title}
          //         style={{
          //           width: "300px",
          //           height: "300px",
          //           objectFit: "cover",
          //           borderRadius: "10px",
          //           boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          //         }}
          //       />
          //     ) : (
          //       <p>이미지가 없습니다.</p>
          //     )}
          //   </div>
          // </div>
        )}
        <label>음식 설명</label>
        <textarea
          name="description"
          rows="2"
          value={formData.description}
          onChange={handleChange}
          disabled={!editMode}
        />
        <label>음식 재료</label>
        <IngredientManager
          ingredients={formData.ingredients}
          setIngredients={(updated) =>
            setFormData({ ...formData, ingredients: updated })
          }
          editable={editMode}
        />
        {/* ✅ 날씨 표시/수정 */}
        <label>어울리는 날씨</label>
        {!editMode ? (
          <div className="category-display-box">
            <p>{formData.weather || "날씨 정보 없음"}</p>
          </div>
        ) : (
          <div className="recipe-category-box">
            {["맑음", "안개", "흐림", "비", "눈", "바람", "번개"].map((w) => (
              <label key={w}>
                <input
                  type="radio"
                  name="weather"
                  value={w}
                  checked={formData.weather === w}
                  onChange={handleChange}
                />
                <span>{w}</span>
              </label>
            ))}
          </div>
        )}
        <label>조리법</label>
        <textarea
          name="recipe"
          rows="4"
          value={formData.recipe}
          onChange={handleChange}
          disabled={!editMode}
        />
        <div className="btn-box">
          {/* 🔹 왼쪽 버튼 */}
          {!editMode ? (
            <button type="button" className="add-btn-le" onClick={handleDelete}>
              삭제
            </button>
          ) : (
            <button
              type="button"
              className="add-btn-le"
              onClick={handleCancelEdit} // 🔙 수정 취소 기능 연결
            >
              뒤로가기
            </button>
          )}

          {/* 🔹 오른쪽 버튼 */}
          {!editMode ? (
            <button
              type="button"
              className="add-btn-ri"
              onClick={() => setEditMode(true)} // 수정모드 ON
            >
              수정
            </button>
          ) : (
            <button
              type="button"
              className="add-btn-ri"
              onClick={handleUpdate} // 수정 완료 → 저장
            >
              저장
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RecipeDetail;
