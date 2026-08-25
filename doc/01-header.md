# Header 구현 문서

## 목표

1943CLASSIC 전체 페이지에서 공통으로 사용하는 Premium Header를 제작한다.

## Desktop

왼쪽:

1943CLASSIC Logo

가운데:

* BRAND
* MENU
* STORE
* MARKETING
* FRANCHISE

오른쪽:

* LANGUAGE
* 가맹문의

## 초기 상태

Hero 위에서는 투명 Header로 표시한다.

```text
position: absolute;
background: transparent;
```

## Scroll 상태

사용자가 50px 이상 스크롤하면 Header를 Fixed로 변경한다.

효과:

* Dark Background
* backdrop-filter
* Blur
* Bottom Border
* Shadow

## Hover

메뉴 Hover 시:

* Gold 색상
* Gold underline
* 부드러운 transition

## Mobile

768px 이하에서는 Desktop Menu를 숨긴다.

오른쪽에 Hamburger Button을 표시한다.

Hamburger 클릭:

```text
BRAND
MENU
STORE
MARKETING
FRANCHISE

LANGUAGE

KOREAN
ENGLISH
JAPANESE
CHINESE
```

Mobile Navigation은 화면 전체 또는 오른쪽 Drawer 형태로 표시한다.

## Animation

Header:

* slide-down
* fade-in

Mobile Menu:

* translateX
* opacity

## 요구사항

* 모든 페이지에서 동일한 Header 사용
* 현재 페이지 메뉴 Active 표시
* Logo 클릭 시 HOME 이동
* Mobile에서 body scroll 방지
* ESC 키로 Mobile Menu 닫기
* 외부 영역 클릭 시 Menu 닫기

## 파일

```text
css/header.css
js/common.js
```
