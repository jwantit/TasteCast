# 🌤️ 오늘 뭐 먹지  
> **날씨 기반 음식 추천 웹 애플리케이션**

---

## 📌 기획 의도

저희 프로젝트 **오늘 뭐 먹지**는  
**현재 날씨에 따라 어울리는 음식을 추천하는 웹 애플리케이션**입니다. 🍲  

기존 레시피 추천 서비스들은 단순히 **카테고리, 재료, 상황** 중심의 필터만 제공하고,  
사용자의 **기호(싫어하는 재료)** 나 **날씨 조건**은 반영하지 못하는 한계가 있었습니다.  

이에 저희는 아래와 같은 목표를 세웠습니다.  

### 🎯 기획 목표
- **날씨별 음식 추천 기능** 제공 ☀️🌧️❄️  
- **사용자 취향 반영** (좋아요 / 싫어하는 재료 필터링) ❤️🚫  
- **개인화된 레시피 탐색 경험** 제공  

> 날씨가 “비 오는 날”이라면 따뜻한 국물 요리를,  
> “더운 날”이라면 시원한 음식 레시피를 추천합니다.  

---

### 🔗 참고 사이트  
[만개의 레시피 (10,000 Recipe)](https://www.10000recipe.com/)  

| 기존 서비스 한계 | 개선 방향 |
|:----------------|:---------------------------|
| 상황·재료·방법 중심 필터만 제공 | ✅ 날씨 기반 추천 기능 추가 |
| 싫어하는 재료 제외 불가 | ✅ 재료 제외 필터 기능 구현 |
| 정적 UI 구조 | ✅ 사용자 맞춤형 SPA 형태로 구현 |

---

### 🧭 주요 아이디어  
- 📍 **Geolocation API + Kakao Map API**로 **현재 위치 기반 날씨 연동**
- 🌤️ **OpenWeather API**로 실시간 날씨 데이터 가져오기  
- 🍳 날씨 상태에 따라 어울리는 **레시피 필터링** 및 **자동 추천**

> 💡 메인 페이지에서는 사용자 지역의 날씨에 따라  
> 어울리는 **레시피 4개**를 자동으로 제안합니다.

---

### 📘 프로젝트 노션  
🔗 [React Project Notion](https://www.notion.so/React-Project-5-28caa939b4b3808eb6d8c6c5236f855b)

---

## 👨‍💻 팀 구성 및 역할

| 이름 | GitHub | 주요 담당 기능 |
|:----:|:-------:|:----------------|
| [<img src="https://github.com/jwantit.png" width="80" height="80">](https://github.com/jwantit)<br>**김지원 (팀장)** | [@jwantit](https://github.com/jwantit) | 🔹 **프로젝트 총괄 및 일정 관리**<br>🔹 주제 선정 · 역할 분담 조율<br>🔹 레시피 더미 데이터 제작<br>🔹 전체 레시피 페이지 UI 구현<br>🔹 가상 스크롤 기능 구현<br>🔹 사용자 레시피 필터 기능 구현<br>🔹 레시피 수정 및 삭제 기능 반영<br>🔹 CSS 통일 및 코드 통합 |
| [<img src="https://github.com/keonyeong4550.png" width="80" height="80">](https://github.com/keonyeong4550)<br>**박건영** | [@keonyeong4550](https://github.com/keonyeong4550) | 🔹 **새 레시피 작성 및 상세 페이지 담당**<br>🔹 이미지 업로드 및 미리보기 기능 구현<br>🔹 수정·삭제 기능 및 홈 이동 처리<br>🔹 useParams를 이용한 ID별 상세 표시<br>🔹 Lazy & Suspense 기능 구현<br>🔹 CSS 구조 분리 및 코드 정리<br>🔹 SPA 라우팅 및 페이지 전환 구현 |
| [<img src="https://github.com/haechan419.png" width="80" height="80">](https://github.com/haechan419)<br>**한해찬** | [@haechan419](https://github.com/haechan419) | 🔹 **메인 화면 및 외부 API 연동 담당**<br>🔹 OpenWeatherMap & KakaoMap API 적용<br>🔹 날씨 기반 레시피 필터링 기능 구현<br>🔹 네비게이션 바 UI 및 기능 구현<br>🔹 OpenWeather 아이콘 동적 변경<br>🔹 좋아요(Like) 기능 및 다크모드 구현<br>🔹 Flow Chart 제작 및 코드 통합<br>🔹 SPA 라우팅 구조 설계 |

---

## 🛠 기술 스택

| 구분 | 내용 |
|:----:|:----|
| **언어** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white) ![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white) ![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=Sass&logoColor=white) |
| **개발 도구** | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white) |
| **IDE** | ![VSCode](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=VisualStudioCode&logoColor=white) |
| **운영체제** | ![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=Windows&logoColor=white) |


---

## 💻 개발 환경

### 프론트엔드
- **React** : 18  
- **React-DOM** : 18  
- **React-Router-DOM** : 7.9.4  
- **React-Virtualized** : 9.22.6  
- **SASS** : 1.93.2  
- **axios** : 1.12.2

---

## 🗂️ 프로젝트 구조

```plaintext
index.js
App.js
src/
  ├── components/
  │   ├── common/
  │   │   ├── Filters/
  │   │   │   └── Filters.js
  │   │   ├── ImageUploadBox/
  │   │   │   └── ImageUploadBox.js
  │   │   ├── LikeButton/
  │   │   │   └── LikeButton.js
  │   │   ├── WeatherInfo/
  │   │   │   └── WeatherInfo.js
  │   ├── recipe/
  │   │   ├── IngredientManager/
  │   │   │   └── IngredientManager.js
  │   │   ├── RecipeFilter/
  │   │   │   └── RecipeFilter.js
  │   │   ├── RecipeItem/
  │   │   │   └── RecipeItem.js
  ├── data/
  │   ├── dummyRecipes_2500.js
  │   └── dummyRecipes.js
  ├── hooks/
  │   ├── useGeolocation.js
  │   ├── useKakaoDistrict.js
  │   └── useWeather.js
  ├── layout/
  │   └── Layout.js
  ├── modules/
  │   ├── toggleLike.js
  │   ├── transWeatherDescription.js
  │   └── useKakaoDistrict.js
  ├── pages/
     ├── Home/
     │   └── Home.js
     ├── RecipeCreate/
     │   └── RecipeCreate.js
     ├── RecipeDetail/
     │   └── RecipeDetail.js
     └── RecipeList/
         └── RecipeList.js
```

---

## ⚙️ 주요 구현 기능

---

### 🍱 **레시피 목록 및 필터링**

> 사용자의 취향과 날씨 필터링으로 맞춤형 레시피를 추천하는 기능입니다.

- ✅ 좋아하는 음식만 보기  
- 🚫 싫어하는 재료 제외   

![Filter](./images/Filter.gif)

---

### ❤️ **좋아요(Like) 기능**

> 레시피 카드에 ❤️ 버튼을 눌러 관심 레시피를 저장하고, 좋아요한 레시피만 따로 모아볼 수 있습니다.

- 레시피 카드별 좋아요 상태 실시간 반영  
- "좋아요만 보기" 필터 기능 제공  
- 좋아요 상태와 필터 기능이 연동되어 UI에 즉시 반영  

![Like](./images/like.gif)

---

### 🧾 **CRUD 기능**

> 사용자가 직접 레시피를 등록, 수정, 삭제할 수 있도록 구현했습니다.

- ✏️ 레시피 등록 (이미지, 설명, 카테고리 입력 가능)  
- 🔍 등록된 레시피 상세 조회  
- 🛠️ 수정 및 즉시 반영  
- ❌ 삭제 기능  

| 등록(Create) / 조회(Read) / 수정(Update) | 삭제(Delete) |
|:-----------------------------------------:|:-------------:|
| ![CRU](./images/recipeCreate.gif) | ![D](./images/D.gif) |

---

### 🧭 **SPA (Single Page Application)**

> **React Router**를 사용하여 부드럽고 빠른 페이지 전환을 구현했습니다.  
> 새로고침 없이 컴포넌트 단위로 화면이 갱신되어 자연스러운 사용자 경험을 제공합니다.

- 🔹 **오늘의 추천(Home)** – 날씨 기반 레시피 추천  
- 🔹 **전체 레시피(RecipeList)** – 모든 레시피 목록 및 필터링 기능  
- 🔹 **레시피 추가(RecipeCreate)** – 사용자 직접 레시피 등록 가능  

---

#### 🗺️ **라우팅 구조 (Routing Structure)**

| **Path** | **Page (Component)** | **설명 (Notes)** |
|:----------|:--------------------|:------------------|
| `/` | **Home** | 메인 화면 – 날씨 기반 추천 레시피 표시 |
| `/recipes` | **RecipeList** | 전체 레시피 목록 조회 및 필터링 기능 제공 |
| `/recipes/:id` | **RecipeDetail** | 선택한 레시피의 상세 정보 조회 및 수정 기능 |
| `/recipecreate` | **RecipeCreate** | 새로운 레시피를 등록하는 페이지 |

> 🔗 **SPA(Single Page Application)** 구조로 설계되어,  
> 페이지 이동 시 브라우저 전체가 새로고침되지 않으며 **매끄러운 전환 효과**를 제공합니다.

---

![SPA](./images/router.gif)


---

### 📜 **가상 스크롤 (Virtual Scroll)**

> `react-virtualized` 라이브러리를 사용하여 대량 데이터 렌더링 성능을 최적화했습니다.

- **2,500개 이상의 레시피 데이터** 렌더링 가능  
- 스크롤 위치에 따라 필요한 컴포넌트만 렌더링  

![가상 스크롤](./images/scroll_update.gif)

---

### ⚡ **성능 최적화**

> 초기 렌더링 속도 개선과 렌더링 효율 향상을 위한 최적화 기법을 적용했습니다.

| Before(668.9ms) | After(5.3 ms) |
|:------:|:-----:|
| ![성능 Before](./images/KakaoTalk_20251020_121817551.png) | ![성능 After](./images/KakaoTalk_20251020_121817551_01.png) |

#### 🚀 적용 기술
- **React-Virtualized** : 대용량 데이터 처리 최적화  
- **렌더링 최소화** : 상태 의존성 최적화 및 불필요한 렌더링 제거  

---

### 🧩 **코드 스플리팅 (Code Splitting)**

> `lazy`와 `Suspense`를 활용하여 페이지별 코드 분할을 적용했습니다.

- 페이지 단위 로드로 초기 로딩 속도 개선  
- 이미지가 많은 화면은 Lazy Loading 적용  

![코드 스플리팅](./images/lazy_suspense.gif)

---

### 🌍 **외부 API 연동**

> 실시간 위치와 날씨 데이터를 활용해 사용자의 환경에 맞춘 레시피를 추천합니다.

- 📍 **Geolocation API** : 사용자 위치(위도/경도) 탐색  
- 🗺️ **Kakao Map API** : 위치 기반 행정구 조회  
- 🌤️ **OpenWeather API** : 날씨 데이터 실시간 연동  

![외부 데이터 연동](./images/weather_img.png)

---

### 📱 **반응형 웹 (Responsive Web)**

> 다양한 디바이스에서 동일한 UX를 제공하도록 반응형 디자인을 적용했습니다.

- 💻 PC  
- 📊 태블릿  
- 📱 모바일  

![반응형 웹](./images/responsive.gif)

---

### 🌙 **다크모드 (Dark Mode)**

> 사용자의 시스템 테마(Light / Dark)에 따라 자동 전환되며, 수동 전환도 가능합니다.

- 시스템 테마 자동 감지  

![다크모드](./images/darkMode.gif)

---

## 💡 기술 요약

| 분류 | 사용 기술 |
|:-----:|:-----------|
| **Frontend** | React, React Router, React-Virtualized, Styled-Components |
| **API** | OpenWeatherMap, Kakao Map, Geolocation API |
| **기능** | CRUD, Like, Filter, SPA, Virtual Scroll, Code Splitting, Dark Mode |
| **최적화** | Lazy Loading, Virtual DOM 최적화, 코드 스플리팅 |
| **디자인** | 반응형 UI, 테마 전환 (Light/Dark) |

---


## 🧭 API 명세서

본 프로젝트에서는 **OpenWeatherMap API**와 **Kakao Map API**를 활용하여  
사용자의 **현재 날씨 정보**와 **행정구역(위치)** 데이터를 실시간으로 조회합니다.

### 🌤️ 현재 위치 날씨 조회 API

| 항목 | 내용 |
|------|------|
| **기능 설명** | 위도(`latitude`)와 경도(`longitude`)를 기반으로 현재 날씨 정보를 조회합니다. |
| **요청 URL** | `https://api.openweathermap.org/data/2.5/weather` |
| **Method** | `GET` |
| **요청 파라미터** | <ul><li>`lat` : 위도 (예: `37.5665`)</li><li>`lon` : 경도 (예: `126.9780`)</li><li>`appid` : OpenWeather API Key</li><li>`lang` : 언어 코드 (`kr`, `en` 등)</li><li>`units` : 단위 (`metric` → 섭씨)</li></ul> |
| **요청 예시** | ```bash https://api.openweathermap.org/data/2.5/weather?lat=37.5665&lon=126.9780&appid=YOUR_API_KEY&lang=kr&units=metric ``` |
| **요청 헤더** | 없음 |
| **응답 형식** | `JSON` |
| **응답 예시 (성공)** | ```json { "coord": { "lon": 126.978, "lat": 37.5665 }, "weather": [ { "main": "Clouds", "description": "broken clouds" } ], "main": { "temp": 20.5, "feels_like": 20.2, "humidity": 60 }, "wind": { "speed": 3.5 }, "name": "Seoul" } ``` |
| **응답 코드** | `200 OK` |
| **에러 예시** | ```json { "cod": 401, "message": "Invalid API key." } ``` |
| **에러 코드** | `400 Bad Request`, `401 Unauthorized` |
| **비고** | <ul><li>무료 버전 기준 초당 60회 호출 제한</li><li>`lang="kr"` 설정 시 한글 출력 지원</li></ul> |


### 🗺️ 좌표 기반 행정구역명 조회 API (Kakao Map)

| 항목 | 내용 |
|------|------|
| **기능 설명** | 위도(`latitude`)와 경도(`longitude`)를 이용해 해당 위치의 행정구역(구/군 단위)을 조회합니다. |
| **요청 URL** | `https://dapi.kakao.com/v2/local/geo/coord2address.json` |
| **Method** | `GET` |
| **요청 파라미터** | <ul><li>`x` : 경도 (longitude)</li><li>`y` : 위도 (latitude)</li></ul> |
| **요청 예시** | ```bash curl -v -X GET "https://dapi.kakao.com/v2/local/geo/coord2address.json?x=126.9780&y=37.5665" \ -H "Authorization: KakaoAK YOUR_API_KEY" ``` |
| **요청 헤더** | `Authorization: KakaoAK {REST_API_KEY}` |
| **응답 형식** | `JSON` |
| **응답 예시 (성공)** | ```json { "documents": [ { "address": { "region_1depth_name": "서울특별시", "region_2depth_name": "중구", "region_3depth_name": "태평로1가" } } ] } ``` |
| **응답 코드** | `200 OK` |
| **에러 예시** | ```json { "code": -2, "msg": "Invalid API key" } ``` |
| **에러 코드** | `400 Bad Request`, `401 Unauthorized` |
| **비고** | <ul><li>좌표 기준: WGS84 (일반 GPS 좌표계)</li><li>무료 호출 제한: 일 30,000회</li></ul> |


### 💡 요약

| API | 주요 목적 | 사용 기술 | 비고 |
|------|-------------|------------|------|
| **OpenWeatherMap** | 사용자 위치 기반 날씨 조회 | REST API (`GET`) | `lang=kr`, `units=metric` 사용 |
| **Kakao Map (coord2address)** | 위도·경도를 통한 행정구역명 조회 | REST API (`GET`) | `Authorization` 헤더 필요 |


📍 **활용 예시**
- 앱 실행 시 사용자 위치를 기반으로 실시간 날씨 데이터와 지역명 출력  
- 지역/날씨 정보에 따라 레시피 추천 기능 제공  
- 날씨 변화에 따른 레시피 필터링 및 UI 업데이트


---

## 🧩 Flow & UI

### 🧭 Flow Chart
![Flow Chart](./images/flow_chart.drawio.png)

---

### 🖥️ UI 미리보기

| 메인 페이지 | 전체 레시피 |
|:------------:|:------------:|
| ![메인 페이지](./images/main_page.png) | ![전체 레시피](./images/allRecipe.png) |

| 레시피 추가 | 레시피 수정 |
|:------------:|:------------:|
| ![추가 페이지](./images/createRecipe.png) | ![수정 페이지](./images/update_page.png) |

---

## 🌐 접속 주소
- **프론트엔드** : [http://localhost:3000](http://localhost:3000)

---

## ⚙️ 환경 변수 및 설치

프로젝트 실행 전, 다음 환경 변수를 설치 및 설정해주세요.

```bash
# Yarn 전역 설치
npm install -g yarn

# React 관련 패키지 설치
yarn add react@18 react-dom@18 

# 스타일링 및 아이콘 패키지 설치
yarn add sass classnames react-icons

# 가상 스크롤
yarn add react-virtualized

# 라우팅
yarn add react-router-dom

# HTTP 요청
yarn add axios

# styled-components
yarn add styled-components
```

---

## 🔚 **프로젝트 마무리**

이번 프로젝트 **「오늘 뭐 먹지」** 는 **날씨와 개인 취향을 반영한 맞춤형 레시피 추천 웹 애플리케이션**을 목표로 개발하였습니다.  
7일간의 짧은 개발 기간 동안 팀원들과 협력하여 **React 기반 SPA**, **외부 API 연동(OpenWeather, KakaoMap)**, **다크모드**, **가상 스크롤**, **코드 스플리팅** 등 다양한 기술을 직접 설계·구현했습니다.  

이를 통해 **프론트엔드 구조 설계 능력**, **협업을 통한 문제 해결 능력**,  
그리고 **사용자 경험(UX)을 고려한 기능 구현 역량**을 함께 성장시킬 수 있었습니다.  

---

### 🚀 **향후 발전 방향**
- 🌟 **AI 기반 개인 맞춤 레시피 추천 기능 추가**  
- 💬 **사용자 리뷰 및 커뮤니티 기능 구현**  
- 📈 **백엔드 서버 연동을 통한 데이터 관리 고도화**  

---

앞으로도 본 프로젝트를 기반으로 **더 완성도 높은 서비스형 웹 애플리케이션**으로 발전시켜 나갈 계획입니다.  
> 함께한 팀원들과의 협업을 통해 **작은 아이디어를 실현 가능한 서비스로 구현하는 경험**을 얻은 뜻깊은 프로젝트였습니다. 🙌


























