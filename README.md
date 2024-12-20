## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

### 폴더 구성

- /app : 애플리케이션에 필요한 모든 경로, 구성 요소, 논리가 포함되어 있습니다. 주로 여기에서 작업을 진행하게 됩니다.
- /app/lib : 재사용 가능한 유틸리티 함수, 데이터 가져오기 함수 등 애플리케이션에서 사용되는 함수가 포함되어 있습니다.
- /app/ui : 카드, 테이블, 양식 등 애플리케이션의 모든 UI 구성 요소를 포함합니다. 시간을 절약하기 위해 이러한 구성 - 요소를 미리 스타일 지정했습니다.
- /public : 이미지 등 애플리케이션의 모든 정적 자산을 포함합니다.
- Config Files : 또한 애플리케이션의 루트에서 next.config.js와 같은 구성 파일도 확인할 수 있습니다. 이러한 파일의 대부분은 create-next-app을 사용하여 새 프로젝트를 시작할 때 생성되고 미리 구성됩니다. 이 과정에서는 이러한 파일을 수정할 필요가 없습니다.

### 개발 서버 실행

- npm install -g pnpm
- pnpm i
- pnpm dev
    - pnpm dev starts your Next.js development server on port 3000.
    - Open http://localhost:3000 on your browser.

### 학습 내용

#### 1장

##### Tailwind

- 테일윈드는 TSX 마크업에서 유틸리티 클래스를 빠르게 작성할 수 있도록 하여 개발 프로세스를 가속화하는 CSS 프레임워크입니다.
- 테일윈드에서는 클래스 이름을 추가하여 요소를 스타일링합니다.

#### 2장

##### CSS Modules

- CSS 모듈을 사용하면 고유한 클래스 이름을 자동으로 생성합니다.
- CSS를 구성 요소로 범위를 지정할 수 있으므로 스타일 충돌에 대한 걱정도 할 필요가 없습니다.

##### 라이브러리를 사용하여 clsx클래스 이름 전환

- 상태나 다른 조건에 따라 요소의 스타일을 조건부로 지정해야 하는 경우가 있을 수 있습니다.
- clsx는 클래스 이름을 쉽게 전환할 수 있는 라이브러리입니다. 

##### 기타 스타일링 솔루션

- .css 및 .scss 파일을 가져올 수 있습니다.
- CSS-in-JS 라이브러리에는 style-jx, style-components, 그리고 감정이 포함됩니다.

#### 3장

### 학습 진행 현황

- You've Completed Chapter 2
- Chapter 3 진행중
- https://nextjs.org/learn/dashboard-app/optimizing-fonts-images
