# Animation 시스템

## 목표

사이트 전체에 통일된 Animation System을 적용한다.

## 기본 Animation

### Fade Up

```text
opacity: 0
transform: translateY(40px)
```

→

```text
opacity: 1
transform: translateY(0)
```

## Image Zoom

Hover 시 이미지가 1.05~1.1배 확대된다.

## Reveal

Heading이 아래에서 위로 등장한다.

## Parallax

이미지별 이동 속도를 다르게 한다.

## IntersectionObserver

스크롤 Animation은 IntersectionObserver를 사용한다.

## 원칙

* 빠르지 않게
* 과도한 효과 금지
* 브랜드 고급스러움 유지
* Mobile에서는 Animation 최소화

## Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms;
        transition-duration: 0.01ms;
    }
}
```
