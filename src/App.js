import "./App.css";
import { Suspense, lazy, useState } from "react"; // 추가- 박건영
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";
import RecipeList from "./pages/RecipeList/RecipeList";
import Home from "./pages/Home/Home";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import dummyRecipesData from "./data/dummyRecipes";
// import dummyRecipesData from "./data/dummyRecipes_2500";
import { DarkModeProvider, useDarkMode } from "./DarkModeContext";

const RecipeCreate = lazy(() => import("./pages/RecipeCreate/RecipeCreate")); // 추가-박건영

// 25/10/17 2:13 한해찬 수정
//  다크모드 적용
function AppContent() {
  const [recipes, setRecipes] = useState(dummyRecipesData);

  // useDarkMode 훅으로 다크모드 상태 가져오기
  const { isDarkMode } = useDarkMode();

  return (
    // 최상위 div에 다크모드 여부에 따라 클래스 적용
    <div className={isDarkMode ? "dark" : "light"}>
      {/* suspense로 Routes 감쌌어요 - 박건영 */}
      <Suspense
        fallback={
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            로딩 중입니다...
          </div>
        }
      >
        <Routes>
          <Route element={<Layout isDarkMode={isDarkMode} />}>
            <Route
              path="/"
              element={
                <Home
                  recipes={recipes}
                  setRecipes={setRecipes}
                  isDarkMode={isDarkMode}
                />
              }
            />
            <Route
              path="/recipes"
              element={
                <RecipeList
                  recipes={recipes}
                  setRecipes={setRecipes}
                  isDarkMode={isDarkMode}
                />
              }
            />
            <Route
              path="/recipes/:id"
              element={
                <RecipeDetail
                  recipes={recipes}
                  setRecipes={setRecipes}
                  isDarkMode={isDarkMode}
                />
              }
            />
            <Route
              path="/recipecreate"
              element={
                <RecipeCreate
                  recipes={recipes}
                  setRecipes={setRecipes}
                  isDarkMode={isDarkMode}
                />
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

function App() {
  // ③ DarkModeProvider로 AppContent 감싸기
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}

export default App;
