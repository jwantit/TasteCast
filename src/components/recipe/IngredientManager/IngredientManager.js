import React, { useState } from "react";

/**
 * IngredientManager
 * 레시피의 재료 목록을 표시·추가·삭제·수정하는 공통 컴포넌트
 *
 * @param {Array} ingredients - 현재 재료 배열 (ex: [{ name: "양파", count: 2 }])
 * @param {Function} setIngredients - 재료 상태 갱신 함수
 * @param {boolean} editable - 수정 가능 여부 (true면 버튼 표시)
 */
const IngredientManager = ({
  ingredients,
  setIngredients,
  editable = true,
}) => {
  const [newIngredientName, setNewIngredientName] = useState("");
  const invalidKoreanRegex = /^[ㄱ-ㅎㅏ-ㅣ]+$/;

  // ✅ 재료 추가
  const handleAdd = () => {
    const trimmed = newIngredientName.trim();
    if (!trimmed) return alert("재료 이름을 입력해주세요!");
    if (invalidKoreanRegex.test(trimmed))
      return alert("올바른 재료 이름을 입력해주세요! (자음/모음 단독 불가)");
    if (ingredients.some((i) => i.name === trimmed))
      return alert("이미 존재하는 재료입니다!");

    setIngredients([...ingredients, { name: trimmed, count: 1 }]);
    setNewIngredientName("");
  };

  // ✅ 재료 개수 증가
  const handleIncrease = (index) => {
    const updated = ingredients.map((item, i) =>
      i === index ? { ...item, count: item.count + 1 } : item
    );
    setIngredients(updated);
  };

  // ✅ 재료 개수 감소
  const handleDecrease = (index) => {
    const updated = ingredients.map((item, i) =>
      i === index ? { ...item, count: Math.max(0, item.count - 1) } : item
    );
    setIngredients(updated);
  };

  // ✅ 재료 삭제
  const handleDelete = (index) => {
    const updated = ingredients.filter((_, i) => i !== index);
    setIngredients(updated);
  };

  return (
    <div className="ingredients-container">
      {ingredients.map((ingredient, index) => (
        <div className="ingredient-item" key={index}>
          <span className="ingredient-name">{ingredient.name}</span>
          <span className="ingredient-count">
            {ingredient.count > 0 ? `${ingredient.count}개` : "없음"}
          </span>

          {editable && (
            <div className="ingredient-buttons">
              <button
                type="button"
                className="btn small"
                onClick={() => handleDecrease(index)}
              >
                –
              </button>
              <button
                type="button"
                className="btn small"
                onClick={() => handleIncrease(index)}
              >
                +
              </button>
              <button
                type="button"
                className="btn delete"
                onClick={() => handleDelete(index)}
              >
                삭제
              </button>
            </div>
          )}
        </div>
      ))}

      {/* ✅ 새 재료 입력창 (수정모드일 때만) */}
      {editable && (
        <div className="add-ingredient-box">
          <input
            type="text"
            placeholder="새 재료 이름 입력"
            value={newIngredientName}
            onChange={(e) => setNewIngredientName(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && (e.preventDefault(), handleAdd())
            }
            className="input-box small"
          />
          <button type="button" className="btn add" onClick={handleAdd}>
            + 재료 추가
          </button>
        </div>
      )}
    </div>
  );
};

export default IngredientManager;
