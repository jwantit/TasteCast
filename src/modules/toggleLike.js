// recipes 배열에서 특정 id를 가진 레시피의 liked 사태를 토글하고
// 업데이트된 새로운 배열을 반환함
const toggleLike = (recipes, id) => {
  return recipes.map((recipe) =>
    recipe.id === id ? { ...recipe, like: !recipe.like } : recipe
  );
};
export default toggleLike;
