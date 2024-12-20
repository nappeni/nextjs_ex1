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

##### 글꼴 최적화

- Next.js는 next/font 모듈을 사용할 때 애플리케이션에서 글꼴을 자동으로 최적화합니다.
- 빌드 시 글꼴 파일을 다운로드하고 다른 정적 자산과 함께 호스팅합니다.
- 즉, 사용자가 애플리케이션을 방문하면 성능에 영향을 미치는 글꼴에 대한 추가 네트워크 요청이 없습니다.
- Tailwind antialiased class
    - 글꼴을 부드럽게 만듭니다.

    ```ts:/app/ui/fonts.ts
    import { Inter } from 'next/font/google';
    export const inter = Inter({ subsets: ['latin'] });
    ```
    ```tsx:/app/layout.tsx
    import { inter } from '@/app/ui/fonts';
    <body className={`${inter.className} antialiased`}>{children}</body>
    ```
##### 보조 글꼴 추가

- 애플리케이션의 특정 요소에 글꼴을 추가할 수도 있습니다.
- 'next/font/google'를 ctrl+click하면 사용가능한 폰트 종류를 확인할 수 있다.

    ```ts:/app/ui/fonts.ts
    import { Inter, Noto_Sans_KR } from 'next/font/google';
        export const f_light = Noto_Sans_KR({
        weight: ['400'],
        subsets: ['latin'],
    });

    export const f_normal = Noto_Sans_KR({
        weight: ['500'],
        subsets: ['latin'],
    });

    export const f_bold = Noto_Sans_KR({
        weight: ['700'],
        subsets: ['latin'],
    });
    ```
    ```tsx:/app/layout.tsx
    import { inter, f_light, f_normal, f_bold } from '@/app/ui/fonts';
    <body className={`${f_light.className} antialiased`}>{children}</body>
    ```

##### 이미지 최적화
- Next.js는 이미지와 같은 정적 자산을 최상위 /public 폴더에서 서비스할 수 있습니다.
- /public 내부의 파일은 애플리케이션에서 참조할 수 있습니다.
- 이미지 최적화는 웹 개발에서 큰 주제로, 그 자체로 전문 분야로 간주될 수 있습니다.
- 이러한 최적화를 수동으로 구현하는 대신 next/image구성 요소를 사용하여 이미지를 자동으로 최적화할 수 있습니다.
- <Image> 컴포넌트는 HTML <img> 태그의 확장판이며, 다음과 같은 자동 이미지 최적화 기능을 제공합니다
    - 이미지가 로드될 때 레이아웃 이동을 자동으로 방지합니다.
    - 큰 이미지를 더 작은 뷰포트를 가진 장치로 전송하지 않도록 이미지 크기를 조정합니다.
    - 기본적으로 이미지를 느리게 로드합니다. (이미지가 뷰포트에 들어갈 때 로드됩니다.)
    - 브라우저가 지원할 때 WebP 및 AVIF와 같은 최신 형식으로 이미지를 제공합니다.
- 레이아웃 이동을 방지하기 위해 이미지의 너비와 높이를 설정하는 것이 좋습니다. 이는 원본 이미지와 동일한 가로 세로 비율이어야 합니다.
- 모바일 화면의 DOM에서 이미지를 제거하기 위해 숨겨진 클래스와 데스크톱 화면에 이미지를 표시하기 위해 md:block을 볼 수도 있습니다.

    ```tsx:/app/page.tsx
    import Image from 'next/image';
    <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
    />
    <Image
        src="/hero-mobile.png"
        width={560}
        height={620}
        className="block md:hidden"
        alt="Screenshot of the dashboard project showing mobile version"
    />
    ```

###### 차원이 없는 이미지와 웹 폰트는 브라우저가 추가 리소스를 다운로드해야 하기 때문에 레이아웃 변경의 일반적인 원인입니다.


### 학습 진행 현황

- You've Completed Chapter 2
- Chapter 3 진행중
- https://nextjs.org/learn/dashboard-app/optimizing-fonts-images
