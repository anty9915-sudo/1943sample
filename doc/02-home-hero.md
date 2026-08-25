# HOME Hero 구현 문서

## 목표

사이트 첫 화면에서 1943CLASSIC의 브랜드 이미지를 강하게 전달한다.

## Layout

```text
100vh
```

전체 화면 Hero를 사용한다.

## Background

1943CLASSIC 매장 내부 또는 야간 분위기의 고급스러운 이미지 사용.

이미지 위에 Dark Overlay를 적용한다.

```text
background image
↓
dark overlay
↓
gradient
↓
content
```

## Content

중앙 또는 왼쪽 정렬.

```text
1943

CLASSIC

젊음에 클래식을 더하다.

[ BRAND STORY ]
[ 가맹문의 ]
```

## Typography

1943는 매우 큰 Typography를 사용한다.

CLASSIC은 Letter Spacing을 넓게 사용한다.

Gold 색상은 포인트로만 사용한다.

## Animation

페이지 로딩 후 순차적으로 등장한다.

1. Logo
2. 1943
3. CLASSIC
4. Description
5. Buttons

Animation:

* fade-in
* translateY
* opacity

## Scroll Indicator

Hero 하단 중앙:

```text
SCROLL
↓
```

마우스/화살표가 위아래로 움직인다.

## CTA

BRAND STORY:

brand.html

가맹문의:

franchise.html

## 요구사항

* 100vh
* 반응형
* 이미지 Cover
* Dark Overlay
* 고급스러운 Typography
* Mobile 최적화
* 과도한 Animation 금지
