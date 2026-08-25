# MENU DETAIL 구현 문서

## 목표

전체 메뉴를 상세하게 보여주는 페이지.

## 구성

```text
MENU
↓
Category Filter
↓
Menu Grid
```

## Card

각 메뉴:

* 이미지
* 메뉴 이름
* 설명
* 가격
* 카테고리

## Filter

```text
ALL
SIGNATURE
FOOD
SIDE
```

클릭하면 해당 메뉴만 표시한다.

## 검색

메뉴 이름을 입력하면 실시간 검색한다.

## Modal

메뉴 카드를 클릭하면 Modal을 표시할 수 있도록 구성한다.

Modal:

* Large Image
* 메뉴명
* 설명
* 가격
* CLOSE

## Responsive

Mobile에서도 Modal이 화면을 벗어나지 않도록 한다.
