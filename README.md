# 7-Eleven 리뉴얼 프로젝트 - 개인프로젝트
![image](https://github.com/DdaaaaaatG/7-ElevenRenewal/assets/85141928/4cf1a921-3a24-499f-9d53-85f4a3a3c940)
## 제작 기간: 34일 (2023.08.01 ~ 2023.09.03)
## 호스팅
[네트리파이](https://rainbow-puppy-f286c4.netlify.app/)  
## ⭐️ 프로젝트 설명
그린컴퓨터아트 학원에서 만든 홈페이지 리뉴얼 퍼블리싱 프로젝트 입니다. 세븐일레븐 홈페이지를 리뉴얼 하면서 라이브러리를 최대한 안쓰는 것을 목표로 개발하였습니다. 일러스트는 클립스튜디오 및 피그마로 제작하였습니다.

고객센터와 전체상품 보기 페이지를 서브페이지로 만들었습니다.
## 💻 개발 환경
+ 개발 환경 : <img src="https://img.shields.io/badge/windows10-0078D6?style=flat-square&logo=windows10&logoColor=white"/>
+ 사용 프로그램 : <img src="https://img.shields.io/badge/Vs code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white"/> <img src="https://img.shields.io/badge/Photoshop-31A8FF?style=flat-square&logo=adobephotoshop&logoColor=white"/> <img src="https://img.shields.io/badge/figma-F24E1E?style=flat-square&logo=figma&logoColor=white"/>  <img src="https://img.shields.io/badge/ClipStudio-999999?style=flat-square&"/>
+ 사용된 기술 :
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/> <img src="https://img.shields.io/badge/swiper-6332F6?style=flat-square&logo=swiper&logoColor=white"/> <img src="https://img.shields.io/badge/css3-1572B6?style=flat-square&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&"/> 
## 🛠️ 주요 기능
1.  스크롤이벤트 및 디바운싱

dom 이벤트를 기반으로 실행하는 자바스크립트는, 성능상의 이유로 이벤트를 제어해야합니다. 
예시로 스크롤 이벤트를 들자면, 스크롤(scroll wheel), 트랙패드, 스크롤 막대를 드래깅을 하게 되면 사용자는 크게 느끼지 못할 수 있으나 이 행위로 인해 수많은 스크롤 이벤트가 발생하게 됩니다.
과도한 이벤트 횟수의 실행으로 이벤트 핸들러가 무거운 계산 및 기타 DOM 조작과 같은 작업을 수없이 많이 수행하는 경우 성능 문제가 발생 할 수 있기 때문에 디바운싱 기법을 사용하여 스크롤이벤트를 제어하였습니다.

2. 직접 구현한 무한 슬라이드 및 스와이퍼 커스텀

시간이 지나면 자동으로 슬라이드가 되며, 마지막 이미지에 도달할시 첫번째 이미지로 롤백 시키도록 맨 앞 슬라이드와 맨 뒤 슬라이드를 각각 복제시키고 애니메이션 효과를 삭제시켜 롤백 시킬 시 자연스럽게 슬라이딩 되도록 만들었습니다. 
스와이퍼 라이브러리를 커스텀 하여 탭메뉴와 슬라이드 기능을 구현하였습니다.

3. 일러스트 제작

세븐일레븐의 마스코트인 흰 곰 “브니”를 클립스튜디오 및 피그마로 일러스트를 그려 창업문의 섹션에 삽입하였습니다
* 창업문의 일러스트


|창업상담|창업설명회|창업절차|창업성공|
|---|---|---|---|
|![창업상담](https://github.com/DdaaaaaatG/7-ElevenRenewal/assets/85141928/01e10217-66b8-4073-b4d1-2b63259a2ce4)|![설명회-채택](https://github.com/DdaaaaaatG/7-ElevenRenewal/assets/85141928/73a6bb3b-52b7-4b50-83c8-3d1db6771431)|![창업절차](https://github.com/DdaaaaaatG/7-ElevenRenewal/assets/85141928/bb234684-9cc9-4d5d-a518-aad8e2959ea5)|![창업성공-카드일러](https://github.com/DdaaaaaatG/7-ElevenRenewal/assets/85141928/3433fd6e-d332-4d14-818f-95ee426c21fb)|


## 👀 페이지 구성
### 메인 페이지
  |섹션1 : 이벤트 배너|
  |:---|
  |![무한](https://github.com/DdaaaaaatG/7-ElevenRenewal/assets/85141928/722db291-a975-420d-87ca-7a3bfed6c67d)|
  |스와이퍼를 사용하지 않고 Javascript로만 구현을한 무한 슬라이드 입니다.|

<br>

  |섹션2 : 행사상품|
  |:---|
  |![아이템](https://github.com/DdaaaaaatG/7-ElevenRenewal/assets/85141928/7e4af5fc-55be-4b22-87bd-9e2c6e26104e)|
  |스와이퍼를 커스텀하여 탭메뉴 및 자동 슬라이드를 구현했습니다.|
  
<br>

  |섹션5 : 창업문의|
  |:---|
  |![카드](https://github.com/DdaaaaaatG/7-ElevenRenewal/assets/85141928/8818128c-5a59-4642-b3a1-be86a1a48afb)|
  |직접 그린 일러스트에 스크롤 이벤트 및 stiky 효과를 줬습니다.|
### 서브 페이지
<br>

  |전체상품 페이지|
  |:---|
  |![스크롤](https://github.com/DdaaaaaatG/7-ElevenRenewal/assets/85141928/3cc69c47-759c-45ab-8af6-8193d56531db)|
  |마우스 호버시 이미지에 scale을 넣어 점점 커지며, 이미지 뒤에 입력한 background-color가 테두리 선처럼 보이도록 구성하였습니다.|
  
<br>

  |고객센터 페이지|
  |:---|
  |![Untitled](https://github.com/DdaaaaaatG/7-ElevenRenewal/assets/85141928/76c6b8c9-0625-4b22-a9da-babd60f4f958)|
  |자주묻는 질문 섹션에 아코디언을 넣어 답변을 펼쳐 볼 수 있도록 구현했습니다.|

## 🚀 기타 링크
+  [Figma 와이어 프레임](https://www.figma.com/file/fEkKM6Gw5suLv4G0tE2ulV/%EA%B0%9C%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%94%94%EC%9E%90%EC%9D%B8?type=design&node-id=0%3A1&mode=design&t=DP6tmb9SnanCpPSh-1)
+  [Figma 카드 일러스트](https://www.figma.com/file/tXUZXSnWD5kG3lQgNQfWNy/%EC%84%B8%EB%B8%90%EC%9D%BC%EB%A0%88%EB%B8%90-%EC%B9%B4%EB%93%9C-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8?type=design&node-id=0%3A1&mode=design&t=oVfx7oy1mPSg5LDx-1)
+  [프레젠테이션 중간 발표](https://docs.google.com/presentation/d/1SysTNB8tm-DmjwN48-Ao1Z6gtebJX4jPg94qzHDp6FI/edit)
+  [프레젠테이션 최종 발표](https://docs.google.com/presentation/d/1XIv4Mq2oN8GUTdhhUQpagEDEXziDLEkcr8Och6_XowQ/edit)
