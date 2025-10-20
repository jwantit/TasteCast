import "./Filters.css";
import {
  CATEGORIES,
  INGREDIENTS,
  WEATHERS,
} from "../../../pages/RecipeList/RecipeList";

function Filter({ filters, setFilters, onApply, onReset, isDarkMode }) {
  const onToggle = (field, value) => {
    setFilters((prev) => {
      const list = prev[field];
      const updated = list.includes(value)
        ? list.filter((v) => v !== value)
        : [...list, value];
      return { ...prev, [field]: updated };
    });
  };

  return (
    <div className={`filter-section ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="filter-row">
        <h3 className="filter-title">좋아하는 음식</h3>
        <div className="filter-options">
          {CATEGORIES.map((c) => (
            <label
              key={c}
              className={`toggle-button ${
                filters.likes.includes(c) ? "active" : ""
              }`}
            >
              <input
                type="checkbox"
                checked={filters.likes.includes(c)}
                onChange={() => onToggle("likes", c)}
              />
              {c}
            </label>
          ))}
        </div>
      </div>

      <div className="filter-row">
        <h3 className="filter-title">싫어하는 재료</h3>
        <div className="filter-options">
          {INGREDIENTS.map((i) => (
            <label
              key={i}
              className={`toggle-button ${
                filters.dislikes.includes(i) ? "active" : ""
              }`}
            >
              <input
                type="checkbox"
                checked={filters.dislikes.includes(i)}
                onChange={() => onToggle("dislikes", i)}
              />
              {i}
            </label>
          ))}
        </div>
      </div>

      <div className="filter-row">
        <h3 className="filter-title">날씨별 추천</h3>
        <div className="filter-options">
          {WEATHERS.map((w) => (
            <label
              key={w}
              className={`toggle-button ${
                filters.selWeather === w ? "active" : ""
              }`}
            >
              <input
                type="radio"
                name="weather"
                checked={filters.selWeather === w}
                onChange={() =>
                  setFilters((prev) => ({ ...prev, selWeather: w }))
                }
              />
              {w}
            </label>
          ))}
        </div>
      </div>

      <div className="filter-buttons">
        <button onClick={onReset}>초기화</button>
        <button onClick={onApply}>적용</button>
      </div>
    </div>
  );
}

export default Filter;
