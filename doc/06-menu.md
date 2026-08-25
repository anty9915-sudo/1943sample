# MENU 구현 문서

## 목표

1943CLASSIC의 메뉴를 가장 먹음직스럽고 고급스럽게 보여준다.

## Hero

```text
MENU

1943 CLASSIC
```

큰 음식 이미지를 사용한다.

## Category

```text
ALL
SIGNATURE
FOOD
SIDE
```

JavaScript로 필터링한다.

## Menu Data

다음과 같은 구조로 JS 데이터를 관리한다.

```javascript
{
    name: "메뉴명",
    category: "signature",
    image: "이미지경로",
    description: "메뉴 설명",
    price: "가격"
}
```

## Grid

Desktop:

4열

Tablet:

2~3열

Mobile:

2열 또는 1열

## Card

```text
IMAGE

CATEGORY
MENU NAME
DESCRIPTION
PRICE
```

## Hover

* Image Zoom
* Overlay
* Gold Border
* Information Reveal

## Animation

스크롤 시 카드가 순차적으로 Fade Up한다.

## 추가

메뉴 데이터는 HTML에 직접 반복 작성하지 않고 JS 배열을 사용한다.
