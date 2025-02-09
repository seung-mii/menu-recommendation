# 🎨 Recommended menu for famous restaurants
🍚 **React와 SpringBoot를 사용한 맛집 주요 메뉴 추천 웹사이트**  
🔹 **개인 프로젝트**  
📅 **개발 기간:** 2023.04.13 ~ 2023.04.22

<br/>

## 🚀 Getting Started
### 🛠 Requirements  
For building and running the application you need:
- **Node.js** `>= 16.0.0`  
- **Npm** `>= 7.0.0`


### 📦 Installation  
```bash
$ git clone https://github.com/seung-mii/menu-recommendation.git
$ cd menu-recommendation
```


### 🖥 Execution
``` bash
# SpringBoot 서버 실행 
npm install
npm start
```

<br/>

## 🔧 Tech Stack
### ⚙️ Environment  
<p align="left">
  <img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white">
</p>


### 🛠️ Development  
#### Frontend  
<p align="left">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black">
</p>


#### Backend  
<p align="left">
  <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white">
  <img src="https://img.shields.io/badge/H2 Database-003366?style=for-the-badge&logo=h2&logoColor=white">
  <img src="https://img.shields.io/badge/Apache Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white">
  <img src="https://img.shields.io/badge/Lombok-CA0C18?style=for-the-badge&logo=lombok&logoColor=white">
</p>


<br/>

## 📺 Screen
|로그인|회원가입 - 사용자 ver|회원정보 수정 - 사용자 ver|
|---|---|---|
|<img width="986" alt="_1" src="https://github.com/Neighbor-Food/NF_frontend/assets/84191029/51573e1b-8712-430a-b3cc-fec0c85849ef">|<img width="987" alt="_3" src="https://github.com/Neighbor-Food/NF_frontend/assets/84191029/11f2fd36-bdca-438e-8025-6bb9bc6e7020">|<img width="987" alt="_10" src="https://github.com/Neighbor-Food/NF_frontend/assets/84191029/5632d19e-a1d8-4d62-905d-1337edf8fd9e">|

|맛집 리스트 - 사용자 ver|맛집 리스트 - 점주 ver|맛집 등록|
|---|---|---|
|<img width="952" alt="_16" src="https://github.com/Neighbor-Food/NF_frontend/assets/84191029/580d254d-fe5b-4e55-a5f7-843761ca7e11">|<img width="986" alt="_8" src="https://github.com/Neighbor-Food/NF_frontend/assets/84191029/7433fe9e-1620-4dc5-9a83-157955826ad2">|<img width="989" alt="_7" src="https://github.com/Neighbor-Food/NF_frontend/assets/84191029/e987f03f-2b60-497a-9c2e-41d4365c4213">|

|별점 작성|리뷰 작성|리뷰 리스트|
|---|---|---|
|<img width="987" alt="_11" src="https://github.com/Neighbor-Food/NF_frontend/assets/84191029/f0b653a6-3e0b-42ca-83d5-6ef6dced06aa">|<img width="953" alt="_15" src="https://github.com/Neighbor-Food/NF_frontend/assets/84191029/fc801320-8a57-47fb-9478-38e54ef2c5f9">|<img width="986" alt="_13" src="https://github.com/Neighbor-Food/NF_frontend/assets/84191029/940c8ea5-100d-46fd-9149-ad407797e6df">|

<br/>

## ✨ Key Features
### 💡 회원 관리
- 회원가입 및 로그인 기능 구현했습니다.
- 사용자 정보 수정을 통해 프로필 업데이트 가능합니다.
- 백엔드 API와 통신하여 회원 정보를 관리합니다.


### 💡 음식점 목록 및 추천 메뉴 정보
- 음식점 목록을 표시하여 각 음식점별 추천 메뉴와 세부 정보를 확인 가능합니다.
- 네비게이션 바 및 필터 옵션 제공하여 원하는 음식 종류만 다루는 음식점 목록 확인 가능합니다.
- 백엔드에서 음식점 정보를 가져와 실시간 렌더링합니다.


### 💡 게시물 관리
- 새로운 게시물을 생성할 수 있으며 게시물 수정 및 삭제 가능합니다.
- 백엔드 데이터베이스와 연동하여 게시물 데이터를 관리합니다.


### 💡 별점 및 리뷰 관리
- 음식점 또는 메뉴에 대한 별점 및 리뷰 작성 기능 제공합니다.
- 작성된 별점을 수정 및 삭제 가능합니다.
- 별점 평균을 계산하여 음식점 평가 시스템 구현합니다.


<br/>


## 🏛️ Architecture
### 📂 디렉토리 구조
```bash
├── README.md
├── package-lock.json
├── package.json
├── public/
│   └── index.html
└── src/
    ├── App.js
    ├── index.js
    ├── index.css
    ├── app-config.js
    ├── Pages/
    │   ├── Home/
    │   │   ├── RestaurantList.js
    │   │   ├── header.js
    │   │   └── home.js
    │   ├── Member/
    │   │   ├── modify.js
    │   │   ├── modifyItem.js
    │   │   ├── signin.js
    │   │   └── signup.js
    │   ├── Post/
    │   │   ├── post.js
    │   │   ├── postModify.js
    │   │   ├── postModifyItem.js
    │   │   └── postRegist.js
    │   ├── Resturant/
    │   │   └── regist.js
    │   └── Star/
    │       ├── star.js
    │       ├── starModify.js
    │       └── starModifyItem.js
    ├── images/
    │   └── ...
    └── service/
        └── ApiService.js

```

<br/>

<p align="right">
  <a href="https://github.com/seung-mii/menu-recommendation/tree/main">
    <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fseung-mii%2Fmenu-recommendation&count_bg=%23748DA6&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false">
  </a>
</p>
