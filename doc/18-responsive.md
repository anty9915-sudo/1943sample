# Responsive 구현 문서

## Breakpoint

### Desktop

1440px

### Tablet

1024px

### Mobile

768px

### Small Mobile

480px

## Desktop

* Large Typography
* Multi Column Grid
* Full Navigation
* Parallax
* Custom Cursor

## Tablet

* Navigation 축소
* Grid 2~3열
* Typography 축소

## Mobile

* Hamburger Navigation
* Grid 1~2열
* Typography 축소
* Footer 세로화
* CTA 세로화
* Parallax 최소화
* Custom Cursor 제거

## Mobile Bottom CTA

화면 하단에 고정:

```text
[ 전화문의 ] [ 가맹문의 ]
```

## 중요

모든 페이지에서:

```text
overflow-x: hidden;
```

가로 스크롤이 발생하지 않도록 한다.

이미지:

```text
width: 100%;
height: auto;
object-fit: cover;
```

를 기본으로 사용한다.
