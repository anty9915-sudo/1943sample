# BRAND CONCEPT 구현 문서

## 목표

1943CLASSIC의 차별점을 4개의 Concept으로 표현한다.

## Card

### CONCEPT 01

독보적인 인테리어

### CONCEPT 02

시그니처 메뉴

### CONCEPT 03

MZ세대의 선택

### CONCEPT 04

트렌디한 마케팅

## Desktop

4개의 카드를 가로로 배치한다.

## Tablet

2 x 2 Grid.

## Mobile

1열 또는 2열.

## Card 구성

```text
NUMBER
IMAGE

TITLE

DESCRIPTION

MORE →
```

## Hover

Hover 시:

* Image Zoom
* Gold Overlay
* Card Scale
* Gold Border
* Arrow Animation

## Animation

IntersectionObserver를 사용한다.

카드가 화면에 들어오면 순차적으로 Fade Up한다.
