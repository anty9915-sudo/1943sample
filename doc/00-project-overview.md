# 1943CLASSIC 프로젝트 전체 구조

## 참고 사이트

https://www.1943classic.co.kr/

## 프로젝트 목적

1943CLASSIC의 브랜드 분위기와 전체적인 웹사이트 구조를 참고하여 현대적인 프리미엄 주점 프랜차이즈 홈페이지를 제작한다.

단순 복제가 아니라 브랜드 아이덴티티를 유지하면서 더욱 세련된 UI/UX로 재구성한다.

## 기술 스택

* HTML5
* CSS3
* Vanilla JavaScript
* CSS Animation
* IntersectionObserver

React는 사용하지 않는다.

## 전체 페이지

* HOME
* BRAND
* MENU
* STORE
* MARKETING
* FRANCHISE

## 공통 디자인

### 컬러

* Black
* Deep Charcoal
* Gold
* White
* Gray

```css
:root {
    --black: #0a0a0a;
    --dark: #111111;
    --gold: #c9a227;
    --white: #ffffff;
    --gray: #999999;
}
```

## 디자인 키워드

* Premium
* Classic
* Young
* Trendy
* Korean Pub
* Luxury
* Black & Gold
* Glassmorphism
* Neon Glow
* Large Typography
* Large Image
* Smooth Animation

## 공통 기능

모든 페이지는 다음 요소를 공유한다.

* Header
* Footer
* Responsive Layout
* Scroll Animation
* Top Button
* Mobile Navigation
* Common Typography
* Common Color System

## 파일 구조

```text
index.html

brand.html
menu.html
store.html
marketing.html
franchise.html

css/
js/
assets/
docs/
```

## 구현 원칙

1. 기존 프로젝트 파일을 먼저 확인한다.
2. 기존 기능을 함부로 삭제하지 않는다.
3. 반복되는 UI는 재사용 가능한 구조로 만든다.
4. 이미지와 데이터는 교체하기 쉽게 관리한다.
5. Desktop과 Mobile을 모두 지원한다.
6. 모든 애니메이션은 과하지 않게 고급스럽게 구현한다.
7. 페이지 간 디자인 통일성을 유지한다.
